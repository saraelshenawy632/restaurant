import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-5" style={{ backgroundColor: "#FFF3E0" }}>
      <div className="container">
        <div className="row gy-5 text-center text-md-start">
          <div className="col-12 col-sm-6 col-md-3">
            <h5 className="fw-bold mb-4 footer-title">Navigate</h5>
            <ul className="list-unstyled">
              {["Home", "Menu", "About", "Contact"].map((item) => (
                <li key={item} className="mb-3">
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-decoration-none footer-link"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <h5 className="fw-bold mb-4 footer-title">Quick Menu</h5>
            <ul className="list-unstyled">
              {["Breakfast", "Lunch", "Dinner", "Desserts"].map((meal) => (
                <li key={meal} className="mb-3">
                  <Link to="/menu" className="text-decoration-none footer-link">
                    {meal}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <h5 className="fw-bold mb-4 footer-title">Follow Us</h5>

            <div className="d-flex flex-column flex-md-column gap-3 align-items-center align-items-md-start">
              {[
                { icon: "facebook", url: "https://facebook.com" },
                { icon: "instagram", url: "https://instagram.com" },
                { icon: "twitter-x", url: "https://twitter.com" },
                { icon: "tiktok", url: "https://tiktok.com" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className={`bi bi-${social.icon} social-icon-size`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <h5 className="fw-bold mb-4 footer-title">Contact Us</h5>
            <div className="d-flex flex-column gap-3 footer-contact">
              <div className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
                <i className="bi bi-geo-alt-fill"></i>
                <span>123 Main St, Cairo, Egypt</span>
              </div>
              <div className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
                <i className="bi bi-telephone-fill"></i>
                <span>+20 10 123 456 789</span>
              </div>
              <div className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
                <i className="bi bi-envelope-fill"></i>
                <span>hello@PlateUndine.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5 footer-divider" />
      </div>

      <style>
        {`
          .footer-title {
            color: #5D4037;
            font-size: 1.4rem;
          }

          .footer-link {
            color: #6D4C41;
            font-weight: 500;
            font-size: 1.1rem;
            transition: 0.3s;
            position: relative;
          }

          .footer-link:hover {
            color: #FF5722;
          }

          .footer-link::after {
            content: "";
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 0;
            height: 2px;
            background: #FF5722;
            transition: 0.3s;
          }

          .footer-link:hover::after {
            width: 100%;
          }

          /* --- Social Icons --- */
          .social-icon-size {
            font-size: 1.3rem; /* Smaller icons */
          }

          .social-icon i {
            color: #FF5722;
            transition: 0.3s ease;
          }

          .social-icon:hover i {
            transform: scale(1.2);
            color: #D84315;
          }

          /* Contact icons */
          .footer-contact i {
            color: #FF5722;
          }

          .footer-divider {
            border-top: 2px solid #FFCCBC;
            opacity: 0.6;
          }

          .footer-copy {
            color: #8D6E63;
            font-size: 1.1rem;
          }

          /* MOBILE OPTIMIZATION */
          @media (max-width: 576px) {
            .footer-title {
              text-align: center;
            }
            .footer-link {
              display: inline-block;
              text-align: center;
            }
            .footer-contact div {
              justify-content: center !important;
            }
            .social-icon-size {
              font-size: 1.4rem;
            }
          }
        `}
      </style>
    </footer>
  );
}
