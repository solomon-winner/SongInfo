import styled from "@emotion/styled";

export const Detail = styled.div`
    content: '';
    background:url('../assets/headphones-3085681_1280.jpg');
    background-size: cover;
    color: rgb(255, 115, 0);
    width: 30%;
    min-height: 50vh;
    display:flex;
    flex-direction: column;
    gap: 5%;
    z-index:10000;
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
    } `
export const SongDetail = styled.div`
    font-size: 50px;
    font-family: 'Franklin';
    font-weight: bold;
    color: white;
    margin-left: 50px;
    z-index: 100;  
`
export const Row = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 100;
    border-bottom: 5px solid rgb(255, 115, 0);
    height: 8vh;
`
export const Label = styled.span`
    width: fit-content;
    border-bottom: 1px solid rgb(255, 115, 0);
    font-size: 25px;
    color: white;
`
export const Value = styled.span`
    width: 70%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
`
export const Buttons = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    gap: 10px;
`
export const Edit = styled.button`
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    font-family: Georgia;
    width: 60px;
    padding: 5px;
    background-color: green;
    color: white;
    cursor:pointer;
    &:hover {
        background: black;
        color: green;
    }
`
export const Another = styled.button`
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    font-family: Georgia;
    background: rgb(255, 115, 0);
    padding: 5px;
    color: white;
    cursor:pointer;
    &:hover {
        background: black;
        color: rgb(255, 115, 0);
    }
`
export const Delete = styled.button`
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
export const Cross = styled.div`
    padding: 5px;
    background-color: black;
    color:aliceblue;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 89%;
    border: 1px solid red;
    cursor: pointer;
    &:hover {
        background: rgb(160, 80, 80);
    }
`