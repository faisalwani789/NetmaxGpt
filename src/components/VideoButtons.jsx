import React from 'react'
import { BsInfoCircle,BsPlayBtn } from 'react-icons/bs'
const VideoButtons = () => {
  return (
    <div className='flex gap-4'>
        <button className='px-10 py-3 flex gap-2 items-center bg-white rounded-md text-black'>< BsPlayBtn/>Play</button>
        <button className='flex gap-2 items-center py-3 px-10 bg-gray-400/70  rounded-md text-white font-semibold'><BsInfoCircle/> More Info</button>
    </div>
  )
}

export default VideoButtons