import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Footer from "./Components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="bg-secondary overflow-x-hidden scroll-smooth">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
