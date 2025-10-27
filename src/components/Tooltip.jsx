import React from 'react'

const Tooltip = ({ text, children }) => {
  return (
   <div className="relative group inline-block">
      {children}
      <span className="absolute bottom-full mb-2 hidden group-hover:block bg-white text-gray-900 font-semibold text-lg rounded py-1 px-2 whitespace-nowrap">
        {text}
      </span>
    </div>
  )
}

export default Tooltip

