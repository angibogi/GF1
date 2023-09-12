import slide1 from '../assets/img/2015.jpg';
import slide2 from '../assets/img/2016.jpg';
import slide3 from '../assets/img/2017.jpg';
import slide4 from '../assets/img/2018.jpg';
import slide5 from '../assets/img/2019.jpg';
import slide6 from '../assets/img/2023.jpg';
import { Link } from "react-router-dom";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill
} from "react-icons/bs";

const style = { color: "#00904A"}

import {
  Carousel,
  initTE,
} from "tw-elements";

initTE({ Carousel });


function Project() {
  return (
    <>

<div className="container px-5 mx-auto">

<section className=" text-center container mx-auto px-5 my-10">
                <h2 className="text-main md:text-[37px] text-[24px] font-bold my-5 ">I nostri servizi</h2>
                <p className="text-center px-5 ">Visita le gallerie fotografiche dei nostri eventi</p>
            </section>

    <div
      id="carouselExampleCrossfade"
      className="relative"
      data-te-carousel-init
      data-te-ride="carousel">

    <div className="relative md:w-[60%] w-[80%] mx-auto overflow-hidden ">
    <Link to = "/porte15" className="relative float-left -mr-[100%] w-full !transform-none  duration-[50ms] ease-in-out motion-reduce:transition-none"
        data-te-carousel-fade
        data-te-carousel-item
        data-te-carousel-active>
        <img src={slide1} alt="Tirreno 2015" />    
        </Link>

        <Link to = "/porte16"
          className="relative float-left -mr-[100%] hidden w-full !transform-none  duration-[50ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-fade
          data-te-carousel-item>
          <img src={slide2} alt="Tirreno 2016"/>    
        </Link>
 
        <Link to = "/porte17"
          className="relative float-left -mr-[100%] hidden w-full !transform-none  duration-[50ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-fade
          data-te-carousel-item>
        <img src={slide3} alt="Tirreno 2017"/>     
        </Link>

        <Link to = "/porte18"
          className="relative float-left -mr-[100%] hidden w-full !transform-none  duration-[50ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-fade
          data-te-carousel-item>
        <img src={slide4} alt="Porte 2018"/>     
        </Link>

        <Link to = "/porte19"
          className="relative float-left -mr-[100%] hidden w-full !transform-none  duration-[50ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-fade
          data-te-carousel-item>
        <img src={slide5} alt="Porte 2019"/>     
        </Link>

        <Link to = "/porte23"
          className="relative float-left -mr-[100%] hidden w-full !transform-none  duration-[50ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-fade
          data-te-carousel-item>
        <img src={slide6} alt="Tirreno 2023"/>     
        </Link>
      </div>
    

      <button
        className="absolute bottom-0 left-0 top-0  flex w-[5%] md:w-[30%] items-center justify-center border-0 bg-none p-0 text-center  opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCrossfade"
        data-te-slide="prev">
        <span className="">
        <BsFillArrowLeftCircleFill style={style} size={25}/>
        </span>
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Previous</span>
      </button>

      <button
        className="absolute bottom-0 right-0 top-0  flex  w-[5%] md:w-[35%] items-center justify-center border-0 bg-none p-0 text-center  opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCrossfade"
        data-te-slide="next">
        <span className="">
        <BsFillArrowRightCircleFill style={style} size={25}/>
        </span>
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Next</span>
      </button>
    </div>
    </div>

    <div
        className=" container mx-auto px-20 inset-x-0 bottom-0   mt-[50px] md:flex list-none justify-center p-0 hidden"
        data-te-carousel-indicators>
        <img
          src={slide1} 
          alt="" 
          className="mx-[3px] box-content h-[15%] w-[15%]  cursor-pointer"
          data-te-target="#carouselExampleCrossfade"
          data-te-slide-to="0"
          data-te-carousel-active
          aria-current="true"
          aria-label="Slide 1"/>

        <img
          src={slide2} 
          alt="" 
          className=" mx-[3px] box-content  h-[15%] w-[15%] cursor-pointer"
          data-te-target="#carouselExampleCrossfade"
          data-te-slide-to="1"
          data-te-carousel-active
          aria-current="true"
          aria-label="Slide 2"/>

        <img
          src={slide3} 
          alt="" 
          className=" mx-[3px] box-content  h-[15%] w-[15%] cursor-pointer"
          data-te-target="#carouselExampleCrossfade"
          data-te-slide-to="2"
          data-te-carousel-active
          aria-current="true"
          aria-label="Slide 3"/>

        <img
          src={slide4} 
          alt="" 
          className=" mx-[3px] box-content  h-[15%] w-[15%] cursor-pointer"
          data-te-target="#carouselExampleCrossfade"
          data-te-slide-to="3"
          data-te-carousel-active
          aria-current="true"
          aria-label="Slide 4"/>

        <img
          src={slide5} 
          alt="" 
          className=" mx-[3px] box-content  h-[15%] w-[15%] cursor-pointer"
          data-te-target="#carouselExampleCrossfade"
          data-te-slide-to="4"
          data-te-carousel-active
          aria-current="true"
          aria-label="Slide 5"/>

        <img
          src={slide6} 
          alt="" 
          className=" mx-[3px] box-content  h-[15%] w-[15%] cursor-pointer"
          data-te-target="#carouselExampleCrossfade"
          data-te-slide-to="5"
          data-te-carousel-active
          aria-current="true"
          aria-label="Slide 6"/>
      
      </div>
    </>
  );

}

export default Project;

