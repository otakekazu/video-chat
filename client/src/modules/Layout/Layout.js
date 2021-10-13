import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from '../Header/Header'
import SignUp from '../../pages/SignUp/SignUp'
import Top from '../../pages/Top/Top'
import Login from '../../pages/Login/Login'
import Contents from '../../pages/Contents/Contents'
import { AuthProvider } from '../../Firebase/AuthContext'
import { ContextProvider } from '../../Context/SocketContext'

function Layout() {
    return (
        <AuthProvider>
        <div className="Layout">
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Top}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/login" component={Login}/>
                
                    <Route exact path="/contents" component={Contents}/>

            </BrowserRouter>
        </div>
        </AuthProvider>
    )
}

export default Layout
