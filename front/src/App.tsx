import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SongList from './components/SongList';
import SongDetails from './components/SongDetails';
import AddForm from './components/AddForm';
import UpdateForm from './components/UpdateForm';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<SongList/>}/>
        <Route path = '/details/:id' element = {<SongDetails/>}/>
        <Route path = '/add' element = {<AddForm/>}/>
        <Route path = '/update/:id' element = {<UpdateForm/>}/>

      </Routes>
    </Router>
  );
}

export default App;
