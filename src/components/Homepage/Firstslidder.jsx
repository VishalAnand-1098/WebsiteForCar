import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Massorie from "../../assets/Mussoorie.webp";
import Rishikesh from "../../assets/Rishikesh.webp";
import Haridwar from "../../assets/Haridwar.webp";
import Jaipur from "../../assets/jaipur.webp";

const slides = [
  { img: Haridwar, title: "Delhi to Haridwar", path: "/Onewaycabs" },
  { img: Massorie, title: "Delhi to Mussoorie", path: "/Onewaycabs" },
  { img: Rishikesh, title: "Delhi to Rishikesh", path: "/Onewaycabs" },
  { img: Jaipur, title: "Delhi to Jaipur", path: "/Onewaycabs" },
];

export default function TaxiSlider() {
  const visibleSlidesDesktop = 4;
  const visibleSlidesMobile = 1;
  const slideWidthDesktop = 300;
  const slideWidthMobile = 260;
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const loopSlides = [...slides, ...slides, ...slides];

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 3000);
    return () => resetTimeout();
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev <= 0 ? loopSlides.length - getVisibleSlides() : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev >= loopSlides.length - getVisibleSlides() ? 0 : prev + 1
    );
  };

  const getVisibleSlides = () =>
    window.innerWidth < 768 ? visibleSlidesMobile : visibleSlidesDesktop;
  const getSlideWidth = () =>
    window.innerWidth < 768 ? slideWidthMobile : slideWidthDesktop;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const arrowHoverStyle = {
    backgroundColor: "#2F5249", // orange with opacity
    color: "white",
  };

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
    transition: "all 0.3s ease",
  });

  return (
    <div style={{ maxWidth: "1300px", margin: "auto", padding: "20px" }}>
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: windowWidth < 768 ? "22px" : "28px",
          marginBottom: "8px",
        }}
      >
        Taxi Service in{" "}
        <span style={{ color: "#2F5249" }}>Delhi for Outstation</span>
      </h2>
      <p
        style={{
          textAlign: "center",
          maxWidth: "750px",
          margin: "auto",
          fontSize: windowWidth < 768 ? "14px" : "16px",
        }}
      >
        Book a taxi service in Delhi for outstation trips, including weekend
        getaways. We cover all popular tourist spots in North India and ensure
        top-notch service for a comfortable journey.
      </p>

      {/* Slider container */}
      <div style={{ position: "relative", overflow: "hidden", marginTop: "30px" }}>
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          style={arrowBaseStyle("left")}
          onMouseEnter={(e) => Object.assign(e.target.style, arrowHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, arrowBaseStyle("left"))}
        >
          &#10094;
        </button>

        {/* Slides wrapper */}
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${current * (getSlideWidth() + 16)}px)`,
          }}
        >
          {loopSlides.map((slide, index) => (
            <div
              key={index}
              style={{
                flex: `0 0 ${getSlideWidth()}px`,
                padding: "0 8px",
                boxSizing: "border-box",
                cursor: "pointer",
              }}
              onClick={() => navigate(slide.path)}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: windowWidth < 768 ? "300px" : "420px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s",
                  }}
                />
                {/* Overlay title bar */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                    padding: "12px 0",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                      fontSize: windowWidth < 768 ? "14px" : "16px",
                    }}
                  >
                    {slide.title}
                  </div>
                  <div
                    style={{
                      color: "white",
                      fontSize: windowWidth < 768 ? "12px" : "14px",
                      marginTop: "2px",
                    }}
                  >
                    Read More
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          style={arrowBaseStyle("right")}
          onMouseEnter={(e) => Object.assign(e.target.style, arrowHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, arrowBaseStyle("right"))}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
