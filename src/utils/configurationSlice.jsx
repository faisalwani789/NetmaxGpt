import { createSlice } from "@reduxjs/toolkit";

const appConfiguration=createSlice({
    name:"config",
    initialState:{
        showGptSearchBar:false,
        query:"",
        hasNavigated:false,
        langKey:"en"
    },
    reducers:{
        setGptSearchBar:(state)=>{
            
            state.showGptSearchBar=!state.showGptSearchBar
        },
        setQuery:(state,action)=>{
            state.query=action.payload
        },
        clearSearchValue:(state)=>{
            state.query=""
        }
        ,
        setNavigated:(state)=>{
            state.hasNavigated=!state.hasNavigated
        },
        changeLanguage:(state,action)=>{
            state.langKey=action.payload
        }
    }
})
export const{setGptSearchBar,addSearchValue,setNavigated,changeLanguage,setQuery,clearSearchValue}=appConfiguration.actions
export default appConfiguration.reducer