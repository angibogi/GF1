import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Header/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Nav from './components/Header/Nav'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Project from './pages/Project'
import Privacy from './pages/Privacy';
import PageNotFound from './pages/PageNotFound';



export default function App() {
  return (
    <>

      <Router>
        <Nav />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/project" element={<Project/>} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}
