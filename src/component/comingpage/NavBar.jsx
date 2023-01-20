import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../../assets/images/comingpage/menu.svg'

const NavBar = () => {
  return (
    <header className='w-[90vw] m-auto mb-6'>
        <section className='flex justify-between  items-center mt-4 bg-[#8155BA] p-2'>
            <div className="logo-title text-white text-2xl">
              {/* <div className="image"><img src={Menu} alt="menu" /></div> */}
              
              <h1 className='hidden lg:flex'>VoiceOut2Me</h1>
              </div>
              <div className="menu overflow-hidden w-8 flex lg:hidden"><img src={Menu} alt="menu" /></div>
            <Link className="about-us border-[1px] border-white rounded-2xl px-6 py-2 text-2xl text-white hover:border-[2px] hidden lg:flex ">About us</Link>
        </section>
    </header>
  )
}

export default NavBar