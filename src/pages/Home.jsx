import React from 'react'

import cover from '../assets/img/cover.png'
import truck from '../assets/img/truck.png'
import headphones from '../assets/img/headphones.png'
import card from '../assets/img/ic_credit_card.png'
import photo1 from '../assets/img/card_1.png'
import photo2 from '../assets/img/card_2.png'
import photo3 from '../assets/img/card_3.png'
import book from '../assets/img/book.png'
import shop from '../assets/img/shop.png'
import credit from '../assets/img/credit.png'
import photo4 from '../assets/img/card_4.png'
import logo2 from '../assets/img/qualitaly.png'
import logo from '../assets/img/logo_gf.png'

export default function Home() {
  return (
    <>
    <img className=" h[622px] w-auto" src={cover} alt=""/>
    <section className=" container mx-auto grid gap-8  px-4 md:grid-cols-3">
        <div className="my-10 text-center md:text-left  ">
            <img className="m-auto  md:float-left"  src={truck} alt="" />
            <div className="p-5">
                <h2 className="font-bold text-main ">Consegna gratuita</h2>
                <p>Sopra ai 100€</p>
            </div>
        </div>
        <div className="my-10 text-center md:text-left ">
            <img className="m-auto md:float-left"  src={headphones} alt="" />
            <div className="p-5">
                <h2 className="font-bold text-main "> Supporto telefonico</h2>
                <p>+39 3481419281</p>
             </div>
        </div>
        <div className="my-10 text-center md:text-left ">
            <img className="m-auto md:float-left"  src={card} alt="" />
            <div className="p-5">
                <h2 className="font-bold text-main ">Pagamento sicuro</h2>
                <p>Fattura</p>
            </div>
        </div>
    </section>

    <section  className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3  justifay-center  text-center  my-10 ">
            <img className="w-50 h-50 m-auto my-10" src={photo1} alt="" />
            <img className="w-50 h-50 m-auto my-10" src={photo2} alt="" />
            <img className="w-50 h-50 m-auto my-10" src={photo3} alt="" />
        </div>
    </section>

    <section className=" grid gap-8 md:grid-cols-3  container mx-auto  px-4">
        <div className=" text-center my-5">
           <div className=" bg-second border-2 border-main items-center ">
                <img className="w-[20%] md:w-[30%] h-50 m-auto" src={book} alt="" />
                <h2 className="font-bold">I NOSTRI PROGETTI</h2>
            </div>
        </div>
        <div className=" text-center my-5">
           <div className=" bg-second border-2 border-main items-center ">
                <img className="w-[20%] md:w-[30%] h-50 m-auto" src={shop} alt="" />
                <h2 className="font-bold">I PUNTI VENDITA</h2>
            </div>
        </div>
        <div className="text-center my-5">
           <div className=" bg-second border-2 border-main items-center ">
                <img className="w-[20%] md:w-[30%] h-50 m-auto" src={credit} alt="" />
                <h2 className="font-bold">SHOPPING ONLINE</h2>
            </div>
        </div>
    </section>

    <section className="container mx-auto px-10 my-10" >
    <div className=" grid gap-8 md:grid-cols-2">
            <img className="w-[500px]" src={photo4} alt="" />
            <div className="my-5 md:my-0">
            <p className="  font-semibold text-quote text-xl ">Qualità, italianità e passione sono i valori racchiusi nel nostro premium brand Qualitaly.</p>
            <p className=" my-5  font-semibold text-quote text-xl">Il marchio è il primo nato in casa CIC. Un brand capace di offrire una vastissima gamma di prodotti per il mondo ho.re.ca.
                Con Qualitaly la qualità è servita!</p>
            <img className="w-[200px] h-[100px] m-auto" src={logo2} alt="" />
            </div>
        </div>
    </section>

    <section className="grid  md:hidden container mx-auto px-4">
        <div className=" text-center mt-10 md:mt-0">
           <div className=" border border-main items-center p-10 ">
                <img className="w-[150px] h-[150px] m-auto" src={logo} alt="" />
                <h2 className="font-bold text-main px-10 mb-10 text-lg">Rimani sempre aggiornato sulle nostre promozioni e molto altro!</h2>
            </div>
        </div>
        <div className="text-center mb-10 md:mb-0">
           <div className=" bg-main border border-main p-10">
                <h2 className=" font-bold text-2xl text-white p-20">ISCRIVITI ALLA NEWSLETTER</h2>
            </div>
        </div>
    </section>

    </>
  )
}
