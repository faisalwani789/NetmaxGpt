import { useState } from "react"
import Header from "./Header"
import { Link } from "react-router-dom"
import validation from "../utils/validate"
const Login = () => {
    const [email, setEmail] = useState("")
    const[emailValidationError, setEmailValidationError]=useState("")
    const [password, setPassword] = useState("")
    const[passwordValidationError, setPasswordValidationError]=useState("")
    const [isSignIn,setIsSignIn]=useState(true)
    const emailHandler = (e) => {
        setEmail(e.target.value)

    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const signInHandler=()=>{
        const result=validation(email,password)
        if(result.emailError)setEmailValidationError(result.message)
        else if(result.passwordError)setPasswordValidationError(result.message)
    }

    const signUpToggler=()=>{
        setIsSignIn(!isSignIn)
    }
    
    return (
        <div className="relative">
            <Header />
            <div className="bg-gradient-to-t from-black w-full overflow-hidden">
                <img className=" transform  scale-135 origin-top w-full brightness-50" src="https://assets.nflxext.com/ffe/siteui/vlv3/fcfcd5ee-d40a-43d7-bebc-9e9aae7f7798/web/IN-en-20250922-TRIFECTA-perspective_4fd75b17-c493-446a-a3de-3d1ab753c304_large.jpg" alt="background image" />
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className=" absolute top-22 px-18 py-10 mx-auto left-0 right-0 max-w-1/2 w-[480px] min-h-3/4 bg-black/80 flex flex-col gap-2 rounded-lg  ">
                <p className="mb-4 text-white font-bold text-4xl">{isSignIn?'Sign In':'Sign Up'}</p>
                <input className="border-1 border-white text-white px-4 py-4 rounded-lg" type="text" onChange={emailHandler} value={email} placeholder="Email or phone Number" />
                <p className="text-red-500">{emailValidationError}</p>

                <input className="border-1 border-white text-white px-4 py-4 rounded-lg" type="password" onChange={passwordHandler} value={password} placeholder="password" />
                <p className="text-red-500">{passwordValidationError}</p>

                <button className=" px-20 py-2 bg-red-600 rounded-lg text-white hover:bg-red-700" onClick={signInHandler}>{isSignIn?'Sign In':'Sign Up'}</button>
                <span className="text-neutral-400 mx-auto">OR</span>
                <button className=" px-20 py-2 bg-neutral-400/50 rounded-lg text-white hover:bg-neutral-500/50">Use s Sign-In Code</button>
                <p className="text-white hover:underline self-center text-[17px] cursor-pointer"><Link to={"/forgot-password"}>Forgot Password?</Link></p>

                <label className="text-white " htmlFor="Checkbox">
                    <input className=" w-4 h-4 mr-3" id="Checkbox" type="checkbox" />
                    <span className="hover:text-neutral-500 text-md" >Remember Me</span>
                </label>
                <p className="text-neutral-300 text-md">New to NetmaxGpt?<span className="font-bold text-white hover:underline cursor-pointer" onClick={signUpToggler}>{isSignIn?'Sign up now.':'Sign In.'}</span></p>
                <p className="text-neutral-300">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            </form>

        </div>
    )
}
export default Login