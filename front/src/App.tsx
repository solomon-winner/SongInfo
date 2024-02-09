import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SongList from './components/SongList';
import SongDetails from './components/SongDetails';
import AddForm from './components/AddForm';
import UpdateForm from './components/UpdateForm';
import Home from './page/Home';
import {Container} from './style/App'
const App: React.FC = () => {
  return (
    <Container>
      <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/list' element = {<SongList/>}/>
        <Route path = '/details/:id' element = {<SongDetails/>}/>
        <Route path = '/add' element = {<AddForm/>}/>
        <Route path = '/update/:id' element = {<UpdateForm/>}/>

      </Routes>
    </Router>
    </Container>
    
  );
}

export default App;
