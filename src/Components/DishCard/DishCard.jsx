import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../../CartContext/CartContext";
import toast from "react-hot-toast";

export default function DishCard({ _id, name, price, img, description = "", best = false }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ _id, name, price, img, description });
    toast.success(`${name} added to cart!`, {
      position: "top-center",
      duration: 1500,
      style: {
        background: "#FF1744",
        color: "white",
        fontWeight: "bold",
        borderRadius: "12px",
        fontSize: "16px",
        padding: "10px 18px",
      },
    });
  };

  return (
    <motion.div
      layout
      whileHover={{ y: -12, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white rounded-3xl overflow-hidden shadow-2xl"
      style={{ maxWidth: "300px", width: "100%" }}
    >
      <div className="position-relative">
        <img
          src={img?.startsWith("http") ? img : `/${img}`}
          alt={name}
          className="w-100"
          style={{ height: "200px", objectFit: "cover" }}
          onError={(e) => (e.target.src = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1200")}
        />
        {best && (
          <div className="position-absolute top-0 start-0 bg-danger text-white px-3 py-1 rounded-bottom-end rounded-top-start fw-bold small">
            Best Seller
          </div>
        )}
      </div>

      <div className="p-3">
        <h3 className="fs-5 fw-bold text-[#5D4037] mb-1">{name}</h3>
        {description && (
          <p className="text-muted mb-2 small line-clamp-2">{description}</p>
        )}
        <p className="fs-4 fw-black text-danger mb-3">{price} EGP</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAdd}
          className="w-100 btn btn-sm text-white fw-bold rounded-pill shadow-lg"
          style={{
            background: "linear-gradient(45deg, #FF3D00, #FF1744)",
            padding: "10px 0",
          }}
        >
          Add to Order
        </motion.button>
      </div>
    </motion.div>
  );
}
