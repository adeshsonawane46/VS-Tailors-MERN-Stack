import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

import "../styles/style.css";
import "../styles/Products.css";

function Products() {
  return (
    <>
      <Navbar />
      <Loader />

      {/* SHOP HERO */}
      <section id="Shop-hero">
        <h2>#stayhome</h2>
        <p>Grab the Best Deals – Save Up to 30% Off!</p>
      </section>

      {/* Custom Tailoring Section */}
      <section className="featured-products-product">
        <div className="section-title-product">
          <h2>
            Custom Tailoring <span>For Men</span>
          </h2>
          <Link to="/CustomAll" className="productsee-all">
            See All →
          </Link>
        </div>

        <div className="product-grid">
          <div className="product-box">
            <img src="/Images/Formal-Shirt.png" alt="Formal Dress" />
            <h3>Formal Dress</h3>
            <div className="stars">★★★★★</div>
            <Link to="/ProductDetails?id=1" className="get-tailored">
              Get Tailored
            </Link>
          </div>

          <div className="product-box">
            <img src="/Images/coat pant.png" alt="Blazer" />
            <h3>Blazer</h3>
            <div className="stars">★★★★★</div>
            <Link to="/ProductDetails?id=2" className="get-tailored">
              Get Tailored
            </Link>
          </div>

          <div className="product-box">
            <img src="/Images/Kurta.png" alt="Kurta" />
            <h3>Kurta Pajama</h3>
            <div className="stars">★★★★★</div>
            <Link to="/ProductDetails?id=3" className="get-tailored">
              Get Tailored
            </Link>
          </div>
        </div>
      </section>

      {/* Bulk Orders Section */}
      <section className="featured-products-product">
        <div className="section-title-product">
          <h2>
            Bulk Stitching <span>Orders</span>
          </h2>
          <Link to="/BulkOrder" className="productsee-all">
            See All →
          </Link>
        </div>

        <div className="bulk-grid">
          <div className="productwide-box">
            <img src="/Images/School Uniforms1.png" alt="School Uniforms" />
            <h3>School Uniforms</h3>
            <div className="stars">★★★★★</div>
            <Link to="/ProductDetails?id=16" className="get-tailored">
              Get Tailored
            </Link>
          </div>

          <div className="productwide-box">
            <img src="/Images/Hotel Uniforms.png" alt="Hotel Uniforms" />
            <h3>Hotel Uniforms</h3>
            <div className="stars">★★★★★</div>
            <Link to="/ProductDetails?id=22" className="get-tailored">
              Get Tailored
            </Link>
          </div>

          <div className="productwide-box">
            <img src="/Images/Hospital Uniforms.png" alt="Hospital Uniforms" />
            <h3>Hospital Uniforms</h3>
            <div className="stars">★★★★★</div>
            <Link to="/ProductDetails?id=18" className="get-tailored">
              Get Tailored
            </Link>
          </div>

          <div className="productwide-box">
            <img src="/Images/Corporate Uniforms bulk.png" alt="Corporate Uniforms" />
            <h3>Corporate Uniforms</h3>
            <div className="stars">★★★★★</div>
            <Link to="/ProductDetails?id=19" className="get-tailored">
              Get Tailored
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}

export default Products;