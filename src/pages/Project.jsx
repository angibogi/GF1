import React from 'react'
import { Link } from "react-router-dom";
import slide1 from '../assets/img/image_slider_1.webp';
import slide2 from '../assets/img/image_slider_2.webp';
import slide3 from '../assets/img/image_slider_3.webp';
import slide4 from '../assets/img/image_slider_4.webp';
import slide5 from '../assets/img/image_slider_5.webp';
import slide6 from '../assets/img/image_slider_6.webp';
import {Helmet} from "react-helmet";
import Title from '../components/Title'


const Project = () => {
const inputClass ="relative border-2 border-main scale-90 transition ease-in-out  hover:scale-100 hover:-translate-y-1 duration-300"
const imageClass ="opacity-80 grayscale-0 hover:grayscale"

  return (
    <>
    
    <Helmet>
      <meta charSet="utf-8" />
      <title>Progetti - GF1 Srl</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>

<div className="container px-5 mx-auto">

  <section className=" text-center container mx-auto px-5 my-10">
      <Title>I nostri progetti</Title>
      <p className="text-center px-5 ">Visita le gallerie fotografiche dei nostri eventi</p>
  </section>


  <div className="grid grid-cols-2">
<Link to="/porte15" className={inputClass}>
<div>
<img className={imageClass} src={slide1} alt="Tirreno 2015" />
</div>
</Link>

<Link to="/porte16" className={inputClass}>
<div >
<img className={imageClass} src={slide2} alt="Tirreno 2016" />
</div>
</Link>


<Link to="/porte17" className={inputClass}>
<div >
<img className={imageClass} src={slide3} alt="Tirreno 2017" />
</div>
</Link>

<Link to="/porte18" className={inputClass}>
<div >
<img className={imageClass} src={slide4} alt="Porte Aperte 2018" />
</div>
</Link>

<Link to="/porte19" className={inputClass}>
<div >
<img className={imageClass} src={slide5} alt="Porte Aperte 2019" />
</div>
</Link>

<Link to="/porte23" className={inputClass}>
<div >
<img className={imageClass} src={slide6} alt="Tirreno 2023" />
</div>
</Link>

  </div>

</div>
    </>
  );

}

export default Project;

