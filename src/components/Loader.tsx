"use client"
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
type Props = {}

const Loader = (props: Props) => {
  return (
    <div className="z-10 grid place-items-center h-screen w-screen" ><InfinitySpin color="#ffccff"></InfinitySpin></div>
  )
}

export default Loader