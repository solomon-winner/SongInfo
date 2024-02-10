import React from 'react';
import { Nav, NavLinks, NavLink, Left} from '../style/nav';
import { useSelector } from 'react-redux';

const NavBar:React.FC = () => {
    const scrolled = useSelector((state) => state.Display.navbar)
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

export default NavBar;
