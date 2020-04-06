import React, { useState, useEffect } from 'react'
import { readRemoteFile } from 'react-papaparse'
import LoadingIndicator from 'components/LoadingIndicator'
import theme from 'theme'
import FadeIn from 'components/FadeIn'
import Line from 'components/Line'

function App() {
  const [fullDataset, setFullDataset] = useState()

  useEffect(() => {
    readRemoteFile('data/2020_04_05.05.us/Hospitalization_all_locs.csv', {
      download: true,
      header: true,
      complete: (csv) => {
        setFullDataset(csv.data)
      },
    })
  }, [])

  if (fullDataset) {
    console.log('fullDataset: ', fullDataset)
    const locationNames = Array.from(
      new Set(fullDataset.map((row) => row.location_name))
    )

    const chartData = locationNames.reduce((acc, currentLocation) => {
      const locationData = fullDataset.filter(
        (row) => row.location_name === currentLocation
      )

      // date: "2020-07-06"
      // ​​​
      // deaths_lower: "0"
      // ​​​
      // deaths_mean: "0"
      // ​​​
      // deaths_upper: "0"

      const locationChartData = locationData.map((row) => ({
        x: row.date,
        y: row.deaths_mean,
      }))

      acc.push({
        id: currentLocation,
        color: theme.colors.black,
        data: locationChartData,
      })

      return acc
    }, [])

    console.log('chartData: ', chartData)

    return (
      <FadeIn>
        <div>
          <h3>{locationNames.length} locations</h3>
        </div>

        <Line data={chartData} />
      </FadeIn>
    )
  }

  return <LoadingIndicator />
}

export default App
