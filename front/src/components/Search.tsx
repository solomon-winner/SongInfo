import React, { useState } from 'react'
import {Form, Input, Button} from "../style/List"
import { useDispatch, useSelector } from 'react-redux';
import { DisplayType, FilterType, FetchType} from '../Store/Types';
import { showMenu } from '../Store/DisplaySlice';
import {searchByTitle, searchByArtist, searchByAlbum, searchByGenre} from "../Store/SongSlice"

const Search: React.FC = () => {
    const TittleInput = useSelector((state:FilterType) => state.filter.title)
    const AlbumInput = useSelector((state:FilterType) => state.filter.album)
    const ArtistInput = useSelector((state:FilterType) => state.filter.artist)
    const GenreInput = useSelector((state:FilterType) => state.filter.genre)
    const DefaultInput = useSelector((state: FilterType) => state.filter.default)

    const dispatch = useDispatch();
    const Show_Menu = () => {
        dispatch(showMenu(true));
        }

    const Menu = useSelector((state:DisplayType) => state.display.Menu);
//  const List = useSelector((state:FetchType) => state.songs.songs)

    const handleTitleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchByTitle(e.target.value))
    }

    const handleArtistChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchByArtist(e.target.value))
    }

    const handleAlbumChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchByAlbum(e.target.value))
    }

    const handleGenreChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchByGenre(e.target.value))
    }

    return (
        <Form>

                    {DefaultInput &&<Input onClick={Show_Menu} disabled/>}
                    {TittleInput && <Input onChange={handleTitleChange} autoFocus/>}
                    {AlbumInput && <Input  onChange={handleAlbumChange} autoFocus/>}
                    {ArtistInput && <Input onChange={handleArtistChange} autoFocus/>}
                    {GenreInput && <Input onChange={handleGenreChange} autoFocus/>}

                    <Button>
                        Search
                    </Button>
                </Form>
    )
}
export default Search;