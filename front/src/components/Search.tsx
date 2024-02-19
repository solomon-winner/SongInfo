import React from 'react'
import {Form, Input, Button} from "../style/List"
import { useDispatch, useSelector } from 'react-redux';
import { DisplayType } from '../Store/Types';
import { showMenu } from '../Store/DisplaySlice';

const Search: React.FC = () => {
    const dispatch = useDispatch();
    const Show_Menu = () => {
        dispatch(showMenu(true));
        
        }
    const Menu = useSelector((state:DisplayType) => state.display.Menu);

    return (
        <Form>
                
                    <Input onFocus={Show_Menu}/>
                    <Button>
                        Search
                    </Button>
                </Form>
    )
}
export default Search;