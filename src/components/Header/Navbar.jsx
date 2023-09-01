import React from 'react'
import logo from '../../assets/img/logo_gf.png'


export default function Navbar() {
  return (
    <>
    <nav className=" bg-white h-56 flex  w-screen justify-center items-center text-center">
    <div className="flex space-x-4">
            <a href="#" className=" flex flex-shrink-0 items-center    text-black rounded-md px-3 py-2 text-sm font-medium font-sans-serif">AZIENDA</a>
            <a href="#" className="flex flex-shrink-0 items-center text-black px-3 py-2 text-sm font-medium">SERVIZI</a>
            <div className="flex flex-shrink-0 items-center">
          <img className="h-[178px] w-auto" src={logo} alt="GF1"/>
        </div>
            <a href="#" className=" flex flex-shrink-0 items-center text-black-300  rounded-md px-3 py-2 text-sm font-medium">SU DI NOI</a>
            <a href="#" className=" flex flex-shrink-0 items-center text-black-300  rounded-md px-3 py-2 text-sm font-medium">PROGETTI</a>
          </div>
    </nav>
    </>
  )
}
