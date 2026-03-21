import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import "../styles/style.css";
import "../styles/contact.css";

function Contact() {

const location = useLocation();

const [formData, setFormData] = useState({
name: "",
email: "",
contact: "",
service: "Shirt",
customService: "",
quantity: 1,
notes: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  const token = localStorage.getItem("token");
  setIsLoggedIn(!!token);
}, []);

// Auto scroll when coming from product page
useEffect(() => {
if (location.hash) {
const element = document.querySelector(location.hash);
if (element) {
setTimeout(() => {
element.scrollIntoView({
behavior: "smooth",
block: "start"
});
}, 100);
}
}
}, [location]);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
  e.preventDefault();

  // 🔒 CHECK LOGIN
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login first to book an appointment");
    window.location.href = "/login";
    return;
  }

  setLoading(true);
  setSuccess(false);

  try {
    const res = await fetch(
      "/api/appointments",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // 🔒 send token
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (res.ok) {
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          contact: "",
          service: "Shirt",
          customService: "",
          quantity: 1,
          notes: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);

      }, 2000);

    } else {
      setLoading(false);
      alert(data.error || "Something went wrong");
    }

  } catch (err) {
    setLoading(false);
    alert("Network error. Backend may be down.");
  }
};

return (
<>
  <Loader />
  <Navbar />

  {/* Header */}
  <section id="page-header" className="about-header">
    <h2>#let's_talk</h2>
    <p>LEAVE A MESSAGE, We love to hear from you!</p>
  </section>

  {/* Contact Details */}
  <section id="contact-details" className="section-p1">
    <div className="details">
      <span>GET IN TOUCH</span>
      <h2>
        Visit Our Shop or Contact Us Today – We’re Ready to Assist You!
      </h2>
      <h3>Head Office</h3>

      <ul className="contact-info">
        <li>
          <img src="/Images/Location Icon.png" alt="Location" className="icon" />
          Pavan Nagar, Nashik, Maharashtra, India
        </li>

        <li>
          <img src="/Images/GST Logo.png" alt="GST" className="icon" />
          27AVNPS7632Q1ZG
        </li>

        <li>
          <img src="/Images/Gmail Icon.png" alt="Gmail" className="icon" />
          vsuniformmanufacturer@gmail.com
        </li>

        <li>
          <img src="/Images/Phone Icon.png" alt="Phone" className="icon" />
          +91 9822771573
        </li>

        <li>
          <img src="/Images/Time Icon.png" alt="Time" className="icon" />
          Monday to Sunday: 9:00 AM to 9:00 PM
        </li>
      </ul>
    </div>

    <div className="map">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7499.642925501256!2d73.75049627487181!3d19.97400925488406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb67804deed3%3A0xbda46acd88a6b294!2sVS%20Tailors%20and%20collections!5e0!3m2!1sen!2sin!4v1766410034583!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  </section>

  {/* Appointment Form */}
  <section className="form-section" id="book-appointment2">
    <div className="container1">
      <h1>
        📅 Book <span>Appointment</span>
      </h1>

      <h3>
        Get a free home service with our experts at VS Tailors. Fill in your
        details below!
      </h3>

      <form id="appointment-form" onSubmit={handleSubmit}>

        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="contact">Contact Number:</label>
        <input
          type="tel"
          id="contact"
          name="contact"
          placeholder="Enter your contact number"
          value={formData.contact}
          onChange={handleChange}
          required
        />

        <label htmlFor="service">Select Service:</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="Shirt">Shirt</option>
          <option value="Pant">Pant</option>
          <option value="Blazer">Blazer</option>
          <option value="Kurta">Kurta</option>
          <option value="Corporate-Uniforms">Corporate Uniforms</option>
          <option value="Hotel-Uniforms">Hotel Uniforms</option>
          <option value="Hospital-Uniforms">Hospital Uniforms</option>
          <option value="Garage-Uniforms">Garage Uniforms</option>
          <option value="School/College-Uniforms">
            School/College Uniforms
          </option>
          <option value="custom">Other (Specify)</option>
        </select>

        {formData.service === "custom" && (
          <input
            type="text"
            name="customService"
            placeholder="Specify service"
            value={formData.customService}
            onChange={handleChange}
          />
        )}

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <label htmlFor="notes">Additional Notes:</label>
        <textarea
          id="notes"
          name="notes"
          placeholder="Enter any additional details"
          rows="4"
          value={formData.notes}
          onChange={handleChange}
        />

        <button id="bookAppointmentbtn" type="submit">
          {loading ? "Submitting..." : "Submit"}
        </button>
        

        {loading && (
          <div style={{ color: "blue", fontSize: "1.2rem", marginTop: "10px" }}>
            ⏳ Submitting your appointment, please wait...
          </div>
        )}

      </form>

      {success && (
        <div id="success-message">
          ✅ Appointment booked successfully!
        </div>
      )}

    </div>
  </section>

  <Newsletter />
  <Footer />
</>

);
}

export default Contact;