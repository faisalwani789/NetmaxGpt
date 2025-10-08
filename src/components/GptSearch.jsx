import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { showGptSearchBar } from '../utils/configurationSlice'

const GptSearch = () => {
  const dispatch=useDispatch()
   const handleSearchToggle=()=>{
      dispatch(showGptSearchBar())
   }
  
  return (
    <div>
        <FiSearch className="text-2xl cursor-pointer relative" onClick={handleSearchToggle}/>
    </div>
  )
}

export default GptSearch