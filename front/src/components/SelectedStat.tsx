import React, { useEffect, useState } from "react";
import { Stat, Info, Number, Para } from '../style/Stat';
import { useSelector } from "react-redux";
import {FetchType} from "../Store/Types"

const SelectedStat:React.FC = () => {
    const [Selected_songsCount, setSelected_songsCount] = useState(0)
    const [Selected_albumsCount, setSelected_albumsCount] = useState(0);
    const [Selected_genresCount, setSelected_generesCount] = useState(0);

    const countUp = (target:number, setter: React.Dispatch<React.SetStateAction<number>>) => {
        let current = 0;
        const interval = setInterval(() => {
            current++;
            setter(current);
            if (current === target) clearInterval(interval);
        }, 50);
    }

    const Selected_songs = useSelector((state:FetchType) => state.songs.ArtistSongs);
const SelectedtotalSongs = Selected_songs.length;
const SelectedAlbums = new Set (Selected_songs.map(song => song.album)).size
const SelectedGenres = new Set (Selected_songs.map(song => song.genre)).size


    useEffect(() => {
        countUp(SelectedAlbums, setSelected_albumsCount);
        countUp(SelectedtotalSongs, setSelected_songsCount);
        countUp(SelectedGenres, setSelected_generesCount);
    }, [SelectedAlbums, SelectedtotalSongs, SelectedGenres])  

    return (
        <Stat>
            <Info><Number>{Selected_songsCount} </Number><Para>Songs</Para></Info>
            <Info><Number>{Selected_albumsCount}</Number><Para>Albums</Para></Info>
            <Info><Number>{Selected_genresCount}</Number><Para>Genres</Para></Info>
        </Stat>
    )
} 

export default SelectedStat;