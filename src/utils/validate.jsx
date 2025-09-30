const validation=(email,password)=>{
    const isValidEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    if(!isValidEmail)return {emailError:true,message:"email is invalid"}
    const isValidPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    if(!isValidPassword)return {passwordError:true,message: "password should container atleast one special character, UpperCase alphabet and Number"}

    return null //if validation is successfull
}
export default validation