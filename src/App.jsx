import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
import MobNavbar from './Components/MobNavbar';
import Foter from './Components/Foter';
// import Foter from '../krishna-shop/src/Components/Foter';


const App = () => {
  return (
    <>
      <header>
        <div className="bannerbg desknavbar">
          <Navbar />
        </div>
        <div className="mobnavbar">
          <MobNavbar />
        </div>
      </header>
      <main>
        <Outlet /> {/* This works correctly */}
        <Foter />
      </main>
    </>
  );
};


export default App