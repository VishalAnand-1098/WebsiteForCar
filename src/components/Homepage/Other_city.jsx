import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Dummy images — replace with your real imports
import ChandigarhImage from "../../assets/c.webp";
import AmritsarImage from "../../assets/amritsar.png";
import ShimlaImage from "../../assets/shimla.png";
import HaridwarImage from "../../assets/haridwar.png";

const cities = [
  {
    name: "Amritsar",
    description: [
      "Amritsar is a well-known city located in the northwestern part of Punjab, India. It is situated just about 28 kilometers from the India-Pakistan border. The city is famous for the ",
      { highlight: "Golden Temple", color: "#97B067" },
      ", which is the spiritual and cultural center of the Sikh religion.",
    ],
    image: AmritsarImage,
  },
  {
    name: "Chandigarh",
    description: [
      "Chandigarh, the capital city of both Punjab and Haryana in northern India, is known for its ",
      { highlight: "modern architecture and well-planned layout", color: "#97B067" },
      ". The city was designed by the famous Swiss-French architect Le Corbusier and is often praised for its ",
      { highlight: "clean roads, green spaces, and organized infrastructure", color: "#2e8b57" },
      ".",
    ],
    image: ChandigarhImage,
  },
  {
    name: "Shimla",
    description: [
      "Shimla is a beautiful hill station and a popular tourist destination in North India’s Himachal Pradesh state. Known for its ",
      { highlight: "pleasant weather, scenic beauty, and colonial charm", color: "#97B067" },
      ", Shimla attracts visitors from all over the country. It is often visited for ",
      { highlight: "relaxation and adventure in the mountains", color: "#2e8b57" },
      ".",
    ],
    image: ShimlaImage,
  },
  {
    name: "Haridwar",
    description: [
      "Haridwar, located in the northern Indian state of Uttarakhand, is one of the ",
      { highlight: "seven holiest cities (Sapta Puri) in Hinduism", color: "#97B067" },
      ". It is considered the gateway to the ",
      { highlight: "Char Dham pilgrimage sites", color: "#2e8b57" },
      ": Badrinath, Kedarnath, Gangotri, and Yamunotri.",
    ],
    image: HaridwarImage,
  },
];

function CityCard({ city }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => navigate("/onewaycabs");

  return (
    <div
      className="city-card"
      style={{
        margin: "10px",
        borderRadius: "20px 0 20px 0",
        boxShadow: hovered
          ? "0px 8px 20px rrgba(151, 176, 103, 0.4)"
          : "0px 4px 12px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        backgroundColor: hovered ? "#2F5249" : "#fff",
        transition: "all 0.3s ease",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        height: "470px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      {/* Image */}
      <div
        style={{
          border: hovered ? "15px solid #2F5249" : "15px solid #fff",
          height: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
          backgroundColor: "#fff",
          flexShrink: 0,
        }}
      >
        <img
          src={city.image}
          alt={city.name}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: "8px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            fontWeight: "600",
            fontSize: "17px",
            margin: "0 0 0px 0",
            color: hovered ? "white" : "#222",
            transition: "color 0.3s ease",
          }}
        >
          {city.name}
        </h2>
        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.6",
            color: hovered ? "#f0f0f0" : "#555",
            transition: "color 0.3s ease",
            flexGrow: 1,
          }}
        >
          {city.description.map((part, index) =>
            typeof part === "string" ? (
              part
            ) : (
              <span
                key={index}
                style={{
                  color: hovered ? "white" : part.color,
                  fontWeight: 500,
                }}
              >
                {part.highlight}
              </span>
            )
          )}
        </p>
        <button
          style={{
            backgroundColor: hovered ? "#fff" : "#2F5249",
            color: hovered ? "#2F5249" : "white",
            fontWeight: "600",
            fontSize: "13px",
            padding: "6px 10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            boxShadow: "0px 4px 8px rgba(151, 176, 103, 0.4)",
            transition: "all 0.3s ease",
            width: "100px",
            textAlign: "center",
            alignSelf: "flex-start",
          }}
          onClick={(e) => {
            e.stopPropagation();
            navigate("/onewaycabs");
          }}
        >
          Book
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        boxSizing: "border-box",
        width: "100%",
        textAlign: "center",
      }}
    >
      {/* Headline */}
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "28px",
          marginBottom: "30px",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span style={{ color: "#2F5249", borderBottom: "2px solid #2F5249" }}>
          Taxi Service
        </span>
        <span style={{ color: "#000" }}>in Other Cities</span>
      </h1>

      {/* City cards container */}
      <div className="city-grid">
        {cities.map((city, index) => (
          <CityCard key={index} city={city} />
        ))}
      </div>

      {/* Responsive CSS */}
      <style>{`
        .city-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 20px;
        }

        /* Desktop */
        .city-card {
          flex: 1 1 calc(25% - 20px);
          max-width: calc(25% - 20px);
        }

        /* Tablet */
        @media (max-width: 900px) {
          .city-card {
            flex: 1 1 calc(50% - 20px);
            max-width: calc(50% - 20px);
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .city-card {
            flex: 1 1 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
