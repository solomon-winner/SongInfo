import React from 'react';
import { Stat, Info, Number, Para } from '../style/Stat';
const StatDisplay: React.FC = () => {
    return (
        <Stat className="stat">
        <Info><Number>0 </Number><Para>Albums</Para></Info>
        <Info><Number>0</Number><Para>Artists</Para></Info>
        <Info><Number>0</Number><Para>Songs</Para></Info>
        <Info><Number>0</Number><Para>Genres</Para></Info>

    </Stat>
    )
}

export default StatDisplay;