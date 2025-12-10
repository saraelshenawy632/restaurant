import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DishCard from "../DishCard/DishCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

export default function Home() {
  const [meals, setMeals] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await axios.get("/Data/meals.json");
        const data = res.data;
        setMeals(data);
        setFeatured(
          data.slice(0, 6).map((meal, index) => ({ ...meal, best: index < 3 }))
        );
      } catch (err) {
        console.error("Error fetching meals:", err);
      }
    };
    fetchMeals();
    setTimeout(() => window.dispatchEvent(new Event("resize")), 100);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    centerMode: true,
    centerPadding: "20%", 
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",

    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerPadding: "15%",
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "10%",
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "5%",
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <section className="hero-section">
        <video
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-bg"
        />
        <div className="container hero-content">
          <h1 className="hero-title">
            Savor the Taste of
            <br />
            <span>Perfection.</span>
          </h1>
          <p className="hero-text">
            Fresh ingredients, mouth-watering recipes, and a passion for good
            food delivered to your door or ready for pick-up.
          </p>

          <div className="text-center mt-6">
            <Link to="/order" className="order-btn">
              <span className="order-text">Order Now</span>
              <svg viewBox="0 0 24 24" className="arrow-icon">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="featured-slider-section py-5">
          <div className="container">
            <h2 className="slider-title text-center mb-5">Featured Meals</h2>
            <Slider {...sliderSettings}>
              {featured.map((dish) => (
                <div key={dish._id} className="px-2">
                  <DishCard
                    _id={dish._id}
                    name={dish.name}
                    price={dish.price}
                    img={dish.image}
                    description={dish.description || ""}
                    best={dish.best}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </section>
      )}

      <section className="dishes-section py-5">
        <div className="container">
          <h1 className="meals-title text-center mb-3">Our Delicious Meals</h1>
          <p className="meals-subtitle text-center mb-5">
            Choose your favorite dishes
          </p>

          <div className="row g-4 justify-content-center">
            {meals.map((dish) => (
              <div
                key={dish._id}
                className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center"
              >
                <DishCard
                  _id={dish._id}
                  name={dish.name}
                  price={dish.price}
                  img={dish.image}
                  description={dish.description || ""}
                  best={dish.best || false}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/menu" className="view-menu-btn">
              <span>View Full Menu</span>
              <svg viewBox="0 0 24 24" className="arrow-icon">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <section className="reviews-section py-5">
        <div className="container">
          <h2 class="hero-title text-center">
            They Love Us
            <span class="animated-underline"></span>
          </h2>

          <br />
          <br />

          <div className="row g-4 justify-content-center">
            {[
              {
                name: "Sarah M.",
                text: "The best tacos I've ever had! Will order again!",
              },
              {
                name: "Ahmed K.",
                text: "Chicken curry is out of this world. 10/10",
              },
              {
                name: "Lina T.",
                text: "Falafel wrap is fresh and delicious every time!",
              },
              {
                name: "Omar R.",
                text: "Seafood Paella is a masterpiece. Highly recommend!",
              },
            ].map((r, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className={`review-card review-color-${i % 2}`}>
                  <div className="stars">★★★★★</div>
                  <p className="review-text">"{r.text}"</p>
                  <strong>— {r.name}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-section py-5">
        <div className="decorative-circles">
          <svg width="800" height="800" viewBox="0 0 200 200" fill="none">
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="#FF5722"
              strokeWidth="15"
              opacity="0.2"
            />
            <circle
              cx="100"
              cy="100"
              r="120"
              stroke="#E91E63"
              strokeWidth="20"
              opacity="0.15"
            />
          </svg>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="container text-center position-relative">
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
          <br /> <br />
          <h2 className="cta-title">Don't Wait — Order Now!</h2>
          <p className="cta-text">
            Fresh ingredients, mouth-watering recipes, and a passion for good
            food delivered to your door or ready for pick-up.
          </p>
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
          <br /> <br />
          <img
            src="/images/chicken-curry.jpg"
            alt="Chicken Curry"
            className="floating-img img-left"
          />
          <img
            src="/images/seafood-paella.jpg"
            alt="Seafood Paella"
            className="floating-img img-right"
          />
          <img
            src="/images/lemon-cheesecake.jpg"
            alt="Dessert"
            className="floating-img img-bottom"
          />
          <img
            src="/images/beef-tacos.jpg"
            alt="Tacos"
            className="floating-img img-corner"
          />
        </div>
      </section>
    </>
  );
}
