import React from 'react'
import { Wrapper, Another, Top, Cross, Name, Stat, Count, Number, Span, Songs, Song, Button, Left, Icon} from '../style/Another';
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
                        <Count><Number>68</Number><Span>Songs</Span></Count>
                        <Count><Number>30</Number><Span>Album</Span></Count>
                        <Count><Number>23</Number><Span>Genre</Span></Count>

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

export default Another;