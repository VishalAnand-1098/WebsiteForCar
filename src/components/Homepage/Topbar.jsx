import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookTexi from "./Booktexi";

import manali from "../../assets/manali.jpg";
import vrindavan from "../../assets/vrindavan.jpeg";

const NextArrow = ({ onClick, visible }) => (
  <div
    style={{
      position: "absolute",
      right: "15px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "rgba(255,255,255,0.8)",
      borderRadius: "50%",
      padding: "10px",
      cursor: "pointer",
      zIndex: 3,
      fontSize: "20px",
      userSelect: "none",
      opacity: visible ? 1 : 0,
      transition: "opacity 0.3s ease",
    }}
    onClick={onClick}
  >
    ➡
  </div>
);

const PrevArrow = ({ onClick, visible }) => (
  <div
    style={{
      position: "absolute",
      left: "15px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "rgba(255,255,255,0.8)",
      borderRadius: "50%",
      padding: "10px",
      cursor: "pointer",
      zIndex: 3,
      fontSize: "20px",
      userSelect: "none",
      opacity: visible ? 1 : 0,
      transition: "opacity 0.3s ease",
    }}
    onClick={onClick}
  >
    ⬅
  </div>
);

const CabCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hover, setHover] = useState(false);

  const slides = [
    {
      image: manali,
      title: "Delhi to Manali Taxi",
    },
    {
      image: vrindavan,
      title: "Delhi to Vrindavan\nTaxi",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow visible={hover} />,
    prevArrow: <PrevArrow visible={hover} />,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",  // changed from 100vw
        height: "90vh",
        minHeight: "350px",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img
              src={slide.image}
              alt={slide.title.replace("\n", " ")}
              style={{
                width: "100%",
                height: "60vh",
                minHeight: "350px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>

      {/* Animated overlay box */}
      <div
        key={currentSlide} // forces animation restart
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: "12px",
          padding: "25px 30px",
          color: "white",
          textAlign: "center",
          boxSizing: "border-box",
          fontFamily: "'Arial', sans-serif",
          maxWidth: "90%",
          width: "400px",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.6)",
          zIndex: 2,
          userSelect: "none",
          whiteSpace: "pre-line",
          animation: "slideUp 0.7s ease-out",
        }}
      >
        <div
          style={{
            display: "inline-block",
            backgroundColor: "white",
            borderRadius: "50px",
            padding: "6px 20px",
            fontWeight: 600,
            color: "#4b4b4b",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            marginBottom: "20px",
            fontSize: "0.9rem",
          }}
        >
          Shubh Trip Travels Cab Services
        </div>
        <h1
          style={{
            fontWeight: 400,
            fontSize: "2.6rem",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {slides[currentSlide].title}
        </h1>
      </div>
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          width: "90%",
          maxWidth: "900px",
        }}
      >
        <BookTexi />
      </div>

      {/* Keyframes for sliding animation */}
      <style>
        {`
          @keyframes slideUp {
            0% {
              opacity: 0;
              transform: translate(-50%, 50%);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, -50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default CabCarousel;
