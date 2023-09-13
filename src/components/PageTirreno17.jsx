import React, {useState, useEffect} from 'react'
import {Tirreno17} from "./Gallery/Tirreno17"
import {Link} from "react-router-dom"

export default function PageTirreno17
() {
    const [data,setData] = useState([]);

    useEffect(()=>{
    setData(Tirreno17);
    },[]) 
  
  return (
    <div className="container px-5 mx-auto text-center ">
          <h2 className="text-main font-bold text-[32px]">Tirreno 2017</h2>
        <div className=" flex justify-between p-20">
            <Link className="text-main font-semibold text-[18px]" to="/Porte16">Tirreno 2016</Link>
          
            <Link className="text-main font-semibold text-[18px]" to="/Porte18">Porte aperte 2018</Link>
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
