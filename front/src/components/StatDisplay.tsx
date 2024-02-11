import React from 'react';
import { Stat, Info, Number, Para } from '../style/Stat';
import { StatType } from '../Store/Types';
import { useDispatch, useSelector } from 'react-redux';
const StatDisplay: React.FC = () => {

    const dispatcher = useDispatch();
    const Albums =useSelector((state:StatType) => state.stat.albums);
    const Artists =useSelector((state:StatType) => state.stat.artists);
    const Songs =useSelector((state:StatType) => state.stat.songs);
    const Genres =useSelector((state:StatType) => state.stat.genres);

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