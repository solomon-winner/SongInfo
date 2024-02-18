import React from 'react'
import { Wrapper, Another, Top, Cross, Name, Stat, Songs, Song, Button, Left, Icon} from '../style/Another';
import { useDispatch, useSelector } from 'react-redux';
import { FetchType ,SelectType} from '../Store/Types';
import { showDetail, showAnother} from '../Store/DisplaySlice';
import { Show_Another, removeSelected } from '../Store/SelectedSongSlice';
import SelectedStat from './SelectedStat';

const AnotherSong:React.FC = () => {

    const dispatch = useDispatch();
    const Selected = useSelector((state:FetchType) => state.songs.ArtistSongs);
    const anotherSongs = useSelector((state:SelectType) => state.selected.another)

    const ShowDetail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(Show_Another(false))
        dispatch(showDetail(true))
    }
    const DontShowAnother = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(showDetail(false));
        dispatch(showAnother(false));
        dispatch(removeSelected());
        dispatch(Show_Another(false));
    }



    return (
        <Wrapper>
            <Another>
                <Top>
                    <Name>
                        <h1>Tesfaye Gabiso</h1>
                    </Name>
                    <Cross onClick={DontShowAnother}>
                        <img src="./assets/xmark-solid.svg" alt="" />
                    </Cross>
                    </Top>
                    <Stat>
                    {anotherSongs && <SelectedStat/>}
                    </Stat>

                    <Songs>
                        {Selected.map(song => <Song key = {song._id} >
                           <Left>
                                <Icon></Icon>
                                {song.tittle}
                            </Left>
                            <Button onClick={ShowDetail}> Detail Of The Song</Button> 
                        </Song>)}

                    </Songs>
            </Another>
        </Wrapper>
    )
}

export default AnotherSong;