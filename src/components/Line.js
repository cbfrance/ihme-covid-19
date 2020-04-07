import React from 'react'
import { Defs } from '@nivo/core'
import { area, curveMonotoneX } from 'd3-shape'
import { ResponsiveLine as NivoLine } from '@nivo/line'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { nivoTheme } from 'theme'
import NivoContainer from 'components/NivoContainer'

const AreaLayer = ({ series, xScale, yScale, innerHeight }) => {
  const areaGenerator = area()
    .x((d) => xScale(d.data.x))
    .y0((d) => Math.min(innerHeight, yScale(d.data.y - 40)))
    .y1((d) => yScale(d.data.y + 10))
    .curve(curveMonotoneX)

  return (
    <>
      <Defs
        defs={[
          {
            id: 'pattern',
            type: 'patternLines',
            background: 'transparent',
            color: '#3daff7',
            lineWidth: 1,
            spacing: 6,
            rotation: -45,
          },
        ]}
      />
      <path
        d={areaGenerator(series[0].data)}
        fill="url(#pattern)"
        fillOpacity={0.6}
        stroke="#3daff7"
        strokeWidth={2}
      />
    </>
  )
}

const Line = ({ data }) => {
  return (
    <NivoContainer>
      <NivoLine
        theme={nivoTheme({ theme: useContext(ThemeContext) })}
        margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
        data={data}
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
        colors={{ scheme: 'blue_green' }}
        enableGridX={false}
        pointSize={2}
        tooltip={({ point }) =>
          `${point.serieId} on ${point.data.xFormatted} might have ${Math.floor(
            point.data.yFormatted
          ).toLocaleString()} deaths`
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
          // AreaLayer,
          'lines',
          'mesh',
          // 'slices',
          'axes',
          'points',
          'legends',
        ]}
      />
    </NivoContainer>
  )
}

export default Line
