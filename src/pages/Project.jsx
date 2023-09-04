import React from 'react'
import slide1 from '../assets/img/2015.jpg'
import slide2 from '../assets/img/2016.jpg'
import slide3 from '../assets/img/2017.jpg'
import slide4 from '../assets/img/2018.jpg'
import slide5 from '../assets/img/2019.jpg'
import slide6 from '../assets/img/2023.jpg'
import Carousel from "../components/Carousel"







export default function Project() {
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6];


  



  return (

    <>  
      <div className="text-center mb-[60px]">
        <h2 className="text-main md:text-[54px] text-[32px] font-bold ">I nostri progetti</h2>
        </div>
    <div className="container mx-auto px-20">
      <div className="">
        <Carousel slides={slides}/>
      </div>
    </div>
    </>
  );
}


