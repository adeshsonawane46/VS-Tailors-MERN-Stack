import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import "../styles/BulkOrder.css";

function BulkOrder() {
  const bulkProducts = [
    { id: 16, name: "School Uniforms", img: "School Uniforms1.png" },
    { id: 17, name: "College Uniforms", img: "College Uniforms.png" },
    { id: 18, name: "Hospital Uniforms", img: "Hospital Uniforms.png" },
    { id: 19, name: "Corporate Uniforms", img: "Corporate Uniforms bulk.png" },
    { id: 20, name: "Garage Uniforms", img: "Garage Uniforms.png" },
    { id: 21, name: "Petrol Pump Uniforms", img: "Petrol pump Uniforms.png" },
    { id: 22, name: "Hotel Uniforms", img: "Hotel Uniforms.png" },
    { id: 23, name: "Bouncer Uniforms", img: "Bouncers Uniform.png" },
    { id: 24, name: "Security Uniforms", img: "Security Uniforms.png" },
    { id: 25, name: "Airline Staff Uniforms", img: "Airlines Uniforms.png" },
    { id: 26, name: "Salon Uniforms", img: "Saloon Uniform.png" },
    { id: 27, name: "T-Shirts", img: "Tshirts.png" },
    { id: 28, name: "Police Uniforms", img: "Police Uniforms.png" },
    { id: 29, name: "Dhol Tasha Kurta Uniforms", img: "Dhol Tasha Uniforms.png" },
    { id: 30, name: "Wedding Package", img: "Wedding Package.png" },
    { id: 31, name: "Family Package", img: "Family Pack.png" },
  ];

  return (
    <>
      <Loader />
      <Navbar />

      <section className="featured-products-bulk">
        <div className="section-title-bulk">
          <h2>
            Bulk Stitching <span>Orders</span>
          </h2>
        </div>

        <div className="bulk-grid">
          {bulkProducts.map((product) => (
            <div key={product.id} className="productwide-box">
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

export default BulkOrder;