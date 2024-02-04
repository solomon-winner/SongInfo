import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SongList from './components/SongList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<SongList/>}/>
        <Route/>
      </Routes>
    </Router>
  );
}

export default App;
