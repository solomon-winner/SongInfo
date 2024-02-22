import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: rgb(0, 0, 0);
`
export const AboutDiv = styled.div`
display: grid;
gap: 5px;
`
export const H = styled.h1`
color: white;
display: flex;
padding: 15px;
justify-content: center;
`
export const MyPhoto = styled.img`
width: 250px;
height: 250px;
object-fit: cover;
border-radius: 50%;
border: 2px solid rgb(255, 115, 0);
`
export const Description = styled.div`
color: white;
display: flex;
flex-direction: column;
align-items: center;
font-size: large;
font-family: Georgia, 'Times New Roman', Times, serif;
font-weight: bold;
`
export const Name = styled.div`
width: 100%;
border-bottom: 2px solid rgb(255, 115, 0);
display: flex;
justify-content: center;
`
export const Contacts = styled.div`
display: flex;
justify-content: center;
`
export const Contact = styled.div`
cursor: pointer;
margin: 10px;
`

export const Span = styled.span`
font-size: large;
font-family: Georgia, 'Times New Roman', Times, serif;
font-weight: bold;
color: white;
display: flex;
justify-content:center;
`