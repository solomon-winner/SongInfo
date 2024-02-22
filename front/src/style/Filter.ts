import styled from "@emotion/styled";


export const FilterMenu = styled.div`
width: 100%;
z-index: 100000;
display: flex;
justify-content: center;
position: absolute;
top:174px;

@media screen and (max-width: 875px) {
    top:220px;
   
}

@media screen and (max-width: 735px) {
    top:220px;
   
}
@media screen and (max-width: 735px) {
    top:220px;
   
}
@media screen and (max-width: 734px) {
    top:445px;
   
}

@media screen and (max-width: 323px) {
    top:655px;
   
}
`
export const Choose = styled.div`
width: 50%;
z-index: 100000;
display: flex;
flex-direction: column;
gap:0.5rem;
background-color: rgb(1, 4, 32);

`
export const Choice = styled.div`
color: rgb(255, 115, 0);
font-size: medium;
font-family: Georgia, 'Times New Roman', Times, serif;
padding: 0.7rem;
cursor: pointer;

&:hover {
    background-color: rgb(62, 64, 66);

}
`