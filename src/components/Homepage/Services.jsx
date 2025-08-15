import React from "react";
import outstationIcon from "@mui/icons-material/LocalTaxi";
import airportIcon from "@mui/icons-material/FlightTakeoff";
import chardhamIcon from "@mui/icons-material/TempleHindu";

const services = [
  {
    icon: outstationIcon,
    title: "Outstation Taxi",
    description:
      "Planning to travel out of town? Book a comfortable ride with our Outstation Taxi Services from Delhi for a smooth and hassle-free journey.",
  },
  {
    icon: airportIcon,
    title: "Airport Taxi",
    description:
      "Airport taxis provide a convenient and reliable way for travelers to get to and from the airport. Whether you’re arriving or departing.",
  },
  {
    icon: chardhamIcon,
    title: "Chardham Yatra",
    description:
      "The Chota Char Dham Yatra is a sacred pilgrimage that covers four holy sites in Uttarakhand – Yamunotri, Gangotri, Kedarnath, and Badrinath.",
  },
];

export default function TaxiServices() {
  const containerStyle = {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "40px 20px",
    backgroundColor: "#fff",
  };

  const cardStyle = {
    flex: "1 1 300px",
    maxWidth: "380px",
    background: "#fff",
    borderRadius: "20px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.05)",
    padding: "30px 25px",
    textAlign: "center",
    transition: "all 0.3s ease",
  };

  const iconWrapperStyle = {
    width: "90px",
    height: "90px",
    border: "2px solid #ff6600",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 15px",
  };

  const iconStyle = {
    width: "50px",
    height: "50px",
    objectFit: "contain",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
  };

  const descStyle = {
    fontSize: "15px",
    color: "#555",
    lineHeight: "1.5",
  };

  return (
    <div style={containerStyle}>
      {services.map((service, index) => (
        <div
          key={index}
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 0 15px rgba(0,0,0,0.05)";
          }}
        >
          <div style={iconWrapperStyle}>
            <img src={service.icon} alt={service.title} style={iconStyle} />
          </div>
          <h3 style={titleStyle}>{service.title}</h3>
          <p style={descStyle}>{service.description}</p>
        </div>
      ))}
    </div>
  );
}
