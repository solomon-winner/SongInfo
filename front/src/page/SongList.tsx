import React, { useEffect } from 'react'
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
import { DisplayType , FetchType} from '../Store/Types';
import { showAdd, showDetail } from '../Store/DisplaySlice';
import AddForm from '../components/AddForm';
import UpdateForm from '../components/UpdateForm';
import DeleteConfirm from '../components/DeleteConfirm'
import { songLoading} from '../Store/SongSlice';

const  SongList: React.FC = () => {

const dispatch = useDispatch();
useEffect(() => {
    dispatch(songLoading())
},[dispatch])

const List = useSelector((state:FetchType) => state.songs.songs)
const ShwDetail = useSelector((state: DisplayType) => state.display.Detail);
const ShwAdd = useSelector((state: DisplayType) => state.display.Add);
const ShwUpdate = useSelector((state: DisplayType) => state.display.Update);
const ShwDelete = useSelector((state: DisplayType) => state.display.Delete);


const ShowDetail = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(showDetail(true))
}
const ShowAdd  = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(showAdd(true))
}
return (
    <>
    <Nav/>
    <Wrapper/>
   {ShwDetail && <SongDetails/> }       
   {ShwAdd && <AddForm/>}
   {ShwUpdate && <UpdateForm/>}
   {ShwDelete && <DeleteConfirm/>}
    <Main>
           <Container><StatDisplay/><Add onClick={ShowAdd}> Add Song</Add> </Container> 
            <Search>
                <Form>
                
                    <Input/>
                    <Button>
                        Search
                    </Button>
                </Form>
            </Search>
            <Rest>
                {List.map(song => <Song key = {song._id} onClick={ShowDetail}>
                    <Img src='../assets/headphones-3085681_1280.jpg'/>
                    <Desc>
                        <Title>{song.tittle}</Title>
                        <ArtistName>{song.artist}</ArtistName>
                    </Desc>
                </Song>)
                }
            </Rest>
              <FooterSect/>
        </Main>

    </>
)

}
export default SongList;
