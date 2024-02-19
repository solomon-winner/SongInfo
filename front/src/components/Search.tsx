import React, { useState } from 'react'
import {Form, Input, Button} from "../style/List"
import { useDispatch, useSelector } from 'react-redux';
import { DisplayType, FilterType } from '../Store/Types';
import { showMenu } from '../Store/DisplaySlice';

const Search: React.FC = () => {
    const TittleInput = useSelector((state:FilterType) => state.filter.title)
    const AlbumInput = useSelector((state:FilterType) => state.filter.album)
    const ArtistInput = useSelector((state:FilterType) => state.filter.artist)
    const GenreInput = useSelector((state:FilterType) => state.filter.genre)

    const dispatch = useDispatch();
    const Show_Menu = (filter_By: string) => {
        dispatch(showMenu(true));
        }

    const Menu = useSelector((state:DisplayType) => state.display.Menu);

    return (
        <Form>
                
                    {TittleInput && <Input onFocus={() => Show_Menu('title')}/>}
                    {AlbumInput && <Input onFocus={() => Show_Menu('album')}/>}
                    {ArtistInput && <Input onFocus={() => Show_Menu('artist')}/>}
                    {GenreInput && <Input onFocus={() => Show_Menu('genre')}/>}

                    <Button>
                        Search
                    </Button>
                </Form>
    )
}
export default Search;