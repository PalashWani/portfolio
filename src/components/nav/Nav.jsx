import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav id='nav'>
      <a href="#" onClick={() => setActiveNav('#') } className={activeNav === '#' ? 'active' : ' '}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about') } className={activeNav === '#about ' ? 'active' : ' '}><AiOutlineUser /></a>
      <a href="#expierence" onClick={() => setActiveNav('#expierence') } className={activeNav === '#expierence ' ? 'active' : ' '}><BiBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services') } className={activeNav === '#services ' ? 'active' : ' '}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact') } className={activeNav === '#contact ' ? 'active' : ' '}><BiMessageRoundedDetail /></a>
    </nav>
  )
}

export default Nav
