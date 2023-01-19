import React from 'react'
import "./Heropage.css"
import ImageLogo from "../../assets/images/project logo.png"
import BackgroundImage from "../../assets/images/background.svg"
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Heropage = () => {
  return (
    <div className='container'
    style={{backgroundImage:`url(${BackgroundImage})`}}
    >
      <div className='Logo'>
        <img src={ImageLogo} alt="logo"/>
      </div>
      <h1 className='header-content text-blue-800'>
      Something  Awesome Is Coming
      </h1>
      <p>It's going to be amazing! Sign up to find out when it's ready</p>
      <input type="email"  placeholder ="Email Address"/>
      <button>Sign Up	</button>
      <h1 className='text-red-500'>This is me</h1>
      {/* <FontAwesomeIcon icon={faHome} /> */}
    </div>
  )
}

export default Heropage