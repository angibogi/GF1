import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Header/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'


export default function App() {
  return (
    <>
    <div className="w-screen h-[64px] bg-main container px-4 " >
      <a className=" text-white" href="">info@gf1.it</a>
    </div>
    <div className="relative h-[280px]">
    <Navbar/>
    </div>
  
    <Home/>
    <Footer/>
   
    </>
  )
}
