import './App.css';
import AppBar from './components/AppBar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Picker from './components/Picker';
import Comm from './components/Comm';
import Sidebar from './components/Sidebar';
import React, { useState } from 'react';

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <div className="app-container">
      <Sidebar />
      <div className={`App ${sidebarExpanded ? 'expanded' : ''}`}>
        <div className="main-content">
          <br />
          <Banner />
          <br />
          <Menu />
          <Picker />
          <Comm />
          <div className='text-center my-3 text-danger small'>
            Copyright @ 2023 - 2024
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
