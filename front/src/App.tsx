import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

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
