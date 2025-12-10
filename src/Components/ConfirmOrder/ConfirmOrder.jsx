import React, { useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ConfirmOrder() {
  const { state } = useLocation();
  const { order, customer, type } = state || {};
  const receiptRef = useRef();

  if (!order || !customer) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#FFF3E0", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Poppins', sans-serif" }}>
        <div className="text-center">
          <h2 style={{ fontSize: "3.5rem", color: "#5D4037", fontFamily: "'Playfair Display', serif" }}>No order found</h2>
          <Link to="/" style={{ display: "inline-block", marginTop: "2rem", background: "linear-gradient(45deg, #FF1744, #FF3D00)", color: "white", padding: "1rem 3rem", borderRadius: "60px", fontWeight: "700", textDecoration: "none" }}>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const orderDate = new Date(order.createdAt || Date.now()).toLocaleString("en-EG", { dateStyle: "medium", timeStyle: "short" });

  const handleDownloadPDF = async () => {
    if (!receiptRef.current) return;
    const element = receiptRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Order_${order._id?.slice(-8).toUpperCase() || "Receipt"}.pdf`);
  };

  return (
    <div className="confirm-page" style={{ padding: "2rem", fontFamily: "'Poppins', sans-serif", backgroundColor: "#FFF3E0", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", fontFamily: "'Playfair Display', serif", color: "#5D4037" }}>
        Thank You, <span style={{ background: "linear-gradient(90deg, #E64A19, #FF6E40)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{customer.name.split(" ")[0]}</span>!
      </h1>
      <p style={{ textAlign: "center", color: "#6D4C41", fontSize: "1.3rem" }}>
        Your order has been placed successfully<br />
        <strong style={{ color: "#ff5722", fontSize: "1.5rem" }}>Order #{order._id?.slice(-8).toUpperCase()}</strong>
      </p>

      <div ref={receiptRef} style={{ maxWidth: "800px", margin: "2rem auto", background: "white", borderRadius: "20px", padding: "2rem", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}>
        <h2 style={{ textAlign: "center", fontFamily: "'Playfair Display', serif", color: "#5D4037" }}>Order Receipt</h2>
        <p style={{ textAlign: "center", color: "#FF5722", fontWeight: "600" }}>{orderDate} • {type}</p>

        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", background: "#FFF8F0", padding: "1rem", borderRadius: "10px", margin: "1.5rem 0" }}>
          <div><strong>Name:</strong> {customer.name}</div>
          <div><strong>Phone:</strong> {customer.phone}</div>
          {customer.email && <div><strong>Email:</strong> {customer.email}</div>}
          {type === "Delivery" && customer.address && <div><strong>Address:</strong> {customer.address}</div>}
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse", margin: "2rem 0" }}>
          <thead>
            <tr style={{ background: "#FFEBE6", color: "#D84315" }}>
              <th style={{ padding: "0.8rem" }}>Item</th>
              <th style={{ padding: "0.8rem", textAlign: "center" }}>Qty</th>
              <th style={{ padding: "0.8rem", textAlign: "right" }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {order.items?.map((item, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #FFCCBC" }}>
                <td style={{ fontWeight: 600 }}>{item.name}</td>
                <td style={{ textAlign: "center" }}>{item.quantity}</td>
                <td style={{ textAlign: "right", color: "#ff5722", fontWeight: 600 }}>{(item.price * item.quantity).toFixed(2)} EGP</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ textAlign: "right", fontSize: "1.8rem", fontWeight: "900", color: "#ff5722" }}>
          Total: {(order.total || 0).toFixed(2)} EGP
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button onClick={handleDownloadPDF} style={{ background: "linear-gradient(45deg, #FF1744, #FF3D00)", color: "white", padding: "1rem 3rem", borderRadius: "60px", fontWeight: "700", fontSize: "1.3rem", cursor: "pointer", marginRight: "1rem" }}>
          Download PDF
        </button>
        <br/>
                <br/>
        

        <Link to="/" style={{ background: "transparent", color: "#ff5722", border: "2px solid #ff5722", padding: "1rem 2.5rem", borderRadius: "60px", fontWeight: "700", textDecoration: "none" }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
