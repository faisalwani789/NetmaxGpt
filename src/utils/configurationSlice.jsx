import { createSlice } from "@reduxjs/toolkit";

const appConfiguration=createSlice({
    name:"config",
    initialState:{
        showGptSearchBar:false,
        query:"",
        hasNavigated:false,
        langKey:"en",
        showPop:false,
        hoveredId:null,
        cardPosition:{ top:0, left:0,width:0,height:0 }
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
        ,setHoveredId:(state,action)=>{
            state.hoveredId=action.payload
        },
        setPosition:(state,action)=>{
            state.cardPosition.top=action.payload.top
            state.cardPosition.left=action.payload.left
            state.cardPosition.width=action.payload.width
            state.cardPosition.height=action.payload.height
        }
    }
})
export const{setGptSearchBar,addSearchValue,setNavigated,changeLanguage,setQuery,clearSearchValue,setHoveredId,setPosition}=appConfiguration.actions
export default appConfiguration.reducer