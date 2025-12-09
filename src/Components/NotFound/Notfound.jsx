import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@400;500;600;700&display=swap");

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(12deg);
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
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

        .notfound-section {
          min-height: 100vh;
          background-color: #fff3e0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          font-family: "Poppins", sans-serif;
          color: #5d4037;
        }

        .notfound-container {
          text-align: center;
          padding: 2rem;
          z-index: 10;
          animation: fadeInUp 1.2s ease forwards;
        }

        .error-404 {
          font-family: "Playfair Display", serif;
          font-size: clamp(9rem, 22vw, 16rem);
          font-weight: 900;
          margin: 0;
          line-height: 0.9;
          background: linear-gradient(90deg, #e64a19, #ff8a65);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 1.5rem 0 1rem;
          color: #5d4037;
        }

        .message {
          font-size: 1.4rem;
          color: #7c6b61;
          max-width: 680px;
          margin: 0 auto 3.5rem;
          line-height: 1.8;
          font-weight: 500;
        }

        .btn-home {
          background: linear-gradient(45deg, #ff5722, #ff3d00);
          color: white;
          padding: 1.3rem 4rem;
          border-radius: 60px;
          font-size: 1.5rem;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 20px 50px rgba(255, 87, 34, 0.45);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: bounce 3s infinite;
        }

        .btn-home:hover {
          transform: translateY(-12px) scale(1.08);
          box-shadow: 0 35px 80px rgba(255, 87, 34, 0.55);
        }

        .sticker {
          position: absolute;
          animation: float 7s ease-in-out infinite;
          filter: drop-shadow(0 15px 35px rgba(255, 87, 34, 0.3));
          z-index: 1;
        }

        .sticker-1 {
          width: 130px;
          top: 8%;
          left: 8%;
          animation-delay: 0s;
        }
        .sticker-2 {
          width: 110px;
          top: 12%;
          right: 10%;
          animation-delay: 1.5s;
        }
        .sticker-3 {
          width: 150px;
          bottom: 8%;
          left: 12%;
          animation-delay: 2.5s;
        }
        .sticker-4 {
          width: 120px;
          bottom: 12%;
          right: 8%;
          animation-delay: 4s;
        }

        @media (max-width: 768px) {
          .sticker {
            display: none;
          }
          .subtitle {
            font-size: 2rem;
          }
          .message {
            font-size: 1.2rem;
          }
          .btn-home {
            padding: 1rem 3rem;
            font-size: 1.3rem;
          }
        }
      `}</style>

      <section className="notfound-section">
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <circle cx="20" cy="30" r="22" fill="#FF5722" opacity="0.15" />
            <circle cx="80" cy="70" r="28" fill="#E91E63" opacity="0.12" />
          </svg>
        </div>

        <img
          src="/images/chef-hat.png"
          alt="chef hat"
          className="sticker sticker-1"
          onError={(e) => (e.target.style.display = "none")}
        />
        <img
          src="/images/colorful-plate.png"
          alt="plate"
          className="sticker sticker-2"
          onError={(e) => (e.target.style.display = "none")}
        />
        <img
          src="/images/plate-sticker.png"
          alt="plate"
          className="sticker sticker-3"
          onError={(e) => (e.target.style.display = "none")}
        />
        <img
          src="/images/beef-tacos.jpg"
          alt="tacos"
          className="sticker sticker-4 rounded-4"
          style={{ border: "14px solid white" }}
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400")
          }
        />

        <div className="notfound-container">
          <h1 className="error-404">404</h1>
          <h2 className="subtitle">Oops! This Page Got Devoured!</h2>

          <p className="message">
            Looks like someone enjoyed this page a little too much and ate it
            before you arrived.
            <br />
            Don't worry — we've got plenty of mouth-watering dishes waiting for
            you back home!
          </p>

          <Link to="/" className="btn-home">
            <span>Back to Delicious Home</span>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
