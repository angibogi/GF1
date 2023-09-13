import React, {useState, useEffect} from 'react'
import {Tirreno16} from "./Gallery/Tirreno16"
import {Link} from "react-router-dom"

export default function PageTirreno16
() {
    const [data,setData] = useState([]);

    useEffect(()=>{
    setData(Tirreno16);
    },[]) 
  
  return (
    <div className="container px-5 mx-auto text-center ">
          <h2 className="text-main font-bold text-[32px]">Tirreno 2016</h2>
        <div className=" flex justify-between p-20">
            <Link className="text-main font-semibold text-[18px]" to="/Porte15">Tirreno 2015</Link>
          
            <Link className="text-main font-semibold text-[18px]" to="/Porte17">Tirreno 2017</Link>
        </div>
    <div className="grid gap-0 md:gap-5 grid-cols-1 md:grid-cols-2">
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
