// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { FaStar, FaStarHalfAlt, FaRegStar, FaTruck } from "react-icons/fa";

// const ProductDetail = () => {
//   const { id } = useParams(); // ✅ get product ID from route
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`https://dummyjson.com/products/${id}`);
//         const data = await res.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Failed to fetch product:", error);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   if (!product) return <p style={{ padding: "40px" }}>Loading product...</p>;

//   return (
//     <div style={{ padding: "40px", maxWidth: "1200px", margin: "auto", fontFamily: "sans-serif" }}>
//       <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
//         {/* Left: Product Image */}
//         <div style={{ flex: 1, minWidth: "300px" }}>
//           <img
//             src={product.thumbnail}
//             alt={product.title}
//             style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
//           />

//           <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
//             <button style={styles.cartBtn}>Add to Cart</button>
//             <button style={styles.buyBtn}>Buy Now</button>
//           </div>
//         </div>

//         {/* Right: Product Info */}
//         <div style={{ flex: 2, minWidth: "300px" }}>
//           <h2>{product.title}</h2>

//           <div style={{ color: "green", fontWeight: "bold", margin: "5px 0" }}>
//             Special offer: Extra ₹100 off
//           </div>

//           {/* Rating */}
//           <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
//             <span style={{ color: "gold" }}>
//               <FaStar />
//               <FaStar />
//               <FaStarHalfAlt />
//               <FaRegStar />
//             </span>
//             <span style={{ marginLeft: "10px", color: "#555" }}>{product.rating} stars</span>
//           </div>

//           {/* Price */}
//           <h3 style={{ color: "#B12704", fontSize: "28px" }}>₹{product.price * 83}</h3>
//           <p style={{ textDecoration: "line-through", color: "#888" }}>
//             ₹{Math.floor((product.price * 83) / (1 - product.discountPercentage / 100))}
//           </p>
//           <p style={{ color: "green" }}>You save {product.discountPercentage}%</p>

//           {/* Delivery */}
//           <div style={{ marginTop: "20px", color: "#555" }}>
//             <FaTruck style={{ marginRight: "8px" }} />
//             Delivery by <b>Tomorrow, 9AM</b> | <span style={{ color: "green" }}>Free</span>
//           </div>

//           {/* Highlights */}
//           <div style={{ marginTop: "20px" }}>
//             <h4>Highlights</h4>
//             <ul>
//               <li>Brand: {product.brand}</li>
//               <li>Stock: {product.stock}</li>
//               <li>Category: {product.category}</li>
//             </ul>
//           </div>

//           {/* Description */}
//           <div style={{ marginTop: "20px" }}>
//             <h4>Description</h4>
//             <p style={{ color: "#444" }}>{product.description}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   cartBtn: {
//     backgroundColor: "#ff9f00",
//     padding: "12px 30px",
//     border: "none",
//     borderRadius: "5px",
//     fontWeight: "bold",
//     cursor: "pointer",
//     color: "#fff",
//   },
//   buyBtn: {
//     backgroundColor: "#fb641b",
//     padding: "12px 30px",
//     border: "none",
//     borderRadius: "5px",
//     fontWeight: "bold",
//     cursor: "pointer",
//     color: "#fff",
//   },
// };

// export default ProductDetail;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { FaStar, FaStarHalfAlt, FaRegStar, FaTruck } from "react-icons/fa";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`https://dummyjson.com/products/${id}`);
//         const data = await res.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Failed to fetch product:", error);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   if (!product) return <p style={{ padding: "40px" }}>Loading product...</p>;

//   return (
//     <div style={{ padding: "40px", maxWidth: "1200px", margin: "auto", fontFamily: "sans-serif" }}>
//       <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
//         {/* Left: Product Images */}
//         <div style={{ flex: 1, minWidth: "300px" }}>
//           <img
//             src={product.thumbnail}
//             alt={product.title}
//             style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
//           />

