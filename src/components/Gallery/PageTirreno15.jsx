import React, {useState, useEffect} from 'react';
import {Tirreno15} from "../GalleryPhoto/Tirreno15";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

const PageTirreno15 = () => {  

    const [data,setData] = useState([]);
    const inputClass = "text-main font-semibold md:text-[18px] no-underline  hover:underline"
    

    useEffect(()=>{
    setData(Tirreno15);
    },[]) 
  
  return (

    <>
        
    <Helmet>
      <meta charSet="utf-8" />
      <title>Porte Aperte 2018 - GF1 Srl</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div className="container px-5 mx-auto text-center ">
          <h2 className="text-main font-bold text-[32px]">Tirreno 2015</h2>
        <div className=" flex md:p-20 py-10 justify-end">
            <Link className={inputClass} to="/Porte16">Porte aperte 2016</Link>
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

export default PageTirreno15
