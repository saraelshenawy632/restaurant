import React from "react";
import { Link } from "react-router-dom";

export default function About() {
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
            transform: translateY(-35px) rotate(12deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gentleGlow {
          0%,
          100% {
            box-shadow: 0 20px 50px rgba(255, 87, 34, 0.25);
          }
          50% {
            box-shadow: 0 30px 70px rgba(255, 87, 34, 0.4);
          }
        }

        .about-hero {
          min-height: 100vh;
          background: #fff3e0;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          animation: fadeInUp 1.4s ease-out forwards;
          z-index: 10;
          text-align: center;
        }

        .section-title {
          font-family: "Playfair Display", serif;
          font-size: clamp(4rem, 9vw, 7.5rem);
          font-weight: 900;
          color: #5d4037;
          line-height: 1;
          letter-spacing: -2px;
          margin-bottom: 1.5rem;
        }

        .section-title span {
          background: linear-gradient(90deg, #e64a19, #ff8a65);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 1.1em;
        }

        .lead-text {
          font-size: 1.6rem;
          color: #6d4c41;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
          font-weight: 500;
          opacity: 0.95;
        }

        .story-section {
          padding: 10rem 0;
          background-color: #fff3e0;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .story-image {
          border-radius: 2rem;
          overflow: hidden;
          border: 18px solid white;
          box-shadow: 0 40px 90px rgba(0, 0, 0, 0.22);
          transition: all 0.8s ease;
        }

        .story-image:hover {
          transform: translateY(-15px);
          box-shadow: 0 60px 120px rgba(0, 0, 0, 0.3);
        }

        .story-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s ease;
        }

        .story-image:hover img {
          transform: scale(1.12);
        }

        .story-content {
          text-align: left;
        }

        .story-content h3 {
          font-family: "Playfair Display", serif;
          font-size: 3.5rem;
          color: #5d4037;
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        .story-content p {
          font-size: 1.35rem;
          color: #6d4c41;
          line-height: 2;
          margin-bottom: 1.8rem;
        }

        .highlight {
          font-weight: 700;
          color: #e64a19;
          font-size: 1.4rem;
        }

        .values-section {
          padding: 10rem 0;
          background-color: #fff3e0;
          text-align: center;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 4rem;
          margin-top: 5rem;
        }

        .value-card {
          background: white;
          padding: 3.5rem 2rem;
          border-radius: 2rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          animation: gentleGlow 6s infinite alternate;
        }

        .value-card:hover {
          transform: translateY(-25px) scale(1.03);
          box-shadow: 0 50px 100px rgba(255, 87, 34, 0.3);
        }

        .value-icon {
          width: 100px;
          height: 100px;
          margin: 0 auto 2rem;
          filter: drop-shadow(0 15px 30px rgba(255, 87, 34, 0.35));
          animation: float 8s ease-in-out infinite;
        }

        .value-title {
          font-family: "Playfair Display", serif;
          font-size: 2rem;
          color: #5d4037;
          margin-bottom: 1rem;
        }

        .value-desc {
          font-size: 1.2rem;
          color: #6d4c41;
          line-height: 1.8;
        }

        .cta-final {
          padding: 12rem 2rem;
          background-color: #fff3e0;
          text-align: center;
        }

        .btn-explore {
          background: linear-gradient(45deg, #ff3d00, #ff1744);
          color: white;
          padding: 1.3rem 3.8rem;
          border-radius: 70px;
          font-size: 1.55rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 30px 70px rgba(255, 61, 0, 0.5);
          transition: all 0.5s ease;
          animation: gentleGlow 4s infinite alternate;
        }

        .btn-explore:hover {
          transform: translateY(-12px) scale(1.06);
          box-shadow: 0 50px 100px rgba(255, 61, 0, 0.6);
        }

        .sticker {
          position: absolute;
          animation: float 9s ease-in-out infinite;
          filter: drop-shadow(0 20px 40px rgba(255, 87, 34, 0.35));
          z-index: 1;
          pointer-events: none;
          width: 140px !important;
        }

        .sticker-1 {
          top: 8%;
          left: 6%;
          animation-delay: 0s;
        }
        .sticker-2 {
          top: 12%;
          right: 8%;
          animation-delay: 2s;
          width: 110px !important;
        }
        .sticker-3 {
          bottom: 10%;
          left: 10%;
          animation-delay: 4s;
          width: 160px !important;
        }
        .sticker-4 {
          bottom: 15%;
          right: 12%;
          animation-delay: 5.5s;
          width: 130px !important;
          border: 16px solid white;
          border-radius: 2rem;
        }

        @media (max-width: 992px) {
          .story-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
            text-align: center;
          }
          .story-image {
            order: -1;
          }
          .story-content {
            text-align: center;
          }
          .story-content h3 {
            font-size: 3.2rem;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 4.5rem;
          }
          .lead-text {
            font-size: 1.4rem;
          }
          .btn-explore {
            padding: 1.2rem 3.2rem;
            font-size: 1.45rem;
          }
          .sticker {
            width: 90px !important;
          }
          .sticker-4 {
            width: 100px !important;
          }
        }

        @media (max-width: 480px) {
          .sticker {
            width: 70px !important;
          }
          .sticker-4 {
            width: 80px !important;
            border-width: 10px;
          }
        }
      `}</style>

      <section className="about-hero">
        <img
          src="/images/chief1.jpg"
          alt="chef"
          className="sticker sticker-1"
          onError={(e) => (e.target.style.display = "none")}
        />
        <img
          src="/images/table2.jpg"
          alt="plate"
          className="sticker sticker-2"
          onError={(e) => (e.target.style.display = "none")}
        />
        <img
          src="/images/chief2.jpg"
          alt="plate"
          className="sticker sticker-3"
          onError={(e) => (e.target.style.display = "none")}
        />
        <img
          src="/images/seafood-paella.jpg"
          alt="dish"
          className="sticker sticker-4"
          onError={(e) => (e.target.src = "/images/table3.jpg?w=500")}
        />

        <div className="container">
          <div className="hero-content">
            <h1 className="section-title">
              Our Story
              <br />
              <span>Crafted with Passion</span>
            </h1>
            <p className="lead-text">
              Since 2015, we've been turning fresh ingredients into
              unforgettable moments. Every plate is a love letter to flavor,
              tradition, and the joy of sharing great food.
            </p>
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <img
                src="/images/table1.jpg?w=1200&q=90"
                alt="Our warm and inviting restaurant interior filled with happy guests"
                loading="lazy"
              />
            </div>

            <div className="story-content">
              <h3
                className="section-title"
                style={{ fontSize: "3.5rem", marginBottom: "2rem" }}
              >
                From Dream
                <br />
                <span>to Destination</span>
              </h3>

              <p
                style={{
                  fontSize: "1.4rem",
                  marginBottom: "1.8rem",
                  color: "#5D4037",
                  fontWeight: "500",
                }}
              >
                It all started in a tiny kitchen with one burning belief:
              </p>

              <blockquote
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2rem",
                  color: "#E64A19",
                  fontStyle: "italic",
                  borderLeft: "5px solid #FF5722",
                  paddingLeft: "2rem",
                  margin: "2.5rem 0",
                  lineHeight: "1.4",
                  fontWeight: "700",
                }}
              >
                “Great food doesn’t just feed the body —<br />
                it brings people together, creates joy, and turns moments into
                memories.”
              </blockquote>

              <p
                style={{
                  fontSize: "1.35rem",
                  lineHeight: "2",
                  color: "#6D4C41",
                  marginBottom: "1.8rem",
                }}
              >
                That simple idea grew into what we are today — a home away from
                home for over{" "}
                <strong style={{ color: "#E64A19" }}>
                  500,000 happy souls
                </strong>{" "}
                who’ve celebrated birthdays, fallen in love over candlelit
                dinners, brought their families for Sunday feasts, or simply
                escaped the world with a perfect plate.
              </p>

              <p
                style={{
                  fontSize: "1.35rem",
                  lineHeight: "2",
                  color: "#6D4C41",
                }}
              >
                Our chefs travel the globe for inspiration, return with stories
                and spices, then pour their hearts into every dish — blending
                international flair with the soul of local ingredients.
                <strong style={{ color: "#E64A19" }}>
                  Because to us, cooking isn’t a job. It’s a love language.
                </strong>
              </p>

              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#5D4037",
                  marginTop: "2.5rem",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                And we’re still just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">What We Stand For</h2>
          <div className="values-grid">
            <div className="value-card">
              <img
                src="/images/table2.jpg"
                alt="Fresh"
                className="value-icon"
                onError={(e) => (e.target.style.display = "none")}
              />
              <h4 className="value-title">Fresh & Local</h4>
              <p className="value-desc">
                Daily hand-picked ingredients from trusted farms and artisans.
              </p>
            </div>
            <div className="value-card">
              <img
                src="/images/chief1.jpg"
                alt="Handcrafted"
                className="value-icon"
                onError={(e) => (e.target.style.display = "none")}
              />
              <h4 className="value-title">Made with Love</h4>
              <p className="value-desc">
                Every dish prepared fresh, from scratch, with care and
                tradition.
              </p>
            </div>
            <div className="value-card">
              <img
                src="/images/steak-frites.jpg"
                alt="Passion"
                className="value-icon"
                onError={(e) => (e.target.style.display = "none")}
              />
              <h4 className="value-title">Pure Passion</h4>
              <p className="value-desc">
                We cook to delight, inspire, and make every meal unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <h2 className="section-title">Ready to Taste the Magic?</h2>
        <p className="lead-text">
          Come experience the flavors that have been winning hearts since day
          one.
        </p>
        <br />
        <br />

        <Link to="/menu" className="btn-explore">
          Explore Our Menu
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </>
  );
}
