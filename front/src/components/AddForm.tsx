import React from 'react'
import { AddSong, Button, Buttons, Form, Input, Label, Row, Title } from '../style/Add';

const AddForm:React.FC = () => {
    return (
        <>
        <AddSong>
            <Title> Add New Song</Title>
            <Form>
                <Row>
                    <Label>Artist: </Label> <Input/>
                    <Label>Album: </Label> <Input/>
                    <Label>Genre: </Label> <Input/>
                    <Label>Title: </Label> <Input/>

                    <Buttons>
                        <Button>Add To The List</Button>
                    </Buttons>
                </Row>
            </Form>
        </AddSong>
        </>
    )
}
export default AddForm;