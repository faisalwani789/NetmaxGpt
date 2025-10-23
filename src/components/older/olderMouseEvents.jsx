import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { setPop, setPosition } from "../../utils/configurationSlice";
const olderHoverEvents = () => {
    const dispatch = useDispatch()
    const { showPop, cardPosition } = useSelector(store => store.config)
    // const [isPopUpHovered,setPopUpHovered]=useState(false)
    const [hoveredId, setHoveredId] = useState(null);
    const timeoutRef = useRef(null);

    const popUpRef = useRef(null)
    const cardRef = useRef(null);
    const clearTimeouts = () => {
        if (timeoutRef.current.open) clearTimeout(timeoutRef.current.open)
        if (timeoutRef.current.close) clearTimeout(timeoutRef.current.close)
    }
    const checkHover = (x, y) => {
        const cardRect = cardRef.current?.getBoundingClientRect();
        const popUpRect = popUpRef.current?.getBoundingClientRect()
        const inCard = cardRect && x >= cardRect.left && x <= cardRect.right && y >= cardRect.top && y <= cardRect.bottom
        const inPopUp = popUpRect && x >= popUpRect.left && x <= popUpRect.right && y >= popUpRect.top && y <= popUpRect.bottom

        return inCard || inPopUp
    }
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!checkHover(e.clientX, e.clientY)) {
                clearTimeout(timeoutRef.current.open)
                timeoutRef.current.close = setTimeout(() => {
                    dispatch(setPop(false))
                }, 50)
            }
            else {
                clearTimeout(timeoutRef.current.close)
                timeoutRef.current.open = setTimeout(() => {
                    dispatch(setPop(true))
                }, 1000)
            }
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
        //     if(showPop && cardRef.current){
        //      const rect =cardRef.current.getBoundingClientRect()
        //         console.log(rect.top)
        //         dispatch(setPosition({
        //             top: rect.top + window.scrollY,
        //             left: rect.left + window.scrollX,
        //             width: rect.width,
        //             height: rect.height
        //         }))
        //     }
    }, [])
    const showMoviePopover = (e) => {
        // clearTimeouts()
        // clearTimeout(timeoutRef.current.close)
        // hoverRef.current=true
        const rect = e.currentTarget.getBoundingClientRect() //capturing event data before the setTimeOut operation
        // let clientX=e.clientX
        // let clientY=e.clientY
        // if(e.currentTarget===cardRef.current){
        dispatch(setPosition({
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX,
            width: rect.width,
            height: rect.height
        }))
        // }

        timeoutRef.current.open = setTimeout(() => {


            dispatch(setPop(true))
            console.log("changed")
        }, 1000)
    }
    const hideMoviePopover = (e) => {
        // clearTimeouts()
        clearTimeout(timeoutRef.current.open)
        // hoverRef.current=false
        timeoutRef.current.close = setTimeout(() => {
            const to = e.relatedTarget
            if (!popUpRef.current || !popUpRef.current.contains(to)) dispatch(setPop(false))
            //    if(!hoverRef.current)
            // if(!isPopUpHovered)

            console.log(showPop)
        }, 300)

    }

    const handleLeave = (e) => {
        //  setPopUpHovered(false)
        timeoutRef.current.close = setTimeout(() => {
            const to = e.relatedTarget
            if (!to || !to.closest('.card'))
                dispatch(setPop(false))
        }, 300)
    }
    const enterCard = () => {
        clearTimeout(timeoutRef.current.open)
        dispatch(setPop(true))
        // setPopUpHovered(true)
    }
    return (
    
        {showPop && (<ModalPortal>
                <div ref={popUpRef} style={{ position: 'absolute', top: cardPosition.top + cardPosition.height / 2 - (cardPosition.height * 2.5) / 2, left: cardPosition.left + cardPosition.width / 2 - (cardPosition.width * 1.8) / 2, width: cardPosition.width * 1.8, height: cardPosition.height * 2.5 }} className={` bg-white text-whtie  rounded-md   z-50 transform origin-center  transition-all  shadow-lg duration-200 `} onMouseEnter={(e)=>handleMouseEnter(e) } onMouseLeave={handleMouseLeave()} >
                video ssss
                </div>,
            </ModalPortal>)}
    )
}
export default olderHoverEvents