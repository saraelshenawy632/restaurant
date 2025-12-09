import React from "react";

export default function Contact() {
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
            transform: translateY(-30px) rotate(15deg);
          }
        }

        .contact-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 4rem 2rem;
          background-color: #fff3e0;
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

        /* CONTACT SECTION */
        .contact-section {
          padding: 6rem 2rem;
          background-color: #fff3e0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info,
        .contact-form {
          background: white;
          border-radius: 2rem;
          padding: 3rem;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .info-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(45deg, #ff5722, #ff8a65);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 15px 40px rgba(255, 87, 34, 0.4);
        }

        .info-icon svg {
          width: 35px;
          height: 35px;
          fill: white;
        }

        .info-text h4 {
          font-family: "Playfair Display", serif;
          font-size: 1.6rem;
          color: #5d4037;
          margin-bottom: 0.4rem;
        }

        .info-text p {
          font-size: 1.2rem;
          color: #6d4c41;
          line-height: 1.5;
        }

        .social-links {
          display: flex;
          gap: 1.2rem;
          margin-top: 2rem;
        }

        .social-links a {
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, #ff5722, #ff8a65);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(255, 87, 34, 0.3);
        }

        .social-links a:hover {
          transform: translateY(-8px) scale(1.1);
          box-shadow: 0 20px 50px rgba(255, 87, 34, 0.5);
        }

        .map-container {
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.2);
          height: 500px;
          border: 15px solid white;
        }

        .map-container iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        .form-title {
          font-family: "Playfair Display", serif;
          font-size: 2.5rem;
          color: #5d4037;
          text-align: center;
          margin-bottom: 2rem;
        }

        input,
        textarea {
          width: 100%;
          padding: 1rem 1.5rem;
          border: 2px solid #ffccbc;
          border-radius: 1.2rem;
          margin-bottom: 1.5rem;
          font-size: 1rem;
          background: #fff8f0;
          font-family: "Poppins", sans-serif;
          transition: all 0.3s ease;
        }

        input:focus,
        textarea:focus {
          outline: none;
          border-color: #ff5722;
          background: white;
          box-shadow: 0 0 0 4px rgba(255, 87, 34, 0.15);
        }

        textarea {
          min-height: 140px;
          resize: vertical;
        }

        .btn-send {
          background: linear-gradient(45deg, #ff1744, #ff3d00);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 60px;
          font-size: 1.3rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          display: block;
          margin: 1.5rem auto 0;
          box-shadow: 0 20px 60px rgba(255, 23, 68, 0.35);
          transition: all 0.4s ease;
        }

        .btn-send:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 30px 80px rgba(255, 23, 68, 0.5);
        }

        .sticker {
          position: absolute;
          animation: float 10s ease-in-out infinite;
          filter: drop-shadow(0 20px 40px rgba(255, 87, 34, 0.3));
          pointer-events: none;
          z-index: 1;
        }
        .sticker-1 {
          width: clamp(100px, 15vw, 140px);
          top: 8%;
          left: 5%;
        }
        .sticker-2 {
          width: clamp(80px, 12vw, 120px);
          top: 12%;
          right: 6%;
        }
        .sticker-3 {
          width: clamp(100px, 14vw, 160px);
          bottom: 10%;
          left: 8%;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .map-container {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .sticker {
            animation: float 8s ease-in-out infinite;
          }
          .hero-title {
            font-size: clamp(3rem, 9vw, 5rem);
          }
          .hero-subtitle {
            font-size: clamp(1rem, 2vw, 1.2rem);
          }
          .contact-info,
          .contact-form {
            padding: 2.5rem 1.5rem;
          }
          .btn-send {
            padding: 0.9rem 2rem;
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: clamp(2rem, 8vw, 3rem);
          }
          .hero-subtitle {
            font-size: clamp(0.9rem, 2vw, 1rem);
          }
          .map-container {
            height: 300px;
          }
        }
      `}</style>

      <section className="contact-hero">
        <img
          src="/images/chief1.jpg"
          alt="Sticker 1"
          className="sticker sticker-1"
        />
        <img
          src="/images/chief2.jpg"
          alt="Sticker 2"
          className="sticker sticker-2"
        />
        <img
          src="/images/chief3.jpg"
          alt="Sticker 3"
          className="sticker sticker-3"
        />

        <div className="container text-center">
          <h1 className="hero-title">
            Get in Touch
            <br />
            <span>We'd Love to Hear From You</span>
          </h1>
          <p className="hero-subtitle">
            Questions? Feedback? Just want to say hi? We’re all ears (and taste
            buds).
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="info-text">
                  <h4>Visit Us</h4>
                  <p>
                    123 Culinary Avenue
                    <br />
                    Downtown District, NY 10001
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="info-text">
                  <h4>Call Us</h4>
                  <p>
                    +1 (555) 842-4637
                    <br />
                    Daily: 12 PM – 11 PM
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="info-text">
                  <h4>Email Us</h4>
                  <p>
                    hello@savorio.com
                    <br />
                    We reply within 24 hours
                  </p>
                </div>
              </div>

              <div className="social-links">
                <a href="#">
                  <svg viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.42 2.88 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62 1.08-.6 1.08-.6 1 .7 1.52 1.8 1.52 1.8 1.88 3.22 4.94 2.29 6.15 1.75.19-1.36.73-2.29 1.33-2.82-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.57 9.57 0 0 1 2.5-.34c.85.01 1.71.13 2.5.34 1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A9.96 9.96 0 0 0 22 12c0-5.5-4.46-9.96-9.96-9.96z" />
                  </svg>
                </a>
                <a href="#">
                  <svg viewBox="0 0 24 24">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75 1.25 1.25 0 0 1 17.25 5.5M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0 1.8a3.2 3.2 0 0 0-3.2 3.2 3.2 3.2 0 0 0 3.2 3.2 3.2 3.2 0 0 0 3.2-3.2A3.2 3.2 0 0 0 12 8.8z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.182693562345!2d-73.988221684593!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b311f5c9%3A0x1a18b5f7b2f18c8!2sThe%20Modern!5e0!3m2!1sen!2sus!4v1698000000000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="contact-form" style={{ marginTop: "4rem" }}>
            <h2 className="form-title">Send Us a Message</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message..." required></textarea>
              <button type="submit" className="btn-send">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
