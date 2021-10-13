import React from 'react'
import {auth} from '../../Firebase/firebase'
import { useHistory, Redirect } from 'react-router-dom'
import { useAuthContext } from '../../Firebase/AuthContext'

import VideoPlayer from '../../modules/VideoPlayer/VideoPlayer'
import Options from '../../modules/Options/Options'
import Notifications from '../../modules/Notifications/Notifications'

function Contents() {
    const history = useHistory()
    const { user } = useAuthContext()
    const handleLogout = () => {
      auth.signOut()
      history.push('/login')
    }

    if(!user){
        return <Redirect to="/login"/>
    }else {
        return (
            <div className="Contents">
                <VideoPlayer/>
                <Options>
                    <Notifications/>
                </Options>
                <button onClick={handleLogout}>ログアウト</button>
            </div>
        )
    }
}

export default Contents
