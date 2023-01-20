import React from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../../assets/images/comingpage/logo.svg'

const NavBar = () => {
  return (
    <header className='w-[90vw] m-auto mb-6'>
        <section className='flex justify-between  items-center mt-4 bg-[#8155BA] p-2'>
            <div className="logo-title text-white text-2xl">
              {/* <div className="logo"><img src={Logo} alt="logo" /></div> */}
              <h1>VoiceOut2Me</h1>
            </div>
            <Link className="about-us border-[1px] border-white rounded-2xl px-6 py-2 text-2xl text-white hover:border-[2px] ">About us</Link>
        </section>
    </header>
  )
}

export default NavBar