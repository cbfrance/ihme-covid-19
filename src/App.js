import React, { useState, useEffect } from 'react'
import { readRemoteFile } from 'react-papaparse'
import './App.css'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    readRemoteFile('data/2020_04_05.05.us/Hospitalization_all_locs.csv', {
      download: true,
      header: true,
      complete: (csv) => {
        setData(csv.data)
        console.log('csv.data: ', csv.data)
      },
    })
  }, [])

  return <div></div>
}

export default App
