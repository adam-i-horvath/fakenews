import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/pages.home';
import About from './pages/pages.about';
import Negynegynegy from './pages/pages.negynegynegy';
import Navbar from './components/components.navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="negynegynegy" element={<Negynegynegy />}></Route>
      </Routes>
    </div>
  );
}

export default App;
