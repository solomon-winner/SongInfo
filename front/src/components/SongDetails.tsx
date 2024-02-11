import React from 'react';
import { Another, Buttons, Cross, Delete, Detail, Edit, Label, Row, SongDetail, Value, } from '../style/detail';
import { useDispatch, useSelector } from 'react-redux';
import { DisplayType } from '../Store/Types';
import { setPopUp } from '../Store/DisplaySlice';
const SongDetails:React.FC = () => {
    const popUp = useSelector((state: DisplayType) => state.display.popUp)
const dispatch = useDispatch()

const DontShowDetail = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(setPopUp(false))
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
            <Edit>Edit</Edit>
            <Another>Songs By This Artist</Another>
            <Delete>Delete</Delete>
        </Buttons>
        <Cross onClick={DontShowDetail}><img src="../assets/xmark-solid.svg" alt="" /></Cross>
       </Detail>
       </>
    )
}

export default SongDetails;
