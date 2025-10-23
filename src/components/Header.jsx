import { signOut } from "firebase/auth"
import { Link } from "react-router-dom"
import { auth } from "../utils/firebase"
import {FiBell,FiSearch} from "react-icons/fi"
import { FiEdit,FiUser } from 'react-icons/fi'
import {FaQuestionCircle} from "react-icons/fa"
import {BsQuestionCircle} from "react-icons/bs"
import { RiUser3Line } from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux"
import { LOGO, USERICON,KIDSICON } from "../utils/constants"
import { useEffect, useState } from "react"
import GptSearch from "./GptSearch"
import GptSearchHigher from "./GptSearchHigher"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import lang from "../utils/languageConstants"
import { SUPPORTED_LANGUAGES } from "../utils/constants"
import { changeLanguage } from "../utils/configurationSlice"
const Header = ({defaultBackground="bg-transparent"}) => {
  // const navigate = useNavigate()
  useNowPlayingMovies()
  const dispatch=useDispatch()
  const {user} = useSelector(store => store?.user)
  const langKey = useSelector((store) => store.config?.langKey)
  const[scrolled,setScrolled]=useState(false)
  const[showMenu,setShowMenu]=useState(false)
  
  // const GptBar=GptSearchHigher(GptSearch)
  
   useEffect(()=>{
        const handleScroll=()=>{
          setScrolled(window.scrollY>50)
        }
        window.addEventListener('scroll',handleScroll);
        return ()=>window.removeEventListener('scroll',handleScroll)
      },[])
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // console.log("user signed out")
      //remove user from store will be done automatically using onAuthStateChange()
      // navigate("/")  i think navigation will also be done automatically by onAuthStateChange
    })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
     
  }
  
  return (
    
    <div className={`py-2 flex justify-between items-center fixed top-0 w-full z-15 text-white ${scrolled?"bg-black":defaultBackground} `}   >
      <div className="flex  gap-4 items-center  w-7/12 ">
        <div className="ml-12">
           <img src={LOGO} className="w-30" alt="logo" />
        </div>
       {user && <ul className=" hidden lg:flex  gap-4 font-medium ">
          <li><Link to={"/browse"}>{lang[langKey].home}</Link></li>
          <li><Link to={"/"}>{lang[langKey].Shows}</Link></li>
          <li><Link to={"/"}>{lang[langKey].Movies}</Link></li>
          <li><Link to={"/"}>{lang[langKey].Games}</Link></li>
          
          <li><Link to={"/"}>{lang[langKey]['Browse By Languages']}</Link></li>


        </ul>}
       
      </div>
        
       
       
      {user && <div className="flex justify-end gap-8 items-center w-170 max-w-200  mr-12">
        
        
        
        <GptSearchHigher />
        <Link to={"/"}>
        {lang[langKey].Children}
        </Link>
        <FiBell className="text-2xl"/>
        <div className="cursor-pointer " onMouseEnter={()=>setShowMenu(!showMenu)}>
          <img className="inline-block w-8 rounded-md " src={user.photoURL || USERICON }  alt="userLogo" />
          <span className={`text-xs text-white px-2`} >▼</span> 

        </div>
         <select className="bg-black" onChange={(e)=>dispatch(changeLanguage(e.target.value))}>
          {SUPPORTED_LANGUAGES.map((lang)=>(<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
        </select>
       

       
      </div>
      }


 {showMenu && <ul onMouseLeave={()=>setShowMenu(!showMenu)}className=" absolute right-20 top-12 bg-black text-white px-4 py-4 rounded-lg flex flex-col gap-4"  >
          <li className="flex gap-4 "><img  src={KIDSICON} alt="kids"/>Kids</li>
          <li className="flex gap-2"><FiEdit className="text-2xl" />Manage Profiles</li>
          <li className="flex gap-2"><RiUser3Line/>Transfer Profile</li>
          <li className="flex gap-2"><FiUser className="text-2xl" />Account</li>
          <li className="flex gap-2"><BsQuestionCircle className="text-2xl"/>Help center</li>
          <li className="border-2 cursor-pointer inline-block" onClick={handleSignOut} >SignOut</li>
        </ul> } 


    
    
    </div>
  )
}

export default Header
