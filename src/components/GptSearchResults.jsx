import React from 'react'
import { useSearchParams } from 'react-router-dom'
import GptSearchHigher from './GptSearchHigher'
import Header from "./Header"
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'
const GptSearchResults = () => {
  const GptBar=GptSearchHigher(GptSearch)
  const config=useSelector(store=>store?.config)
  const[searchParams]=useSearchParams()
  const res=searchParams.get("q")
  console.log(res)
  return (
    <div>
     
     
     <Header defaultBackground={"bg-black"}/>

      </div>
  )
}

export default GptSearchResults