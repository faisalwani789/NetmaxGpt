import React from 'react'
import { useSearchParams } from 'react-router-dom'
import GptSearchHigher from './GptSearchHigher'
import Header from "./Header"
import GptSearch from './GptSearch'


const GptSearchResults = () => {
  const GptBar=GptSearchHigher(GptSearch)
  const[searchParams]=useSearchParams()
  const query=searchParams.get("q")
  return (
    <div>
     <Header defaultBackground={"bg-black"}/>
     <p className='pt-40'>welcome to search results{query}</p>
      </div>
  )
}

export default GptSearchResults