import React from "react";
import "./Testimonials.css";

import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    namee: "Harry Potter",
    review:
      "ipsum dolor sit, amet consectetur adipisicing elit. Odio dolore maxime provident numquam, voluptatibus error corporis asperiores officia voluptatum facere dicta nostrum, fugit quas blanditiis deserunt rerum dignissimos? Illum, ipsum!",
  },

  {
    avatar: AVTR2,
    namee: "Hermione",
    review:
      "ipsum dolor sit, amet consectetur adipisicing elit. Odio dolore maxime provident numquam, voluptatibus error corporis asperiores officia voluptatum facere dicta nostrum, fugit quas blanditiis deserunt rerum dignissimos? Illum, ipsum!",
  },

  {
    avatar: AVTR3,
    namee: "Ron weasley",
    review:
      "ipsum dolor sit, amet consectetur adipisicing elit. Odio dolore maxime provident numquam, voluptatibus error corporis asperiores officia voluptatum facere dicta nostrum, fugit quas blanditiis deserunt rerum dignissimos? Illum, ipsum!",
  },

  {
    avatar: AVTR4,
    namee: "Dumbledore",
    review:
      "ipsum dolor sit, amet consectetur adipisicing elit. Odio dolore maxime provident numquam, voluptatibus error corporis asperiores officia voluptatum facere dicta nostrum, fugit quas blanditiis deserunt rerum dignissimos? Illum, ipsum!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({ avatar, namee, review }, index) => {
          return (<SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="" />
          </div>
          <h5 className="client__name">{namee}</h5>
          <small className="client__review">
            {review}
          </small>
        </SwiperSlide>)
          
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
