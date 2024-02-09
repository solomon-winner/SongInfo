import React from 'react';
import { Nav, NavLinks, NavLink, Main, Upper, Moto, Button, Lower, Text, Title, Wrapper, Footer } from '../style/nav';

const App = () => {
    return (
        <>
            <Nav>
                <div className="left"><a href="#">Begena</a></div>
                <NavLinks>
                    <NavLink href="#">Home</NavLink>
                    <NavLink href="#">Song</NavLink>
                    <NavLink href="#">Statistics</NavLink>
                    <NavLink href="#">o</NavLink>
                </NavLinks>
            </Nav>

            <Main>
                <Upper>
                    <Moto>
                        <h1>Feel <strong>Every Beat</strong></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, facere ut possimus voluptas eum eos distinctio optio nulla velit debitis quasi doloremque nihil odio error! Quis recusandae eius deleniti at!</p>
                        <Button>Get Started</Button>
                    </Moto>
                </Upper>

                <Lower>
                    <Wrapper>
                        <Text>
                            <Title>Song Information</Title>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates et dicta voluptas, voluptatum quibusdam, non odit laborum veritatis odio beatae obcaecati nihil asperiores, exercitationem officia vitae velit dolorum! Delectus, debitis!</p>
                        </Text>

                        <Text>
                            <Title>Song Information</Title>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates et dicta voluptas, voluptatum quibusdam, non odit laborum veritatis odio beatae obcaecati nihil asperiores, exercitationem officia vitae velit dolorum! Delectus, debitis!</p>
                        </Text>

                        <Text>
                            <Title>Song Information</Title>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates et dicta voluptas, voluptatum quibusdam, non odit laborum veritatis odio beatae obcaecati nihil asperiores, exercitationem officia vitae velit dolorum! Delectus, debitis!</p>
                        </Text>
                    </Wrapper>
                </Lower>
            </Main>

            <Footer>
                <p>&copy; Copyright 2024 solomon yalew</p>
            </Footer>
        </>
    );
};

export default App;
