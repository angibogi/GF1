import React from 'react'
import { Link } from "react-router-dom";
import four from '../assets/img/four.png'
import cable from '../assets/img/cable.png'

export default function 
() {
  return (
<>
            <div className="container mx-auto">
                <div clasName="relative ">
            
                        <div className="">
                        <div>
                    <img src={four} className=" mx-auto " />
                    </div>
                            <h1 className="my-2 text-third font-bold text-2xl text-center">
                              Sembra tu abbia avuto un problema
                            </h1>
                            <p className="my-2 text-black text-center">Ci dispiace! Ti invitiamo a tornare nella Home per continuare la ricerca.</p>
                        </div>
                    
                </div>
            </div>
            <div>
            </div>
            </>     
  )
}
