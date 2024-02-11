import React from 'react'
import Nav  from '../components/Nav';
import StatDisplay from '../components/StatDisplay';
import { Wrapper, Main, Search, Rest, Song, Img, Desc, Title, ArtistName} from '../style/List';
const  SongList: React.FC = () => {
return (
    <>
    <Nav/>
    <Wrapper/>
    <Main>
            <StatDisplay/>
            <Search/>
            <Rest>
                <Song>
                    <Img src='../assets/headphones-3085681_1280.jpg'/>
                    <Desc>
                        <Title></Title>
                        <ArtistName></ArtistName>
                    </Desc>
                </Song>
            </Rest>
        </Main>
    </>
)
}
export default SongList;
