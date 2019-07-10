import React from 'react';
import './App.css';
import Head from './Head/Head';
// import NewTask from './Design2/NewTask';
import Design2 from './Design2/Design2';
import Sidebar from './Design2/Sidebar';
import SideHead from './Head/SideHead';

function App() {
  return (
    <div className="App">
      <Head />
      <SideHead />
      <Design2 />
      <Sidebar />
      {/* <NewTask /> */}
      {/* <Design1 /> */}
      {/* <Assignment /> */}
    </div>
  );
}

export default App;
