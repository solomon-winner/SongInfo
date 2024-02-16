import React from 'react'
import { AddSong, Buttons, Cross, Form, Input, Label, Row, Title } from '../style/Add';
import { useDispatch, useSelector } from 'react-redux';
import { showUpdate } from '../Store/DisplaySlice';
import { Edit } from '../style/Update';
import { FetchType, SelectType } from '../Store/Types';
import { Song } from '../Store/SongSlice';

const UpdateForm:React.FC = () => {
    const ID = useSelector((state:SelectType) => state.selected._id)
    const selected= useSelector((state:FetchType) => state.songs.songs.find((song:Song) => song._id === ID))

const dispatch = useDispatch()
const DontShowUpdate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(showUpdate(false))
}
  
    return (
        <>
        <AddSong>
        <Title> Add New Song</Title>
            <Form>
                    <Row><Label>Artist: </Label><Input/></Row>    
                    <Row><Label>Album: </Label><Input/></Row>
                    <Row><Label>Genre: </Label><Input/></Row>
                    <Row><Label>Title: </Label><Input/></Row>

                    <Buttons>
                        <Edit>Update the Song</Edit>
                    </Buttons>
                
            </Form>
            <Cross onClick={DontShowUpdate}><img src="../assets/xmark-solid.svg" alt="" /></Cross>
        </AddSong>
        </>
    )
}
export default UpdateForm;