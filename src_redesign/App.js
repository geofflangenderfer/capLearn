import React from 'react';
import './App.css';
import Dropdown from './Dropdown';
import Search from './Search';
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom';

function App() {
  return (
    <div id="app">
      <HashRouter>
        <Route exact path='/' component={Dropdown} />
        <Route path='/search/:languageCode' component={Search} />
      </HashRouter>
    </div>
  );
}

export default App;
