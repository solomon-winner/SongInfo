import React from 'react'
import Nav  from '../components/Nav';
import StatDisplay from '../components/StatDisplay';
import { Wrapper, Main, Search, Rest, Song, Img, Desc, Title, ArtistName, Form, Input, Button, Add, Container} from '../style/List';
import FooterSect from '../components/Footer';
const  SongList: React.FC = () => {
return (
    <>
    <Nav/>
    <Wrapper/>
    <Main>
           <Container><StatDisplay/><Add> Add Song</Add> </Container> 
            <Search>
                <Form>
                
                    <Input/>
                    <Button>
                        Search
                    </Button>
                </Form>
            </Search>
            <Rest>
                <Song>
                    <Img src='../assets/headphones-3085681_1280.jpg'/>
                    <Desc>
                        <Title>Kedmom Kibir</Title>
                        <ArtistName>Aster Abebe</ArtistName>
                    </Desc>
                </Song>
            </Rest>
              <FooterSect/>
        </Main>

    </>
)
}
export default SongList;
