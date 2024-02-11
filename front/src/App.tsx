import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SongList from './page/SongList';
import SongDetails from './components/SongDetails';
import AddForm from './components/AddForm';
import UpdateForm from './components/UpdateForm';
import Home from './page/Home';
 import {Global} from './style/App'
const App: React.FC = () => {
  return (
    <>
    <Global/>
      <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/list' element = {<SongList/>}/>
        <Route path = '/details/:id' element = {<SongDetails/>}/>
        <Route path = '/add' element = {<AddForm/>}/>
        <Route path = '/update/:id' element = {<UpdateForm/>}/>

      </Routes>
    </Router>
    </>
    // 
  
    
  );
}

export default App;
