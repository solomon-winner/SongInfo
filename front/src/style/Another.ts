import styled from '@emotion/styled'

export const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: black;
`
export const Another = styled.div`
width: 70%;
height: 70vh;
background-color: rgb(1, 10, 31);
border: 4px solid rgb(255, 115, 0);
overflow-y: scroll;
position: relative;
`
export const Top = styled.div`
display: flex;
width: 100%;
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
z-index: 1000;
top: 0;
left: 89%;
border: 1px solid rgb(160, 80, 80);
`
export const Name = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
color:white;
}
`
export const stat = styled.div`
    display: flex;
    gap:100px;
    flex-wrap: wrap;
    border: 3px solid red;
    justify-content: center;
`
export const Count = styled.div`
display: flex;
align-items:baseline;
`
export const Number = styled.div`
color: rgb(255, 115, 0);
font-size:100px;
font-weight: bolder;
font-family: Verdana, Geneva, Tahoma, sans-serif;
display: flex;
align-items:baseline;
`
export const Span = styled.span`
color: white;
font-size: large;
font-weight: bold;
`
export const Songs = styled.div`
min-height: 45vh;
padding: 20px;
display: flex;
flex-direction: column;
gap: 1rem;
`
export const Song = styled.div`
color: white;
display: flex;
justify-content: space-between;
padding: 10px;
border-radius: 5px;
background-color: rgb(180, 104, 42);
border: 2px solid red;
`