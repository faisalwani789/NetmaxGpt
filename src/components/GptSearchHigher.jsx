
import { useSelector } from 'react-redux'
const GptSearchHigher = (GptSearch) => {
const showGptSearch=useSelector(store=>store.config?.showGptSearchBar)
    return function EnhancedShowGptSearch(){
         return showGptSearch? (
    <div className='flex items-center '>
        <GptSearch />
        <input className="border-2 -ml-8 px-10 py-1 " placeholder="welcome to Gpt Search"/>
    </div>
  ):(
    <GptSearch/>
  )
    }
 
}

export default GptSearchHigher