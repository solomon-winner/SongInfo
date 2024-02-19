import React, { useState } from 'react'
import { AddSong, Buttons, Cross, Form, Input, Label, Row, Title } from '../style/Add';
import { useDispatch, useSelector } from 'react-redux';
import { showUpdate } from '../Store/DisplaySlice';
import { Edit } from '../style/Update';
import { FetchType, SelectType } from '../Store/Types';
import { Song } from '../Store/SongSlice';
import { updateLoading } from '../Store/SongSlice';
import { Wrapper } from '../style/detail';

const UpdateForm:React.FC = () => {
    
    const ID = useSelector((state:SelectType) => state.selected._id)
    const selected= useSelector((state:FetchType) => state.songs.songs.find((song:Song) => song._id === ID))
const [update,setUpdate] = useState({
    _id:ID||'',
    tittle:selected?.tittle||'',
    artist:selected?.artist||'',
    album:selected?.album||'',
    genre:selected?.genre||''
});
const dispatch = useDispatch()
const DontShowUpdate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(showUpdate(false))
}
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    e.preventDefault();
    setUpdate({
        ...update, [e.target.name]:e.target.value
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateLoading(update));
    dispatch(showUpdate(false));

  }
    return (
        <Wrapper>
        <AddSong>
        <Title> Add New Song</Title>
            <Form onSubmit={handleSubmit}>
                    <Row><Label>Artist: </Label><Input name = 'artist' onChange={handleChange} value={update.artist}/></Row>    
                    <Row><Label>Album: </Label><Input name = 'album' onChange={handleChange} value={update.album}/></Row>
                    <Row><Label>Genre: </Label><Input name = 'genre' onChange={handleChange} value={update.genre}/></Row>
                    <Row><Label>Title: </Label><Input name = 'tittle' onChange={handleChange} value={update.tittle}/></Row>

                    <Buttons>
                        <Edit type = 'submit'>Update the Song</Edit>
                    </Buttons>
                
            </Form>
            <Cross onClick={DontShowUpdate}><img src="../assets/xmark-solid.svg" alt="" /></Cross>
        </AddSong>
        </Wrapper>
    )
}
export default UpdateForm;