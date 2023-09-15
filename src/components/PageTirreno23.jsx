import React, {useState, useEffect} from 'react'
import {Tirreno23} from "./Gallery/Tirreno23"
import {Link} from "react-router-dom"

export default function PageTirreno23
() {
    const [data,setData] = useState([]);
    const inputClass = "text-main font-semibold md:text-[18px] no-underline  hover:underline"

    useEffect(()=>{
    setData(Tirreno23);
    },[]) 
  
  return (
    <div className="container px-5 mx-auto text-center ">
          <h2 className="text-main font-bold text-[32px]">Tirreno 2023</h2>
        <div className=" flex md:p-20 py-10 justify-start">
            <Link className={inputClass} to="/Porte19">Porte Aperte 2019</Link>
        </div>
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
          {
            data.map((item)=> 
            
            <div  key={item.id}>
                
                    <div>
                    <img src={item.image}  alt="project" />
                    </div>
            </div>
             )
          }
          </div>
    </div>
  )
}
