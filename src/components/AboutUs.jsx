import React from "react";
import bg from "../assets/Screenshot 2025-08-15 175150.png"
import user from "../assets/icon-2-150x150.webp";
import cabimage from "../assets/FAQ.webp";

export default function AboutUsSection() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        padding: "40px 24px",
      }}
    >
       <div
      style={{
        width: "100%",
        height: "300px",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Text */}
      <h1
        style={{
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          marginLeft: "40px",
        }}
      >
        About Us
      </h1>
    </div>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Content */}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "500",
              color: "#111827",
              lineHeight: 1.3,
              fontFamily: "Jost",
            }}
          >
            Welcome To Ghumī Ghumī Cab Service
          </h1>
          <p
            style={{
              marginTop: "16px",
              fontSize: "1.125rem",
              color: "#374151",
              lineHeight: 1.6,
              fontFamily: "Jost",
              fontWeight: "500",
            }}
          >
            At Ghumī Ghumī, we offer affordable outstation and local taxi
            services in Delhi and nearby cities. Whether you're planning a trip
            to Jaipur, Uttarakhand, Himachal Pradesh, or any other destination,
            we're here to make your journey smooth and hassle-free. Our
            well-maintained sedans and SUVs come with modern amenities to ensure
            a comfortable and enjoyable travel experience. Let us take you where
            you need to go—comfortably and reliably!
          </p>

          {/* Safety Card */}
          <div
            style={{
              marginTop: "24px",
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
              padding: "16px",
            }}
          >
            <div
              style={{
                backgroundColor: "#facc15",
                padding: "12px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={user}
                alt="User Icon"
                style={{ width: "40px", height: "40px", objectFit: "contain" }}
              />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#111827",
                }}
              >
                Safety first always
              </h3>
              <p style={{ marginTop: "4px", color: "#374151" }}>
                We prioritize your safety and comfort while ensuring a smooth
                and enjoyable ride. Sit back, relax, and let our skilled drivers
                take care of the rest.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={cabimage}
            alt="Cab Service"
            style={{
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
              width: "100%",
              maxWidth: "400px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
