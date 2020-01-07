import React, { FunctionComponent } from "react"

interface BufferProps {
  height: number
}

const Buffer: FunctionComponent<BufferProps> = ({ height }) => {
  return <div style={{ paddingTop: `${height}px`}} />
}

export default Buffer