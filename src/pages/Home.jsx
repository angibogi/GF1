import React from 'react'
import cover from '../assets/img/cover.webp'
import truck from '../assets/img/truck.webp'
import headphones from '../assets/img/headphones.webp'
import card from '../assets/img/ic_credit_card.webp'
import photo1 from '../assets/img/card_1.webp'
import photo2 from '../assets/img/card_2.webp'
import photo3 from '../assets/img/card_3.webp'
import book from '../assets/img/book.webp'
import shop from '../assets/img/shop.webp'
import credit from '../assets/img/credit.webp'
import photo4 from '../assets/img/card_4.webp'
import logo2 from '../assets/img/qualitaly.webp'
import Newsletter from '../components/Newsletter/Newsletter'
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";




const Home = () => {
    return (
        <>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Home - GF1 Srl</title>
                <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
            <div className="w-full ">
                <img className="object-cover md:h-full w-full h-[80vh] " src={cover} alt="Cover della Home" />
            </div>
            <section className=" container mx-auto grid gap-4 px-4 md:grid-cols-3">
                <div className="mt-10 mb-5 text-center md:text-left mx-auto md:columns-2 md:gap-0 ">
                    <img className="  md:w-[50%] m-auto md:m-0 h-[63px] " src={truck} alt="Consegna gratuita" />
                    <div className="">
                        <h2 className="font-bold text-main text-sm  lg:text-md ">Consegna gratuita</h2>
                        <p className=" text-sm lg:text-md ">Sopra ai 100€</p>
                    </div>
                </div>
                <div className="mt-10 mb-5 text-center md:text-left mx-auto md:columns-2 md:gap-0 ">
                    <img className="  md:w-[50%] m-auto md:m-0 h-[63px] " src={headphones} alt="Supporto telefonico" />
                    <div className="">
                        <h2 className="font-bold text-main  text-sm lg:text-md "> Supporto telefonico</h2>
                        <p className=" text-sm lg:text-md ">+39 3481419281</p>
                    </div>
                </div>
                <div className="mt-10 mb-5 text-center md:text-left mx-auto md:columns-2 md:gap-0 ">
                    <img className="  md:w-[50%] m-auto md:m-0 h-[63px]  " src={card} alt="Pagamento sicuro" />
                    <div className="">
                        <h2 className="font-bold text-main text-sm lg:text-md ">Pagamento sicuro</h2>
                        <p className=" text-sm lg:text-md  ">Fattura</p>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="grid gap-4 md:grid-cols-3  justifay-center  text-center  mt-10 ">
                    <img className="w-50 h-50 m-auto my-5" src={photo1} alt="immagine GF1" />
                    <img className="w-50 h-50 m-auto my-5" src={photo2} alt="immagine GF1" />
                    <img className="w-50 h-50 m-auto my-5" src={photo3} alt="immagine GF1" />
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

            <section className=" container mx-auto  px-10 my-10" >
                <div className=" grid gap-1 md:grid-cols-2">
                    <img className=" md:mr-5 max-w-[90%] max-h-[90%] mx-auto" src={photo4} alt="Qualitaly foto" />
                    <div className="my-5 md:my-0 md:max-w-[400px] m-auto md:ml-5 ">
                        <h3 className="font-semibold text-quote lg:text-[1.5rem] md:text-[1rem] text-[16px]">Qualità, italianità e passione sono i valori racchiusi nel nostro premium brand Qualitaly. <br /><br />Il marchio è il primo nato in casa CIC. Un brand capace di offrire una vastissima gamma di prodotti per il mondo ho.re.ca.
                            Con Qualitaly la qualità è servita!</h3>
                        <img className=" lg:w-[250px] lg:h-[120px] w-20 h-10" src={logo2} alt="Logo Qualitaly" />
                    </div>
                </div>
            </section>
            <Newsletter/>
        </>
    );
};

export default Home;
