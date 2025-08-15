import React, { useState } from "react";
import one from "../assets/director-576x1024.jpeg"
import two from "../assets/director2.jpeg"
import three from "../assets/director3-576x1024.jpeg"
import four from "../assets/khushi-546x1024.jpeg"
import five from "../assets/swati-576x1024.jpeg"
import six from "../assets/akhansha-768x834.jpeg"
import seven from "../assets/vaishnavi.jpeg"
import user from "../assets/icon-2-150x150.webp";
import cabimage from "../assets/FAQ.webp";
import About from "../assets/About.webp"
import bgImage from "../assets/bg-1-scaled.webp";
import { Globe, Smile, Car } from "lucide-react"; // Icons
import { FaSnowman } from "react-icons/fa";

export default function AboutUsSection() {
  const [openIndex, setOpenIndex] = useState(0); // default open first item

  const toggle = (index) => {
    // Only change when clicking a different section
    if (openIndex !== index) {
      setOpenIndex(index);
    }
  };

  const stats = [
    { icon: <Globe className="w-10 h-10 text-orange-500" />, value: "10k+", label: "Complete Ride" },
    { icon: <Smile className="w-10 h-10 text-orange-500" />, value: "99%", label: "Happy Customer" },
    { icon: <FaSnowman className="w-10 h-10 text-orange-500" />, value: "450+", label: "Holidays" },
    { icon: <Car className="w-10 h-10 text-orange-500" />, value: "600+", label: "Cars" },
  ];

  const team = [
    {
      name: "Dharmendra Rathour",
      role: "Director",
      phone: "+91 7290879554",
      img: one, // replace with your image
    },
    {
      name: "Bijendra Rathour",
      role: "Director",
      phone: "+91 8882351403",
      img: two,
    },
    {
      name: "Deepak Kumar Singh",
      role: "Director And Business Development Head",
      phone: "+91 7367009992",
      img: three,
    },
    {
      name: "Khushi Rathour",
      role: "Client Coordination Head",
      phone: "+91 8377897788",
      img: four,
    },
    {
      name: "Swati Rathour",
      role: "Manager",
      phone: "+91 7291864140",
      img: five,
    },
    {
      name: "Akansha Jha",
      role: "Management Head",
      phone: "+91 9341483339",
      img: six,
    },
    {
      name: "Vaishnavi Aggarwal",
      role: "Client Coordination Head",
      phone: "+91 9289573518",
      img: seven,
    },
  ];

  const items = [
    {
      title: "Our Mission",
      content:
        "At Ghumi Ghumi Cab Service, our mission is to redefine travel by delivering safe, affordable, and seamless cab services that cater to every traveler’s needs. We aim to offer the most reliable taxi service experience with transparent pricing, courteous drivers, and a wide fleet of vehicles—making travel from Delhi NCR to any destination a comfortable and memorable journey.",
    },
    {
      title: "Our Vision",
      content:
        "Our vision is to become India’s most trusted name in intercity cab travel by combining technology, affordability, and outstanding service. We envision a future where every ride with Ghumi Ghumi Cab Service adds value to your journey—whether you’re traveling for leisure, business, or pilgrimage.",
    },
    {
      title: "Our Value",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Customer First:</strong> We go the extra mile to ensure a
            safe, satisfying, and hassle-free experience for every rider.
          </li>
          <li>
            <strong>Transparency:</strong> No hidden charges. No surprises. Just
            clear communication and honest pricing.
          </li>
          <li>
            <strong>Reliability:</strong> Timely pickups, professional drivers,
            and well-maintained vehicles—every single time.
          </li>
          <li>
            <strong>Flexibility:</strong> From economy to luxury, single-day
            trips to long tours—our services are tailored to your needs.
          </li>
          <li>
            <strong>Integrity:</strong> We build lasting relationships with our
            customers through trust and consistency.
          </li>
          <li>
            <strong>Innovation:</strong> We continuously improve our services
            by embracing new technologies and listening to customer feedback.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div style={{ width: "100%", backgroundColor: "white" }}>
      {/* Banner */}
      <div
        style={{
          width: "100%",
          height: "300px",
          marginBottom: "40px",
          backgroundImage: `url(${About})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            fontWeight: "500",
            marginLeft: "40px",
            fontFamily: "Jost",
          }}
        >
          About Us
        </h1>
      </div>

      {/* Welcome Section */}
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
            Welcome To Ghumi Ghumi Cab Service
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
            At Ghumi Ghumi, we offer affordable outstation and local taxi
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
              border: "1px solid #000",
              borderRadius: "8px",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.3)",
              padding: "16px",
            }}
          >
            <div
              style={{
                backgroundColor: "#facc15",
                border: "2px solid #000",
                padding: "5px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={user}
                alt="User Icon"
                style={{
                  width: "160px",
                  height: "80px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#111827",
                  fontFamily: "Jost",
                }}
              >
                Safety first always
              </h3>
              <p
                style={{
                  marginTop: "4px",
                  color: "#374151",
                  fontFamily: "Jost",
                  fontWeight: "500",
                }}
              >
                We prioritize your safety and comfort while ensuring a smooth
                and enjoyable ride. Sit back, relax, and let our skilled drivers
                take care of the rest.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={cabimage}
            alt="Cab Service"
            style={{
              borderRadius: "8px",
              border: "4px solid #fff",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.4)",
              width: "100%",
              maxWidth: "550px",
            }}
          />
        </div>
      </div>

      {/* Accordion Section with BG */}
      <div
        className="bg-cover mt-10 bg-center bg-no-repeat min-h-[500px] flex items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* White box overlay on left */}
        <div className="bg-white/90 rounded-md shadow-lg max-w-lg p-6 m-6 md:ml-16">
          {items.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full flex justify-between items-center py-4 text-left"
                onClick={() => toggle(index)}
              >
                <span
                  className="text-lg font-semibold"
                  style={{ fontFamily: "Jost", fontWeight: "500" }}
                >
                  {item.title}
                </span>
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: "Jost", fontWeight: "500" }}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div
                  className="pb-4 text-gray-700"
                  style={{ fontFamily: "Jost", fontWeight: "500" }}
                >
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {team.map((member, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg border border-gray-200"
          >
            {/* Cropped head image */}
            <div className="overflow-hidden h-[600px]">
              <img
                src={member.img}
                alt={member.name}
                className="w-full object-cover object-top h-full"
              />
            </div>

            {/* Orange footer */}
            <div className="bg-orange-500 text-white p-4 text-center min-h-[160px] flex flex-col justify-center">
  <h3 className="text-3xl text-black font-semibold" style={{ fontFamily: "Jost", fontWeight: "500" }}>
    {member.name}
  </h3>
  <p className="text-lg" style={{ fontFamily: "Jost", fontWeight: "500" }}>
    {member.role}
  </p>
  <p className="text-lg mt-1" style={{ fontFamily: "Jost", fontWeight: "500" }}>
    {member.phone}
  </p>
</div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-wrap justify-center gap-6 py-10">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center gap-4 bg-gray-300 rounded-2xl shadow-md px-6 py-4 w-64 hover:shadow-lg transition"
        >
          {stat.icon}
          <div>
            <p className="text-3xl font-bold" style={{ fontFamily: "Jost", fontWeight: "500" }}>{stat.value}</p>
            <p className="text-lg" style={{ fontFamily: "Jost", fontWeight: "500" }}>{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
