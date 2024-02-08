import React from 'react'
import { Link } from 'react-router-dom'
import NavStyle from '../style/nav'
const Nav:React.FC =() =>{
    return (
        <NavStyle>
            <div className ="left">
    <Link to="/">logo</Link></div>
    <div className ="right">
        <Link to="/">Home</Link>
        <Link to="/list">Song</Link>
        <Link to="/stat">Sttistics</Link>
    </div>
        </NavStyle>
        
    )
}