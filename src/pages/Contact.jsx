import React from 'react'
import location from '../assets/img/location.png'
import alert from '../assets/img/alert.png'
import calendar from '../assets/img/calendar.png'



export default function Contact() {
  return (
    <>
        <div className="text-center">
        <h2 className="text-main text-[54px] font-bold ">Su di noi</h2>
        </div>

        <section className=" grid gap-8 md:grid-cols-2 lg:grid-cols-4  container mx-auto px-4">
        <div className=" mx-auto text-center my-5 p-5">
            <div className="  border-2 border-main  bg-white   min-w-[230px] items-center h-[650px] ">
                <img className="w-[20%] md:w-[30%] h-50 m-auto mt-5" src={location} alt="" />
                <h2 className="font-bold my-5">CASH 1 <br /> AVENZA CARRARA (MS)</h2>
                <p className="w-[60%] md:w-[70%] m-auto mb-10">Viale Zaccagna,6 <br /> Tel. 0585 53703 <br /> Fax. 0585 857667 <br /> E-mail: info@gf1.it</p>
                <img className="w-[20%] md:w-[30%] h-50 m-auto mt-5" src={calendar} alt="" />
                <p className="w-[60%] md:w-[70%] m-auto mb-10">Dal Lunedì al Sabato <br /> <strong>Orario:</strong> <br /> Mattina: 8.30/12.30 Pomeriggio: 15.00/18.30 Domenica mattina: 9-12</p>
            </div>
        </div>
        <div className=" mx-auto text-center my-5 p-5">
            <div className="  border-2 border-main bg-white  min-w-[230px] items-center h-[650px] z-10 ">
                <img className="w-[20%] md:w-[30%] h-50 m-auto mt-5" src={location} alt="" />
                <h2 className="font-bold my-5">CASH 2 <br /> LEVANTO (SP) (MS)</h2>
                <p className="w-[60%] md:w-[70%] m-auto mb-10">Loc. Piè di Gallona <br /> Tel. 0187 800629 <br /> Fax. 0187 801506 <br /> E-mail: info@gf1.it</p>
                <img className="w-[20%] md:w-[30%] h-50 m-auto mt-5" src={alert} alt="" />
                <p className="w-[60%] md:w-[70%] m-auto mb-10">Il magazzino è temporaneamente <strong>chiuso</strong> ma la consegna è comunque <strong>garantita</strong>. <br /> Per ordini chiamare i numeri: 0187800629 o 0187 800966. Whatsapp: 366 5803875</p>
            </div>
        </div>
       
        </section>

        <form className=" container mx-auto px-5 relative lg:absolute  lg:w-[60%] h-[100%] lg:h-[700px] lg:left-[40%] lg:top-[50%]  my-5 p-0 lg:p-5 border  border-main bg-second lg:-z-10 ">
            <div className="w-[100%] lg:w-[70%] relative lg:absolute lg:right-[10%] ">
        <div className="text-center">
        <h2 className="text-main text-[54px] font-bold ">Contattaci</h2>
        </div>
  <div className="flex flex-wrap -mx-3 px-10  mb-6 pt-10">
    <div className="w-full md:w-1/2 px-3  md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name"></label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-main rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Nome"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name"></label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-main rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Cognome"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6 px-10">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-mail-address"></label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-main rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-mail-address" type="text" placeholder="Indirizzo Mail"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6 px-10">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-mail-object"></label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-main rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-mail-object" type="text" placeholder="Oggetto"/>
    </div>
  </div>
    <div className="flex flex-wrap -mx-3 mb-6 px-10">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-mail-object"></label>
      <textarea className="appearance-none block w-full h-[300px] bg-gray-200 text-gray-700 border border-main rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-mail-object" type="text" placeholder="Oggetto"/>
    </div>
  </div>
  </div>
</form>
    </>
  )
}
