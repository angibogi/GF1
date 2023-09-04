import React, {useState} from 'react'
import logo from '../../assets/img/logo_gf.png'
import {Link} from "react-router-dom";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";

import './Navbar.css'


const  Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {setClick(!click);}

    
   

const content = 
    <>

    <div   className=" top-[120px] md:hidden absolute  w-full h-[100%]  left-0 bg-white transition">
       <ul className=" text-xl p-20">
        <Link spy={true} smooth={true}  to = "/About"  onClick={handleClick}>
        <li className=" py-4 border-b text-main font-bold border-slate-800 hover:underline cursor-pointer">
        AZIENDA
        </li>
        </Link>
        <Link  spy={true} smooth={true}  to = "/Contact"onClick={handleClick}>
         <li className="my-4 py-4 border-b text-main font-bold border-slate-800  hover:underline cursor-pointer">
        SU DI NOI
        </li>
        </Link>
        <Link  spy={true} smooth={true}  to = "/Services"onClick={handleClick}>
        <li className="my-4 py-4 border-b text-main font-bold border-slate-800  hover:underline cursor-pointer">
        SERVIZI
        </li >
        </Link>
        <Link  spy={true} smooth={true}  to = "/Project"onClick={handleClick}>
        <li className="my-4 py-4 border-b text-main font-bold border-slate-800  hover:underline cursor-pointer">
        PROGETTI
        </li>
        </Link>
        </ul> 
    </div>
    </>

    return(
        <nav className="  bg-white md:h-56 w-auto h-20 ">
            <div className="flex justify-center items-center text-center">
        <div className=" space-x-4 hidden md:flex">
            <Link className=" flex items-center    text-black px-3  text-sm font-medium font-sans-serif" to = "/About">
                <li  className=" link link-underline link-underline-black  flex">AZIENDA</li>
            </Link>      
            <Link className=" flex  items-center    text-black px-3  text-sm font-medium font-sans-serif" to = "/Services">
                <li  className=" link link-underline link-underline-black flex">SERVIZI</li>
            </Link>
            <Link  to = "/">
            <div className="flex  items-center">
              <img className="h-[178px] w-auto" src={logo} alt="GF1"/>
            </div>
            </Link>
            <Link className=" flex  items-center    text-black  px-3 text-sm font-medium font-sans-serif" to = "/Contact">
                <li className=" link link-underline link-underline-black  flex">SU DI NOI</li>
            </Link>
            <Link className=" flex  items-center    text-black  px-3  text-sm font-medium font-sans-serif" to = "/Project">
                <li className=" link link-underline link-underline-black flex">PROGETTI</li>
            </Link>
              </div>
              </div>
              <div>
              <div>
                {click && content}
            </div>
            <Link  to = "/">
            <img className=" focus:outline-none md:hidden  w-20 h-20 float-left" src={logo} alt="GF1"/>
            </Link>
            <button className=" md:hidden transition float-right mr-5 mt-5 z-100" onClick={handleClick}>{click ? <FaTimes size={30}  /> : <CiMenuFries size={30}/>} </button>
        </div>
        </nav>
  )
}

export default Navbar