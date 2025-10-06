import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import { useSelector } from "react-redux"
const Browse = () => {
   
    useNowPlayingMovies()

    return (

        <>
            <Header />
            <MainContainer/>
            <SecondaryContainer/>
        </>
    )
}
export default Browse