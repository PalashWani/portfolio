import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/profile.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <div>
      <header>
        <div className="container container__header">
          <h5>Hello I'm</h5>
          <h1>Palash Wani</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
          <HeaderSocials/>

          <div className="me">
            <img  src={ME} alt="" />
          </div>
          <a href="#contact" className="scroll__down">Scroll Down</a>
        </div>
      </header>
    </div>
  )
}

export default Header
