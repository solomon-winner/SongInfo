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
    border: 3px solid rgb(255, 115, 0);
    position: relative;
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

`
export const Label = styled.span``
export const Value = styled.span``
export const Buttons = styled.div``
export const Button = styled.button``
export const Cross = styled.div``