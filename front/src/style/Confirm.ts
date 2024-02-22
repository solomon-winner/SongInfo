import styled from "@emotion/styled";

export const Delete = styled.div`
    background: black;
    background-size: cover;
    color: rgb(255, 115, 0);
    width: 30%;
    min-height: 13vh;
    display:flex;
    flex-direction: column;
    gap: 5%;
    z-index:90000;
    border: 3px solid rgb(255, 115, 0);
    position: absolute;
    top: 30%;
    left: 35%;
    &:after {
        content: '';
        background: rgba(0, 0, 0, 0.692);
        position: absolute;
        z-index: 1;
        width: 100%;
        top: 0;
        left: 0;
        height: 49.5vh;
        overflow: hidden;}

        @media screen and (max-width: 1150px) {
            width: 30%;
            left:30%;
            height: 55vh;
            &:after {
                height: 60vh;
            }
        }
        @media screen and (max-width: 990px) {
            width: 45%;
            left:30%;
            height: 57vh;
            &:after {
                height: 57vh;
            }
        }
        @media screen and (max-width: 920px) {
            width: 47%;
            left:20%;
            height: 60vh;
            &:after {
                height: 60vh;
            }
        }
        @media screen and (max-width: 960px) {
            width: 40%;
            left:20%;
        }
       
        @media screen and (max-width: 740px) {
            width: 50%;
            left:10%;
        }
        @media screen and (max-width: 720px) {
            width: 60%;
            left:10%;
        }
        @media screen and (max-width: 670px) {
            width: 60%;
            left:10%;
        }
        @media screen and (max-width: 640px) {
            width: 70%;
            left:10%;
        }
        @media screen and (max-width: 490px) {
            width: 80%;
            left:5%;
        }
        @media screen and (max-width: 400px) {
            width: 90%;
            left:3%;
        }
`

export const Question = styled.div`
    font-size: 30px;
    font-family: 'Franklin';
    font-weight: bold;
    color: white;
    margin-left: 50px;
    z-index: 100; 
`
export const Buttons = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    gap: 10px;

    @media screen and (max-width: 670px) {
        flex-direction: column;
    }
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