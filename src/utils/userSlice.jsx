import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
        loading:true,
    },
    
    reducers:{
        addUser:(state,action)=>{
            // return action.payload
            state.user=action.payload
        },
        updateUser:(state,action)=>{
            if(state){
                state.user={...state,...action.payload}
            }
        },
        setLoading:(state,action)=>{
            state.loading=action.payload
        },
        removeUser:(state)=>{
            // return null
            state.user=null
        }
    }
})
export default userSlice.reducer
export const {addUser,removeUser,setLoading} = userSlice.actions