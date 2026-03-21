import { useSearchParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import products from "../data/products";
import "../styles/productDetails.css";

function ProductDetails() {
const [searchParams] = useSearchParams();
const id = parseInt(searchParams.get("id"));

const product = products.find((p) => p.id === id);

if (!product) {
return <h2 style={{ padding: "100px" }}>Product not found!</h2>;
}

return (
<> <Loader /> <Navbar />


  <div className="pro-container">
    <div className="product">
      <div className="product-images">
        <img
          id="main-image"
          src={`/Images/${product.mainImage}`}
          alt={product.name}
        />
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>

        <Link to="/contact#book-appointment2">
          <button className="product-book-button">
            Book An Appointment
          </button>
        </Link>
      </div>
    </div>
  </div>

  {/* Related Products */}
  <section className="featured-products-pro">

    {/* Custom Products */}
    <div className="section-title-det">
      <h2>
        <span>Related </span>Products
      </h2>

      <Link to="/CustomAll" className="productsee-all">
        See All →
      </Link>
    </div>

    <div className="product-grid-pro">
      {products
        .filter((p) => [1, 2, 6, 7].includes(p.id))
        .map((item) => (
          <div key={item.id} className="product-box-pro">
            <img
              src={`/Images/${item.mainImage}`}
              alt={item.name}
            />
            <h3>{item.name}</h3>
            <div className="stars">★★★★★</div>

            <Link
              to={`/ProductDetails?id=${item.id}`}
              className="get-tailored"
            >
              Get Tailored
            </Link>
          </div>
        ))}
    </div>

    {/* Bulk Products */}
    <div className="section-title-det" style={{ marginTop: "50px" }}>
      <h2>
        <span>Related </span>Products
      </h2>

      <Link to="/BulkOrder" className="productsee-all">
        See All →
      </Link>
    </div>

    <div className="bulk-grid-pro">
      {products
        .filter((p) => [18, 19].includes(p.id))
        .map((item) => (
          <div key={item.id} className="productwide-box-pro">
            <img
              src={`/Images/${item.mainImage}`}
              alt={item.name}
            />
            <h3>{item.name}</h3>
            <div className="stars">★★★★★</div>

            <Link
              to={`/ProductDetails?id=${item.id}`}
              className="get-tailored"
            >
              Get Tailored
            </Link>
          </div>
        ))}
    </div>

  </section>

  <Newsletter />
  <Footer />
</>


);
}

export default ProductDetails;
