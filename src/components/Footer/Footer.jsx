import React from 'react'
import logo from '../../assets/img/logo_gf.png'
import logo2 from '../../assets/img/qualitaly.png'


export default function Footer() {
  return (
    <>
    <footer className="  bg-second mt-10">
        <div className=" grid gap-8 md:grid-cols-5 text-center container mx-auto px-4">
            <div>
            <img className="mt-10 m-auto w-[100px]"  src={logo2} alt="" />
            <img className="m-auto w-[100px]"  src={logo} alt="" />
            </div>
            <div className="md:mt-10">
                <h3 className="font-bold mb-5 text-third"  >Servizi</h3>
                <ul className="mb-10">
                    <li className="text-third">
                        E-commerce
                    </li>
                    <li className="text-third">
                        Telefono e Fax
                    </li>
                    <li className="text-third">
                       Agenti di Zona
                    </li>
                    <li className="text-third">
                       Consegna
                    </li>
                </ul>
                </div>
                <div className="md:mt-10">
                <h3 className="font-bold mb-5 text-third">About us</h3>
                <ul className="mb-10">
                    <li className="text-third">
                        La Storia
                    </li>
                    <li className="text-third">
                       Oggi
                    </li>
                    <li className="text-third">
                       Il Gruppo
                    </li>
                    <li className="text-third">
                       Prodotti consorzio
                    </li>
                </ul>
                </div>
                <div className="md:mt-10">
                <h3 className="font-bold mb-5 text-third"> Informativa</h3>
                <ul className="mb-10">
                    <li className="text-third">
                    Informativa Cookie
                    </li>
                    <li className="text-third">
                        Informativa Privacy
                    </li>
                </ul>
                </div>
        
                <div className="md:mt-10">
                <ul className="mb-10">
                    <li className="text-third">
                        info@gf1.it
                    </li>
                    <li className="text-third">
                       Tel. 058553703
                    </li>
                    <li className="text-third">
                    Fax. 0585857667
                    </li>
                    <li className="text-third">
                       Viale Zaccagna, 6
                    </li>
                </ul>
            </div>
          
        </div>
        <div className="  bg-main h-20 text-center ">
            <h2 className="text-white align-middle inline-block mt-5">Copyright © GF1 - P.IVA/C.F 00264240458</h2>

        </div>
    </footer>
    </>
  )
}
 