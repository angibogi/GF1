
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
import PagePorte18 from './components/PagePorte18';
import PagePorte19 from './components/PagePorte19';
import PageTirreno15 from './components/PageTirreno15';
import PageTirreno16 from './components/PageTirreno16';
import PageTirreno17 from './components/PageTirreno17';
import PageTirreno23 from './components/PageTirreno23';




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
          <Route path="/porte15" element={<PageTirreno15/>} />
          <Route path="/porte16" element={<PageTirreno16/>} />
          <Route path="/porte17" element={<PageTirreno17/>} />
          <Route path="/porte18" element={<PagePorte18/>} />
          <Route path="/porte19" element={<PagePorte19/>} />
          <Route path="/porte23" element={<PageTirreno23/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
 
        <Footer />
      </Router>

    </>
  )
}
