import React, {useState, useEffect} from 'react'
import {Porte19} from "./Gallery/Porte19"
import {Link} from "react-router-dom"

export default function PagePorte19
() {
    const [data,setData] = useState([]);
    const inputClass = "text-main font-semibold md:text-[18px] no-underline  hover:underline"

    useEffect(()=>{
    setData(Porte19);
    },[]) 
  
  return (
    <div className="container px-5 mx-auto text-center ">
          <h2 className="text-main font-bold text-[32px]">Porte aperte 2019</h2>
        <div className=" flex justify-between md:p-20 py-10">
            <Link className={inputClass} to="/Porte18">Porte Aperte 2018</Link>
          
            <Link className={inputClass} to="/Porte23">Tirreno 2023</Link>
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
