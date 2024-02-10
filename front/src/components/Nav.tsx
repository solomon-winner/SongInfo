import React from 'react';
import { Nav, NavLinks, NavLink, Left} from '../style/nav';

const App = () => {
    return (
        <>
            <Nav>
                <Left><NavLink href="#">Begena</NavLink></Left>
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
