import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { SocketContext } from '../../Context/SocketContext'

function VideoPlayer() {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call, video } = useContext(SocketContext)
    return (
        <div id="hoge">
            <video
                style={{ width: '300px', height: '300px', maxWidth: '100%' }}
                ref={myVideo.current}
                autoPlay
                playsInline
            />
        </div>
    )
}

export default VideoPlayer
