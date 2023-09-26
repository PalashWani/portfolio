import React from 'react'
import resumefinal from '../../assets/resumefinal.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={resumefinal} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  ) 
}

export default CTA
