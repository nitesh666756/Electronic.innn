// import React, { useEffect, useState } from "react";
// import Navbar from "../component/Navbar";
// import Footer from "../component/footer";
// import Banner from "../component/Banner";
// import { useNavigate } from "react-router-dom";
// import "./Home.css"

// const Home = () => {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const myFun = async () => {
//       try {
//         const res = await fetch("https://dummyjson.com/products?limit=8");
//         const products = await res.json();
//         setData(products.products);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     };
//     myFun();
//   }, []);

//   const handleSub = (id) => {
//     navigate(`/details-page/${id}`);
//   };

//   return (
//     <>
//       <Navbar />
//       <Banner />

//       {/* Breadcrumbs */}
//       <div style={{ padding: "20px", color: "#888", fontSize: "14px" }}>
//         <span style={{ color: "#f9a825", fontWeight: "bold" }}>All</span> / Bags & Backpacks / Decoration / Essentials / Interior
//       </div>

//       {/* Product Grid */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
//           gap: "30px",
//           padding: "20px 40px",
//           backgroundColor: "#f9f9f9",
//         }}
//       >
//     {data.map((item) => (
//   <div key={item.id} className="product-card">
//     {/* Badges */}
//     <div className="badges">
//       <span className="badge new">New</span>
//       {item.discountPercentage > 0 && (
//         <span className="badge discount">-{Math.round(item.discountPercentage)}%</span>
//       )}
//     </div>

//     {/* Image container */}
//     <div className="image-container">
//       <img src={item.thumbnail} alt={item.title} />
//       <button
//         className="add-to-cart-btn"
//         onClick={() => handleSub(item.id)}
//       >
//         + Add to Cart
//       </button>
//     </div>

//     {/* Title & Price */}
//     <h3>{item.title}</h3>
//     <p className="old-price">₹{Math.floor(item.price * 1.2)}</p>
//     <p className="price">₹{item.price * 83}</p>

//     {/* Color variants */}
//     <div className="color-variants">
//       <span className="color-dot black"></span>
//       <span className="color-dot gray"></span>
//       <span className="color-dot light-gray"></span>
//     </div>
//   </div>
// ))}

//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";
import Banner from "../component/Banner";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const myFun = async () => {
      try {
        
        const urls = [
          "https://dummyjson.com/products/category/smartphones",
          "https://dummyjson.com/products/category/laptops",
          "https://dummyjson.com/products/category/mens-shirts",
          "https://dummyjson.com/products/category/sunglasses",
          "https://dummyjson.com/products/category/home-decoration",
          "https://dummyjson.com/products/category/kitchen-accessories",
        ];

        const responses = await Promise.all(urls.map((url) => fetch(url)));
        const results = await Promise.all(responses.map((res) => res.json()));

        // merge all categories
        let combined = results.flatMap((r) => r.products);

        // shuffle for mixed look
        combined = combined.sort(() => Math.random() - 0.5);

        setData(combined);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    myFun();
  }, []);

  const handleSub = (id) => {
    navigate(`/details-page/${id}`);
  };

  return (
    <>
      <Navbar />
      <Banner />

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "30px",
          padding: "20px 40px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {data.map((item) => (
          <div key={item.id} className="product-card">
            {/* Badges */}
            <div className="badges">
              <span className="badge new">New</span>
              {item.discountPercentage > 0 && (
                <span className="badge discount">
                  -{Math.round(item.discountPercentage)}%
                </span>
              )}
            </div>

            {/* Image container */}
            <div className="image-container">
              <img src={item.thumbnail} alt={item.title} />
              <button
                className="add-to-cart-btn"
                onClick={() => handleSub(item.id)}
              >
                + Add to Cart
              </button>
            </div>

            {/* Title & Price */}
            <h3>{item.title}</h3>
            <p className="old-price">₹{Math.floor(item.price * 1.2 * 83)}</p>
            <p className="price">₹{item.price * 83}</p>

            {/* Color variants */}
            <div className="color-variants">
              <span className="color-dot black"></span>
              <span className="color-dot gray"></span>
              <span className="color-dot light-gray"></span>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Home;
