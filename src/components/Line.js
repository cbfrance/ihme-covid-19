import React from 'react'
import { Defs } from '@nivo/core'
import { area, curveMonotoneX } from 'd3-shape'
import { ResponsiveLine as NivoLine } from '@nivo/line'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { nivoTheme } from 'theme'
import NivoContainer from 'components/NivoContainer'

const CustomSymbol = ({ data }) => {
  const { size, color, borderWidth, borderColor, datum } = data

  const scale = 800 / 45000

  return (
    <g>
      <rect
        fill="#fff"
        width="1px"
        rx="1px"
        y={`-${(datum.y - 260) * scale}`}
        height={(datum.yUpper - datum.yLower) * scale}
        strokeWidth={borderWidth}
        stroke={borderColor}
      />
    </g>
  )
}

const Line = ({ data }) => {
  return (
    <NivoContainer>
      <NivoLine
        theme={nivoTheme({ theme: useContext(ThemeContext) })}
        margin={{ top: 200, right: 20, bottom: 60, left: 80 }}
        data={data}
        height={800}
        isInteractive={true}
        enableCrosshair={true}
        useMesh={true}
        // debugMesh={true}
        animate={false}
        yScale={{
          type: 'linear',
          stacked: false,
        }}
        lineWidth={1}
        curve="natural"
        colors={{ scheme: 'category10' }}
        enableGridX={false}
        pointSymbol={(data) => <CustomSymbol data={data} />}
        tooltip={({ point }) =>
          `${point.serieId} on ${point.data.xFormatted} might have ${Math.floor(
            point.data.yFormatted
          ).toLocaleString()}`
        }
        pointColor="white"
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor' }}
        xScale={{
          type: 'time',
          format: '%Y-%m-%d',
          precision: 'day',
        }}
        xFormat="time:%Y-%m-%d"
        axisBottom={{
          format: '%b %d',
          tickValues: 'every month',
          // legend: 'time scale',
          legendOffset: -12,
        }}
        layers={[
          'grid',
          'markers',
          'areas',
          'lines',
          'mesh',
          'axes',
          'points',
          'legends',
        ]}
      />
    </NivoContainer>
  )
}

export default Line
