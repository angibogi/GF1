import React from 'react'
import { Link } from "react-router-dom";
import slide1 from '../assets/img/image_slider_1.jpg';
import slide2 from '../assets/img/image_slider_2.jpg';
import slide3 from '../assets/img/image_slider_3.jpg';
import slide4 from '../assets/img/image_slider_4.jpg';
import slide5 from '../assets/img/image_slider_5.jpg';
import slide6 from '../assets/img/image_slider_6.jpg';


function Project() {
const inputClass ="relative border-2 border-main scale-90 transition ease-in-out  hover:scale-100 hover:-translate-y-1 duration-300"
const imageClass ="opacity-80 grayscale-0 hover:grayscale"

  return (
    <>

<div className="container px-5 mx-auto">

  <section className=" text-center container mx-auto px-5 my-10">
      <h2 className="text-main md:text-[37px] text-[24px] font-bold my-5 ">I nostri servizi</h2>
      <p className="text-center px-5 ">Visita le gallerie fotografiche dei nostri eventi</p>
  </section>


  <div className="grid grid-cols-2">
<Link to="/porte15" className={inputClass}>
<div>
<img className={imageClass} src={slide1} alt="" />
</div>
</Link>

<Link to="/porte16" className={inputClass}>
<div >
<img className={imageClass} src={slide2} alt="" />
</div>
</Link>


<Link to="/porte17" className={inputClass}>
<div >
<img className={imageClass} src={slide3} alt="" />
</div>
</Link>

<Link to="/porte18" className={inputClass}>
<div >
<img className={imageClass} src={slide4} alt="" />
</div>
</Link>

<Link to="/porte19" className={inputClass}>
<div >
<img className={imageClass} src={slide5} alt="" />
</div>
</Link>

<Link to="/porte23" className={inputClass}>
<div >
<img className={imageClass} src={slide6} alt="" />
</div>
</Link>

  </div>

</div>
    </>
  );

}

export default Project;

