import React from 'react';
import './style/style.css';
import { Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import HomeScreen from './components/HomeScreen';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
      </Routes>
      <Footer/>
       
     
    </div>
  );
}


export default App;
