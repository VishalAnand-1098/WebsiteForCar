import React, { useState } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwxIFJ-piGJG3QtuOyGgOwgkv-MQjMoxFxenzFy0ef9K8K8fDVtNUquIic2uL7aHxYh/exec"; // 👈 replace with Apps Script Web App URL

const BookTaxi = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    pickup: "",
    destination: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!form.name || !form.mobile || !form.pickup || !form.destination) {
      setStatus("⚠️ Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const body = new URLSearchParams(form);

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      const data = await res.json();

      if (data.status === "success") {
        setStatus("✅ Booking saved!");
        setForm({ name: "", mobile: "", pickup: "", destination: "" });
      } else {
        setStatus("❌ Failed: " + (data.message || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          font-family: Arial, sans-serif;
          height: auto;
          box-sizing: border-box;
          background: transparent;
        }
        .box {
          background-color: #fff;
          border-radius: 20px;
          display: flex;
          padding: 15px;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15);
          max-width: 700px;
          width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          box-sizing: border-box;
        }
        .form-section { flex: 1; margin-right: 20px; }
        h2 { font-size: 28px; font-weight: bold; margin-bottom: 20px; }
        h2 span { color: #2F5249; border-bottom: 4px solid #2F5249; padding-bottom: 4px; }
        .input-row { display: flex; gap: 20px; margin-bottom: 15px; flex-wrap: wrap; }
        .input-group { flex: 1; display: flex; flex-direction: column; min-width: 120px; }
        input {
          border: none; border-bottom: 2px solid #333; padding: 6px 0;
          font-size: 15px; background: transparent; outline: none;
        }
        button {
          background-color: #2F5249; color: white; padding: 10px 0;
          font-size: 16px; font-weight: bold; border: 2px solid black;
          border-radius: 12px; width: 100%; cursor: pointer;
          transition: background-color 0.3s ease; margin-top: 8px;
        }
        button:hover { background-color: #2F5249; }
        .status { font-size: 14px; margin-top: 8px; min-height: 18px; }
        @media (max-width: 700px) {
          .box { flex-direction: column; align-items: stretch; }
          .form-section { margin-right: 0; width: 100%; }
          button { width: 100%; }
        }
        @media (max-width: 500px) {
          h2 { font-size: 24px; }
          input { font-size: 13px; }
          button { font-size: 15px; }
        }
      `}</style>

      <div className="container">
        <div className="box">
          <form className="form-section" onSubmit={handleSubmit}>
            <h2>
              Book Your <span>Taxi Now</span>
            </h2>

            <div className="input-row">
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={form.mobile}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <input
                  type="text"
                  name="pickup"
                  placeholder="Enter pickup location"
                  value={form.pickup}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="destination"
                  placeholder="Enter destination"
                  value={form.destination}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
            <div className="status">{status}</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookTaxi;
