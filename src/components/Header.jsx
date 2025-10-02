import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const Header = () => {
  // const navigate = useNavigate()
  // const dispatch = useDispatch()
  const user=useSelector((store)=>store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("user signed out")
      //remove user from store will be done automatically using onAuthStateChange()
      // navigate("/")  i think navigation will also be done automatically by onAuthStateChange
    })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  }
  return (
    <div className="flex justify-between absolute w-full z-10 ">
      <div className="  w-46 ml-39 my-1">
        <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
      </div>
      {user && <div>
         <img className="self-center mr-39" src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e" alt="userLogo" />
         <ul >
        <li className="border-2 border-black inline-block" onClick={handleSignOut} >SignOut</li>
      </ul> 
      </div>
      }
      
      
      
      
     
    </div>
  )
}

export default Header
