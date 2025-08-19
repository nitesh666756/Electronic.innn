import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        padding: "50px 20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: "40px",
      }}
    >
      {/* Brand Info */}
      <div style={{ flex: "1 1 200px", margin: "10px" }}>
        <h2 style={{ color: "#f5b70a" }}>My Electronics Store</h2>
        <p>
          Your one-stop destination for the latest and most affordable
          electronics. Quality assured with fast delivery.
        </p>
        <p style={{ marginTop: "10px", fontSize: "14px" }}>
          &copy; 2025 and further All rights reserved.
        </p>
      </div>

      {/* Customer Service */}
      <div style={{ flex: "1 1 200px", margin: "10px" }}>
        <h3>Customer Service</h3>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
          <li><a href="/help" style={linkStyle}>Help Center</a></li>
          <li><a href="/returns" style={linkStyle}>Returns</a></li>
          <li><a href="/shipping" style={linkStyle}>Shipping Info</a></li>
          <li><a href="/track" style={linkStyle}>Track Order</a></li>
        </ul>
      </div>

      {/* Company Info */}
      <div style={{ flex: "1 1 200px", margin: "10px" }}>
        <h3>Company</h3>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
          <li><a href="/about" style={linkStyle}>About Us</a></li>
          <li><a href="/careers" style={linkStyle}>Careers</a></li>
          <li><a href="/contact" style={linkStyle}>Contact</a></li>
          
        </ul>
      </div>

      
      <div style={{ flex: "1 1 200px", margin: "10px" }}>
        <h3>Connect With Us</h3>
        <p>📍 Ramnagar, Bihar, India</p>
        <p>📞 +91 7903695312</p>
        <p>✉️ support@electronicsstore.com</p>
        <div style={{ marginTop: "10px" }}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" style={iconLink}>Facebook</a> |
          <a href="https://instagram.com" target="_blank" rel="noreferrer" style={iconLink}>Instagram</a> |
          <a href="https://twitter.com" target="_blank" rel="noreferrer" style={iconLink}>Twitter</a>
        </div>
      </div>
    </footer>
  );
};

const linkStyle = {
  color: "#bbb",
  textDecoration: "none",
};

const iconLink = {
  color: "#f5b70a",
  margin: "0 8px",
  textDecoration: "none",
  fontWeight: "bold",
};

export default Footer;

