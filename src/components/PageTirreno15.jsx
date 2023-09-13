import React, {useState, useEffect} from 'react'
import {Tirreno15} from "./Gallery/Tirreno15"
import {Link} from "react-router-dom"

export default function PageTirreno15
() {
    const [data,setData] = useState([]);

    useEffect(()=>{
    setData(Tirreno15);
    },[]) 
  
  return (
    <div className="container px-5 mx-auto text-center ">
          <h2 className="text-main font-bold text-[32px]">Tirreno 2015</h2>
        <div className=" flex p-20 justify-end">
            <Link className="text-main font-semibold text-[18px]" to="/Porte16">Porte aperte 2016</Link>
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
