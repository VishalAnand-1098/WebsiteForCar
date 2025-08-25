import React, { useState } from "react";
import one from "../assets/director-576x1024.jpeg";
import two from "../assets/director2.jpeg";
import three from "../assets/director3-576x1024.jpeg";
import four from "../assets/khushi-546x1024.jpeg";
import five from "../assets/swati-576x1024.jpeg";
import six from "../assets/akhansha-768x834.jpeg";
import seven from "../assets/vaishnavi.jpeg";
import user from "../assets/icon-2-150x150.webp";
import cabimage from "../assets/FAQ.webp";
import About from "../assets/About.webp";
import bgImage from "../assets/bg-1-scaled.webp";
import { Globe, Smile, Car } from "lucide-react";
import { FaSnowman } from "react-icons/fa";

export default function AboutUsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
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
      img: one,
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
        "At Shubh Trip Travels Cab Service, our mission is to redefine travel by delivering safe, affordable, and seamless cab services that cater to every traveler's needs. We aim to offer the most reliable taxi service experience with transparent pricing, courteous drivers, and a wide fleet of vehicles—making travel from Delhi NCR to any destination a comfortable and memorable journey.",
    },
    {
      title: "Our Vision",
      content:
        "Our vision is to become India's most trusted name in intercity cab travel by combining technology, affordability, and outstanding service. We envision a future where every ride with Shubh Trip Travels Cab Service adds value to your journey—whether you're traveling for leisure, business, or pilgrimage.",
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
    <div className="w-full bg-white">
      {/* Banner */}
      <div
        className="w-full h-64 md:h-80 lg:h-96 mb-10 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${About})` }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white ml-5 md:ml-10 lg:ml-16 font-jost">
          About Us
        </h1>
      </div>

      {/* Welcome Section */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight font-jost">
            Welcome To Shubh Trip Travels Cab Service
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed font-jost font-medium">
            At Shubh Trip Travels, we offer affordable outstation and local taxi
            services in Delhi and nearby cities. Whether you're planning a trip
            to Jaipur, Uttarakhand, Himachal Pradesh, or any other destination,
            we're here to make your journey smooth and hassle-free. Our
            well-maintained sedans and SUVs come with modern amenities to ensure
            a comfortable and enjoyable travel experience. Let us take you where
            you need to go—comfortably and reliably!
          </p>

          {/* Safety Card */}
          <div className="mt-6 flex flex-col sm:flex-row items-start gap-4 bg-white border border-gray-800 rounded-lg shadow-md p-4">
            <div className="bg-yellow-400 border-2 border-black rounded-lg p-2 flex items-center justify-center mx-auto sm:mx-0">
              <img
                src={user}
                alt="User Icon"
                className="w-32 h-16 sm:w-40 sm:h-20 object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 font-jost">
                Safety first always
              </h3>
              <p className="mt-1 text-gray-700 font-jost font-medium">
                We prioritize your safety and comfort while ensuring a smooth
                and enjoyable ride. Sit back, relax, and let our skilled drivers
                take care of the rest.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
          <img
            src={cabimage}
            alt="Cab Service"
            className="rounded-lg border-4 border-white shadow-lg w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      {/* Accordion Section with BG */}
      <div
        className="mt-12 bg-cover bg-center bg-no-repeat min-h-96 flex items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-white/90 rounded-md shadow-lg w-full max-w-lg p-4 md:p-6 m-4 md:ml-8 lg:ml-16">
          {items.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full flex justify-between items-center py-4 text-left"
                onClick={() => toggle(index)}
              >
                <span className="text-lg font-semibold font-jost">
                  {item.title}
                </span>
                <span className="text-xl font-bold font-jost">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="pb-4 text-gray-700 font-jost font-medium">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
     <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
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
      {/* Stats Section */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 py-8 md:py-10 px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-gray-300 rounded-xl md:rounded-2xl shadow-md px-4 py-3 w-full max-w-xs md:w-64 hover:shadow-lg transition"
          >
            {stat.icon}
            <div>
              <p className="text-2xl md:text-3xl font-bold font-jost">{stat.value}</p>
              <p className="text-base md:text-lg font-jost">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}