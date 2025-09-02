import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookTexi from "./Booktexi";

import manali from "../../assets/manali.jpg";
import vrindavan from "../../assets/vrindavan.jpeg";
import jaipur from "../../assets/jaipurcity.jpg";
import rishikesh from "../../assets/Rishikeshcity.avif";
import mussoorie from "../../assets/masooricity.jpg";
import agra from "../../assets/agracity.jpg";
import ayodhya from "../../assets/ayodhyacity.jpg";

// ----------------- Main Carousel -----------------
const CabCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hover, setHover] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update windowWidth on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = [
  { image: manali, title: "Delhi to Manali Taxi" },
  { image: vrindavan, title: "Delhi to Vrindavan Taxi" },
  { image: jaipur, title: "Delhi to Jaipur Taxi" },
  { image: rishikesh, title: "Delhi to Rishikesh Taxi" },
  { image: mussoorie, title: "Delhi to Mussoorie Taxi" },
  { image: agra, title: "Delhi to Agra Taxi" },
  { image: ayodhya, title: "Delhi to Ayodhya Taxi" },
  // { image: delhi, title: "Delhi Local Taxi" },
];

  // ----------------- Arrow Base Style -----------------
  const arrowBaseStyle = (side) => ({
    position: "absolute",
    [side]: "5px",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255,255,255,0.3)", // transparent white
    border: "none",
    borderRadius: "50%",
    width: windowWidth < 768 ? "35px" : "45px",
    height: windowWidth < 768 ? "35px" : "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: windowWidth < 768 ? "20px" : "24px",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    zIndex: 10,
    opacity: hover ? 1 : 0,
    transition: "all 0.3s ease, transform 0.2s ease",
    color: "#fff",
    userSelect: "none",
  });

  // ----------------- Arrow Components -----------------
  const NextArrow = ({ onClick }) => (
    <div
      style={arrowBaseStyle("right")}
      onClick={onClick}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-50%) scale(1.2)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "translateY(-50%) scale(1)")
      }
    >
      &#10095;
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      style={arrowBaseStyle("left")}
      onClick={onClick}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-50%) scale(1.2)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "translateY(-50%) scale(1)")
      }
    >
      &#10094;
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
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
        key={currentSlide}
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

      {/* BookTaxi Component */}
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

      <style>
        {`
          @keyframes slideUp {
            0% { opacity: 0; transform: translate(-50%, 50%); }
            100% { opacity: 1; transform: translate(-50%, -50%); }
          }
        `}
      </style>
    </div>
  );
};

export default CabCarousel;
