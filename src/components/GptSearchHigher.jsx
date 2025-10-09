import { FiX } from 'react-icons/fi'
import { useSelector } from 'react-redux'
const GptSearchHigher = (GptSearch) => {
const showGptSearch=useSelector(store=>store.config?.showGptSearchBar)
    return function EnhancedShowGptSearch(){
         return showGptSearch? (
    <div className='flex items-center '>
        <GptSearch />
        <input className="border-2  w-[0px]  animate-extend  " placeholder="welcome to Gpt Search"/>
        <FiX className='relative text-white text-2xl -ml-7 cursor-pointer' onClick={()=>console.log("hello")}/ >
    </div>
  ):(
    <GptSearch/>
  )
    }
 
}

export default GptSearchHigher