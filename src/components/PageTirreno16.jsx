import React, {useState, useEffect} from 'react';
import {Tirreno16} from "./Gallery/Tirreno16";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

const PageTirreno16 = () => {  

    const [data,setData] = useState([]);
    const inputClass = "text-main font-semibold md:text-[18px] no-underline  hover:underline"

    useEffect(()=>{
    setData(Tirreno16);
    },[]) 
  
  return (
    <>
        
    <Helmet>
      <meta charSet="utf-8" />
      <title>Porte Aperte 2018 - GF1 Srl</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div className="container px-5 mx-auto text-center ">
          <h2 className="text-main font-bold text-[32px]">Tirreno 2016</h2>
        <div className=" flex justify-between md:p-20 py-10">
            <Link className={inputClass} to="/Porte15">Tirreno 2015</Link>
          
            <Link className={inputClass} to="/Porte17">Tirreno 2017</Link>
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
    </>
  );
};

export default PageTirreno16
