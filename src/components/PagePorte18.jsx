import React, {useState, useEffect} from 'react'
import {Porte18} from "./Gallery/Porte18"
import {Link} from "react-router-dom"

export default function PagePorte18
() {
    const [data,setData] = useState([]);

    const inputClass = "text-main font-semibold md:text-[18px] no-underline  hover:underline"

    useEffect(()=>{
    setData(Porte18);
    },[]) 
  
  return (
    <div className="container px-5 mx-auto text-center ">
          <h2 className="text-main font-bold text-[32px]">Porte aperte 2018</h2>
        <div className="flex justify-between md:p-20 py-10">
            <Link className={inputClass} to="/Porte17">Tirreno 2017</Link>
            <Link className={inputClass} to="/Porte19">Porte aperte 2019</Link>
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
