import React from 'react'
import { Defs } from '@nivo/core'
import { area, curveMonotoneX } from 'd3-shape'
import { Line as NivoLine } from '@nivo/line'

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
    <NivoLine
      margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
      width={900}
      height={400}
      data={data}
      animate={true}
      enableSlices="x"
      yScale={{
        type: 'linear',
        stacked: true,
      }}
      // data={data.filter((d) =>
      //   ['rhum', 'whisky'].includes(d.id)
      // )}
      lineWidth={3}
      curve="linear"
      colors={['#028ee6', '#774dd7']}
      enableGridX={false}
      pointSize={12}
      pointColor="white"
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      layers={[
        'grid',
        'markers',
        'areas',
        // AreaLayer,
        'lines',
        'slices',
        'axes',
        'points',
        'legends',
      ]}
      theme={{
        crosshair: {
          line: {
            strokeWidth: 2,
            stroke: '#774dd7',
            strokeOpacity: 1,
          },
        },
      }}
    />
  )
}

export default Line
