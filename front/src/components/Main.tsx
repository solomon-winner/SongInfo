import React from 'react'
import { Main, Upper, Moto, Button, Lower, Text, Title, Wrapper, Strong} from "../style/Main";
import StatDisplay from './StatDisplay';
import FooterSect from "../components/Footer";
import { useSelector } from 'react-redux';
import { FetchType } from '../Store/Types';
const MainSect:React.FC = () => {

    const FetchSuccess = useSelector((state:FetchType) => state.songs.Fetch_Success)

    return(
        <>
        
        <Main >
        <Upper >
            <Moto>
                <h1>Feel <Strong>Every Beat</Strong></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, facere ut possimus voluptas eum eos distinctio optio nulla velit debitis quasi doloremque nihil odio error! Quis recusandae eius deleniti at!</p>
                <Button>Get Started</Button>
            </Moto>
        </Upper>

        <Lower>

                {FetchSuccess &&<StatDisplay/>}    
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
            <FooterSect/>

    </Main>
    </>
    )
}
export default MainSect;