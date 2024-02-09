import React from 'react';
import { Nav, NavLinks, NavLink} from '../style/nav';

const App = () => {
    return (
        <>
            <Nav>
                <div className="left"><NavLink href="#">Begena</NavLink></div>
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
