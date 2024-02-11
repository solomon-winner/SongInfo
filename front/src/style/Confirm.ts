import styled from "@emotion/styled";

export const Delete = styled.div`
    background: black;
    background-size: cover;
    color: rgb(255, 115, 0);
    width: 30%;
    min-height: 50vh;
    display:flex;
    flex-direction: column;
    gap: 5%;
    z-index:9000;
    border: 3px solid rgb(255, 115, 0);
    position: absolute;
    top: 30%;
    left: 40%;
    &:after {
        content: '';
        background: rgba(0, 0, 0, 0.692);
        position: absolute;
        z-index: 1;
        width: 100%;
        top: 0;
        left: 0;
        height: 49.5vh;
        overflow: hidden;
`

export const Question = styled.div`
    font-size: 50px;
    font-family: 'Franklin';
    font-weight: bold;
    color: white;
    margin-left: 50px;
    z-index: 100; 
`
export const Buttons = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    gap: 10px;
`
export const Sure = styled.button`
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    font-family: Georgia;
    width: 60px;
    padding: 5px;
    background-color: red;
    color: white;
    cursor:pointer;
    &:hover {
        background: black;
        color: red;
    }
`
export const Cancel = styled.button`
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    font-family: Georgia;
    width: 60px;
    padding: 5px;
    background-color: white;
    color: black;
    cursor:pointer;
    &:hover {
        background: black;
        color: white;
    }
`