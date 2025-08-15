import React, { useState, useEffect, useRef } from "react";
import Massorie from "../../assets/Mussoorie.webp";
import Rishikesh from "../../assets/Rishikesh.webp";
import Haridwar from "../../assets/Haridwar.webp";
import Jaipur from "../../assets/jaipur.webp";

const slides = [
  { img: Haridwar, title: "Delhi to Haridwar" },
  { img: Massorie, title: "Delhi to Mussoorie" },
  { img: Rishikesh, title: "Delhi to Rishikesh" },
  { img: Jaipur, title: "Delhi to Jaipur" },
];

export default function TaxiSlider() {
  const visibleSlides = 4;
  const slideWidth = 300; // fixed width in px
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

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
      prev <= 0 ? loopSlides.length - visibleSlides : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev >= loopSlides.length - visibleSlides ? 0 : prev + 1
    );
  };

  return (
    <div style={{ maxWidth: "1300px", margin: "auto", padding: "20px" }}>
      {/* Heading */}
      <h2 style={{ textAlign: "center", fontSize: "28px", marginBottom: "8px" }}>
        Taxi Service in <span style={{ color: "orange" }}>Delhi for Outstation</span>
      </h2>
      <p
        style={{
          textAlign: "center",
          maxWidth: "750px",
          margin: "auto",
          fontSize: "16px",
        }}
      >
        You can now book a taxi service in Delhi for outstation trips,
        including weekend getaways to nearby destinations. We cover all popular
        tourist spots in North India and ensure top-notch service to make your
        journey comfortable and enjoyable.
      </p>

      {/* Slider container */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          marginTop: "30px",
        }}
      >
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          style={arrowStyle("left")}
        >
          &#10094;
        </button>

        {/* Slides wrapper */}
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${current * (slideWidth + 16)}px)`, // shift based on px + padding
            width: "auto",
          }}
        >
          {loopSlides.map((slide, index) => (
            <div
              key={index}
              style={{
                flex: `0 0 ${slideWidth}px`, // fixed width
                padding: "0 8px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: "420px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                {/* Overlay title bar */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    backgroundColor: "rgba(0,0,0,0.7)",
                    padding: "10px 0",
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: "orange", fontWeight: "bold" }}>
                    {slide.title}
                  </div>
                  <div style={{ color: "white", fontSize: "0.9rem" }}>
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
          style={arrowStyle("right")}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

const arrowStyle = (side) => ({
  position: "absolute",
  [side]: "-20px",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "white",
  border: "1px solid #ccc",
  borderRadius: "50%",
  width: "36px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  cursor: "pointer",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  zIndex: 10,
});
