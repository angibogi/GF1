import React, { useRef, useState } from 'react';
import location from '../assets/img/location.webp'
import alert from '../assets/img/alert.webp'
import calendar from '../assets/img/calendar.webp'
import team from '../assets/img/cover.webp'
import emailjs from '@emailjs/browser';
import {Helmet} from "react-helmet";


const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [label, setLabel] = useState(true);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2kl80zv', 'template_iiadgy2', form.current, 'd5XJP6UfiJqr7E5vQ')
      .then((result) => {
        console.log(result.text);
        setDone(true);
        setLabel(false);
      },
      (error) => {
        console.log(error.text);
      }
      
      );
      e.target.reset();
  };
  return (
    <>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Su di noi - GF1 Srl</title>
                <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
      <div className="text-center md:mb-[60px] mb-[0px]">
        <h2 className="text-main md:text-[54px] text-[32px] font-bold ">Su di noi</h2>
      </div>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 container mx-auto px-4">
        <div className="mx-auto text-center my-5 p-5">
          <div className="border-2 border-main  bg-white   min-w-[230px] items-center h-[650px] ">
            <img className="w-[20%] md:w-[30%] h-50 m-auto mt-5" src={location} alt="Location" />
            <h2 className="font-bold my-5">CASH 1 <br /> AVENZA CARRARA (MS)</h2>
            <p className="w-[60%] md:w-[70%] m-auto mb-10">Viale Zaccagna,6 <br /> Tel. 0585 53703 <br /> Fax. 0585 857667 <br /> E-mail: info@gf1.it</p>
            <img className="w-[20%] md:w-[30%] h-50 m-auto mt-5" src={calendar} alt="Calendario" />
            <p className="w-[60%] md:w-[70%] m-auto mb-10">Dal Lunedì al Sabato <br /> <strong>Orario:</strong> <br /> Mattina: 8.30/12.30 Pomeriggio: 15.00/18.30 Domenica mattina: 9-12</p>
          </div>
        </div>
        <div className=" mx-auto text-center my-5 p-5">
          <div className="  border-2 border-main bg-white  min-w-[230px] items-center h-[650px] z-10 ">
            <img className="w-[20%] md:w-[30%] h-50 m-auto mt-5" src={location} alt="Location" />
            <h2 className="font-bold my-5">CASH 2 <br /> LEVANTO (SP) (MS)</h2>
            <p className="w-[60%] md:w-[70%] m-auto mb-10">Loc. Piè di Gallona <br /> Tel. 0187 800629 <br /> Fax. 0187 801506 <br /> E-mail: info@gf1.it</p>
            <img className="w-[20%] md:w-[30%] h-50 m-auto mt-5" src={alert} alt="Attenzione" />
            <p className="w-[60%] md:w-[70%] m-auto mb-10">Il magazzino è temporaneamente <strong>chiuso</strong> ma la consegna è comunque <strong>garantita</strong>. <br /> Per ordini chiamare i numeri: 0187800629 o 0187 800966. Whatsapp: 366 5803875</p>
          </div>
        </div>

      </section>

      <section className="mb-[150px]">
        <div className="container mx-auto px-5 relative lg:absolute  lg:w-[60%] h-[100%] lg:h-[750px] lg:left-[40%] lg:top-[380px]  my-5 p-0 lg:p-5 border lg:block hidden border-main bg-second lg:-z-10 ">
        </div>
        <form ref={form} onSubmit={sendEmail} className=" container mx-auto px-5 relative lg:absolute  lg:w-[60%] h-[100%] lg:h-[750px] lg:left-[40%] lg:top-[380px]  my-5 p-0 lg:p-5 border border-main bg-second lg:border-hidden lg:bg-transparent ">
        {label ?
          <div className="w-[100%] lg:w-[70%] relative lg:absolute lg:right-[10%] ">
            <div className="text-center">
              <h2 className="text-main text-[45px] my-5 font-bold ">Contattaci</h2>
            </div>
            <div className="flex flex-wrap -mx-3 px-5 lg:px-10  mb-6 pt-5">
              {/*Name*/}
              <div className="w-full md:w-1/2 px-3  md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name"></label>
                <input className="lg:z-10 appearance-none block w-full bg-gray-100 text-gray-700 border border-main rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="user_name"  placeholder="Nome" />
              </div>
              {/*Surname*/}
              <div className="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name"></label>
                <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-main rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"  name="user_surname" placeholder="Cognome" />
              </div>
            </div>
            {/*Mail*/}
            <div className="flex flex-wrap -mx-3 mb-6 px-5 lg:px-10">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-mail-address"></label>
                <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-main rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-mail-address" type="text" name="user_email"   placeholder="Indirizzo Mail" />
              </div>
            </div>
            {/*Object*/}
            <div className="flex flex-wrap -mx-3 mb-6 px-5 lg:px-10">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-mail-object"></label>
                <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-main rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-mail-object" type="text" name="user_object"  placeholder="Oggetto" />
              </div>
            </div>
            {/*Textarea*/}
            <div className="flex flex-wrap -mx-3 mb-6 px-5 lg:px-10">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-mail-object"></label>
                <textarea className="appearance-none block w-full h-[250px] bg-gray-100 text-gray-700 border border-main rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-mail-message" type="text"  name="message"  placeholder="Inviaci un messaggio" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 px-5 lg:px-10 md:justify-end justify-center">
              <button className="hover:bg-third bg-main py-3 px-4 w-[150px] h-[50px] rounded text-white border-main border"  value="Send" type="submit">Invia</button>
            </div>
          </div>
          : null}
          {done ? <div className="p-20 md:mt-[250px] mt-[0px]"><p className=" m-auto text-center  h-[100%]  text-[18px] text-main font-bold lg:p-5 lg:block  ">La ringraziamo per averci contattato, stiamo elaborando la sua richiesta </p> </div>  : null}
        </form>
      </section>

      <section className="my-10 text-center">
        <h2 className="text-main text-[37px] font-bold my-5 ">Il nostro team</h2>
        <div className="container mx-auto px-4">
          <img  src={team} alt="" />
        </div>
      </section>


    </>
  );
};

export default Contact;