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
    <img className=" h[622px]" src={cover} alt=""/>
    <section className=" flex flex-col justify-center text-center container mx-auto px-20">
        <div className="my-10">
            <img className="m-auto"  src={truck} alt="" />
            <div>
                <h2 className="font-bold text-main ">Consegna gratuita</h2>
                <p>Sopra ai 100€</p>
            </div>
        </div>
        <div className="my-10">
            <img className="m-auto"  src={headphones} alt="" />
            <div>
                <h2 className="font-bold text-main "> Supporto telefonico</h2>
                <p>+39 3481419281</p>
             </div>
        </div>
        <div className="my-10">
            <img className="m-auto"  src={card} alt="" />
            <div>
                <h2 className="font-bold text-main ">Pagamento sicuro</h2>
                <p>Fattura</p>
            </div>
        </div>
    </section>

    <section  className="container mx-auto px-20  ">
        <div className="flex flex-col justifay-center  text-center  my-10">
            <img className="w-50 h-50 m-auto my-10" src={photo1} alt="" />
            <img className="w-50 h-50 m-auto my-10" src={photo2} alt="" />
            <img className="w-50 h-50 m-auto my-10" src={photo3} alt="" />
        </div>
    </section>

    <section className="container mx-auto  px-20">
        <div className="flex flex-col justifay-center  text-center my-10">
           <div className=" bg-second border-2 border-main items-center ">
                <img className="w-50 h-50 m-auto" src={book} alt="" />
                <h2 className="font-bold">I NOSTRI PROGETTI</h2>
            </div>
        </div>
        <div className="flex flex-col justifay-center  text-center my-10">
           <div className=" bg-second border-2 border-main items-center ">
                <img className="w-50 h-50 m-auto" src={shop} alt="" />
                <h2 className="font-bold">I PUNTI VENDITA</h2>
            </div>
        </div>
        <div className="flex flex-col justifay-center  text-center my-10">
           <div className=" bg-second border-2 border-main items-center ">
                <img className="w-50 h-50 m-auto" src={credit} alt="" />
                <h2 className="font-bold">SHOPPING ONLINE</h2>
            </div>
        </div>
    </section>

    <section className="container  px-20" >
    <div className="my-10 ">
            <img className="m-auto" src={photo4} alt="" />
            <p className=" my-5  font-semibold text-quote text-xl ">Qualità, italianità e passione sono i valori racchiusi nel nostro premium brand Qualitaly.</p>
            <p className=" my-5  font-semibold text-quote text-xl">Il marchio è il primo nato in casa CIC. Un brand capace di offrire una vastissima gamma di prodotti per il mondo ho.re.ca.
                Con Qualitaly la qualità è servita!</p>
            <img className="w-[200px] h-[100px] m-auto" src={logo2} alt="" />
        </div>
    </section>

    <section className="container mx-auto px-20">
        <div className="flex flex-col justifay-center  text-center mt-10">
           <div className="  border border-main items-center ">
                <img className="w-[150px] h-[150px] m-auto" src={logo} alt="" />
                <h2 className="font-bold text-main px-10 mb-10 text-lg">Rimani sempre aggiornato sulle nostre promozioni e molto altro!</h2>
            </div>
        </div>
        <div className="flex flex-col justifay-center  text-center mb-10">
           <div className=" bg-main border border-main">
                <h2 className=" font-bold text-lg text-white p-20">ISCRIVITI ALLA NEWSLETTER</h2>
            </div>
        </div>
    </section>
    </>
  )
}
