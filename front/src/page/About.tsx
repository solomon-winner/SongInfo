import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, H, MyPhoto, Description, Name, Contacts, Contact } from "../style/About";

const About:React.FC = () => {
    return (
        <Wrapper>
            <>
            <H>Developed By</H>
            <MyPhoto src="./assets/solomon.jpg"/>
            <Description>
                <Name>Solomon Yalew</Name>
                Full stack website developer                
            </Description>
            <Contacts>
                <Contact><img src="./assets/phone-solid.svg" alt=""  title="+251986780165"/></Contact>
                <Contact> <Link to = 'www.linkedin.com/in/solomon-yalew-86b03a257' target="_blank"><img src="./assets/linkedin.svg" alt="" /></Link></Contact>
                <Contact> <Link to = "https://github.com/solomon-winner/" target="_blank"></Link><img src="./assets/github.svg" alt="" /></Contact>
            </Contacts>
            </>
        </Wrapper>
    )
}
export default About;