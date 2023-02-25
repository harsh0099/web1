import React from 'react'
// import React, { useEffect } from 'react';
// import AOS from 'aos';
import "aos/dist/aos.css";
// import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
// import {useDocTitle} from '../components1/CustomHook';

export default function Das3() {

   

  return (
   
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>

  )
}
