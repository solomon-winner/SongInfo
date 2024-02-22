import React from 'react'
import { Main, Upper, Moto, Button, Lower, Text, Title, Wrapper, Strong , P} from "../style/Main";
import StatDisplay from './StatDisplay';
import FooterSect from "../components/Footer";
import { useSelector } from 'react-redux';
import { FetchType } from '../Store/Types';
import { Img } from '../style/List';
const MainSect:React.FC = () => {

    const FetchSuccess = useSelector((state:FetchType) => state.songs.Fetch_Success)

    return(
        <>
        
        <Main >
        <Upper >
            <Moto>
                <h1>Feel <Strong>Every Beat</Strong></h1>
                <p>Welcome to our harmonious hub, where melodies meet meaning and rhythm resonates with soul. Dive into a symphony of stories behind your favorite tunes, uncovering the artistry, inspiration, and passion woven into each lyric and chord. From timeless classics to chart-topping hits, embark on a musical journey that transcends time and genre. Discover the stories behind the songs that soundtrack our lives, and let the music guide you through a world of endless inspiration and enchantment.</p>
                <Button to= '/list'>Get Started</Button>
            </Moto>
        </Upper>

        <Lower>

                {FetchSuccess &&<StatDisplay/>}
                {!FetchSuccess && <img src='./assets/Spinner.gif' alt= ''/>}    
            <Wrapper>

                <Text>
                    <Title>Unlock Your Sonic Journey</Title>
                    <P>Immerse yourself in the transformative power of music as you embark on a journey of emotional exploration. From lifting your spirits on a dreary day to igniting inspiration in your creative endeavors, let the melodies guide you through life's highs and lows.</P>
                </Text>

                <Text>
                    <Title>Rhythm & Resilience</Title> 
                    <P>Discover the remarkable resilience within you as you tune in to the beat of your favorite songs. Whether you're overcoming obstacles or celebrating victories, music serves as your steadfast companion, providing solace, strength, and unwavering support along the way.</P>
                </Text>

                <Text>
                    <Title>The Soundtrack of Success</Title>
                    <P>Harness the power of music to supercharge your productivity and enhance your focus. With the right playlist as your secret weapon, conquer tasks with ease, unlock your creativity, and elevate your performance to new heights. Get ready to unleash your full potential as you let the music lead the way to success.</P>
                </Text>
            </Wrapper>
        </Lower>
            <FooterSect/>

    </Main>
    </>
    )
}
export default MainSect;