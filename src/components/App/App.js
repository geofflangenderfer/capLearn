import React from 'react';
import './App.css';
import Form from '../Form/Form';
import Player from '../Player/Player';
import {
    HashRouter,
    Route,
} from 'react-router-dom';

const App = () => {
  return (
    <div id="app">
      <HashRouter>
        <Route exact path='/' component={Form} />
        <Route path='/player/' component={Player} />
      </HashRouter>
    </div>
  );
}

export default App;
