import React from 'react'
import Nav  from '../components/Nav';
import StatDisplay from '../components/StatDisplay';
import { Wrapper, 
    Main, Search, Rest, 
    Song, Img, Desc, Title, 
    ArtistName, Form, Input, 
    Button, Add, Container} from '../style/List';
import FooterSect from '../components/Footer';
import SongDetails from '../components/SongDetails';
import { useDispatch, useSelector } from 'react-redux';
import { DisplayType } from '../Store/Types';
import { showDetail } from '../Store/DisplaySlice';

const  SongList: React.FC = () => {

const ShwDetail = useSelector((state: DisplayType) => state.display.Detail);
const dispatch = useDispatch();

const ShowDetail = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(showDetail(true))
}
return (
    <>
    <Nav/>
    <Wrapper/>
   {ShwDetail && <SongDetails/> }       

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
                <Song onClick={ShowDetail}>
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
