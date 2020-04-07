import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader'
import { readRemoteFile } from 'react-papaparse'
import LoadingIndicator from 'components/LoadingIndicator'
import theme from 'theme'
import FadeIn from 'components/FadeIn'
import Line from 'components/Line'
import Layout from 'components/Layout'
import LocationSelect from 'components/LocationSelect'
import styled from 'styled-components'

const BottomToolbar = styled.div`
  position: fixed;
  bottom: 0;
  padding: 3rem;
`

function App() {
  const [fullDataset, setFullDataset] = useState()
  const [locationNames, setLocationNames] = useState()
  const [chartData, setChartData] = useState()
  const [visibleLocationNames, setVisibleLocationNames] = useState([
    'California',
    'New York',
  ])

  useEffect(() => {
    readRemoteFile('data/2020_04_05.05.us/Hospitalization_all_locs.csv', {
      download: true,
      header: true,
      complete: (csv) => {
        setFullDataset(csv.data)
      },
    })
  }, [])

  useEffect(() => {
    if (fullDataset) {
      setLocationNames(
        Array.from(new Set(fullDataset.map((row) => row.location_name)))
          .filter((name) => {
            const filteredOut = [
              'United States of America',
              'Other Counties, WA',
              'King and Snohomish Counties (excluding Life Care Center), WA',
              'Life Care Center, Kirkland, WA',
            ]
            return !filteredOut.includes(name)
          })
          .sort()
      )
    }
  }, [fullDataset])

  useEffect(() => {
    if (locationNames) {
      setChartData(
        locationNames.reduce((acc, currentLocation) => {
          const locationData = fullDataset.filter(
            (row) => row.location_name === currentLocation
          )

          if (currentLocation) {
            acc.push({
              id: currentLocation,
              color: theme.colors.black,
              data: locationData.reduce((acc, currentRow) => {
                const hasDate = typeof currentRow.date !== 'undefined'

                if (hasDate) {
                  acc.push({
                    x: currentRow.date,
                    y: currentRow.allbed_mean,
                    yUpper: currentRow.allbed_upper,
                    yLower: currentRow.allbed_lower,
                  })
                }

                return acc
              }, []),
            })
          }

          return acc
        }, [])
      )
    }
  }, [fullDataset, locationNames])

  if (chartData) {
    return (
      <Layout
        select={
          <LocationSelect
            locationNames={locationNames}
            label="States"
            visibleLocationNames={visibleLocationNames}
            setVisibleLocationNames={setVisibleLocationNames}
          />
        }
      >
        <BottomToolbar></BottomToolbar>
        <FadeIn>
          <Line
            data={chartData.filter((row) =>
              visibleLocationNames.includes(row.id)
            )}
          />
        </FadeIn>
      </Layout>
    )
  }

  return <LoadingIndicator />
}

export default hot(module)(App)
