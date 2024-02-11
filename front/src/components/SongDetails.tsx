import React from 'react';
import { Another, Buttons, Cross, Delete, Detail, Edit, Label, Row, SongDetail, Value, } from '../style/detail';
const SongDetails:React.FC = () => {
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
        <Cross><img src="../assets/xmark-solid.svg" alt="" /></Cross>
       </Detail>
       </>
    )
}

export default SongDetails;
