import React, { useState } from 'react'
import {Form, Input, Button} from "../style/List"
import { useDispatch, useSelector } from 'react-redux';
import { DisplayType, FilterType, FetchType} from '../Store/Types';
import { showMenu } from '../Store/DisplaySlice';

const Search: React.FC = () => {
    const TittleInput = useSelector((state:FilterType) => state.filter.title)
    const AlbumInput = useSelector((state:FilterType) => state.filter.album)
    const ArtistInput = useSelector((state:FilterType) => state.filter.artist)
    const GenreInput = useSelector((state:FilterType) => state.filter.genre)
    const DefaultInput = useSelector((state: FilterType) => state.filter.default)

    const dispatch = useDispatch();
    const Show_Menu = (filter_By: string) => {
        dispatch(showMenu(true));
        }

    const Menu = useSelector((state:DisplayType) => state.display.Menu);
    const List = useSelector((state:FetchType) => state.songs.songs)
    

    return (
        <Form>

                    {DefaultInput &&<Input onClick={() => Show_Menu('title')}/>}
                    {TittleInput && <Input  autoFocus/>}
                    {AlbumInput && <Input  autoFocus/>}
                    {ArtistInput && <Input  autoFocus/>}
                    {GenreInput && <Input autoFocus/>}

                    <Button>
                        Search
                    </Button>
                </Form>
    )
}
export default Search;