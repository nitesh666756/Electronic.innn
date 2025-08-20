// components/Navbar.jsx
// components/Navbar.jsx
import React from "react";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ import Link

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contacts" style={styles.link}>Contacts</Link>
      </div>

      <div style={styles.logo}>ये हाथ हमको दे दे ठाकुर!</div>

      <div style={styles.right}>
        <FaSearch style={styles.icon} />
        <Link to="/signin" style={styles.link}>Sign In</Link>
        <FaHeart style={styles.icon} />

        {/* ✅ Cart Icon with Link */}
        <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
          <div style={styles.cartIcon}>
            <FaShoppingCart />
            <span style={styles.cartBadge}>0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 50px",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
    fontFamily: "sans-serif",
    fontSize: "15px",
  },
  left: {
    display: "flex",
    gap: "20px",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "24px",
    letterSpacing: "5px",
  },
  link: {
    cursor: "pointer",
    textDecoration: "none",
    color: "black",
  },
  icon: {
    cursor: "pointer",
  },
  cartIcon: {
    position: "relative",
    cursor: "pointer",
  },
  cartBadge: {
    position: "absolute",
    top: "-10px",
    right: "-10px",
    backgroundColor: "orange",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px",
    color: "white",
  },
};

export default Navbar;
