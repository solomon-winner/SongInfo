import React from 'react'
import Nav  from '../components/Nav';
import { Wrapper } from '../style/List';
import  Stat  from '../components/StatDisplay';
const  SongList: React.FC = () => {
return (
    <>
    <Nav/>
    <Wrapper/>
    <Stat/>
    </>
)
}
export default SongList;
