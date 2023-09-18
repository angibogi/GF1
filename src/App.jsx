
import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Nav from './components/Header/Nav';
import Privacy from './pages/Privacy';
import PageNotFound from './pages/PageNotFound';
import PagePorte18 from './components/PagePorte18';
import PagePorte19 from './components/PagePorte19';
import PageTirreno15 from './components/PageTirreno15';
import PageTirreno16 from './components/PageTirreno16';
import PageTirreno17 from './components/PageTirreno17';
import PageTirreno23 from './components/PageTirreno23';



const Home = lazy(()=>import('./pages/Home')) 
const Project = lazy(()=>import('./pages/Project'))
const About = lazy(()=>import('./pages/About')) 
const Contact = lazy(()=>import('./pages/Contact')) 
const Services = lazy(()=>import('./pages/Services')) 


export default function App() {
  return (
    <>
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/project" element={<Project/>} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/porte15" element={<PageTirreno15/>} />
          <Route path="/porte16" element={<PageTirreno16/>} />
          <Route path="/porte17" element={<PageTirreno17/>} />
          <Route path="/porte18" element={<PagePorte18/>} />
          <Route path="/porte19" element={<PagePorte19/>} />
          <Route path="/porte23" element={<PageTirreno23/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
        </Suspense>
      </Router>
    </>
  )
}
