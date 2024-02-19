import React, { useEffect } from 'react'
import Nav  from '../components/Nav';
import StatDisplay from '../components/StatDisplay';
import { Wrapper, 
    Main, Rest, 
    Song, Img, Desc, Title, 
    ArtistName, Form, Input, 
    Button, Add, Container} from '../style/List';
import FooterSect from '../components/Footer';
import SongDetails from '../components/SongDetails';
import { useDispatch, useSelector } from 'react-redux';
import { DisplayType , FetchType, SelectType} from '../Store/Types';
import { showAdd, showDetail, showMenu } from '../Store/DisplaySlice';
import AddForm from '../components/AddForm';
import UpdateForm from '../components/UpdateForm';
import DeleteConfirm from '../components/DeleteConfirm'
import { setSelected } from '../Store/SelectedSongSlice';
import AnotherSong from '../components/Another';
import Search from "../components/Search"
import {FilterMenu, Choose, Choice} from '../style/Filter'
import { titleInput, albumInput, artistInput, genreInput} from '../Store/FilterSlice';

const  SongList: React.FC = () => {

const dispatch = useDispatch();

const List = useSelector((state:FetchType) => state.songs.songs)

const ShwDetail = useSelector((state: DisplayType) => state.display.Detail);
const ShwAdd = useSelector((state: DisplayType) => state.display.Add);
const ShwUpdate = useSelector((state: DisplayType) => state.display.Update);
const ShwDelete = useSelector((state: DisplayType) => state.display.Delete);
const ShwAnother = useSelector((state:SelectType) => state.selected.another)
const FetchSuccess = useSelector((state:FetchType) => state.songs.Fetch_Success)
const Menu = useSelector((state:DisplayType) => state.display.Menu);
//const All = useSelector((state:DisplayType) => state.display.All);

const ShowAdd  = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(showAdd(true))
}
const SongClick = (id: string) => {
    console.log( ".................")
 dispatch(setSelected(id))
 dispatch(showDetail(true))

}
const Show_Menu = (filterBy:string) => {
    switch(filterBy)
    {
        case "title":
            dispatch(titleInput(true));
            break;
        case "artist":
            dispatch(artistInput(true))
            break;
        case "album":
            dispatch(albumInput(true))
            break;
         case "genre":
            dispatch(genreInput(true))
            break;
        default:
            break;
     
     
    }
dispatch(showMenu(false));

}
return (
    <>
    <Nav/>
    <Wrapper/>
   {ShwDetail && <SongDetails/> }       
   {ShwAdd && <AddForm/>}
   {ShwUpdate && <UpdateForm/>}
   {ShwDelete && <DeleteConfirm/>}
   {ShwAnother && <AnotherSong/>}
    <Main>
           <Container>{FetchSuccess && <StatDisplay/>}<Add onClick={ShowAdd}> Add Song</Add> </Container> 
            <Search/>
               <FilterMenu>
                {Menu && <Choose>
                    <Choice onClick={() => Show_Menu("title")}>Filter By song Title</Choice>
                    <Choice onClick={() => Show_Menu("artist")}>Filter By Artist Name</Choice>
                    <Choice onClick={() => Show_Menu("album")}>Filter By Album</Choice>
                    <Choice onClick={() => Show_Menu("genre")}>Filter By Genre</Choice>

                </Choose>}
                </FilterMenu> 
            <Rest>
                {!Menu  && List.map(song => <Song key = {song._id} onClick={() => SongClick(song._id)}>
                    <Img src='../assets/headphones-3085681_1280.jpg'/>
                    <Desc>
                        <Title>{song.tittle}</Title>
                        <ArtistName>{song.artist}</ArtistName>
                    </Desc>
                </Song>)
                }

                {Menu && List.map(song => <Song key = {song._id} onClick={() => SongClick(song._id)}>
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
