import React from 'react'
import four from '../assets/img/four.webp'
import {Helmet} from "react-helmet";


const PageNotFound = () => {
  return (
<>

<Helmet>
                <meta charSet="utf-8" />
                <title>Erore 404 - GF1 Srl</title>
                <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
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
  );
};

export default PageNotFound;