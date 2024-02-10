import React from 'react';
import { Nav, NavLinks, NavLink, Left} from '../style/nav';
import { useDispatch, useSelector } from 'react-redux';
import { DisplayType } from '../Store/store';
import { setDisplay } from '../Store/DisplaySlice';

const NavBar:React.FC = () => {
    
    const dispather = useDispatch();
    const scrolled = useSelector((state: DisplayType) => state.display.navbar)
    console.log(scrolled);
    const scroll = () => {
        if (window.scrollY > 0) {
            dispather(setDisplay(true))
            console.log(scrolled);

        } else {
            dispather(setDisplay(false))
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
                    <NavLink to = '/stat'>Statistics</NavLink>
                    <NavLink to = '/about'>about</NavLink>
                </NavLinks>
            </Nav>

        </>
    );
};

export default NavBar;
