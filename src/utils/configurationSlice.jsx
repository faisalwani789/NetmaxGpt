import { createSlice } from "@reduxjs/toolkit";

const appConfiguration=createSlice({
    name:"config",
    initialState:{
        showGptSearchBar:false,
        searchValue:null,
        hasNavigated:false,
        langKey:"en"
    },
    reducers:{
        showGptSearchBar:(state)=>{
            state.showGptSearchBar=!state.showGptSearchBar
        },
        addSearchValue:(state,action)=>{
            state.searchValue=action.payload
        },
        clearSearchValue:(state)=>{
            state.searchValue=""
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
export const{showGptSearchBar,addSearchValue,setNavigated,changeLanguage,clearSearchValue}=appConfiguration.actions
export default appConfiguration.reducer