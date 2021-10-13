import React from 'react'
import ReactDOM  from 'react-dom'
import Layout from './modules/Layout/Layout'
import { ContextProvider } from './Context/SocketContext'

ReactDOM.render(
    <ContextProvider>
        <Layout />
    </ContextProvider>,
document.getElementById("root"))