import styled from 'styled-components';

interface props {
    scrolled: boolean;
}
export const Nav = styled.div<props>`
    padding: 18px 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    transition: 0.32s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.scrolled ? 'black': 'transparent'};
`;

export const NavLinks = styled.div`
    display: flex;
    width: 30%;
    align-items: center;
    justify-content: space-around;
`;

export const NavLink = styled.a`
    text-decoration: none;
    color: rgb(255, 115, 0);
    font-size: medium;
    font-weight: bold;
`;
export const Left = styled.div `
margin-left:50px;
` 
