import React from 'react'
import { AddSong, Button, Buttons, Cross, Form, Input, Label, Row, Title } from '../style/Add';
import { useDispatch } from 'react-redux';
import { showAdd } from '../Store/DisplaySlice';

const AddForm:React.FC = () => {
    const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const Data = new FormData(e.target as HTMLFormElement);

        const New = {
            artist: Data.get('artist') as string,
            album: Data.get('album') as string,
            genre: Data.get('genre') as string,
            tittle: Data.get('title') as string
        }
    }
const dispatch = useDispatch()
const DontShowAdd = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(showAdd(false))
}
  
    return (
        <>
        <AddSong>
        <Title> Add New Song</Title>
            <Form>
                    <Row><Label>Artist: </Label><Input name = "artist" required/></Row>    
                    <Row><Label>Album: </Label><Input name = "album" required/></Row>
                    <Row><Label>Genre: </Label><Input name = "genre" required/></Row>
                    <Row><Label>Title: </Label><Input name = "title" required/></Row>

                    <Buttons>
                        <Button>Add To The List</Button>
                    </Buttons>
                
            </Form>
            <Cross onClick={DontShowAdd}><img src="../assets/xmark-solid.svg" alt="" /></Cross>
        </AddSong>
        </>
    )
}
export default AddForm;