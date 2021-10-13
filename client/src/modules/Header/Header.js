import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="Header">
            <Link to="/">TOP</Link>
            <Link to="/signup">SIGN UP</Link>
            <Link to="/login">LOGIN</Link>
            <Link to="/contents">CONTENTS</Link>
        </div>
    )
}

export default Header
