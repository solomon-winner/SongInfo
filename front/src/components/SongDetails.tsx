import React, { useEffect } from 'react';
import { Another, Buttons, Cross, Delete, Detail, Edit, Label, Row, SongDetail, Value, } from '../style/detail';
import { useDispatch, useSelector } from 'react-redux';
import { showDelete, showDetail, showUpdate } from '../Store/DisplaySlice';
import { FetchType, SelectType, StatType } from '../Store/Types';
import {Song} from "../Store/SongSlice"
import { removeSelected } from '../Store/SelectedSongSlice';
import { CualculateStat } from '../Store/statSlice';

const SongDetails:React.FC = () => {
const dispatch = useDispatch()

//const detail = useSelector((state:SelectType) => state.selected)
const ID = useSelector((state:SelectType) => state.selected._id)
const detail = useSelector((state: FetchType) => state.songs.songs.find((song:Song) => song._id === ID))
const Resume = useSelector((state:FetchType) => state.songs.songs.filter((song:Song) => song.artist === detail?.artist));
dispatch(CualculateStat(Resume));
const Data = useSelector((state:StatType) => state.stat);
console.log("*************************"+Data)
const DontShowDetail = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(showDetail(false))
    dispatch(removeSelected());
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
       {detail && <>
        <Row> <Label>Artist: </Label> 
        <Value>{detail.artist}</Value>
        </Row>
        <Row> <Label>Album: </Label> 
        <Value>{detail.album}</Value>
        </Row>
        <Row> <Label>Genre: </Label> 
        <Value>{detail.genre}</Value>
        </Row>
        <Row> <Label>Title: </Label> 
        <Value>{detail.tittle}</Value>
        </Row>
        </>
        }
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
