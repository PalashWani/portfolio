import React from 'react'
import './About.css'
import ME from '../../assets/palash-crop.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {TbFolders} from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img  className='about__me-image' src={ME} alt="" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Expierence</h5>
              <small>2+ years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2+ clients</small>
            </article>

            <article className='about__card'>
              <TbFolders className='about__icon'/>
              <h5>projects</h5>
              <small>4 Completed</small>
            </article>
          </div>

          <p>
              Hello! I am Palash Wani a Web Development enthusiast. I am currently persuing my B.Tech degree from Pune Institute Of Computer Technology. My specialization is in Information Technology branch. I have completed my schooling from Aurangabad which is my home town. My hobbies are playing badminton and reading novels.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
