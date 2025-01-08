"use client"
import React, { useState } from 'react';
import Slider from 'react-slick';
import PortoflioCards from './PortoflioCards';

const PortfolioSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);



  const cardData = [
    {
      title: "Project A",
      description: "A brief description of Project A.",
      imageUrl: "/images/02.jpg",
      link: "/1",
    },
    {
      title: "Project B",
      description: "A brief description of Project B.",
      imageUrl: "/images/03.jpg",
      link: "/2",
    },
    {
      title: "Project C",
      description: "A brief description of Project C.",
      imageUrl: "/images/04.jpg",
      link: "/3",
    },

  ];
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,

    slidesToShow: 3,
    slidesToScroll: 1,
    autoeeplay: true,
    autoplaySpd: 2000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="relative my-20 px-10">
      <Slider {...settings}>
        {cardData.map((item, index) => (
          < PortoflioCards
          key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            link={item.link}
          />
        ))}


      </Slider>
    </div>
  );
};

export default PortfolioSlider;