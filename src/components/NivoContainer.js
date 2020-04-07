import React from 'react'

const NivoContainer = ({ children, height = '800px' }) => (
  <div style={{ position: 'relative', height: height }}>
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      <div style={{ height: height }}>{children}</div>
    </div>
  </div>
)

export default NivoContainer
