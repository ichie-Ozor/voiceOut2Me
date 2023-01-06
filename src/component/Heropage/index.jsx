import React from 'react'
import "./Heropage.css"
import ImageLogo from "../../assets/images/project logo.png"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Heropage = () => {
  return (
    <div className='container'>
      <div className='Logo'>
        <img src={ImageLogo} />
      </div>
      <h1 className='header-content'>
      Something  Awesome Is Coming
      </h1>
      <p>It's going to be amazing! Sign up to find out when it's ready</p>
      <input type="email"  placeholder ="Email Address"/>
      <button>Sign Up	</button>
      <FontAwesomeIcon icon={faHome} />
    </div>
  )
}

export default Heropage