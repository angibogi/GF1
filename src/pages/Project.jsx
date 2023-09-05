
import React, {useState, useEffect} from 'react'
import {Gallery} from "./Gallery"
import { button } from '@material-tailwind/react';

export default function Project()  {
  const [data,setData] = useState([]);
  const [collection,setCollection] = useState([]);

  useEffect(()=>{
    setData(Gallery);
    setCollection([... new Set(Gallery.map((item)=> item.year))])
  },[]) 

  const gallery_filter = (itemData) =>{
    const filterData = Gallery.filter((item)=> item.year == itemData);
    setData(filterData);
  }

  return (

    <div className="container mx-auto px-5">
             <section className=" text-center container mx-auto px-5 my-10">
                <h2 className="text-main text-[37px] font-bold my-5 ">I nostri progetti</h2>
                <p className="text-center px-5 ">Visita le gallerie fotografiche dei nostri eventi</p>
            </section>
      <div className="">
        <div className="flex justify-center items-center text-center my-5">
          <ul className="grid gap-5 grid-cols-6">
            {
              collection.map((item)=> <li><button className="hover:text-second p-2 text-black hover:bg-main md:text-2xl text-xs border-4 border-main max-w-[200px] w-[100%] h-[50px]"  onClick={()=>{gallery_filter(item)}}>{item} </button> </li>)
            }
          </ul>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {
            data.map((item)=> <div  key={item.id} className=""><img src={item.image  } /></div> )
          }
        </div>
      </div>
    </div>
  );
}
 
