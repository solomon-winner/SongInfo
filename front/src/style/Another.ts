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
