import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

import Navbar from './component/Navbar';
import Contacts from './component/Contacts';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        {/* Optional: 404 page */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

