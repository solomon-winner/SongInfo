import React, { useState } from 'react'
import {Form, Input, Button} from "../style/List"
import { useDispatch, useSelector } from 'react-redux';
import { DisplayType, FilterType, FetchType} from '../Store/Types';
import { showMenu } from '../Store/DisplaySlice';
import {searchByTitle, searchByArtist, searchByAlbum, searchByGenre} from "../Store/SongSlice"
import { defaultInput } from '../Store/FilterSlice';

const Search: React.FC = () => {
    const TittleInput = useSelector((state:FilterType) => state.filter.title)
    const AlbumInput = useSelector((state:FilterType) => state.filter.album)
    const ArtistInput = useSelector((state:FilterType) => state.filter.artist)
    const GenreInput = useSelector((state:FilterType) => state.filter.genre)
    const DefaultInput = useSelector((state: FilterType) => state.filter.default)

    const dispatch = useDispatch();
    const Show_Menu = () => {
        dispatch(showMenu());
        }

    const Menu = useSelector((state:DisplayType) => state.display.Menu);

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
    const ButtonHandler = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
    }
    return (
        <Form>

                    {DefaultInput &&<Input onClick={Show_Menu} readOnly/>}
                    {TittleInput && <Input onChange={handleTitleChange} onBlur={() => dispatch(defaultInput(true))} autoFocus />}
                    {AlbumInput && <Input  onChange={handleAlbumChange} onBlur={() => dispatch(defaultInput(true))} autoFocus/>}
                    {ArtistInput && <Input onChange={handleArtistChange} onBlur={() => dispatch(defaultInput(true))} autoFocus/>}
                    {GenreInput && <Input onChange={handleGenreChange} onBlur={() => dispatch(defaultInput(true))} autoFocus/>}

                    <Button onClick={ButtonHandler}>
                        Search
                    </Button>
                </Form>
    )
}
export default Search;