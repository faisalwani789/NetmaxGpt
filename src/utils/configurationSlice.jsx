import { createSlice } from "@reduxjs/toolkit";

const appConfiguration=createSlice({
    name:"config",
    initialState:{
        showGptSearchBar:false
    },
    reducers:{
        showGptSearchBar:(state)=>{
            state.showGptSearchBar=!state.showGptSearchBar
        }
    }
})
export const{showGptSearchBar}=appConfiguration.actions
export default appConfiguration.reducer