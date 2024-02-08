import React from 'react'
import { Link } from 'react-router-dom'

const Nav:React.FC =() =>{
    return (
        <div className="nav">
            <div className ="left">
    <Link to="/">logo</Link></div>
    <div className ="right">
        <Link to="/">Home</Link>
        <Link to="/list">Song</Link>
        <Link to="/stat">Sttistics</Link>
    </div>
        </div>
        
    )
}