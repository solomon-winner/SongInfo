import React, { useState } from 'react'
import {Form, Input, Button} from "../style/List"
import { useDispatch, useSelector } from 'react-redux';
import { DisplayType } from '../Store/Types';
import { showMenu } from '../Store/DisplaySlice';

const Search: React.FC = () => {
    const [filterBy, SetFilterBy] = useState({
        title: false,
        album: false,
        artist: false,
        genre: false
    })
    const dispatch = useDispatch();
    const Show_Menu = (fiterBy: string) => {
        dispatch(showMenu(true));
        }

    const Menu = useSelector((state:DisplayType) => state.display.Menu);

    return (
        <Form>
                
                    <Input onFocus={() => Show_Menu('title')}/>
                    <Input onFocus={() => Show_Menu('album')}/>
                    <Input onFocus={() => Show_Menu('artist')}/>
                    <Input onFocus={() => Show_Menu('genre')}/>

                    <Button>
                        Search
                    </Button>
                </Form>
    )
}
export default Search;