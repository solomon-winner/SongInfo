import { Link } from 'react-router-dom';
import styled from 'styled-components';
interface Props {
    scrolled: boolean;
}
export const Nav = styled.div<Props>`
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

    @media screen and (max-width: 768px) {
        padding: 12px 0;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        justify-content: space-between;
    }
    `;

export const NavLinks = styled.div`
    display: flex;
    width: 30%;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
        width: 60%;
    }

    @media screen and (max-width: 480px) {

    }
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: rgb(255, 115, 0);
    font-size: medium;
    font-weight: bold;

    @media screen and (max-width: 480px) {
        font-size: small;
    }
`;
export const Bars = styled.div`

display: none;

@media screen (max-width:480px) {
    display: block
}

` 
export const Left = styled.div `
margin-left:50px;

@media screen and (max-width: 768px) {
    margin-left: 20px;
}

@media screen and (max-width: 480px) {
    margin: 0;
}
` 
