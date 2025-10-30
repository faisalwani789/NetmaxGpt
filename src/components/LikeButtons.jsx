import React, { useEffect, useState } from 'react'
import { FaHeart, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { MdAdd, MdPlusOne } from "react-icons/md";
import { BsPlayBtn } from 'react-icons/bs';
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import Tooltip from './Tooltip';
import { useRef } from 'react';

const LikeButtons = () => {

    const timeoutRef = useRef(null)
    const [animate, setAnimate] = useState(false)
    const [expandButtons, setExpandButtons] = useState(false)
    const handleExpandButtons = () => {
        timeoutRef.current = setTimeout(() => {
            setAnimate(!animate)
            setExpandButtons(!expandButtons)
        }, 300)

    }
    const handleMouseLeave = () => {
        clearTimeout(timeoutRef.current)
        setExpandButtons(false)
        setAnimate(false)
    }
    useEffect(() => {
        // setAnimate(true);
        ()=> clearTimeout(timeoutRef.current)
    }, [])
return (
    <div className='flex gap-4 items-center '>
        <Tooltip text={"add to my list"}>
                 <button className={` p-2 mr-2 rounded-4xl transition-opacity bg-gray-500   ease-in-out duration-1000  ${expandButtons ? 'opacity-0' : 'opacity-100'} `}>
            <MdAdd className={`  text-white text-2xl  `} />
        </button>
        </Tooltip>
       



        <div className={` relative  flex  transition-all duration-1000 ease-in-out  `} onMouseEnter={handleExpandButtons} onMouseLeave={handleMouseLeave} >
            <div className={` absolute py-2 px-5  rounded-4xl top-1/2 left-1/2 transform -translate-1/2 box-border bg-gray-700 h-10.5 transition-all duration-1000  ${expandButtons ? 'w-[calc(100%+120px)]' : 'w-[100%]'} `} > </div>



            <button className={`text-white   p-3 text-xl  absolute  top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${animate?(expandButtons ? 'animate-slideToLeft  ' : 'animate-slideFromLeft'):''} ${expandButtons ? '' : 'opacity-0'} `}>
                <Tooltip text={"not for me"}>
                    <div>
                        <FiThumbsDown />
                    </div>
                </Tooltip>
            </button>


            <Tooltip text={"i like this"}>
                <button className='text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl relative z-10'>
                    <FiThumbsUp />
                </button>
            </Tooltip>





            <button className={`text-white text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${animate?(expandButtons ? 'animate-slideToRight' : 'animate-slideFromRight'):''} ${expandButtons ? '' : 'opacity-0'} `}>
                <Tooltip text={"i love this"}>
                    <div className='relative '>
                        <FiThumbsUp className='text-white text-xl relative  z-1' />
                        <FiThumbsUp className=' text-white text-xl  -ml-3 absolute inset-0 z-2' />
                    </div>
                </Tooltip>

            </button>



        </div>
    </div>



)
}

export default LikeButtons