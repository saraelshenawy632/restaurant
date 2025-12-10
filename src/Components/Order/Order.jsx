import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext/CartContext";

export default function Order() {
  const {
    cart,
    totalItems,
    totalPrice,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
  } = useCart();
  const navigate = useNavigate();

  const [orderType, setOrderType] = useState("Delivery");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    dateTime: "",
    guests: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setLoading(true);

    setTimeout(() => {
      clearCart();
      navigate("/confirm-order", {
        state: {
          order: { items: cart, total: totalPrice },
          customer: formData,
          type: orderType,
        },
      });
      setLoading(false);
    }, 500);
  };

  if (cart.length === 0) {
    return (
      <div
        className="min-vh-100 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#FFF3E0" }}
      >
        <div className="text-center p-4">
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3rem",
              fontWeight: 900,
              color: "#5D4037",
            }}
          >
            Your Cart is{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #E64A19, #FF6E40)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Empty
            </span>
          </h1>
          <p className="fs-5 text-muted mb-4">
            Let's add some delicious meals!
          </p>
          <Link
            to="/menu"
            className="btn btn-lg px-4 py-2 rounded-pill fw-bold"
            style={{
              background: "linear-gradient(45deg, #FF1744, #FF3D00)",
              color: "white",
            }}
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4" style={{ backgroundColor: "#FFF3E0" }}>
      <h1
        className="text-center mb-4"
        style={{ color: "#5D4037", fontWeight: 900, fontSize: "2.5rem" }}
      >
        Complete Your Order
      </h1>

      {/* Cart Items */}
      <div className="card mb-4 p-3">
        <h3 className="mb-3">Your Items ({totalItems})</h3>
        {cart.map((item) => (
          <div
            key={item._id}
            className="d-flex flex-wrap align-items-center justify-content-between mb-3 p-2"
            style={{ background: "#FFF8F0", borderRadius: "12px" }}
          >
            <img
              src={item.img?.startsWith("http") ? item.img : `/${item.img}`}
              alt={item.name}
              style={{
                width: "80px",
                height: "80px",
                maxWidth: "20%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <div className="flex-grow-1 ms-3 me-3">
              <h5 className="mb-1" style={{ fontSize: "1rem" }}>
                {item.name}
              </h5>
              <small>{item.price} EGP each</small>
            </div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <button
                onClick={() => decreaseQty(item._id)}
                className="btn btn-outline-danger btn-sm"
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increaseQty(item._id)}
                className="btn btn-danger btn-sm"
              >
                +
              </button>
            </div>
            <div className="text-end ms-3">
              <p className="mb-1 fw-bold text-danger">
                {(item.price * item.quantity).toFixed(2)} EGP
              </p>
              <button
                onClick={() => removeItem(item._id)}
                className="btn btn-sm btn-link text-danger p-0"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="text-end mt-2">
          <h4>Total: {totalPrice} EGP</h4>
        </div>
      </div>

      {/* Order Type */}
      <div className="text-center mb-3">
        {["Delivery", "Pickup", "Dine In"].map((type) => (
          <button
            key={type}
            onClick={() => setOrderType(type)}
            className={`btn mx-1 my-1 ${
              orderType === type ? "btn-danger" : "btn-outline-danger"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Customer Info */}
      <div className="card p-3 mb-4">
        <h3 className="mb-3">Your Information</h3>
        <form onSubmit={handleSubmit}>
          <div className="row g-2">
            <div className="col-12 col-md-6">
              <input
                type="text"
                placeholder="Full Name *"
                className="form-control"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="col-12 col-md-6">
              <input
                type="email"
                placeholder="Email (optional)"
                className="form-control"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="col-12 col-md-6">
              <input
                type="tel"
                placeholder="Phone *"
                className="form-control"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            {orderType === "Delivery" && (
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  placeholder="Delivery Address *"
                  className="form-control"
                  required
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>
            )}
            {(orderType === "Pickup" || orderType === "Dine In") && (
              <div className="col-12 col-md-6">
                <input
                  type="datetime-local"
                  className="form-control"
                  value={formData.dateTime}
                  onChange={(e) =>
                    setFormData({ ...formData, dateTime: e.target.value })
                  }
                />
              </div>
            )}
            {orderType === "Dine In" && (
              <div className="col-12 col-md-6">
                <select
                  className="form-control"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                >
                  <option value="">Number of Guests</option>
                  {[1, 2, "3-4", "5-8", "9+"].map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>
            )}
            <div className="col-12">
              <textarea
                rows="4"
                placeholder="Notes, allergies..."
                className="form-control"
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
              ></textarea>
            </div>
          </div>

          <div className="text-center mt-3">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-danger"
              style={{
                background: "linear-gradient(45deg, #FF1744, #FF3D00)",
                color: "white",
                padding: "0.8rem 2.5rem",
                borderRadius: "50px",
                fontWeight: "600",
                fontSize: "1.1rem",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading
                ? "Placing Order..."
                : `Confirm Order – ${totalPrice} EGP`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
