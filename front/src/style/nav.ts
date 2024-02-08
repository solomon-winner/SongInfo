import styled from 'styled-components';

const Nav = styled.nav`
    padding: 18px 0;
    position: fixed;
    width: 100%;
    background-color: transparent;
    top: 0;
    z-index: 1000;
    transition: 0.32s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: white;
        font-size: medium;
        font-weight: bold;
    }

    .left {
        margin-left: 5%;
    }

    .right {
        display: flex;
        width: 30%;
        align-items: center;
        justify-content: space-around;
    }
`;
export default Nav;