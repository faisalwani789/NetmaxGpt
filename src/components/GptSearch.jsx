import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { setGptSearchBar } from '../utils/configurationSlice'

const GptSearch = () => {
  const dispatch=useDispatch()
   const handleSearchToggle=()=>{
    
      dispatch(setGptSearchBar())
   }
  
  return (
    <div>
        <FiSearch className="text-2xl cursor-pointer " onClick={handleSearchToggle}/>
    </div>
  )
}

export default GptSearch