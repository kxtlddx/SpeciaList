import React, { useState } from 'react'
import Logo from '../assets/logo.jpg'
import Menu from "../assets/menu.svg"

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)

  return (
        <div className='navbar flex-col space-y-[16px] h-[128px]'>
        <div class="px-4 desktop:px-[85px] tablet:px-[39px] flex space-x-6 items-center justify-between w-full h-[128px]">
          <div class="w-[96px] h-[96px]">
            <img src={Logo} alt="Logo image" />
          </div>
          <div class={`space-x-6 ${showLinks ? 'block' : 'hidden'} phone:hidden desktop:block tablet:block`}>
            <a href='/Main' className='hover:text-green description'>Главная</a>
            <a href='/About' className='hover:text-green description'>Направления подготовки</a>
            <a href='/GetInTouch' className='hover:text-green description'>Связаться с нами</a>
          </div>
          <button onClick={() => setShowLinks(!showLinks)} class="phone:block desktop:hidden tablet:hidden">
            <img src={Menu} alt="Menu icon" class="w-[128px] h-[128px]" />
          </button>
        </div>
        <div class="t-[128px] h-[1px] bg-white w-full" ></div>
      </div>
  )
}

export default Navbar