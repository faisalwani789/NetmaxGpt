import { signOut } from "firebase/auth"
import { Link } from "react-router-dom"
import { auth } from "../utils/firebase"
import {FiBell,FiSearch} from "react-icons/fi"
import { FiEdit,FiUser } from 'react-icons/fi'
import {FaQuestionCircle} from "react-icons/fa"
import {BsQuestionCircle} from "react-icons/bs"
import { RiUser3Line } from 'react-icons/ri';
import { useSelector } from "react-redux"
import { LOGO, USERICON,KIDSICON } from "../utils/constants"
import { useState } from "react"

const Header = () => {
  // const navigate = useNavigate()
  // const dispatch = useDispatch()
  const[showMenu,setShowMenu]=useState(false)
  const user = useSelector((store) => store.user)
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
    <div className=" py-4 flex justify-between items-center fixed top-0 w-full z-15  bg-transparent text-white ">
      <div className="flex  gap-4 items-center  w-7/12 ">
        <div className="ml-12">
           <img src={LOGO} className="w-30" alt="logo" />
        </div>
       {user && <ul className=" hidden lg:flex  gap-4 font-medium ">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/"}>Shows</Link></li>
          <li><Link to={"/"}>Movies</Link></li>
          <li><Link to={"/"}></Link>Games</li>
          <li><Link to={"/"}></Link>New & Popular</li>
          <li><Link to={"/"}></Link>My List</li>
          <li><Link to={"/"}></Link>Browse By Languages</li>


        </ul>}
       
      </div>

      {user && <div className="flex justify-between items-center w-60 mr-20">
        
        
        <FiSearch className="text-2xl"/>
        <Link to={"/"}>
        Children
        </Link>
        <FiBell className="text-2xl"/>
        <div className="cursor-pointer " onMouseEnter={()=>setShowMenu(!showMenu)}>
          <img className="inline-block w-8 rounded-md " src={user.photoURL || USERICON }  alt="userLogo" />
          <span className={`text-xs text-black px-2`} >▼</span> 

        </div>
        
       

       
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
