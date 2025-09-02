import React from "react";

const TypesOfCabExtended = () => {
  const containerStyle = {
    minHeight: "100vh",
    width: "100%",
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    boxSizing: "border-box",
  };

  const contentStyle = {
    maxWidth: "1100px",
    width: "100%",
  };

  const titleStyle = {
    fontWeight: "700",
    fontSize: "32px",
    marginBottom: "20px",
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "1.3",
    textAlign: "center",
  };

  const paragraphStyle = {
    fontSize: "18px",
    marginBottom: "25px",
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "1.6",
    textAlign: "center",
  };

  const tableWrapperStyle = {
    width: "100%",
    overflowX: "auto",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "18px",
    border: "1px solid #333",
  };

  const headerStyle = {
    backgroundColor: "#2F5249",
    color: "white",
    fontWeight: "700",
    fontSize: "18px",
    padding: "15px",
    textAlign: "left",
    border: "1px solid #333",
  };

  const cellStyle = {
    border: "1px solid #333",
    padding: "15px",
    verticalAlign: "top",
    wordBreak: "break-word",
  };

  const boldGreyText = {
    fontWeight: "700",
    color: "#525252",
  };

  return (
    <>
      <style>{`
        /* Tablet view */
        @media (max-width: 768px) {
          h1 {
            font-size: 24px !important;
          }
          p {
            font-size: 15px !important;
          }
          table {
            font-size: 15px !important;
            table-layout: auto !important;
          }
          th, td {
            padding: 10px !important;
          }
        }

        /* Mobile view */
        @media (max-width: 480px) {
          table, thead, tbody, th, td, tr {
            display: block;
            width: 100% !important;
          }

          thead {
            display: none;
          }

          tr {
            margin-bottom: 20px;
            border: none;
            border-radius: 12px;
            background: #fff;
            padding: 15px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
          }

          td {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            border: none !important;
            padding: 8px 10px !important;
            text-align: left !important;
            font-size: 14px !important;
            line-height: 1.5;
            white-space: normal !important;
            word-break: break-word;
          }

          td::before {
            content: attr(data-label);
            font-weight: 600;
            color: #2F5249;
            margin-bottom: 5px;
            font-size: 13px;
            white-space: normal !important;
          }
        }
      `}</style>

      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>Types Of Cab</h1>
          <p style={paragraphStyle}>
            Shubh Trip Travels Cab Service offers a variety of vehicles to suit your needs and
            budget. Choose from hatchbacks, sedans, SUVs, and more—whether you’re
            looking for comfort, space, or luxury, we have the perfect cab for your journey.
          </p>

          <div style={tableWrapperStyle}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={headerStyle}>Car Types</th>
                  <th style={headerStyle}>Models</th>
                  <th style={headerStyle}>Passengers Capacity + Driver</th>
                  <th style={headerStyle}>Ideal to Hire For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={cellStyle} data-label="Car Types">
                    <span style={boldGreyText}>AC Sedan Car Rental</span>
                  </td>
                  <td style={cellStyle} data-label="Models">Swift Dzire, Aura, Xcent</td>
                  <td style={cellStyle} data-label="Passengers Capacity + Driver">4+1</td>
                  <td style={cellStyle} data-label="Ideal to Hire For">
                    Comfortable business trips, family outings, airport transfers, and
                    long-distance travel with moderate luggage
                  </td>
                </tr>
                <tr>
                  <td style={cellStyle} data-label="Car Types">
                    <span style={boldGreyText}>AC Hatchbacks</span>
                  </td>
                  <td style={cellStyle} data-label="Models">Wagonr, Celerio</td>
                  <td style={cellStyle} data-label="Passengers Capacity + Driver">4+1</td>
                  <td style={cellStyle} data-label="Ideal to Hire For">
                    Budget-friendly city commutes, short road trips, solo travel, or couples
                    with light luggage.
                  </td>
                </tr>
                <tr>
                  <td style={cellStyle} data-label="Car Types">
                    <span style={boldGreyText}>XL</span>
                  </td>
                  <td style={cellStyle} data-label="Models">Maruti Ertiga</td>
                  <td style={cellStyle} data-label="Passengers Capacity + Driver">6+1</td>
                  <td style={cellStyle} data-label="Ideal to Hire For">
                    Adventurous road trips, off-road journeys, group outings, and travel to
                    hilly or rugged terrains.
                  </td>
                </tr>
                <tr>
                  <td style={cellStyle} data-label="Car Types">
                    <span style={boldGreyText}>SUV Car Rental</span>
                  </td>
                  <td style={cellStyle} data-label="Models">Innova Crysta, KIA Carens</td>
                  <td style={cellStyle} data-label="Passengers Capacity + Driver">6+1, 7+1</td>
                  <td style={cellStyle} data-label="Ideal to Hire For">
                    Adventurous road trips, off-road journeys, group outings, and travel to
                    hilly or rugged terrains.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
       <div
      style={{
        maxWidth: '100%',
        backgroundColor: '#F5F5F5',
        margin: '0px auto',
        padding: '0 20px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: 'center',
        lineHeight: 1.8,
        color: '#222',
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '40px',
        }}
      >
        <span
          style={{
            color: '#2F5249',
            borderBottom: '3px solid #2F5249',
            paddingBottom: '5px',
          }}
        >
          Taxi Booking
        </span>{' '}
        <span
          style={{
            color: '#000',
          }}
        >
          in Delhi
        </span>
      </h1>

      <p
        style={{
          fontSize: '1.1rem',
          marginBottom: '30px',
        }}
      >
        Looking for a reliable taxi service in Delhi? Shubh Trip Travels Cab Service offers the best options for outstation travel and Delhi Darshan by car. Whether you’re planning a weekend trip from Delhi to Agra, Jaipur, Himachal, Uttarakhand, Amritsar, or any other destination in North India—we’ve got you covered.
      </p>

      <p
        style={{
          fontSize: '1.1rem',
          marginBottom: '30px',
        }}
      >
        Enjoy easy pickup and drop-off from the airport or railway station. Just sit back, relax, and let us handle the driving while you enjoy a smooth, on-time journey without any stress. Customer satisfaction is our top priority.
      </p>

      <p
        style={{
          fontSize: '1.1rem',
          marginBottom: '30px',
        }}
      >
        We also provide Delhi-Agra-Jaipur Tour packages and luxury car rentals for events like shows, conferences, and meetings. Our services are available 24x7, so you can reach out anytime.
      </p>

      <p
        style={{
          fontSize: '1.1rem',
          marginBottom: '0px',
        }}
      >
        Take advantage of our great deals on Delhi sightseeing packages by car. For bookings or inquiries, feel free to call us at{' '}
        <strong>+91-7303538650</strong> or email us at{' '}
        <strong>shubhtriptravel@gmail.com</strong> (please update this email if needed).
      </p>
    </div>
    </>
  );
};

export default TypesOfCabExtended;
