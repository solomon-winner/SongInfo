import React, { useEffect, useState } from 'react';
import { Stat, Info, Number, Para } from '../style/Stat';
import { FetchType, SelectType, StatType } from '../Store/Types';
import { useSelector } from 'react-redux';
import { Song } from '../Store/SongSlice';
const StatDisplay: React.FC = () => {

    const [albumsCount, setAlbumsCount] = useState(0);
    const [artistsCount, setArtistsCount] = useState(0);
    const [songsCount, setSongsCount] = useState(0);
    const [genresCount, setGenresCount] = useState(0);

    const [Selected_songsCount, setSelected_songsCount] = useState(0);
    const [Selected_albumsCount, setSelected_albumsCount] = useState(0);
    const [Selected_genresCount, setSelected_generesCount] = useState(0);

 //   const [Resume, setResume] = useState([]);

//const Another = useSelector((state:SelectType) => state.selected.another);
//  const selected = useSelector((state:FetchType) => state.songs.songs.find((song:Song) => song._id === ID))
// const SelectedArtist = selected?.artist;
//  const Data = useSelector((state:StatType) => state.stat);
  console.log("*************************")
//  console.log("*************************"+JSON.stringify(Data))// setResume(CualculateStat);
const anotherSongs = useSelector((state:SelectType) => state.selected.another)
const songs =useSelector((state:FetchType) => state.songs.songs)
const totalSongs = songs.length;
const Artists = new Set(songs.map(song => song.artist)).size
const Albums = new Set (songs.map(song => song.album)).size
const Genres = new Set (songs.map(song => song.genre)).size

const Selected_songs = useSelector((state:FetchType) => state.songs.ArtistSongs);
const SelectedtotalSongs = Selected_songs.length;
const SelectedAlbums = new Set (Selected_songs.map(song => song.album)).size
const SelectedGenres = new Set (Selected_songs.map(song => song.genre)).size

    useEffect(() => {
        countUp(SelectedAlbums, setSelected_albumsCount);
        countUp(SelectedtotalSongs, setSelected_songsCount);
        countUp(SelectedGenres, setSelected_generesCount);
    }, [SelectedAlbums, SelectedtotalSongs, SelectedGenres])  


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
            {!anotherSongs && <>
            <Info><Number>{albumsCount} </Number><Para>Albums</Para></Info>
            <Info><Number>{artistsCount}</Number><Para>Artists</Para></Info>
            <Info><Number>{songsCount}</Number><Para>Songs</Para></Info>
            <Info><Number>{genresCount}</Number><Para>Genres</Para></Info>
            </>}

            {anotherSongs && <>
            <Info><Number>{Selected_songsCount} </Number><Para>Songs</Para></Info>
            <Info><Number>{Selected_albumsCount}</Number><Para>Albums</Para></Info>
            <Info><Number>{Selected_genresCount}</Number><Para>Genres</Para></Info>
            </>}
        
    </Stat>
    )
}

export default StatDisplay;