import React from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader'
import FadeIn from 'components/FadeIn'

export default () => (
  <FadeIn>
    <ScaleLoader sizeUnit={'px'} height={10} color={'#000000'} loading={true} />
  </FadeIn>
)
