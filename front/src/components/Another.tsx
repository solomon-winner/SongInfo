import React from 'react'
import { Wrapper, Another, Top, Cross, Name, Stat, Count, Number, Span, Songs, Song, Button, Left, Icon} from '../style/Another';
import StatDisplay from './StatDisplay';
import { useSelector } from 'react-redux';
import { FetchType } from '../Store/Types';
const AnotherSong:React.FC = () => {
    const FetchSuccess = useSelector((state:FetchType) => state.songs.Fetch_Success);
    return (
        <Wrapper>
            <Another>
                <Top>
                    <Name>
                        <h1>Tesfaye Gabiso</h1>
                    </Name>
                    <Cross>
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