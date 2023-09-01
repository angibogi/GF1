import React, {useState} from 'react'
import logo from '../../assets/img/logo_gf.png'
import {Link} from "react-router-dom";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";



const  Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {setClick(!click);
    }
const content = 
    <>
    <div className=" top-[150px] md:hidden absolute  w-full h-full left-0 bg-white transition">
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
        <nav className="  bg-white h-56 w-auto ">
            <div className="flex justify-center items-center text-center">
        <div className=" space-x-4 hidden md:flex">
            <Link className=" flex flex-shrink-0 items-center    text-black rounded-md px-3 py-2 text-sm font-medium font-sans-serif" to = "/About">
                <li  className=" flex">AZIENDA</li>
            </Link>      
            <Link className=" flex flex-shrink-0 items-center    text-black rounded-md px-3 py-2 text-sm font-medium font-sans-serif" to = "/Services">
                <li  className="flex">SERVIZI</li>
            </Link>
            <Link  to = "/">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-[178px] w-auto" src={logo} alt="GF1"/>
            </div>
            </Link>
            <Link className=" flex flex-shrink-0 items-center    text-black rounded-md px-3 py-2 text-sm font-medium font-sans-serif" to = "/Contact">
                <li className=" flex">SU DI NOI</li>
            </Link>
            <Link className=" flex flex-shrink-0 items-center    text-black rounded-md px-3 py-2 text-sm font-medium font-sans-serif" to = "/Project">
                <li className="flex">PROGETTI</li>
            </Link>
              </div>
              </div>
              <div>
              <div>
                {click && content}
            </div>
            <Link  to = "/">
            <img className=" md:hidden  w-[100px] h-[100px] float-left" src={logo} alt="GF1"/>
            </Link>
            <button className=" md:hidden transition float-right mr-5 mt-5 z-100" onClick={handleClick}>{click ? <FaTimes size={30}  /> : <CiMenuFries size={30}/>} </button>
        </div>
        </nav>
  )
}

export default Navbar