// import React, { useEffect, useState } from "react";
// import Navbar from "../component/Navbar";
// import Footer from "../component/footer"; // ✅ import Footer
// import contact from "../component/Contacts";

// const Home = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const myFun = async () => {
//       const res = await fetch('https://dummyjson.com/products/search?q=phone');
//       const products = await res.json();
//       setData(products.products);
//     };
//     myFun();
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
//         {data.slice(0,5).map((item) => (
//           <div
//             key={item.id}
//             style={{
//               border: "1px solid #ccc",
//               padding: "10px",
//               width: "200px",
//               borderRadius: "8px",
//               boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
//             }}
//           >
//             <img src={item.thumbnail} alt={item.title} width="100%" />
//             <h3>{item.brand || item.title}</h3>
//             <p>₹{item.price}</p>
//             <p>{item.category}</p>
//           </div>
//         ))}
//       </div>

//       <Footer /> 
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/footer"; 
import contact from "../component/Contacts";
import Banner from "../component/Banner";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const myFun = async () => {
      const res = await fetch('https://dummyjson.com/products/search?q=phone');
      const products = await res.json();
      setData(products.products);
    };
    myFun();
  }, []);

  return (
    <>
      <Navbar />
      <Banner/>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px", justifyContent: "center" }}>
        {data.slice(0, 7).map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              width: "250px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={item.thumbnail} alt={item.title} width="100%" style={{ borderRadius: "8px", height: "160px", objectFit: "cover" }} />
            <h3 style={{ margin: "10px 0 5px" }}>{item.title}</h3>
            <p style={{ margin: "5px 0", color: "#555" }}>{item.brand}</p>
            <p style={{ fontWeight: "bold", fontSize: "18px" }}>₹{item.price}</p>
            <p style={{ margin: "5px 0", color: "green" }}>Discount: {item.discountPercentage}%</p>
            <p style={{ fontSize: "14px", color: "#888" }}>⭐ {item.rating} | Stock: {item.stock}</p>
            <p style={{ fontSize: "13px", color: "#666", marginTop: "10px" }}>
              {item.description.slice(0, 50)}...
            </p>
            <button style={{
              marginTop: "10px",
              padding: "8px 12px",
              border: "none",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer"
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>


      





      <Footer />
    </>
  );
};

export default Home;

