import React from 'react'
import { Wrapper, Another, Top, Cross, Name, Stat, Count, Number, Span, Songs, Song, Button, Left, Icon} from '../style/Another';
import StatDisplay from './StatDisplay';
const AnotherSong:React.FC = () => {
    return (
        <Wrapper>
            <Another>
                <Top>
                    <Name>
                        <h1>Tesfaye Gabiso</h1>
                    </Name>
                    <Cross>
                        <img src="" alt="" />
                    </Cross>
                    </Top>
                    <Stat>
                        <StatDisplay/>
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