import React from 'react'
import logo from '../assets/img/logo_gf.png'
import newsletter from '../assets/img/newsletter.png'

export default function Newsletter() {
  return (
    <>
    <section className="grid md:hidden container mx-auto px-4 my-10">
        <div className=" text-center mt-10 md:mt-0">
           <div className=" border border-main items-center  ">
                <img className="w-[150px] h-[150px] m-auto" src={logo} alt="" />
                <h3 className="font-bold text-main px-10 mb-10 text-lg">Rimani sempre aggiornato sulle nostre promozioni e molto altro!</h3>
            </div>
        </div>
        <div className="text-center mb-10 md:mb-0">
           <div className=" bg-main border border-main">
                <h3 className=" font-bold text-2xl text-white m-auto">ISCRIVITI ALLA NEWSLETTER</h3>
            </div>
        </div>
    </section>

    <section className="relative hidden md:block border border-main container mx-auto my-10">
        <img src={newsletter}/>
        <h3 className="absolute w-[250px] lg:w-[350px] font-bold text-[20px] lg:text-[40px]  text-white top-[25%] lg:right-[10%] right-[2%]">ISCRIVITI ALLA <a className="underline"  href="*">NEWSLETTER</a></h3>
        <img className=" w-[200px] h-[200px] absolute bottom-[25%] left-[2%]" src={logo}  alt="" />
        <h3 className="absolute w-[350px] lg:w-[700px] font-bold text-[20px] lg:text-[40px]  text-main bottom-[8%] left-[2%]">Rimani sempre aggiornato sulle nostre promozioni e molto altro!</h3>
    </section>
    </>
  )
}