//           {/* Thumbnail gallery */}
//           <div style={{ marginTop: "15px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
//             {product.images?.slice(0, 4).map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 alt="gallery"
//                 style={{
//                   width: "70px",
//                   height: "70px",
//                   borderRadius: "5px",
//                   objectFit: "cover",
//                   border: "1px solid #ddd",
//                   cursor: "pointer",
//                 }}
//               />
//             ))}
//           </div>

//           {/* Buttons */}
//           <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
//             <button style={styles.cartBtn}>Add to Cart</button>
//             <button style={styles.buyBtn}>Buy Now</button>
//           </div>
//         </div>

//         {/* Right: Product Info */}
//         <div style={{ flex: 2, minWidth: "300px" }}>
//           <h2>{product.title}</h2>

//           <div style={{ color: "green", fontWeight: "bold", margin: "5px 0" }}>
//             Special offer: Extra ₹100 off
//           </div>

//           {/* Rating */}
//           <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
//             <span style={{ color: "gold" }}>
//               <FaStar /> <FaStar /> <FaStarHalfAlt /> <FaRegStar />
//             </span>
//             <span style={{ marginLeft: "10px", color: "#555" }}>{product.rating} stars</span>
//           </div>

//           {/* Price */}
//           <h3 style={{ color: "#B12704", fontSize: "28px" }}>₹{product.price * 83}</h3>
//           <p style={{ textDecoration: "line-through", color: "#888" }}>
//             ₹{Math.floor((product.price * 83) / (1 - product.discountPercentage / 100))}
//           </p>
//           <p style={{ color: "green" }}>You save {product.discountPercentage}%</p>

//           {/* Delivery */}
//           <div style={{ marginTop: "20px", color: "#555" }}>
//             <FaTruck style={{ marginRight: "8px" }} />
//             Delivery by <b>Tomorrow, 9AM</b> | <span style={{ color: "green" }}>Free</span>
//           </div>

//           {/* Specifications */}
//           <div style={{ marginTop: "20px" }}>
//             <h4>Specifications</h4>
//             <ul>
//               <li><b>Brand:</b> {product.brand}</li>
//               <li><b>Category:</b> {product.category}</li>
//               <li><b>Stock:</b> {product.stock} items left</li>
//               <li><b>Warranty:</b> 1 Year Manufacturer Warranty</li>
//               <li><b>Return Policy:</b> 7 Days Replacement</li>
//             </ul>
//           </div>

//           {/* Description */}
//           <div style={{ marginTop: "20px" }}>
//             <h4>Product Description</h4>
//             <p style={{ color: "#444", lineHeight: "1.6" }}>
//               {product.description}. This {product.brand} {product.title} is one of the
//               best in its category, designed with premium build quality and modern
//               features. Perfect for work, entertainment, and gaming. 
//               Experience smooth performance and reliability with long-lasting durability.
//             </p>
//           </div>

//           {/* Reviews */}
//           <div style={{ marginTop: "20px" }}>
//             <h4>Customer Reviews</h4>
//             <div style={styles.reviewBox}>
//               <p><b>Yuvraj Sinha</b> ⭐⭐⭐⭐☆</p>
//               <p>Great product, value for money. Battery backup could be better.</p>
//             </div>
//             <div style={styles.reviewBox}>
//               <p><b>satyam kumar </b> ⭐⭐⭐⭐⭐</p>
//               <p>Excellent quality and fast delivery. Totally satisfied!</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   cartBtn: {
//     backgroundColor: "#ff9f00",
//     padding: "12px 30px",
//     border: "none",
//     borderRadius: "5px",
//     fontWeight: "bold",
//     cursor: "pointer",
//     color: "#fff",
//   },
//   buyBtn: {
//     backgroundColor: "#fb641b",
//     padding: "12px 30px",
//     border: "none",
//     borderRadius: "5px",
//     fontWeight: "bold",
//     cursor: "pointer",
//     color: "#fff",
//   },
//   reviewBox: {
//     border: "1px solid #ddd",
//     padding: "10px",
//     marginBottom: "10px",
//     borderRadius: "5px",
//     backgroundColor: "#fafafa",
//   },
// };

