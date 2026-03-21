import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import "../styles/CustomAll.css";

function CustomAll() {
  const products = [
    { id: 1, name: "Formal Dress", img: "Formal-Shirt.png" },
    { id: 2, name: "Blazer", img: "coat pant.png" },
    { id: 3, name: "Kurta Pajama", img: "Kurta.png" },
    { id: 4, name: "Safari Uniform", img: "Safari Uniform.png" },
    { id: 5, name: "Chef Uniform", img: "Chef Uniform.png" },
    { id: 6, name: "Doctor Apron / Lab Coat", img: "Doctor Apron.png" },
    { id: 7, name: "Modi Jacket", img: "Modi Jacket.png" },
    { id: 8, name: "Bouncer Uniform", img: "Bouncer.png" },
    { id: 9, name: "Waistcoat", img: "Waistcoat.png" },
    { id: 10, name: "Wedding Sherwani", img: "Wedding Sherwani.png" },
    { id: 11, name: "Pathani Suit", img: "Pathani Suit.png" },
    { id: 12, name: "Overcoat / Trench Coat", img: "Overcoat.png" },
    { id: 13, name: "Jodhpuri Suit / Bandhgala Suit", img: "Jodhpuri Suit.png" },
    { id: 14, name: "Boiler Suit", img: "Boiler Suit.png" },
    { id: 15, name: "Kitchen Apron", img: "Kitchen Apron.png" },
  ];

  return (
    <>
      <Loader />
      <Navbar />

      <section className="featured-products-custom">
        <div className="section-title-custom">
          <h2>
            Custom Tailoring <span>For Men</span>
          </h2>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-box">
              <img
                src={`/Images/${product.img}`}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <div className="stars">★★★★★</div>
              <Link
                to={`/ProductDetails?id=${product.id}`} 
                className="get-tailored"
              >
                Get Tailored
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Design Section */}
      <section className="custom-design-section">
        <div className="custom-wrapper">
          <h2>
            We craft <span>customized designs</span>
            <br />
            just the way you imagine!
          </h2>
          <p>
            No product images? No problem. Share your ideas,
            and we'll make it real.
          </p>
          <Link
            to="/contact#book-appointment2"
            className="appointment-btn"
          >
            📅 Book Your Appointment
          </Link>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}

export default CustomAll;