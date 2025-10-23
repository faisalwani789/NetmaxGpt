import React, { useEffect } from 'react'
import ModalPortal from '../utils/ModalPortal'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPosition,setPop } from '../utils/configurationSlice'

const HoverMovieCard = () => {
const dispatch=useDispatch()
const {cardPosition,showPop}=useSelector(store=>store.config)
const timeoutRef=useRef()
const cardRef=useRef(null)
const showMoviePopover = (e) => {
        clearTimeout(timeoutRef.current)
        
        dispatch(setPop(true))
        // const rect = e.currentTarget.getBoundingClientRect()
        // dispatch(setPosition({
        //     top: rect.top + window.scrollY ,
        //     left: rect.left + window.scrollX,
        //     width:rect.width,
        //     height:rect.height
        // })) we can postion and height/width data from events object but we also can useRef in useEffect for fetching info


    }
    const hideMoviePopover = () => {
        timeoutRef.current = setTimeout(() => {
            dispatch(setPop(false))
        }, 200)
        
    }
  useEffect(()=>{
    
  })
  return (
    <ModalPortal>
      <div style={{position:'absolute',top:cardPosition.top+cardPosition.height/2-(cardPosition.height*1.5)/2,left:cardPosition.left+cardPosition.width/2-(cardPosition.width*1.5)/2, width:cardPosition*1.5, height:cardPosition*1.5}} className={`bg-black  transition-all duration-400  rounded-lg border-white border-2   z-50 transform origin-center animate-grow`} onMouseEnter={(e) => showMoviePopover(e)} onMouseLeave={hideMoviePopover} >HoverMovieCard</div>,
    </ModalPortal>
  )
}

export default HoverMovieCard