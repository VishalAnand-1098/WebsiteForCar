import React, { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyE3tjHChCqlA2IzyuobujlZssKS5Do1Rq7Lv_jleidfg2wwyjhcTZAZe8UzTi3PJ1_rQ/exec";

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
      setStatus("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const body = new URLSearchParams({
        name: form.name,
        mobile: form.mobile,
        pickup: form.pickup,
        destination: form.destination,
      });

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // 🚀 prevents CORS error
        body,
      });

      // ✅ Optimistically assume success (Apps Script writes row)
      setStatus("✅ Booking saved!");
      setForm({ name: "", mobile: "", pickup: "", destination: "" });
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
        h2 span { color: #ff7a1a; border-bottom: 4px solid #ff7a1a; padding-bottom: 4px; }
        .input-row { display: flex; gap: 20px; margin-bottom: 15px; flex-wrap: wrap; }
        .input-group { flex: 1; display: flex; flex-direction: column; min-width: 120px; }
        label { font-weight: bold; font-size: 15px; margin-bottom: 4px; }
        input {
          border: none; border-bottom: 2px solid #333; padding: 6px 0;
          font-size: 15px; background: transparent; outline: none;
        }
        button {
          background-color: #ff7a1a; color: white; padding: 10px 0;
          font-size: 16px; font-weight: bold; border: 2px solid black;
          border-radius: 12px; width: 100%; cursor: pointer;
          transition: background-color 0.3s ease; margin-top: 8px;
        }
        button:hover { background-color: #e76a00; }
        .whatsapp-box {
          width: 120px; height: 200px; background-color: #25D366;
          border-radius: 25px; border: 3px solid black; display: flex;
          flex-direction: column; align-items: center; justify-content: center;
          color: #fff; text-align: center; font-weight: bold; font-size: 14px;
          position: relative; padding: 12px 6px;
        }
        .notch { width: 40px; height: 5px; background-color: black; border-radius: 3px; position: absolute; top: 10px; left: 50%; transform: translateX(-50%); }
        .whatsapp-icon { font-size: 36px; margin-bottom: 14px; }
        .status { font-size: 14px; margin-top: 8px; min-height: 18px; }
        @media (max-width: 700px) {
          .box { flex-direction: column; align-items: stretch; }
          .form-section { margin-right: 0; width: 100%; }
          button { width: 100%; }
          .whatsapp-box { display: none; }
        }
        @media (max-width: 500px) {
          h2 { font-size: 24px; }
          label, input { font-size: 13px; }
          button { font-size: 15px; }
        }
      `}</style>

      <div className="container">
        <div className="box">
          {/* Form Section */}
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

          {/* WhatsApp Box */}
          <div className="whatsapp-box">
            <div className="notch" />
            <div className="whatsapp-icon">📞</div>
            <div>Book Taxi on</div>
            <div>Whatsapp</div>
            <div>Now</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookTaxi;
