import { useState } from 'react'
import './App.css'
import * as React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { HomeComponent } from './pages/HomePage';
import { TeamComponent, TeamComponentDefaults } from './pages/TeamPage';
import { AboutComponent, AboutComponentDefaults } from './pages/AboutPage';
import {  Contact9 } from './components/ContactUs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/home" />} /> */}
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent {...AboutComponentDefaults} />} />
          <Route path="/team" element={<TeamComponent {...TeamComponentDefaults} />} />
          <Route path="/contact" element={<Contact9 />} />
          

        </Routes>
      </BrowserRouter>    
    </>
  )
}

export default App
