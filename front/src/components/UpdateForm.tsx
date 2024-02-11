import React from 'react'
import { AddSong, Buttons, Cross, Form, Input, Label, Row, Title } from '../style/Add';
import { useDispatch } from 'react-redux';
import { showUpdate } from '../Store/DisplaySlice';
import { Edit } from '../style/detail';

const UpdateForm:React.FC = () => {
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