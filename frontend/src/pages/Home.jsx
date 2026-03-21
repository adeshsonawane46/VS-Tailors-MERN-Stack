import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import "../styles/style.css";
import "../styles/productDetails.css";

function Home() {

    const [activeFAQ, setActiveFAQ] = useState(null);

  return (
    <>
      <Loader />
      <Navbar />

        {/* HERO SECTION */}
        <section id="hero">
          <Link to="/">
            <img
              src="/Images/VS Tailor Website Logo Fix.png"
              className="herologo"
              alt=""
            />
          </Link>

        <img
          src="/Images/Mobile hero1.jpg"
          className="hero-img hero-mobile"
          alt="VS Tailors Mobile"
        />

        <h4>Your Vision, Our Precision</h4>
        <p id="first">Tailoring Excellence for Men’s Wear & Uniforms.</p>
        <p id="second">5-Star Rated on Google!</p>

        <div className="both-buttons">
          <div>
            <Link to="/contact">
              <button className="book-home-service">
                Book Free Home Service
              </button>
            </Link>
          </div>

        <div>
          <Link to="/about">
            <button className="book-home-service">
              About Us
            </button>
          </Link>
        </div>
        </div>
    </section>

    {/* COLLECTIONS */}
    <div className="collections-container">
      {/* Men Collections */}
      <div className="collection men-collections">
        <h2>CUSTOM TAILORING FOR MEN</h2>
        <img
          src="/Images/Mens Shirt.png"
          className="mens-img"
          width="380"
          alt="VS Tailors"
        />
        <Link to="/CustomAll" className="explore-btn">
          <span>Explore All</span>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>

      {/* Professional Collections */}
      <div className="collection Professional-Uniforms">
        <h2>BULK STITCHING ORDERS</h2>
        <img
          src="/Images/Professional collection.png"
          width="380"
          alt="VS Tailors"
        />
        <Link to="/BulkOrder" className="explore-btn">
          <span>Explore All</span>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>

        {/* Home Service Collections */}
        <div className="collection BOOK-HOME-SERVICE">
          <h2>BOOK FREE HOME SERVICE</h2>
          <img
            src="/Images/Book Free Home Service.png"
            width="380"
            alt="VS Tailors"
          />
          <Link
            to="/contact#book-appointment2"
            className="explore-btn"
          >
            <span>Explore All</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
    </div>

    {/* ABOUT SECTION */}
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="/Images/About us img.jpg"
            alt="VS Tailors Shop"
          />
        </div>

        <div className="about-content">
          <h2>
            About <span>VS Tailors</span>
          </h2>

          <p>
            Welcome to VS Tailors, your trusted name in custom tailoring
            and professional uniform manufacturing for over 31+ years!
            Established in 1993, we have been delivering exceptional
            craftsmanship, perfect fits, and high-quality uniforms to
            individuals and businesses alike.
          </p>

          <p>
            With a 5-star rating on Google, our expertise extends beyond
            personal tailoring to large-scale uniform production for
            hospitals, schools, corporate offices, showrooms, and more.
            From premium suits, shirts, pants, coats, blazers, and jackets
            to industrial and corporate uniforms, we ensure precision in
            every stitch.
          </p>

          <Link to="/about" className="btn">
            Learn More <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
    </div>
    </section>

    {/* FEATURED PRODUCTS */}
    <section className="featured-products-home">
      <div className="section-title-home">
        <h2>
          Our <span>Featured Products</span>
        </h2>
      </div>

      <div className="product-grid">
        {/* Product 1 */}
        <div className="product-box">
          <img src="/Images/Formal-Shirt.png" alt="Product 1" />
          <h3>Formal Dress</h3>
          <div className="stars">★★★★★</div>
          <Link to="/ProductDetails?id=1" className="get-tailored">
            Get Tailored
          </Link>
        </div>

        {/* Product 2 */}
        <div className="product-box">
          <img src="/Images/coat pant.png" alt="Product 2" />
          <h3>Blazer</h3>
          <div className="stars">★★★★★</div>
          <Link to="/ProductDetails?id=2" className="get-tailored">
            Get Tailored
          </Link>
        </div>

        {/* Product 3 */}
        <div className="product-box">
          <img src="/Images/Kurta.png" alt="Product 3" />
          <h3>Kurta</h3>
          <div className="stars">★★★★★</div>
          <Link to="/ProductDetails?id=3" className="get-tailored">
            Get Tailored
          </Link>
        </div>
      </div>

    <div className="bulk-grid">
        {/* Product 18 */}
        <div className="productwide-box">
          <img
            src="/Images/Hospital Uniforms.png"
            alt="Hospital Uniforms"
          />
          <h3>Hospital Uniforms</h3>
          <div className="stars">★★★★★</div>
          <Link to="/ProductDetails?id=18" className="get-tailored">
            Get Tailored
          </Link>
        </div>

        {/* Product 19 */}
        <div className="productwide-box">
          <img
            src="/Images/Corporate Uniforms bulk.png"
            alt="Corporate Uniforms"
          />
          <h3>Corporate Uniforms</h3>
          <div className="stars">★★★★★</div>
          <Link to="/ProductDetails?id=19" className="get-tailored">
            Get Tailored
          </Link>
        </div>
      </div>

      {/* See All Button */}
      <div className="see-all-container">
        <Link to="/Products" className="see-all">
          See All <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </section>

    {/* OUR PROCESS SECTION */}
    <section className="our-process">
      <h2>
        How <span>Our Process</span> Works
      </h2>

      <div className="process-container">

        {/* Step 1 */}
        <div className="process-step">
          <img
            src="/Images/Process BOOK-Appointment.png"
            alt="Book Appointment"
          />
          <div className="step-number">1</div>
          <h3>Book an Appointment</h3>
          <p>
            Schedule a free home service via call or website.
            Our tailor visits your location at your convenience,
            ensuring a hassle-free and personalized experience.
          </p>
        </div>

        {/* Step 2 */}
        <div className="process-step">
          <img
            src="/Images/Process Measurement.png"
            alt="Pickup & Measurement"
          />
          <div className="step-number">2</div>
          <h3>Pickup & Measurement</h3>
          <p>
            Our tailor visits your home to take precise measurements
            or uses a sample outfit for reference, ensuring a comfortable
            and perfectly fitted outfit.
          </p>
        </div>

        {/* Step 3 */}
        <div className="process-step">
          <img
            src="/Images/Process Stitching.png"
            alt="Stitching"
          />
          <div className="step-number">3</div>
          <h3>Stitching & Customization</h3>
          <p>
            After finalizing the design, our expert tailors begin
            the precise stitching process, ensuring high-quality
            craftsmanship, perfect fitting, and attention to every detail.
          </p>
        </div>

        {/* Step 4 */}
        <div className="process-step">
          <img
            src="/Images/Process Delivery.png"
            alt="Trial & Delivery"
          />
          <div className="step-number">4</div>
          <h3>Trial & Delivery</h3>
          <p>
            Your outfit is ready! Our expert tailor delivers it to
            your doorstep, ensuring a perfect fit with a trial session.
            Quality-checked, packed, and delivered within 7 days!
          </p>
        </div>

      </div>
    </section>


    {/* WHY CHOOSE US SECTION */}
    <section className="why-choose-us">
      <h2>
        Why <span>Choose Us ?</span>
      </h2>

      <div className="achievements-container">

        {/* Happy Customers */}
        <div className="achievement-box">
          <div className="circle">
            <img
              src="/Images/Happy Customers.png"
              alt="Happy Customers"
            />
          </div>
          <h3>3,00,000+</h3>
          <p>Happy Customers</p>
        </div>

        {/* Experience */}
        <div className="achievement-box">
          <div className="circle">
            <img
              id="exper"
              src="/Images/31_years.png"
              alt="Experience"
            />
          </div>
          <h3>31+ Years</h3>
          <p>Industry Experience</p>
        </div>

        {/* Google Rating */}
        <div className="achievement-box">
          <div className="circle">
            <img
              src="/Images/Google Rating.png"
              alt="Google Rating"
            />
          </div>
          <h3 className="stars">★★★★★</h3>
          <p>Google Rating</p>
        </div>

        {/* Industries Served */}
        <div className="achievement-box">
          <div className="circle">
            <img
              src="/Images/Business Served.png"
              alt="Industries Served"
            />
          </div>
          <h3>500+</h3>
          <p>Businesses & Industries Served</p>
        </div>

        {/* Free Home Service */}
        <div className="achievement-box">
          <div className="circle">
            <img
              src="/Images/Free Home-Serv.png"
              alt="Home Service"
            />
          </div>
          <h3>Free</h3>
          <p>Home Service in City</p>
        </div>

      </div>
    </section>

        {/* FAQ SECTION */}
    <section className="faq-section">
      <h2>
        Frequently Asked <span>Questions</span>
      </h2>

      <div className="faq-container">

        {/* LEFT COLUMN */}
        <div className="faq-column">

          {[
            {
              question: "Do you offer home service ?",
              answer:
                "Yes! We provide free home service within the city. Our tailor will visit your location for measurements.",
            },
            {
              question: "How long does stitching take?",
              answer:
                "We take around 7 working days for normal stitching. Express service is available for urgent orders.",
            },
            {
              question: "Can I provide my own fabric?",
              answer:
                "Absolutely! You can provide your own fabric, and we will stitch it as per your chosen design.",
            },
            {
              question: "What payment methods do you accept?",
              answer:
                "We accept cash, UPI, bank transfers, and card payments.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`faq-item ${
                activeFAQ === index ? "active" : ""
              }`}
            >
              <div
                className="question"
                onClick={() =>
                  setActiveFAQ(activeFAQ === index ? null : index)
                }
              >
                <h3>{item.question}</h3>
                <span className="toggle-icon">
                  {activeFAQ === index ? "-" : "+"}
                </span>
              </div>

              {activeFAQ === index && (
                <div className="answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}

        </div>

        {/* RIGHT COLUMN */}
        <div className="faq-column">

          {[
            {
              question: "Do you offer corporate bulk orders?",
              answer:
                "Yes, we provide bulk stitching services for corporate and industrial uniforms.",
            },
            {
              question: "Is there a trial before final delivery?",
              answer:
                "Yes, we offer a fitting trial to ensure perfect size before final delivery.",
            },
            {
              question: "Do you make custom designs?",
              answer:
                "Yes, our designers help create custom styles based on your preferences.",
            },
            {
              question: "What if I need alterations?",
              answer:
                "We offer free alterations within 1 years of delivery.",
            },
          ].map((item, index) => {
            const realIndex = index + 4; // continue numbering

            return (
              <div
                key={realIndex}
                className={`faq-item ${
                  activeFAQ === realIndex ? "active" : ""
                }`}
              >
                <div
                  className="question"
                  onClick={() =>
                    setActiveFAQ(
                      activeFAQ === realIndex ? null : realIndex
                    )
                  }
                >
                  <h3>{item.question}</h3>
                  <span className="toggle-icon">
                    {activeFAQ === realIndex ? "-" : "+"}
                  </span>
                </div>

                {activeFAQ === realIndex && (
                  <div className="answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
          
    <Newsletter />
    <Footer />
    </>
  );
}

export default Home;