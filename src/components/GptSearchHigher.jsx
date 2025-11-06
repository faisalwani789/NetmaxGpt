import { FiX } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import {  clearSearchValue, setNavigated, setQuery } from '../utils/configurationSlice'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import GptSearch from './GptSearch'

import {options} from "../utils/constants"

import { addMoviesTo } from '../utils/MovieSearchSlice'
import { changeAiMode } from '../utils/gptSlice'
const GptSearchHigher = () => {
  const showGptSearch = useSelector(store => store.config?.showGptSearchBar)

  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const config = useSelector(store => store.config)
  const changeSearchValue = (e) => {
    dispatch(changeAiMode(false))
    dispatch(setQuery(e.target.value))

    if (window.location.pathname === '/search/') {
      setSearchParams({ q: e.target.value }, { replace: true })
    }
    if (e.target?.value.length >= 1 && !config?.hasNavigated) {
      dispatch(setNavigated())
      navigate(`/search/?q=${encodeURIComponent(e.target.value)}`)
    }
    
    if(e.target.value){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${e.target.value}` , options)
        .then((res)=>res.json())
        .then(res=>dispatch(addMoviesTo(res?.results)))
    }
    
    


  }

  
  
  // const handleOutsideClick = (event) => {
  //   if (inputRef.current && !inputRef.current.contains(event.target)) {
  //     dispatch(setGptSearchBar())
  //   }

  // }
  const clearInput = () => {
    dispatch(clearSearchValue())
    // dispatch(setNavigated())//set navigation to false for navigating again to search page
  }

  useEffect(() => {
    const setNavigation = () => {
      if (window.location.pathname === "/browse" && config?.hasNavigated) {
        dispatch(setNavigated())
        //resettting the navigation for to and fro in search bar
        // console.log(window.location.pathname)
      }
    }
   
    setNavigation()
  }, [])
  useEffect(()=>{
     const searchQuery=searchParams.get("q")|| ""
    if(!config.query && searchQuery){
       console.log(searchQuery)
     dispatch(setQuery(searchQuery)) //obtaining query from the url
    }
   
  },[searchParams,dispatch])
  useEffect(()=>{
    const setAutoFoucs=()=>{
      if( inputRef.current){
     
        inputRef.current.focus()
        inputRef.current.setSelectionRange(config?.query.length,config?.query.length)
       
      }
    }
    setAutoFoucs()
  },[])
  
  return (
    <div className={`flex items-center p-1.5 transition-all duration-700 ease-in-out ${showGptSearch ? 'outline-1  ' : ' outline-0'}`} >  {/* this transition works for reverse closing of the search box  */}

      <GptSearch />

      <input className={`outline-none transition-all duration-1000 ease-in-out ${showGptSearch ? 'md:w-50 w-30':'w-0'}`} ref={inputRef} placeholder="welcome to Gpt Search" value={config?.query} onChange={changeSearchValue}  />
     
      {showGptSearch && <>  <FiX className='relative text-white text-2xl  cursor-pointer' onClick={clearInput} /></>}
    </div>

  )
  // }

}

export default GptSearchHigher
