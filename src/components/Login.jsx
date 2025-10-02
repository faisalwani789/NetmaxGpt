import { useState } from "react"
import Header from "./Header"
import { Link } from "react-router-dom"

import validation from "../utils/validate"
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword ,updateProfile} from "firebase/auth"
import { auth } from "../utils/firebase"

const Login = () => {
    
    const [email, setEmail] = useState("")
    const[name,setName]=useState("")
    const [emailValidationError, setEmailValidationError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordValidationError, setPasswordValidationError] = useState("")
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage,setErrorMessage]=useState(null)
    const emailHandler = (e) => {
        setEmail(e.target.value)

    }
    const nameHandler=(e)=>{
        setName(e.target.value)
    }
   
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const buttonHandler = () => {
        const result = validation(email, password)
        console.log(result)
        if (result?.emailError) {
            setEmailValidationError(result.message)

        }
        if (result?.passwordError) {
            setPasswordValidationError(result.message)

        }
        if (result) return //that is we got string or message from validation func if result is null will proceed
        if (!isSignInForm) {
            //sign up form 
            //signup
            try {
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential)
                    const user = userCredential.user
                    updateProfile(user,{displayName:name,photoURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fsearch%3Fq%3D%2BFaisal%2BYousuf&psig=AOvVaw3FQN6p0JQzZdClugZnEUjd&ust=1759508717914000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOjMo_P2hZADFQAAAAAdAAAAABAE"})
                    .then(()=>{
                        console.log("profile updated")
                        // navigate
                    }).catch((err)=>console.log(err.message))
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                  
                    
                });
            } catch (error) {
                console.log(error)
            }
          
            
        }
        else{
            //signIn
        
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                    setErrorMessage(errorMessage)
                    // ..
                });
        }
    }



    const signUpToggler = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div className="relative">
            <Header />
            <div className="bg-gradient-to-t from-black w-full  overflow-hidden">
                <img className=" transform scale-135 origin-top  brightness-50 min-w-full " src="https://assets.nflxext.com/ffe/siteui/vlv3/fcfcd5ee-d40a-43d7-bebc-9e9aae7f7798/web/IN-en-20250922-TRIFECTA-perspective_4fd75b17-c493-446a-a3de-3d1ab753c304_large.jpg" alt="background image" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className=" absolute top-22 px-18 py-10 mx-auto left-0 right-0 max-w-[480px] min-h-3/4 bg-black/80 flex flex-col gap-2 rounded-lg  ">
                
                <p className="mb-4 text-white font-bold text-4xl">{isSignInForm ? 'Sign In' : 'Sign Up'}</p>
                {errorMessage && <div className="bg-yellow-300 text-amber-600 p-4 border-1 border-amber-600 text-lg rounded-lg" >
                    {errorMessage} </div> }
                {!isSignInForm && <input className="border-1 border-white text-white px-4 py-4 rounded-lg" type="text" value={name} onChange={nameHandler} placeholder="Name"/>}
                <input className="border-1 border-white text-white px-4 py-4 rounded-lg" type="text" onChange={emailHandler} value={email} placeholder="Email or phone Number" />
                <p className="text-red-500">{emailValidationError}</p>

                <input className="border-1 border-white text-white px-4 py-4 rounded-lg" type="password" onChange={passwordHandler} value={password} placeholder="password" />
                
                <p className="text-red-500 px-1">{passwordValidationError}</p>

                <button className=" px-20 py-2 bg-red-600 rounded-lg text-white hover:bg-red-700" onClick={buttonHandler}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <span className="text-neutral-400 mx-auto">OR</span>
                <button className=" px-20 py-2 bg-neutral-400/50 rounded-lg text-white hover:bg-neutral-500/50">Use s Sign-In Code</button>
                <p className="text-white hover:underline self-center text-[17px] cursor-pointer"><Link to={"/forgot-password"}>Forgot Password?</Link></p>

                <label className="text-white " htmlFor="Checkbox">
                    <input className=" w-4 h-4 mr-3" id="Checkbox" type="checkbox" />
                    <span className="hover:text-neutral-500 text-md" >Remember Me</span>
                </label>
                <p className="text-neutral-300 text-md">New to NetmaxGpt?<span className="font-bold text-white hover:underline cursor-pointer" onClick={signUpToggler}>{isSignInForm ? 'Sign up now.' : 'Sign In.'}</span></p>
                <p className="text-neutral-300">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            </form>

        </div>
    )
}
export default Login