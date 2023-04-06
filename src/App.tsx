import React from 'react';
import Header from './organism/header/Header';
import MediaList from './organism/mediaList/MediaList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-layout">
        <MediaList />
      </div>
    </div>
  );
}

export default App;
