import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Bags from "./pages/Bags";
import Perfume from "./pages/Perfume";
import Header from "./components/header/header";

import "./styles/style.scss";
import ProductCart from "./pages/productCart/ProductCart";
import Footer from "./components/footer/Footer";
import Catalog from "./pages/catalog/Catalog";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Header />
      <div></div>
      <Routes>
        <Route path="/arome" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/bads" element={<Bags />} />
        {/* <Route path="/perfume" element={<Perfume />} /> */}
        <Route path="/card" element={<ProductCart />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
