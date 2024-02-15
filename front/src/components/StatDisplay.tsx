import React, { useEffect, useState } from 'react';
import { Stat, Info, Number, Para } from '../style/Stat';
import { FetchType } from '../Store/Types';
import { useSelector } from 'react-redux';
const StatDisplay: React.FC = () => {

    const [albumsCount, setAlbumsCount] = useState(0);
    const [artistsCount, setArtistsCount] = useState(0);
    const [songsCount, setSongsCount] = useState(0);
    const [genresCount, setGenresCount] = useState(0);

const songs =useSelector((state:FetchType) => state.songs.songs)
const totalSongs = songs.length;
const Artists = new Set(songs.map(song => song.artist)).size
const Albums = new Set (songs.map(song => song.album)).size
const Genres = new Set (songs.map(song => song.genre)).size

// const Albums =useSelector((state:) => state.songs.songs.album);
    // const Artists =useSelector((state:StatType) => state.stat.statisctics.artists);
// const Songs =useSelector((state:StatType) => state.stat.statisctics.totalSongs);
    // const Genres =useSelector((state:StatType) => state.stat.statisctics.genres);

    useEffect(() => {
        countUp(Albums, setAlbumsCount);
        countUp(Artists, setArtistsCount);
        countUp(totalSongs, setSongsCount);
        countUp(Genres, setGenresCount);
    }, [Albums, Artists, totalSongs, Genres])

    const countUp = (target:number, setter: React.Dispatch<React.SetStateAction<number>>) => {
        let current = 0;
        const interval = setInterval(() => {
            current++;
            setter(current);
            if (current === target) clearInterval(interval);
        }, 50);
    }
    return (
        <Stat className="stat">
        <Info><Number>{albumsCount} </Number><Para>Albums</Para></Info>
        <Info><Number>{artistsCount}</Number><Para>Artists</Para></Info>
        <Info><Number>{songsCount}</Number><Para>Songs</Para></Info>
        <Info><Number>{genresCount}</Number><Para>Genres</Para></Info>

    </Stat>
    )
}

export default StatDisplay;