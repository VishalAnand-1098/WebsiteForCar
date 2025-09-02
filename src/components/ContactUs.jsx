import React, { useState, useEffect } from "react";
import About from "../assets/About.webp";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwaHs6k3jbCWFCUwcMT4Bi9qk92k2K27riJ6p-N3rxZSJ6Df7E5-0Pa-iCJT2NpP0T3/exec"; // <-- paste your Apps Script /exec URL here

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    captcha: ""
  });
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1; // 1–10
    const b = Math.floor(Math.random() * 10) + 1;
    setNum1(a);
    setNum2(b);
    setFormData(f => ({ ...f, captcha: "" }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    // validate
    if (!formData.name || !formData.phone || !formData.email) {
      setStatus("⚠️ Please fill name, phone and email.");
      return;
    }
    if (isNaN(Number(formData.captcha)) || Number(formData.captcha) !== (num1 + num2)) {
      setStatus("❌ Captcha is incorrect.");
      return;
    }

    try {
      setLoading(true);
      const body = new URLSearchParams({
        formType: "contact", // IMPORTANT: tells Apps Script to write to Sheet2
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      });

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      const result = await res.json();

      if (result.status === "success") {
        setStatus("✅ Saved to sheet successfully!");
        setFormData({ name: "", phone: "", email: "", message: "", captcha: "" });
        generateCaptcha();
      } else {
        setStatus("❌ Failed: " + (result.message || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Network error. Please check the script URL and deployment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "350px",
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
          Contact Us
        </h1>
      </div>

      <div className="w-full bg-white py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - details */}
          <div>
            <div className="flex items-center">
              <div className="w-1 bg-orange-500 h-10 mr-1"></div>
              <div className="bg-orange-500 w-full text-white text-4xl px-6 rounded-r-full" style={{ fontFamily: "Jost", fontWeight: "500" }}>
                Contact Details
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-orange-500 text-3xl" />
                <div>
                  <p className="font-semibold text-xl text-gray-800" style={{ fontFamily: "Jost", fontWeight: "500" }}>Address :</p>
                  <p className="text-gray-600 text-lg" style={{ fontFamily: "Jost", fontWeight: "500" }}>
                    G-67, Ground Floor, Near MCD Toll Pul Pahladpur, <br />
                    New Delhi – 110044
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-orange-500 text-3xl" />
                <div>
                  <p className="font-semibold text-xl text-gray-800" style={{ fontFamily: "Jost", fontWeight: "500" }}>Mail Id :</p>
                  <p className="text-gray-600 text-lg" style={{ fontFamily: "Jost", fontWeight: "500" }}>shubhtriptravel@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhone className="text-orange-500 text-3xl" />
                <div>
                  <p className="font-semibold text-xl text-gray-800" style={{ fontFamily: "Jost", fontWeight: "500" }}>Phone No :</p>
                  <p className="text-gray-600 text-lg" style={{ fontFamily: "Jost", fontWeight: "500" }}>+91 7303538650</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Enquiry form (controlled) */}
          <div>
            <div className="flex items-center">
              <div className="w-1 bg-orange-500 h-10 mr-1"></div>
              <div className="bg-orange-500 w-full text-white text-4xl px-6 rounded-r-full" style={{ fontFamily: "Jost", fontWeight: "500" }}>
                Enquiry Now
              </div>
            </div>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-md bg-gray-200 border-b-2 border-orange-400 placeholder-black focus:outline-none focus:border-orange-500"
                  style={{ fontFamily: "Jost", fontWeight: "500" }}
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Phone No."
                  className="w-full px-4 py-2 rounded-md bg-gray-200 border-b-2 border-orange-400 placeholder-black focus:outline-none focus:border-orange-500"
                  style={{ fontFamily: "Jost", fontWeight: "500" }}
                />
              </div>

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded-md bg-gray-200 border-b-2 border-orange-400 placeholder-black focus:outline-none focus:border-orange-500"
                style={{ fontFamily: "Jost", fontWeight: "500" }}
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-2 rounded-md bg-gray-200 border-b-2 border-orange-400 placeholder-black focus:outline-none focus:border-orange-500"
                style={{ fontFamily: "Jost", fontWeight: "500" }}
              />

              <div className="flex items-center justify-end">
                <div className="flex items-center gap-2 mr-3">
                  <span className="text-xl" style={{ fontFamily: "Jost", fontWeight: "500" }}>{num1} + {num2} =</span>
                  <input
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    type="text"
                    placeholder=""
                    className="w-16 px-2 py-2 rounded-md bg-gray-200 border-b-2 border-orange-400 placeholder-black focus:outline-none focus:border-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-black text-orange-500 font-semibold px-6 py-2 rounded-md border-2 text-xl border-orange-500 hover:bg-orange-500 hover:text-white transition"
                  style={{ fontFamily: "Jost", fontWeight: "500" }}
                >
                  {loading ? "Saving..." : "Submit"}
                </button>
              </div>

              <div className="mt-2 text-sm" style={{ minHeight: 20 }}>
                {status}
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="border-2 mx-auto mb-10 border-orange-500" style={{ position: "relative", width: "90%", height: "70vh" }}>
        <a
          href="https://maps.app.goo.gl/coCL1BUCjUv2Vzr38"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 2,
            display: "block",
          }}
        ></a>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197690.96067322753!2d77.05746818461019!3d28.52594149329837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1755523899637!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default ContactUs;
