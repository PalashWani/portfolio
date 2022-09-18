import React from 'react'
import './Expierence.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Expierence = () => {
  return (
    <section id='expierence'>
      <h5>What skills I have...</h5>
      <h2>My Expierence</h2>

      <div className="container expierence__container">
        <div className="expierence__frontend">
          <h3>Frontend Development</h3>
          <div className="expierence__content">
            <article className="expierence__details">
              <BsPatchCheckFill className= "expierence__details-icon" />
              <div>
              <h4>HTML</h4>
              <small className="text-light">Expierenced</small>
              </div>
            </article>

            <article className="expierence__details">
              <BsPatchCheckFill className= "expierence__details-icon" />
              <div>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="expierence__details">
              <BsPatchCheckFill className= "expierence__details-icon" />
              <div>
              <h4>Java Script</h4>
              <small className="text-light">Intermediate</small>
              </div>
              
            </article>

            <article className="expierence__details">
              <BsPatchCheckFill className= "expierence__details-icon" />
              <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Expierenced</small>
              </div>
            </article>

            <article className="expierence__details">
              <BsPatchCheckFill className= "expierence__details-icon" />
              <div>
              <h4>React</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="expierence__backend">
        <h3>Backend Development</h3>
          <div className="expierence__content">
            <article className="expierence__details">
              <BsPatchCheckFill className= "expierence__details-icon" />
              <div>
              <h4>NodeJs</h4>
              <small className="text-light">Intermediate</small>
              </div>
              
            </article>

            <article className="expierence__details">
              <BsPatchCheckFill className= "expierence__details-icon" />
              <div>
              <h4>Mongo-DB</h4>
              <small className="text-light">Intermediate</small>
              </div>
              
            </article>

            <article className="expierence__details">
              <BsPatchCheckFill className= "expierence__details-icon" />
              <div>
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
              </div>
              
            </article>

            <article className="expierence__details">
              <BsPatchCheckFill className= "expierence__details-icon" />
              <div>
              <h4>ExpressJS</h4>
              <small className="text-light">Expierenced</small>
              </div>
              
            </article> 
          </div>
        </div>
      </div>
    </section>
  ) 
}

export default Expierence
