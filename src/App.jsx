// import React from 'react';
// import { BrowserRouter,Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Products from './pages/Products';

// import Navbar from './component/Navbar';
// import Contacts from './component/Contacts';
// import ProductDetail from './component/ProductDetail';

// const App = () => {
//   return (
//     <>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/contacts" element={<Contacts />} />
//         <Route path="/details-page/:id" element={<ProductDetail />} />
//         {/* Optional: 404 page */}
//         <Route path="*" element={<h1>404 - Page Not Found</h1>} />
//       </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contacts from './component/Contacts';   
import ProductDetail from './component/ProductDetail'; 
import Cart from './pages/cart'; 
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/details-page/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />  
          {/* Optional: 404 page */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

