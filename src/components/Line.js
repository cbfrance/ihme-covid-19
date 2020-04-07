import React from 'react'
import { Defs } from '@nivo/core'
import { area, curveMonotoneX } from 'd3-shape'
import { ResponsiveLine as NivoLine } from '@nivo/line'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { nivoTheme } from 'theme'
import NivoContainer from 'components/NivoContainer'

const chartHeight = 500

const CustomSymbol = ({ data }) => {
  const { borderWidth, borderColor, datum } = data

  const chartYMargins = 260
  const chartMaxValue = 47806
  const scale = (chartHeight - chartYMargins) / chartMaxValue
  const rawHeight = datum.yUpper - datum.yLower
  const scaledHeight = rawHeight * scale

  return (
    <g>
      <rect
        fill="#fff"
        width="0.5px"
        rx="1px"
        y={`-${scaledHeight / 2}`}
        height={scaledHeight}
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
        height={chartHeight}
        isInteractive={true}
        enableCrosshair={true}
        useMesh={true}
        // debugMesh={true}
        animate={false}
        yScale={{
          type: 'linear',
          stacked: false,
        }}
        lineWidth={2}
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
