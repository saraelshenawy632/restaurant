import React from "react";

export default function Reservation() {
  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@300;400;500;600;700&display=swap");

        :global(body),
        :global(html) {
          background-color: #fff3e0 !important;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(15deg); }
        }

        .reserve-hero {
          min-height: 100vh;
          background: #fff3e0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 4rem 2rem;
        }

        .hero-title {
          font-family: "Playfair Display", serif;
          font-size: clamp(3rem, 10vw, 7rem);
          font-weight: 900;
          color: #5d4037;
          line-height: 0.9;
          text-align: center;
        }

        .hero-title span {
          background: linear-gradient(90deg, #e64a19, #ff6e40);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.8rem);
          color: #6d4c41;
          text-align: center;
          max-width: 800px;
          margin: 1.5rem auto 0;
          line-height: 1.6;
          font-weight: 500;
        }

        .form-section {
          padding: 6rem 2rem;
          background-color: #fff3e0;
        }

        .form-container {
          background: white;
          border-radius: 2rem;
          padding: 3rem;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        .form-title {
          font-family: "Playfair Display", serif;
          font-size: 2.8rem;
          color: #5d4037;
          text-align: center;
          margin-bottom: 2rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full {
          grid-column: 1 / -1;
        }

        label {
          font-size: 1.1rem;
          color: #5d4037;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        input,
        select,
        textarea {
          padding: 1rem 1.2rem;
          border: 2px solid #ffccbc;
          border-radius: 1.2rem;
          font-size: 1rem;
          background: #fff8f0;
          transition: all 0.3s ease;
          font-family: "Poppins", sans-serif;
        }

        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color: #ff5722;
          background: white;
          box-shadow: 0 0 0 4px rgba(255, 87, 34, 0.15);
          transform: scale(1.02);
        }

        textarea {
          min-height: 120px;
          resize: vertical;
        }

        /* زرار Confirm */
        .btn-submit {
          background: linear-gradient(45deg, #ff1744, #ff3d00);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 60px;
          font-size: 1.3rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          box-shadow: 0 20px 60px rgba(255, 23, 68, 0.35);
          transition: all 0.4s ease;
          display: block;
          margin: 1.5rem auto 0;
        }

        .btn-submit:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 30px 80px rgba(255, 23, 68, 0.5);
        }

        .info-box {
          background: rgba(255,87,34,0.05);
          border-radius: 1.5rem;
          padding: 2rem;
          text-align: center;
          margin-top: 3rem;
          border: 2px dashed #ff5722;
        }

        .info-box h3 {
          font-family: "Playfair Display", serif;
          font-size: 2rem;
          color: #5d4037;
          margin-bottom: 0.5rem;
        }

        .info-box p {
          font-size: 1.2rem;
          color: #6d4c41;
          line-height: 1.6;
        }

        /* Stickers */
        .sticker {
          position: absolute;
          animation: float 10s ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
          filter: drop-shadow(0 20px 40px rgba(255, 87, 34, 0.3));
        }

        .sticker-1 { width: 120px; top: 10%; left: 5%; }
        .sticker-2 { width: 100px; top: 12%; right: 6%; }
        .sticker-3 { width: 130px; bottom: 12%; left: 8%; }
        .sticker-4 { width: 120px; bottom: 15%; right: 10%; }

        @media (max-width: 480px) {
          .hero-title { font-size: 2.5rem; }
          .hero-subtitle { font-size: 1rem; }
          .form-container { padding: 2rem; }
          .form-title { font-size: 2rem; }
          .btn-submit { padding: 0.9rem 2rem; font-size: 1.1rem; }
        }
      `}</style>

      <section className="reserve-hero">
        <img src="/images/table1.jpg" alt="" className="sticker sticker-1" />
        <img src="/images/table4.jpg" alt="" className="sticker sticker-2" />
        <img src="/images/tabl3.jpg" alt="" className="sticker sticker-3" />
        <img src="/images/table2.jpg" alt="Restaurant table" className="sticker sticker-4" style={{ border: "15px solid white" }} />

        <div className="container text-center">
          <h1 className="hero-title">
            Reserve<br/><span>Your Table</span>
          </h1>
          <p className="hero-subtitle">
            Book your unforgettable dining experience with us. We can’t wait to welcome you!
          </p>
        </div>
      </section>

      <section className="form-section">
        <div className="container">
          <div className="form-container">
            <h2 className="form-title">Book Your Table</h2>

            <form>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" placeholder="+1 (555) 123-4567" required />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label>Number of Guests *</label>
                  <select required>
                    <option value="">Select...</option>
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Date *</label>
                  <input type="date" required />
                </div>
                <div className="form-group">
                  <label>Time *</label>
                  <select required>
                    <option value="">Select time</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label>Special Requests (Optional)</label>
                  <textarea placeholder="Birthday celebration, allergies, window seat..." />
                </div>
              </div>

              <button type="submit" className="btn-submit">Confirm Reservation</button>
            </form>

            <div className="info-box">
              <h3>Call Us Directly</h3>
              <p>
                Prefer to book by phone?<br/>
                <strong style={{ fontSize: "1.6rem", color: "#E64A19" }}>+1 (555) 842-4637</strong><br/>
                Open daily from 12 PM – 11 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
