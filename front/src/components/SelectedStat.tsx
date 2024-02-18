import React, { useState } from "react";
import styled from "@emotion/styled";
import { Stat, Info, Number, Para } from '../style/Stat';
const SelectedStat:React.FC = () => {
    const [Selected_songsCount, setSelected_songsCount] = useState(0)
    const [Selected_albumsCount, setSelected_albumsCount] = useState(0);
    const [Selected_genresCount, setSelected_generesCount] = useState(0);

    return (
        <Stat>
            <Info><Number>{Selected_songsCount} </Number><Para>Songs</Para></Info>
            <Info><Number>{Selected_albumsCount}</Number><Para>Albums</Para></Info>
            <Info><Number>{Selected_genresCount}</Number><Para>Genres</Para></Info>
        </Stat>
    )
} 