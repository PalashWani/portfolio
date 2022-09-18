import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio5.jpg'
import IMG2 from '../../assets/portfolio1.jpg'
import IMG3 from '../../assets/portfolio2.jpg'
import IMG4 from '../../assets/portfolio2.jpg'
import IMG5 from '../../assets/portfolio3.jpg'
import IMG6 from '../../assets/portfolio4.jpg' 

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'psum dolor sit amet consectetur.',
    github: 'https://github.com',
    demo: 'https://github.com'
  },

  {
    id: 2,
    image: IMG2,
    title: 'psum dolor sit amet consectetur.',
    github: 'https://github.com',
    demo: 'https://github.com'
  },

  {
    id: 3,
    image: IMG3,
    title: 'psum dolor sit amet consectetur.',
    github: 'https://github.com',
    demo: 'https://github.com'
  },

  {
    id: 4,
    image: IMG4,
    title: 'psum dolor sit amet consectetur.',
    github: 'https://github.com',
    demo: 'https://github.com'
  },

  {
    id: 5,
    image: IMG5,
    title: 'psum dolor sit amet consectetur.',
    github: 'https://github.com',
    demo: 'https://github.com'
  },

  {
    id: 6,
    image: IMG6,
    title: 'psum dolor sit amet consectetur.',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
        data.map(({id,image,title,github,demo}) => {
          return(
            <article key={id} className="portfolio__item">
          {/*Images are from dribble.com*/}
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a className='btn' href={github}>Github</a>
            <a className='btn btn-primary' href={demo}>Live Demo</a>
          </div>
        </article>
          )
        })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
