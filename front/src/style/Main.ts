import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Main = styled.div`
    background: black;
    z-index: 10;
    height: 100vh;
`;

export const Upper = styled.div`
    position: relative; 
    width: 100%;
    height: 90vh;
    border-radius: 0 0 60% 0;
    border-bottom: 25px solid rgb(255,115,0);
    overflow: hidden;
    background: url('./assets/cello.jpg');
    background-size: cover;
`;

export const Moto = styled.div`
    color: white;
    position: absolute;
    z-index: 900;
    top: 40%;
    left: 10%;
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
export const Strong = styled.strong`
    color: rgb(255,115,0);`
export const Button = styled(Link)`
    background-color: rgb(255, 115, 0);
    text-decoration:none;
    width: 150px;
    padding: 3%;
    border-radius: 5%;
    border: none;
    color: aliceblue;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
`;

export const Title = styled.div`
    border-bottom: 5px solid rgb(255, 115, 0);
    font-family: Georgia;
    font-weight: bold;
`;

export const Lower = styled.div`
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    z-index: 9000;
`;

export const Text = styled.div`
    background-color: black;
    color: white;
    width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: 1px solid rgb(255, 115, 0);
    padding: 10px;
    margin: 5px;
`;
export const P = styled.p`
font-family: Georgia;

`
export const Wrapper = styled.div`
    margin-top: 50px;
    max-width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width:480px) {
        flex-direction: column;
    }
`;
