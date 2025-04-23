import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/navbar';
import Hero from './components/hero';
import Product from './components/product';
import Catalog from './components/catalog';
import Contact from './components/contact';
import About from './components/about';
import Footer from './components/footer'; // Import footer

function App() {
  const [selectedCatalog, setSelectedCatalog] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Product setSelectedCatalog={setSelectedCatalog} />} />
        <Route path="/catalog" element={<Catalog selectedCatalog={selectedCatalog} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer /> {/* Displayed on all pages */}
    </Router>
  );
}

export default App;