// export default ProductDetail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar, FaTruck } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(""); // 🔹 main image state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setMainImage(data.thumbnail); // 🔹 by default main image = thumbnail
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p style={{ padding: "40px" }}>Loading product...</p>;

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1200px",
        margin: "auto",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        {/* Left: Product Images */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          {/* Main Image */}
          <div
            style={{
              background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
              padding: "20px",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={mainImage} // 🔹 ab mainImage show hoga
              alt={product.title}
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "10px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Thumbnail gallery */}
          <div
            style={{
              marginTop: "15px",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {product.images?.slice(0, 4).map((img, idx) => (
              <div
                key={idx}
                onClick={() => setMainImage(img)} // 🔹 click par mainImage change
                style={{
                  background: "#f8f8f8",
                  padding: "5px",
                  borderRadius: "8px",
                  border:
                    mainImage === img ? "2px solid #fb641b" : "1px solid #ddd", // 🔹 active image border
                  cursor: "pointer",
                }}
              >
                <img
                  src={img}
                  alt="gallery"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "5px",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
            <button style={styles.cartBtn}>Add to Cart</button>
            <button style={styles.buyBtn}>Buy Now</button>
          </div>
        </div>

        {/* Right: Product Info */}
        <div style={{ flex: 2, minWidth: "300px" }}>
          <h2>{product.title}</h2>

          <div
            style={{ color: "green", fontWeight: "bold", margin: "5px 0" }}
          >
            Special offer: Extra ₹100 off
          </div>

          {/* Rating */}
          <div
            style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
          >
            <span style={{ color: "gold" }}>
              <FaStar /> <FaStar /> <FaStarHalfAlt /> <FaRegStar />
            </span>
            <span style={{ marginLeft: "10px", color: "#555" }}>
              {product.rating} stars
            </span>
          </div>

          {/* Price */}
          <h3 style={{ color: "#B12704", fontSize: "28px" }}>
            ₹{product.price * 83}
          </h3>
          <p style={{ textDecoration: "line-through", color: "#888" }}>
            ₹
            {Math.floor(
              (product.price * 83) / (1 - product.discountPercentage / 100)
            )}
          </p>
          <p style={{ color: "green" }}>
            You save {product.discountPercentage}%
          </p>

          {/* Delivery */}
          <div style={{ marginTop: "20px", color: "#555" }}>
            <FaTruck style={{ marginRight: "8px" }} />
            Delivery by <b>Tomorrow, 9AM</b> |{" "}
            <span style={{ color: "green" }}>Free</span>
          </div>

          {/* Specifications */}
          <div style={{ marginTop: "20px" }}>
            <h4>Specifications</h4>
            <ul>
              <li>
                <b>Brand:</b> {product.brand}
              </li>
              <li>
                <b>Category:</b> {product.category}
              </li>
              <li>
                <b>Stock:</b> {product.stock} items left
              </li>
              <li>
                <b>Warranty:</b> 1 Year Manufacturer Warranty
              </li>
              <li>
                <b>Return Policy:</b> 7 Days Replacement
              </li>
            </ul>
          </div>

          {/* Description */}
          <div style={{ marginTop: "20px" }}>
            <h4>Product Description</h4>
            <p style={{ color: "#444", lineHeight: "1.6" }}>
              {product.description}. This {product.brand} {product.title} is one
              of the best in its category, designed with premium build quality
              and modern features. Perfect for work, entertainment, and gaming.
              Experience smooth performance and reliability with long-lasting
              durability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  cartBtn: {
    backgroundColor: "#ff9f00",
    padding: "12px 30px",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#fff",
  },
  buyBtn: {
    backgroundColor: "#fb641b",
    padding: "12px 30px",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#fff",
  },
};

export default ProductDetail;
