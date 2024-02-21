import styled from "@emotion/styled";

export const AddSong = styled.div`
content: '';
    background:url('../assets/headphones-3085681_1280.jpg');
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

    }

    @media screen and (max-width: 1000px) {

        width: 450px;
        left: 30%;
        &:after {
            content: '';
            background: rgba(0, 0, 0, 0.692);
            position: absolute;
            z-index: 1;
            width: 100%;
            top: 0;
            left: 0;
            height: 60vh;
            overflow: hidden;
    }
    @media screen and (max-width: 550px) {
        width: 400px;
        left: 7%;
        &:after {
            content: '';
            background: rgba(0, 0, 0, 0.692);
            position: absolute;
            z-index: 1;
            width: 100%;
            top: 0;
            left: 0;
            height: 60vh;
            overflow: hidden;
    }

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
export const Title = styled.div`
font-size: 50px;
font-family: 'Franklin';
font-weight: bold;
color: white;
margin-left: 50px;
z-index: 100;

@media screen and (max-width: 1550px) {
    padding-bottom: 20px;
    font-size: 30px;
    gap: 5%;
    }
`
export const Form = styled.form`
width: 100%;
display:flex;
    flex-direction: column;
    z-index: 1000;
`
export const Row =styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 100;
    height: 8vh;

    @media screen and (max-width: 1150px) {
        flex-direction: column;
        height:50px;
        gap: 5%;
        }


`
export const Label = styled.span`
width: fit-content;
border-bottom: 1px solid rgb(255, 115, 0);
font-size: 25px;
color: white;
`
export const Input = styled.input`
    width: 70%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 15px;
    height: 5vh;
    background-color: black;
    border: 1px solid rgb(255, 115, 0);
    color: white;

    @media screen and (max-width: 1150px) {
        height: 500px;
        }
`
export const Buttons = styled.div`
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
z-index: 100;
gap: 10px;
`
export const Button = styled.button`
border: none;
outline: none;
border-radius: 5px;
font-size: 15px;
font-weight: bold;
font-family: Georgia;
background: rgb(255, 115, 0);
padding: 5px;
color: white;
&:hover {
    background: black;
    color: rgb(255, 115, 0);
}
`
export const Cross = styled.div`
padding: 5px;
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
cursor: pointer;
&:hover {
    background: rgb(160, 80, 80);
}

@media screen and (max-width: 1150px) {
    width:30px;
    height: 30px;
    }
`