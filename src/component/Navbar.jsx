// import React from "react";
// import './navbar.css';
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//     <nav className="navbar flex between wrapper">
//       <Link to="/" className="logo">Electronics.in</Link>
//       <ul className="navlist flex gap-3">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/products">Menu</Link></li>
//         <li><Link to="/about">About us</Link></li>
//         <li><Link to="/contacts">Contacts</Link></li>
//       </ul>
//     </nav>
//     </>
//   );
// };

// export default Navbar;



// import react from "react";
// import "./navbar.css"
// import { FaShoppingBag } from "react-icons/fa";
// const Navbar =()=>{
//     return(
//         <nav class="navbar flex between wrapper">
//             <a href="#" class="logo">Electronic.in</a>

//             <ul class= "navlist flex gap-3">
//               <li>
//                  <a href="#">Home</a>
//               </li> 
//                <li>
//                  <a href="#">Menu</a>
//               </li>
//                <li>
//                  <a href="#">Service</a>
//               </li>
//               <li>
//                  <a href="#">About us</a>
//               </li>
//                <li>
//                  <a href="#">Contacts</a>
//               </li>   
//             </ul>
               
//               <div class="destop-action flex gap-2">
//                 <a href="#" class="cart-icon">
//                   <FaShoppingBag />

//                     <span class="cart-value"></span>
//                 </a>
//                   <a href="#" class="btn">
//                     sign in
//                     &nbsp;
//                     <i class="fa-solid fa-arrow-right-from-bracket"></i>
//                   </a>
//                   <a href="#" class="hamburger">
//                      <i class="fa-solid fa-bars"></i>
//                   </a>

//               </div>

//             </nav>
//     )
// }

// export default Navbar ;

import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>  ⚡ Electronic.in </div>

      <ul style={styles.navLinks}>
        <li><a href="/" style={styles.link}>Home</a></li>
        <li><a href="/products" style={styles.link}>Products</a></li>
        <li><a href="/about" style={styles.link}>About</a></li>
        <li><a href="/contact" style={styles.link}>Contact</a></li>
      </ul>

      <div style={styles.rightSection}>
        <input type="text" placeholder="Search products..." style={styles.search} />
        <FaShoppingCart size={22} style={styles.cartIcon} />
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#1e1e2f',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '25px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  search: {
    padding: '7px 12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  cartIcon: {
    cursor: 'pointer',
  },
};

export default Navbar;
