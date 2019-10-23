import React from 'react';
import './App.css';
import UserData from './UserData';
import Store from './Store';




function App() {
  return (
      <Store>
        <UserData />
      </Store>
  );
}

export default App;
