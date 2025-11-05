import React from 'react'

const RelatedMovieCard = (MovieCard) => {
 return function EhnancedCard(props){
    console.log(props)
    const{title}=props
    if(!props.img){
        return null
    }
    return(
        <div className='w-55'>
             <MovieCard img={props.img}/>
             <h3 className='w-full mt-4' ><span className='mr-2 w-6 h-2  border-2 border-red-500'></span>{title}</h3>
        </div>
       
    )
 }
}

export default RelatedMovieCard