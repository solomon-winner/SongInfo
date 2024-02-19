import React from 'react';
import { Nav, NavLinks, NavLink, Left} from '../style/nav';
import { useDispatch, useSelector } from 'react-redux';
import { DisplayType } from '../Store/Types';
import { setScrolled } from '../Store/DisplaySlice';

const NavBar:React.FC = () => {
    
    const dispather = useDispatch();
    const scrolled = useSelector((state: DisplayType) => state.display.navbar);

    const scroll = () => {
        if (window.scrollY > 0) {
            dispather(setScrolled(true))

        } else {
            dispather(setScrolled(false))
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll',scroll);
        return () => {
            window.removeEventListener('scroll',scroll);
        }
    })
    return (
        <>
            <Nav scrolled = {scrolled}>
                <Left><NavLink to = '/'>Begena</NavLink></Left>
                <NavLinks>
                    <NavLink to = '/'>Home</NavLink>
                    <NavLink to = '/list'>Song</NavLink>
                    <NavLink to = '/about'>about</NavLink>
                </NavLinks>
            </Nav>

        </>
    );
};

export default NavBar;
