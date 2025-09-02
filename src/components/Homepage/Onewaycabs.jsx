// FullPageImage.jsx
import React, { useEffect } from "react"; // import useEffect
import Oneway from "../../assets/SHUBH_TRIPI_ONEWAY.jpg"; // replace with your image path

const FullPageImage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0", // optional, agar background dikhe
      }}
    >
      <img
        src={Oneway}
        alt="Full Page"
        style={{
          width: "1200px",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default FullPageImage;
