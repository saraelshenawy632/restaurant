import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import DishCard from "../DishCard/DishCard";
import { Link } from "react-router-dom";

export default function Menu() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await axios.get("http://localhost:5000/meals");
        setMeals(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching meals:", err);
        setLoading(false);
      }
    };
    fetchMeals();
  }, []);

  const categorizedMeals = useMemo(() => {
    const categories = {
      All: meals,
      Breakfast: meals.filter((m) =>
        ["pancake", "omelette", "toast", "falafel", "breakfast"].some((k) =>
          m.name.toLowerCase().includes(k)
        )
      ),
      Lunch: meals.filter((m) =>
        ["pizza", "pasta", "risotto", "mac", "parmesan", "soup", "salad"].some(
          (k) => m.name.toLowerCase().includes(k)
        )
      ),
      Dinner: meals.filter((m) =>
        [
          "steak",
          "ribeye",
          "lobster",
          "ravioli",
          "cod",
          "tacos",
          "grilled",
        ].some((k) => m.name.toLowerCase().includes(k))
      ),
      Desserts: meals.filter((m) =>
        [
          "cheesecake",
          "tiramisu",
          "soufflé",
          "chocolate",
          "dessert",
          "cake",
        ].some((k) => m.name.toLowerCase().includes(k))
      ),
    };
    return categories;
  }, [meals]);

  const filteredMeals = useMemo(() => {
    let result =
      selectedCategory === "All" ? meals : categorizedMeals[selectedCategory];

    if (searchTerm) {
      result = result.filter((meal) =>
        meal.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return result;
  }, [meals, selectedCategory, searchTerm, categorizedMeals]);

  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Desserts"];

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="menu-hero py-5 text-center"
        style={{ backgroundColor: "#FFF3E0" }}
      >
        <div className="container text-center">
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="display-4 fw-bold text-[#5D4037] mb-3"
          >
            Our Delicious Menu
          </motion.h1>
          <p className="lead text-muted mb-5">
            Fresh ingredients • Handcrafted with love • Delivered hot
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
            <div className="position-relative">
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control form-control-lg rounded-pill ps-5 shadow-sm"
                style={{ minWidth: "300px" }}
              />
            </div>

            <div className="d-flex gap-2 flex-wrap justify-content-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`btn rounded-pill px-4 ${
                    selectedCategory === cat
                      ? "btn-danger"
                      : "btn-outline-danger"
                  }`}
                >
                  {cat === "All" ? "All Dishes" : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {loading && (
        <div className="text-center py-5">
          <div
            className="spinner-border text-danger"
            style={{ width: "4rem", height: "4rem" }}
          ></div>
          <p className="mt-3 fs-4">Loading delicious meals...</p>
        </div>
      )}

      <section className="py-5" style={{ backgroundColor: "#FFF3E0" }}>
        <div className="container">
          <AnimatePresence mode="wait">
            {filteredMeals.length === 0 && !loading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-5"
              >
                <h3 className="text-muted">No dishes found</h3>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="btn btn-lg btn-danger rounded-pill mt-3 px-5"
                >
                  Show All Dishes
                </button>
              </motion.div>
            ) : (
              <motion.div layout className="row g-5 justify-content-center">
                {filteredMeals.map((dish) => (
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
