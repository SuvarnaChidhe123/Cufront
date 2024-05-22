import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarouselCalendar.css';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDaysInMonth = (year, month) => {
  return new Array(31).fill('').map((_, i) => new Date(year, month, i + 1)).filter(date => date.getMonth() === month);
};

const CarouselCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const sliderRef = useRef(null);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false, // Remove arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleMonthChange = (monthOffset) => {
    const newDate = new Date(currentYear, currentMonth + monthOffset, 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="carousel-calendar">
      {/* <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentYear}</h2> */}
      <Slider {...settings} ref={sliderRef}>
        {daysInMonth.map((day, index) => (
          <div key={index} className="day-tile">
            <div className="day-number">{day.getDate()}</div>
            <div className="day-name">{daysOfWeek[day.getDay()]}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselCalendar;
