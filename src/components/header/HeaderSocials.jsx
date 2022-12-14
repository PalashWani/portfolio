import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com" target="_blank"><BsLinkedin/></a>
      <a href="https://www.github.com" target="_blank"><FaGithub/></a>
      <a href="https://www.instagram.com" target="_blank"><RiInstagramFill/></a>
    </div>
  )
}

export default HeaderSocials
