import styled from "@emotion/styled";

export const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    background: url(../assets/mixer-1284507_1280.jpg) no-repeat;
    background-size: cover;
    position: fixed; 
    overflow: hidden; 
    &:after {
        content: '';
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
    }
`

export const Main = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 80px;
z-index: 900;
position: absolute;
top: 8px;
left:0;
background-color: transparent;
overflow-y: auto;
`
export const Search = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 12px;
width: 100%;
height: 12vh;
z-index: 900;
`
export const form  = styled.form`
    display: flex;
    width: 50%;
`
export const Input =styled.input`
    width: calc(100% - 100px);
    height: 7vh;
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    border-radius: 7px 0 0 7px;
    color: white;
`
export const Button = styled.button`
width: 100px;
background: rgb(255, 115, 0);
color: white;
font-family: Georgia;
font-weight: bold;
border: none;
cursor: pointer;
border-radius: 0 7px 7px 0;
&:hover {
    background-color: black;
}
`
export const Rest = styled.div``
export const Song = styled.div``