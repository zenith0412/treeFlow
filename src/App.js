import React from 'react'
import './App.css';
import "./style.css";
import Sidebar from './layouts/Sidebar';
import TreeFlow from './components/TreeFlow/TreeFlow';

function App() {

  return (
    <>
      <div className='main_container' style={{ backgroundColor: "white" }}>
        <Sidebar />
        <TreeFlow />
      </div>
    </>
  );
}

export default App;
