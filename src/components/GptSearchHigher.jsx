import { FiX } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { addSearchValue, clearSearchValue, setNavigated } from '../utils/configurationSlice'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import GptSearch from './GptSearch'
const GptSearchHigher = () => {
  const showGptSearch = useSelector(store => store.config?.showGptSearchBar)
  // return function EnhancedShowGptSearch() {
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const inputRef = useRef(null)
    const config = useSelector(store => store.config)
    const changeSearchValue = (e) => {
      dispatch(addSearchValue(e.target.value))
     
       if (window.location.pathname === '/search/') {
          setSearchParams({ q: e.target.value },{ replace: true })
        }
      if (e.target?.value.length>=1 && !config?.hasNavigated ) {
        dispatch(setNavigated())
        navigate(`/search/?q=${encodeURIComponent(e.target.value)}`)
      }
      


    }
    const clearInput = () => {
      dispatch(clearSearchValue())
      dispatch(setNavigated())//set navigation to false for navigating again to search page
    }

    useEffect(() => {
      const setActiveFocus = () => {
        if (!inputRef.current) {
           
          if (window.location.pathname === '/search/') {
            console.log(window.location.pathname)
            const query = searchParams.get('q') || ''
            dispatch(addSearchValue(query))//initializing from query params
          }
          
          inputRef.current=true
        }
      }
     
      setActiveFocus()
      
    }, [])

    return  (
      <div className={`flex items-center p-1.5 transition-all duration-700 ease-in-out ${showGptSearch?'outline-1  ':' outline-0'}`} >  {/* this transition works for reverse closing of the search box  */}
     
        <GptSearch />
       
           <input className={`outline-none transition-all duration-1000 ease-in-out ${showGptSearch?'w-50  ':'w-0'}`} ref={inputRef} placeholder="welcome to Gpt Search" value={config?.searchValue} onChange={changeSearchValue} />
        {showGptSearch && <FiX className='relative text-white text-2xl  cursor-pointer' onClick={clearInput} />}
      </div>
      
    )
  // }

}

export default GptSearchHigher