import React from "react";

export default function Locations() {
  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@300;400;500;600;700&display=swap");

        :global(body),
        :global(html) {
          background-color: #fff3e0 !important;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-40px) rotate(15deg);
          }
        }

        @keyframes gentleGlow {
          0%,
          100% {
            box-shadow: 0 20px 50px rgba(255, 87, 34, 0.25);
          }
          50% {
            box-shadow: 0 35px 80px rgba(255, 87, 34, 0.4);
          }
        }

        .locations-hero {
          min-height: 100vh;
          background: #fff3e0;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          text-align: center;
          z-index: 10;
          width: 100%;
        }

        .hero-title {
          font-family: "Playfair Display", serif;
          font-size: clamp(5rem, 11vw, 9rem);
          font-weight: 900;
          color: #5d4037;
          line-height: 0.9;
          letter-spacing: -3px;
        }

        .hero-title span {
          background: linear-gradient(90deg, #e64a19, #ff6e40);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 1.1em;
        }

        .hero-subtitle {
          font-size: 1.9rem;
          color: #6d4c41;
          max-width: 900px;
          margin: 2rem auto 0;
          line-height: 1.7;
          font-weight: 500;
          opacity: 0.95;
        }

        .locations-section {
          padding: 10rem 0;
          background-color: #fff3e0;
        }

        .branch-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 3.5rem;
          margin-top: 5rem;
          justify-items: center;
        }

        .branch-card {
          background: white;
          border-radius: 2.2rem;
          overflow: hidden;
          box-shadow: 0 35px 90px rgba(0, 0, 0, 0.16);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          animation: gentleGlow 8s infinite alternate;
          max-width: 400px;
          width: 100%;
        }

        .branch-card:hover {
          transform: translateY(-20px) scale(1.04);
          box-shadow: 0 55px 130px rgba(255, 87, 34, 0.35);
        }

        .branch-image {
          height: 240px;
          overflow: hidden;
        }

        .branch-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.9s ease;
        }

        .branch-card:hover img {
          transform: scale(1.18);
        }

        .branch-info {
          padding: 2.2rem 1.8rem;
          text-align: center;
        }

        .branch-name {
          font-family: "Playfair Display", serif;
          font-size: 2.3rem;
          color: #5d4037;
          margin-bottom: 0.8rem;
        }

        .branch-address,
        .branch-hours,
        .branch-phone {
          font-size: 1.18rem;
          color: #6d4c41;
          margin: 0.7rem 0;
          line-height: 1.65;
        }

        .branch-phone a {
          color: #e64a19;
          font-weight: 700;
          text-decoration: none;
        }

        .branch-phone a:hover {
          color: #ff3d00;
        }

        .map-container {
          height: 280px;
          border-radius: 1.8rem;
          overflow: hidden;
          margin: 1.8rem 1.2rem 1.2rem;
          border: 14px solid white;
          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.14);
        }

        .map-container iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        .btn-visit {
          background: linear-gradient(45deg, #ff1744, #ff3d00);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 60px;
          font-size: 1.2rem;
          font-weight: 700;
          margin-top: 1.2rem;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          box-shadow: 0 18px 45px rgba(255, 23, 68, 0.4);
          transition: all 0.4s ease;
        }

        .btn-visit:hover {
          transform: translateY(-8px) scale(1.06);
          box-shadow: 0 32px 75px rgba(255, 23, 68, 0.58);
        }

        .sticker {
          position: absolute;
          animation: float 10s ease-in-out infinite;
          filter: drop-shadow(0 30px 60px rgba(255, 87, 34, 0.4));
          pointer-events: none;
          z-index: 2;
          border-radius: 1.5rem;
          overflow: hidden;
        }

        .sticker-1 {
          width: 160px;
          top: 8%;
          left: 6%;
          animation-delay: 0s;
        }
        .sticker-2 {
          width: 130px;
          top: 12%;
          right: 8%;
          animation-delay: 2s;
        }
        .sticker-3 {
          width: 180px;
          bottom: 10%;
          left: 10%;
          animation-delay: 4s;
        }

        @media (max-width: 992px) {
          .branch-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 5.5rem;
          }
          .hero-subtitle {
            font-size: 1.6rem;
          }
          .branch-card {
            max-width: 380px;
          }
          .branch-image {
            height: 220px;
          }
          .branch-name {
            font-size: 2.2rem;
          }
          .map-container {
            height: 260px;
            border-width: 12px;
          }
          .btn-visit {
            padding: 0.95rem 2.3rem;
            font-size: 1.15rem;
          }

          .sticker {
            width: 100px !important;
            border-radius: 1rem;
          }
          .sticker-3 {
            width: 120px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 4.6rem;
            line-height: 1;
          }
          .hero-subtitle {
            font-size: 1.4rem;
            padding: 0 1rem;
          }
          .branch-card {
            max-width: 340px;
          }
          .branch-image {
            height: 200px;
          }
          .branch-info {
            padding: 2rem 1.5rem;
          }
          .branch-name {
            font-size: 2rem;
          }
          .map-container {
            height: 240px;
            border-width: 10px;
            margin: 1.5rem 1rem;
          }
          .sticker {
            width: 80px !important;
          }
          .sticker-3 {
            width: 95px !important;
          }
          .btn-visit {
            padding: 0.9rem 2.1rem;
            font-size: 1.1rem;
          }
        }
      `}</style>

      <section className="locations-hero">
        <img
          src="/images/site1.jpg"
          alt="Restaurant exterior"
          className="sticker sticker-1"
          onError={(e) => (e.target.style.display = "none")}
        />
        <img
          src="/images/site3.jpg"
          alt="Dining area"
          className="sticker sticker-2"
          onError={(e) => (e.target.style.display = "none")}
        />
        <img
          src="/images/site2.jpg"
          alt="Chef plating"
          className="sticker sticker-3"
          onError={(e) => (e.target.style.display = "none")}
        />

        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Our Locations
              <br />
              <span>Find Us Near You</span>
            </h1>
            <p className="hero-subtitle">
              Three beautiful locations, one unforgettable experience. Visit us
              wherever you are.
            </p>
          </div>
        </div>
      </section>

      <section className="locations-section">
        <div className="container">
          <div className="branch-grid">
            <div className="branch-card">
              <div className="branch-image">
                <img
                  src="/images/site4.jpg"
                  alt="Savorio Tanta – Elegant dining"
                  loading="lazy"
                />
              </div>
              <div className="branch-info">
                <h3 className="branch-name">Tanta</h3>
                <p className="branch-address">
                  123 Said Street
                  <br />
                  Tanta District, Gharbia
                </p>
                <p className="branch-hours">Open Daily: 12 PM – 11 PM</p>
                <p className="branch-phone">
                  <a href="tel:+201098424637">+20 10 123 456 789</a>
                </p>
                <a
                  href="https://goo.gl/maps/tanta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-visit"
                >
                  Get Directions
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.182693562345!2d-73.988221684593!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b311f5c9%3A0x1a18b5f7b2f18c8!2sThe%20Modern!5e0!3m2!1sen!2sus!4v1698000000000"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Savorio Tanta Location"
                ></iframe>
              </div>
            </div>

            <div className="branch-card">
              <div className="branch-image">
                <img
                  src="/images/site1.jpg"
                  alt="Savorio Cairo – Cozy atmosphere"
                  loading="lazy"
                />
              </div>
              <div className="branch-info">
                <h3 className="branch-name">Cairo</h3>
                <p className="branch-address">
                  456 Nile Avenue
                  <br />
                  Zamalek, Cairo
                </p>
                <p className="branch-hours">Open Daily: 11 AM – 12 AM</p>
                <p className="branch-phone">
                  <a href="tel:+201009876543">+20 10 123 456 789</a>
                </p>
                <a
                  href="https://goo.gl/maps/cairo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-visit"
                >
                  Get Directions
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.284667403626!2d-73.956071684596!3d40.7127759793305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3162d24f51%3A0x4b5d77f78a83e3c!2sRoberta's%20Pizza!5e0!3m2!1sen!2sus!4v1698000000000"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Savorio Cairo Location"
                ></iframe>
              </div>
            </div>

            <div className="branch-card">
              <div className="branch-image">
                <img
                  src="/images/site2.jpg"
                  alt="Savorio Alex – Coming Soon"
                  loading="lazy"
                />
              </div>
              <div className="branch-info">
                <h3 className="branch-name">
                  Alexandria{" "}
                  <span style={{ color: "#E64A19", fontSize: "0.8em" }}>
                    Opening Soon
                  </span>
                </h3>
                <p className="branch-address">
                  789 Corniche Road
                  <br />
                  San Stefano, Alexandria
                </p>
                <p className="branch-hours">Opening Summer 2026</p>
                <p className="branch-phone">
                  <a href="tel:+201011239876">+20 10 123 456 789</a>
                </p>
                <a
                  href="https://waitinglist.savorio.com/alex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-visit"
                >
                  Join Waiting List
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.123456789!2d-73.966745684589!3d40.773456779325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589f4e2a1b1f%3A0x8f5e3f2d1c2b3a4!2sDaniel!5e0!3m2!1sen!2sus!4v1698000000000"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Savorio Alexandria – Opening Soon"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
