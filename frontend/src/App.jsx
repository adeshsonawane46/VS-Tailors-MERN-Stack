import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import CustomAll from "./pages/CustomAll";
import BulkOrder from "./pages/BulkOrder";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
    
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CustomAll" element={<CustomAll />} />
        <Route path="/BulkOrder" element={<BulkOrder />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;