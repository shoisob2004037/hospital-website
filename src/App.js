import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/AboutUs';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/footer';
import Card from './Components/Card'; 
import DoctorDetails from './Components/DoctorDetails';
import SignIn  from './Components/SignIn';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SignIn />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Card />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
