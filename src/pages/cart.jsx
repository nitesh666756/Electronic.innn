import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "40px" }}>
        <h2>Your Cart 🛒</h2>

        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #ddd",
                  padding: "15px",
                  borderRadius: "10px",
                  background: "#fff",
                }}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <h3>{item.title}</h3>
                <p>₹{item.price * 83}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    background: "red",
                    color: "#fff",
                    padding: "8px 15px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
