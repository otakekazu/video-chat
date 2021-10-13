import React from 'react'
import ReactDOM  from 'react-dom'
import Layout from './modules/Layout/Layout'
import { ContextProvider } from './Context/SocketContext'

// function App() {
//     return (
//         <div>
//             <Layout/>
//         </div>
//     )
// }

ReactDOM.render(
    <ContextProvider>
        <Layout />
    </ContextProvider>,
document.getElementById("app"))

// ReactDOM.render(<App />, document.getElementById("app"))