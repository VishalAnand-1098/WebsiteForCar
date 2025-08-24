import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import carImg from "../../assets/innova.webp"; // Replace with your image path

const AboutUs = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Top Section with Image + Intro */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "20px 15px" : "50px 70px",
          backgroundColor: "#f5f5f5",
          gap: isMobile ? "20px" : "50px",
          flexWrap: isMobile ? "wrap" : "nowrap",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* Left Side Image with Only Orange Shadow */}
        <div
          style={{
            flex: "1",
            maxWidth: isMobile ? "100%" : "50%",
            textAlign: "center",
            marginBottom: isMobile ? "20px" : "0",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "20px",
              display: "inline-block",
              boxShadow: "-10px 10px 0px #ff6600", // Orange shadow
              maxWidth: isMobile ? "100%" : "550px",
              width: "100%",
            }}
          >
            <img
              src={carImg}
              alt="Cab Service"
              style={{
                width: "100%",
                display: "block",
                borderRadius: "20px",
                height: "auto",
              }}
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div
          style={{
            flex: "1",
            maxWidth: isMobile ? "100%" : "50%",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              fontSize: "12px",
              fontWeight: 500,
              color: "#333",
              marginBottom: "6px",
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <span
              style={{
                borderBottom: "2px solid #ff6600",
                paddingBottom: "2px",
                display: "inline-block",
              }}
            >
              ABOUT US
            </span>
          </p>

          <h2
            style={{
              fontSize: isMobile ? "18px" : "22px",
              fontWeight: "700",
              marginBottom: "16px",
              color: "#000",
            }}
          >
            Welcome To{" "}
            <span style={{ color: "#ff6600" }}>Ghumi Ghumi Cab Service</span>
          </h2>

          <p
            style={{
              fontSize: isMobile ? "14px" : "14px",
              lineHeight: 1.6,
              color: "#333",
              marginBottom: "20px",
              maxWidth: isMobile ? "100%" : "90%",
              marginLeft: isMobile ? "auto" : "0",
              marginRight: isMobile ? "auto" : "0",
            }}
          >
            At Ghumi Ghumi, we offer affordable outstation and local taxi
            services in Delhi and nearby cities. Whether you’re planning a trip
            to Jaipur, Uttarakhand, Himachal Pradesh, or any other destination,
            we’re here to make your journey smooth and hassle-free. Our
            well-maintained sedans and SUVs come with modern amenities to ensure
            a comfortable and enjoyable travel experience. Let us take you where
            you need to go—comfortably and reliably!
          </p>

          <button
            style={{
              backgroundColor: "#ff6600",
              color: "#fff",
              fontWeight: "600",
              fontSize: "14px",
              padding: isMobile ? "10px 25px" : "8px 20px",
              border: "2px solid #ff6600",
              borderRadius: "3px",
              cursor: "pointer",
              transition: "0.3s",
              width: isMobile ? "100%" : "auto",
              maxWidth: isMobile ? "300px" : "auto",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#e55a00";
              e.currentTarget.style.borderColor = "#e55a00";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#ff6600";
              e.currentTarget.style.borderColor = "#ff6600";
            }}
            onClick={() => navigate("/aboutus")}
          >
            Read More
          </button>
        </div>
      </div>

      {/* Detailed Section (Taxi Service + Tourist Car) */}
      <div
        style={{
          padding: isMobile ? "40px 20px" : "60px 80px",
          backgroundColor: "#fff",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "22px" : "28px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <span style={{ color: "#ff6600" }}>Taxi Service</span> in Delhi
        </h2>

        <p
          style={{
            fontSize: isMobile ? "14px" : "16px",
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          Ghumi Ghumi Cab Service is one of the trusted names in tour and travel
          services in Delhi, offering a wide range of taxis at the most
          affordable rates. Whether you need an economy car, a luxury vehicle,
          or an SUV, you can easily book the right ride from our diverse fleet
          across Delhi NCR. Plus, there are no hidden charges for booking or
          changing your car model.
        </p>

        <p
          style={{
            fontSize: isMobile ? "14px" : "16px",
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          All our cars come with experienced driver-cum-guides to ensure a safe
          and pleasant journey. If you’re traveling in a group of 6 to 7 people,
          our premium Innova Crysta Car Hire in Delhi is the perfect choice.
          These vehicles are spacious, comfortable, and ideal for longer
          journeys—giving you peace of mind and a smooth ride.
        </p>

        <h3
          style={{
            fontSize: isMobile ? "20px" : "24px",
            fontWeight: "700",
            marginTop: "40px",
            marginBottom: "15px",
          }}
        >
          Tourist Car in Delhi
        </h3>

        <p
          style={{
            fontSize: isMobile ? "14px" : "16px",
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          Your comfort and convenience are our top priorities. At Ghumi Ghumi
          Cab Service, we focus on customer satisfaction by offering top-quality
          vehicles and reliable service. Our fleet of tourist cars in Delhi
          includes fully air-conditioned, well-maintained vehicles with premium
          interiors, safety features, and GPS-enabled navigation.
        </p>

        <p
          style={{
            fontSize: isMobile ? "14px" : "16px",
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          From family trips to group tours, we’ve got you covered with a wide
          range of options including sedans, SUVs, tempo travelers, and even
          buses. Whether you need a full-day car hire, a half-day rental, an
          airport transfer, or a luxury car for weddings and events—we offer it
          all at competitive rates. Get the best price per km for both local
          sightseeing and outstation trips.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
