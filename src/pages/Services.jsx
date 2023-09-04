import React from 'react'
import cover from '../assets/img/cover_services.jpg'
import cart from '../assets/img/cart.png'
import agent from '../assets/img/agent.png'
import box from '../assets/img/box.png'
import phone from '../assets/img/phone.png'
import Newsletter from '../components/Newsletter'


export default function Services() {
  return (
    <>
    <div className="w-full">
    <img className="object-cover md:h-full h-[80vh]" src={cover} alt=""/>
    </div>

    <section className=" text-center container mx-auto px-5 my-10">
        <h2 className="text-main text-[37px] font-bold my-5 ">I nostri servizi</h2>
        <p className="text-center px-5 ">Presso i due Cash di Avenza e Levanto la GF1 Panconi conserva una vasta gamma di prodotti, ripartiti tra il settore alimentare, salumeria, latticini, prodotti freschi, surgelati, beverage e no food.
        <br /><br />
        La scelta ponderata dei prodotti è il primo servizio che l’azienda intende offrire, ecco perché accanto ai classici articoli industriali, la GF1 Panconi ha scelto di affiancare anche prodotti artigianali, nettamente superiori in termini di qualità ma con un prezzo sempre adeguato.</p>
    </section>
    <section   className=" grid gap-8 md:grid-cols-2 lg:grid-cols-4  container mx-auto px-4">
        <div id='ecommerce' className=" mx-auto text-center my-5 p-5">
           <div className=" bg-second border-2 border-main md:h-[500px] min-w-[230px] items-center ">
                <img className="w-[20%] md:w-[30%] h-50 m-auto mt-5" src={cart} alt="" />
                <h2 className="font-bold my-5">E-COMMERCE</h2>
                <p className="w-[60%] md:w-[70%] m-auto mb-10">All’interno di questa sezione potrete acquistare comodamente i nostri prodotti. Accettiamo pagamenti sicuri e offriamo spedizioni rapide.
                Siamo qui per fornirvi un’esperienza di acquisto facile e conveniente.</p>
            </div>
        </div>

        <div id='phone' className="mx-auto text-center my-5  p-5">
           <div className=" bg-second border-2 border-main md:h-[500px] min-w-[230px] items-center ">
                <img className="w-[20%] md:w-[30%] h-50 m-auto mt-5" src={phone} alt="" />
                <h2  className="font-bold my-5">TELEFONO E/O FAX</h2>
            <p className="w-[60%] md:w-[70%] m-auto mb-10">Tel. 0585 53703 <br /> Fax. 0585 857667 <br /><br /> Per effettuare ordini o richiedere informazioni è possibile contattare anche il numero 3481419281 con il seguente orario: <br /> 8:30 – 12:30 <br /> 15:30 – 18.30</p>
            </div>
        </div>
        <div id='agents' className="mx-auto text-center my-5 p-5">
           <div className=" bg-second border-2 border-main md:h-[500px] min-w-[230px] items-center ">
                <img className="w-[20%] md:w-[30%] h-50 m-auto mt-5" src={agent} alt="" />
                <h2  className="font-bold my-5">AGENTI DI ZONA</h2>
                <p className="w-[60%] md:w-[70%] m-auto mb-10">I nostri agenti di zona sono essenziali per la nostra attività.
                    Con la loro conoscenza del mercato e la capacità di ascoltare i clienti, offrono un supporto completo nella scelta dei prodotti più adatti alle esigenze delle imprese.</p>
            </div>
        </div>
        <div id='delivery' className="mx-auto text-center my-5  p-5">
           <div className=" bg-second border-2 border-main md:h-[500px] min-w-[230px] items-center ">
                <img className="w-[20%] md:w-[30%] h-50 m-auto mt-5" src={box} alt="" />
                <h2  className="font-bold my-5">CONSEGNA</h2>
                <p className="w-[60%] md:w-[70%] m-auto mb-10">Con le nostre consegne rapide e l’ottimo servizio, potrai goderti i nostri prodotti freschi nel giro di pochissimo tempo. Inoltre, offriamo anche consegne in giornata per garantire la massima convenienza. Scegliere noi significa ricevere il meglio!</p>
            </div>
        </div>
    </section>

    <section  className="container mx-auto px-20 text-center">
    <h2 className="mx-auto italic text-bold text-main text-[35px]">“Dedicate il vostro tempo alla vostra attività, a rifornirvi ci pensiamo noi”.</h2>
    </section>

    <Newsletter/>
    </>
  )
}
