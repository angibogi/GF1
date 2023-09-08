import React from 'react'
import logo from '../../assets/img/logo_gf.png'
import logo2 from '../../assets/img/qualitaly.png'
import facebook from '../../assets/img/facebook.svg'
import instagram from '../../assets/img/instagram.svg'
import linkedin from '../../assets/img/linkedin.svg'
import { HashLink } from 'react-router-hash-link';




export default function Footer() {
    return (
        <>
            <footer className="bg-second mt-10">
                <div className=" grid gap-8 md:grid-cols-5 text-center container mx-auto px-4">
                    <div>
                        <img className="mt-10 m-auto w-[100px]" src={logo2} alt="qualitaly" />
                        <img className="m-auto w-[100px]" src={logo} alt="gf1" />
                    </div>
                    <div className="md:mt-10">
                        <h3 className="font-bold mb-5 text-third">About us</h3>
                        <ul className="mb-10">
                            <li>
                                <HashLink className="text-third" smooth to='/about/#story' > La Storia </HashLink>
                            </li>
                            <li >
                                <HashLink className="text-third" smooth to='/about/#today' > Oggi </HashLink>
                            </li>
                            <li >
                                <HashLink className="text-third" smooth to='/about/#product' > Prodotti consorzio </HashLink>
                            </li>
                        </ul>
                    </div>
                    <div className="md:mt-10">
                        <h3 className="font-bold mb-5 text-third"  >Servizi</h3>
                        <ul className="mb-10">

                            <li>
                                <HashLink className="text-third" smooth to='/services/#ecommerce' > E-commerce </HashLink>
                            </li>
                            <li className="text-third">
                                <HashLink className="text-third" smooth to='/services/#phone' > Telefono e Fax </HashLink>
                            </li>
                            <li className="text-third">
                                <HashLink className="text-third" smooth to='/services/#agents' >  Agenti di Zona </HashLink>
                            </li>
                            <li className="text-third">
                                <HashLink className="text-third" smooth to='/services/#delivery' >  Consegna</HashLink>
                            </li>
                        </ul>
                    </div>

                    <div className="md:mt-10">
                        <h3 className="font-bold mb-5 text-third"> Informativa</h3>
                        <ul className="mb-10">
                            <li className="text-third">
                            <HashLink className="text-third" smooth to='/privacy/#private' > Privacy Policy </HashLink>
                            </li>
                        </ul>
                    </div>

                    <div className="md:mt-10 m-auto">
                        <div className="flex float left mb-5 gap-4 ">
                            <a href="https://www.facebook.com/GF1Srl/?locale=it_IT" target="_blank"> <img className="w-[30px]" src={facebook} alt="facebook" /></a>
                            <a href="https://www.linkedin.com/company/g-f-1-srl/about/" target="_blank"> <img className="w-[30px]" src={linkedin} alt="linkedin" /></a>
                            <a href="https://www.instagram.com/gf1srl/?hl=it" target="_blank"> <img className="w-[30px]" src={instagram} alt="instagram" /></a>
                        </div>
                        <ul className="mb-10">
                            <li className="text-third">
                                <a href="mailto:info@gf1.it">info@gf1.it</a>
                            </li>
                            <li className="text-third">
                                <a href="tel:+39058553703">Tel. 058553703</a>
                            </li>
                            <li className="text-third">
                                <a href="fax:0585857667">Fax. 0585857667</a>
                            </li>
                            <li className="text-third">
                                <a href="https://www.google.com/maps/place/Viale+Domenico+Zaccagna,+6,+54033+Carrara+MS/@44.0440955,10.0650555,17z/data=!3m1!4b1!4m6!3m5!1s0x12d505eebc954819:0x430279a321d04689!8m2!3d44.0440955!4d10.0650555!16s%2Fg%2F11fl7lm9q7?entry=ttu">Viale Zaccagna, 6</a>
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
