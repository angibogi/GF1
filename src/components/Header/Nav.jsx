import React from 'react'
import market from '../../assets/img/market.png'

export default function Nav() {
  return (
    <nav className=" bg-main h-[45px] p-2">
      <div className="flex justify-between flex-1 container mx-auto px-4">
        <a className="text-white " href="mailto:info@gf1.it">info@gf1.it</a>
        <a href="https://shop.gf1.it/sm/" target="_blank"><img className=" w-[25px] h-[25px] flex items-end " src={market} alt="market" /></a>
      </div>
      <img src="" alt="" />
    </nav>
  )
}
