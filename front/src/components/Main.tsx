import React from 'react'
import { Main, Upper, Moto, Button, Lower, Text, Title, Wrapper} from "../style/nav"
const MainSect:React.FC = () => {
    return(
        <>
        
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
    </>
    )
}
export default MainSect;