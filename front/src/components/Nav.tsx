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
