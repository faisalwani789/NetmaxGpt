import React, { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setPlayingId } from '../utils/configurationSlice';
const YouTubePlayer = ({ videoId }) => {
    const { playingId, mainPlayingId } = useSelector(store => store?.config)
    const [player, setPlayer] = useState(null);
    const dispatch = useDispatch()
    const [mute, setMute] = useState(true)
    const playerRef = useRef(null)

    // Fixed player options
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            controls: 0,
            loop: 1,
            playlist: videoId,
            rel: 0,
            mute: 1,
            modestbranding: 1,
            // enablejsapi: 1, // Important for CORS
            // origin: window.location.origin, // Important for CORS
        },
    };

    const onReady = (event) => {
        console.log('YouTube player is ready', event.target);
        setPlayer(event.target);
        playerRef.current = event.target


    };

    const onError = (error) => {
        console.error('YouTube Player Error:', error);
        // Fallback if iframe fails to load
        if (error.data === 150) {
            console.log('Embedding restricted, trying alternative approach');
        }
    };
    const onPlay = () => {
        dispatch(setPlayingId(videoId))
    }

    const onStateChange = (event) => {
        console.log('Player state changed:', event.data);
        if (event.data === 1) {
            const availabeQuality = playerRef.current.getAvailableQualityLevels()
            // console.log(availabeQuality)
            if(availabeQuality>0){
                playerRef.current.setPlaybackQuality('hd1080')
            }
        }
    };
    const handleMute = (e) => {
        e.stopPropagation()
        if (playerRef.current && mute) {
            playerRef.current.unMute()
            setMute(false)
        }
        else {
            playerRef.current.mute()
            setMute(true)
        }
    }
    useEffect(() => {
        if (playingId !== videoId && playerRef.current) {
            playerRef?.current?.pauseVideo()
        }
        else if (playingId === videoId && playerRef.current) {
            playerRef.current.playVideo()
        }

    }, [playingId, videoId])

    useEffect(() => {
        return () => {
            // if(playingId== videoId){
            dispatch(setPlayingId(mainPlayingId))
            // }
        }
    }, [])
    // useEffect(()=>{
    //     if(playingId===videoId && playerRef.current){
    //         playerRef.current.playVideo()
    //     }
    // },[playingId,videoId])
    return (
        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: '0', overflow: 'hidden' }}>
            {videoId ? (
                <YouTube
                    key={videoId} // Key prop forces re-render when videoId changes
                    videoId={videoId}
                    opts={opts}
                    onReady={onReady}
                    onPlay={onPlay}
                    onError={onError}
                    onStateChange={onStateChange}
                    style={{ position: 'absolute', top: 0, objectFit: 'cover', left: 0, width: '100%', height: '100%', transform: 'scale(1.15)', transformOrigin: 'bottom' }}
                />
            ) : (
                <div style={{
                    width: '840px',
                    // height: '390px',
                    backgroundColor: '#000',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    Loading
                </div>
            )}


            <button className='border-2 p-2 opacity-50  rounded-4xl border-white text-xl md:text-2xl text-white absolute z-60 right-[5%] bottom-[20%] hover:opacity-90' onClick={handleMute}>{mute ? <FaVolumeMute /> : <FaVolumeUp />}</button>
        </div>
    )
}
export default YouTubePlayer;