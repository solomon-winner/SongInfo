import React from 'react'
import { AddSong, Button, Buttons, Form, Input, Label, Row, Title } from '../style/Add';

const AddForm:React.FC = () => {
    return (
        <>
        <AddSong>
        <Title> Add New Song</Title>
            <Form>
                    <Row><Label>Artist: </Label> <Input/></Row>    
                     <Row> <Label>Album: </Label> <Input/></Row>
                    <Row><Label>Genre: </Label> <Input/></Row>
                    <Row><Label>Title: </Label> <Input/></Row>

                    <Buttons>
                        <Button>Add To The List</Button>
                    </Buttons>
                
            </Form>
        </AddSong>
        </>
    )
}
export default AddForm;