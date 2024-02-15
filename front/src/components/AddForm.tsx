import React from 'react'
import { AddSong, Button, Buttons, Cross, Form, Input, Label, Row, Title } from '../style/Add';
import { useDispatch } from 'react-redux';
import { showAdd } from '../Store/DisplaySlice';

const AddForm:React.FC = () => {
    const handleChange = () => {
        
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
                    <Row><Label>Artist: </Label><Input/></Row>    
                    <Row><Label>Album: </Label><Input/></Row>
                    <Row><Label>Genre: </Label><Input/></Row>
                    <Row><Label>Title: </Label><Input/></Row>

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