import React, { useState, useEffect } from 'react'
import { readRemoteFile } from 'react-papaparse'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    readRemoteFile('data/2020_04_05.05.us/Hospitalization_all_locs.csv', {
      download: true,
      header: true,
      complete: (csv) => {
        setData(csv.data)
      },
    })
  }, [])

  if (data) {
    const locationNames = Array.from(
      new Set(data.map((row) => row.location_name))
    )

    return (
      <div>
        <div>
          <h3>{locationNames.length} locations</h3>
          {locationNames.map((name, index) => (
            <p>{name}</p>
          ))}
        </div>
        <code>{JSON.stringify(data)}</code>
      </div>
    )
  }

  return <div>Loading ...</div>
}

export default App
