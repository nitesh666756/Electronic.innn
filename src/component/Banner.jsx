import React from "react";
import img from "../assests/cccadcdf-c2b7-403a-9fbe-34c62edc24ea.jpg"

const Banner = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        background: "linear-gradient(to right, #0052D4, #4364F7, #6FB1FC)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "40px",
        color: "white",
      }}
    >
      <div>
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>Electronics Sale</h1>
        <p style={{ fontSize: "20px" }}>Top brands | Best Deals | Limited Time</p>
        <p style={{ marginTop: "10px", fontSize: "16px" }}>
          Hurry up! Offers starting from <b>₹499</b>
        </p>
      </div>
      <img
        src={img}
        alt="Banner"
        style={{ height: "200px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
      />
    </div>
  );
};

export default Banner;



