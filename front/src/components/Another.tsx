import React from 'react'
import { Wrapper, Another, Top, Cross, Name, Stat, Count, Number, Span, Songs, Song, Button, Left, Icon} from '../style/Another';
import StatDisplay from './StatDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { FetchType } from '../Store/Types';
import { showDetail, showAnother} from '../Store/DisplaySlice';
import { removeSelected } from '../Store/SelectedSongSlice';

const AnotherSong:React.FC = () => {

    const dispatch = useDispatch();
    const FetchSuccess = useSelector((state:FetchType) => state.songs.Fetch_Success);
    const DontShowAnother = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(showDetail(false))
        dispatch(removeSelected());
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
                    {FetchSuccess && <StatDisplay/>}
                    </Stat>

                    <Songs>
                        <Song>
                            <Left>
                                <Icon></Icon>
                                Yeadebabay sew Honeh
                            </Left>
                            <Button> Detail Of The Song</Button>
                        </Song>

                        <Song>
                            <Left>
                                <Icon></Icon>
                                Yeadebabay sew Honeh
                            </Left>
                            <Button> Detail Of The Song</Button>
                        </Song>

                        <Song>
                            <Left>
                                <Icon></Icon>
                                Yeadebabay sew Honeh
                            </Left>
                            <Button> Detail Of The Song</Button>
                        </Song>

                        <Song>
                            <Left>
                                <Icon></Icon>
                                Yeadebabay sew Honeh
                            </Left>
                            <Button> Detail Of The Song</Button>
                        </Song>

                        <Song>
                            <Left>
                                <Icon></Icon>
                                Yeadebabay sew Honeh
                            </Left>
                            <Button> Detail Of The Song</Button>
                        </Song>

                    </Songs>


            </Another>
        </Wrapper>
    )
}

export default AnotherSong;