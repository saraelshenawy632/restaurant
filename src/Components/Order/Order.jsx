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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setLoading(true);

    const orderPayload = {
      items: cart.map((i) => ({
        _id: i._id,
        name: i.name,
        price: i.price,
        img: i.img || "",
        quantity: Number(i.quantity),
      })),
      customer: {
        name: formData.name,
        email: formData.email || null,
        phone: formData.phone,
        address: orderType === "Delivery" ? formData.address : "",
      },
      total: totalPrice,
      type: orderType === "Dine In" ? "Dine In Reservation" : orderType,
      notes: formData.notes || "",
      dateTime: formData.dateTime || "",
      guests: formData.guests || "",
    };

    try {
      const res = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      if (res.ok) {
        const order = await res.json();
        clearCart();
        navigate("/confirm-order", {
          state: { order, customer: formData, type: orderType },
        });
      } else {
        const errorData = await res.json();
        alert(`Failed to place order: ${errorData.message}`);
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div
        className="min-vh-100 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#FFF3E0" }}
      >
        <div className="text-center p-5">
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "5rem",
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
          <p className="fs-3 text-muted mb-5">
            Let's add some delicious meals!
          </p>
          <Link
            to="/menu"
            className="btn btn-lg px-5 py-3 rounded-pill fw-bold"
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
    <div className="container " style={{ backgroundColor: "#FFF3E0" }}>
      <h1
        className="text-center mb-5"
        style={{ color: "#5D4037", fontWeight: 900 }}
      >
        Complete Your Order
      </h1>

      <div className="card mb-5 p-4">
        <h3 className="mb-4">Your Items ({totalItems})</h3>
        {cart.map((item) => (
          <div
            key={item._id}
            className="d-flex align-items-center justify-content-between mb-3 p-3"
            style={{ background: "#FFF8F0", borderRadius: "12px" }}
          >
            <img
              src={item.img?.startsWith("http") ? item.img : `/${item.img}`}
              alt={item.name}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
            <div className="flex-grow-1 ms-3">
              <h5 className="mb-1">{item.name}</h5>
              <small>{item.price} EGP each</small>
            </div>
            <div className="d-flex align-items-center gap-2">
              <button
                onClick={() => decreaseQty(item._id)}
                className="btn btn-outline-danger"
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increaseQty(item._id)}
                className="btn btn-danger"
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
                className="btn btn-sm btn-link text-danger"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="text-end mt-3">
          <h3>Total: {totalPrice} EGP</h3>
        </div>
      </div>

      <div className="text-center mb-4">
        {["Delivery", "Pickup", "Dine In"].map((type) => (
          <button
            key={type}
            onClick={() => setOrderType(type)}
            className={`btn mx-2 ${
              orderType === type ? "btn-danger" : "btn-outline-danger"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="card p-4">
        <h3 className="mb-4">Your Information</h3>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
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
            <div className="col-md-6">
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
            <div className="col-md-6">
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
              <div className="col-md-6">
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
              <div className="col-md-6">
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
              <div className="col-md-6">
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

          <div className="text-center mt-4">
            <button
              type="submit"
              disabled={loading}
              style={{
                background: "linear-gradient(45deg, #FF1744, #FF3D00)",
                color: "white",
                padding: "1rem 3rem",
                borderRadius: "60px",
                fontWeight: "700",
                fontSize: "1.3rem",
                cursor: loading ? "not-allowed" : "pointer",
                boxShadow: "0 10px 25px rgba(255,23,68,0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = loading
                  ? "none"
                  : "translateY(-3px) scale(1.02)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
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
