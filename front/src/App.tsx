import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SongList from './page/SongList';
import Home from './page/Home';
 import {Global} from './style/App'
import About from './page/About';
const App: React.FC = () => {
  return (
    <>
    <Global/>
      <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/list' element = {<SongList/>}/>
        <Route path = '/about' element = {<About/>}/>
      </Routes>
    </Router>
    </>
    // 
  
    
  );
}

export default App;
