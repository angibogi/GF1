import React, { useState } from 'react'
import logo from '../../assets/img/logo_gf.webp'
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

import './Navbar.css'


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => { setClick(!click); 
    }
    
    const inputClass = "flex items-center text-black px-3 text-sm font-medium font-sans-serif"




    const content =
        <>

            <div className=" top-[120px] md:hidden absolute  w-full h-[100%]  left-0 bg-white transition z-10">
                <ul className=" text-xl p-20">
                    <Link  to="/About" alt="Visita la pagina sulla nostra storia" onClick={handleClick}>
                        <li className=" py-4 border-b text-main font-bold border-slate-800 hover:underline cursor-pointer">
                            AZIENDA
                        </li>
                    </Link>
                    <Link  to="/Services"  alt="Visita la pagina servizi" onClick={handleClick}>
                        <li className="my-4 py-4 border-b text-main font-bold border-slate-800  hover:underline cursor-pointer">
                            SERVIZI
                        </li >
                    </Link>
                    <Link  to="/Contact"  alt="Visista la pagina su di noi" onClick={handleClick}>
                        <li className="my-4 py-4 border-b text-main font-bold border-slate-800  hover:underline cursor-pointer">
                            SU DI NOI
                        </li>
                    </Link>
                    <Link  to="/Project"  alt="Pagina la pagina progetti" onClick={handleClick}>
                        <li className="my-4 py-4 border-b text-main font-bold border-slate-800  hover:underline cursor-pointer">
                            PROGETTI
                        </li>
                    </Link>
                </ul>
            </div>
        </>

    return (

        <>
        <nav className="bg-white md:h-56 w-auto h-20 z-2 ">
            <div className="flex justify-center items-center text-center">
                <ul className=" space-x-4 hidden md:flex">
                    <Link className={inputClass} alt="Visita la pagina sulla nostra storia" to="/About">
                        <li className=" link link-underline link-underline-black  flex">AZIENDA</li>
                    </Link>
                    <Link className={inputClass} alt="Visita la pagina servizi" to="/Services">
                        <li className="link link-underline link-underline-black flex">SERVIZI</li>
                    </Link>
                    <Link  alt="Visita la pagina home" to="/">
                        <div className="flex  items-center">
                            <img className="h-[178px] w-auto" src={logo} alt="GF1" />
                        </div>
                    </Link>
                    <Link className={inputClass} alt="Visista la pagina su di noi" to="/Contact">
                        <li className=" link link-underline link-underline-black  flex">SU DI NOI</li>
                    </Link>
                    <Link className={inputClass}  alt="Pagina la pagina progetti" to="/Project">
                        <li className=" link link-underline link-underline-black flex">PROGETTI</li>
                    </Link>
                </ul>
            </div>
            <div>
                <div>
                    {click && content}
                </div>
                <Link to="/" alt="Visita la pagina home" >
                    <img className=" focus:outline-none md:hidden w-20 h-20 float-left" src={logo} alt="GF1" />
                </Link>
                <button className=" md:hidden transition float-right mr-5 mt-5 z-100" onClick={handleClick}>{click ? <FaTimes size={30} /> : <CiMenuFries size={30} />} </button>
            </div>
        </nav>
        </>
    )
}

export default Navbar