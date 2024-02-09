import React from 'react';
import { Nav, NavLinks, NavLink, Main, Upper, Moto, Button, Lower, Text, Title, Wrapper, Footer } from '../style/nav';

const App = () => {
    return (
        <>
            <Nav>
                <div className="left"><a href="#">Begena</a></div>
                <NavLinks>
                    <NavLink href="#">Home</NavLink>
                    <NavLink href="#">Song</NavLink>
                    <NavLink href="#">Statistics</NavLink>
                    <NavLink href="#">o</NavLink>
                </NavLinks>
            </Nav>

        </>
    );
};

export default App;
