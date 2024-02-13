import React from 'react';
import { Another, Buttons, Cross, Delete, Detail, Edit, Label, Row, SongDetail, Value, } from '../style/detail';
import { useDispatch } from 'react-redux';
import { showDelete, showDetail, showUpdate } from '../Store/DisplaySlice';
const SongDetails:React.FC = () => {
const dispatch = useDispatch()

const DontShowDetail = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(showDetail(false))
}

const ShowUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(showUpdate(true))
}

const ShowDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault();
    dispatch(showDelete(true))
}
    return(
       <>
       <Detail>
        <SongDetail> Song Detail</SongDetail>
        <Row> <Label>Artist: </Label> 
        <Value>Aster Abebe</Value>
        </Row>
        <Row> <Label>Album: </Label> 
        <Value>Aster Abebe</Value>
        </Row>
        <Row> <Label>Genre: </Label> 
        <Value>Aster Abebe</Value>
        </Row>
        <Row> <Label>Title: </Label> 
        <Value>Aster Abebe</Value>
        </Row>
        <Buttons>
            <Edit onClick={ShowUpdate}>Edit</Edit>
            <Another>Songs By This Artist</Another>
            <Delete onClick={ShowDelete}>Delete</Delete>
        </Buttons>
        <Cross onClick={DontShowDetail}><img src="../assets/xmark-solid.svg" alt="" /></Cross>
       </Detail>
       </>
    )
}

export default SongDetails;
