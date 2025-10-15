
import { Outlet } from "react-router-dom"
import {useDispatch} from "react-redux"
import {addUser,removeUser,setLoading} from "./utils/userSlice"
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './utils/firebase'
import { useEffect } from 'react'


function App() {
  const dispatch=useDispatch() //hook on top of component
    const navigate=useNavigate()
   useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            console.log("on auth state change detected")
            if(user){
                //signup/signin case
                const{uid,email,displayName,photoURL}=user
                
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
                dispatch(setLoading(false))
                // navigate("/browse")
                //redirecting to browse page
                
            }
            else{
                //user signed out
                // console.log("working")
                dispatch(removeUser())
                // console.log("signout sucess form onAuthStateChange")
                navigate("/")
            }
        })
        return ()=>unsubscribe() //removes the listener when component is unmounted
    },[])

  return (
    
        <main>
        <Outlet/>
        </main>
   
  )
}

export default App
