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
import Newsletter from '../components/Newsletter/Newsletter'
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <>
            <div className="w-full ">
                <img className="object-cover md:h-full h-[80vh] " src={cover} alt="" />
            </div>
            <section className=" container mx-auto grid gap-4 px-4 md:grid-cols-3">
                <div className="mt-10 mb-5 text-center md:text-left mx-auto md:columns-2 md:gap-0 ">
                    <img className=" w-[30%] md:w-[50%] m-auto md:m-0 " src={truck} alt="" />
                    <div className="">
                        <h2 className="font-bold text-main text-sm  lg:text-md ">Consegna gratuita</h2>
                        <p className=" text-sm lg:text-md ">Sopra ai 100€</p>
                    </div>
                </div>
                <div className="mt-10 mb-5 text-center md:text-left mx-auto md:columns-2 md:gap-0 ">
                    <img className=" w-[30%] md:w-[50%] m-auto md:m-0  " src={headphones} alt="" />
                    <div className="">
                        <h2 className="font-bold text-main  text-sm lg:text-md "> Supporto telefonico</h2>
                        <p className=" text-sm lg:text-md ">+39 3481419281</p>
                    </div>
                </div>
                <div className="mt-10 mb-5 text-center md:text-left mx-auto md:columns-2 md:gap-0 ">
                    <img className=" w-[30%] md:w-[50%] m-auto md:m-0  " src={card} alt="" />
                    <div className="">
                        <h2 className="font-bold text-main text-sm lg:text-md ">Pagamento sicuro</h2>
                        <p className=" text-sm lg:text-md  ">Fattura</p>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="grid gap-4 md:grid-cols-3  justifay-center  text-center  mt-10 ">
                    <img className="w-50 h-50 m-auto my-5" src={photo1} alt="" />
                    <img className="w-50 h-50 m-auto my-5" src={photo2} alt="" />
                    <img className="w-50 h-50 m-auto my-5" src={photo3} alt="" />
                </div>
            </section>

            <section className=" grid gap-4 md:grid-cols-3  container mx-auto  px-4">
                <div className=" text-center my-5">
                    <div className=" bg-second border-2 border-main items-center ">
                        <Link to="/project" >
                        <img className="w-[20%] md:w-[30%] h-50 m-auto" src={book} alt="progetti" />
                        <h2 className="font-bold">I NOSTRI PROGETTI</h2>
                        </Link>
                    </div>
                </div>
                <div className=" text-center my-5">
                    <div className=" bg-second border-2 border-main items-center ">
                 
                        <img className="w-[20%] md:w-[30%] h-50 m-auto" src={shop} alt="punti vendita" />
                        <h2 className="font-bold">I PUNTI VENDITA</h2>
             
                    </div>
                </div>
                <div className="text-center my-5">
                    <div className=" bg-second border-2 border-main items-center ">
                    <a href="https://shop.gf1.it/sm/" target="_blank">
                        <img className="w-[20%] md:w-[30%] h-50 m-auto" src={credit} alt="shopping online" />
                        <h2 className="font-bold">SHOPPING ONLINE</h2>
                    </a>
                    </div>
                </div>
            </section>

            <section className=" w-100 h-50 container mx-auto px-10 my-10" >
                <div className=" grid gap-0 md:grid-cols-2">
                    <img className=" m-auto md:mr-5" src={photo4} alt="" />
                    <div className="my-5 md:my-0 md:max-w-[480px] m-auto md:ml-5 ">
                        <h3 className=" lg:text-[26px] font-semibold text-quote md:text-[16px]   text-[24px] my-8 ">Qualità, italianità e passione sono i valori racchiusi nel nostro premium brand Qualitaly. <br /><br />Il marchio è il primo nato in casa CIC. Un brand capace di offrire una vastissima gamma di prodotti per il mondo ho.re.ca.
                            Con Qualitaly la qualità è servita!</h3>
                        <img className=" md:m-0 m-auto" src={logo2} alt="" />
                    </div>
                </div>
            </section>
            <Newsletter />
        </>
    )
}
