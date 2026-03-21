import "../styles/footer.css";

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-brand">
          <h2>VS Tailors</h2>
          <p>
            31+ Years of Excellence in Custom Tailoring &
            Uniform Manufacturing.
          </p>
          <p>Perfect Fit for Every Occasion!</p>
        </div>

        {/* Column 2 */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-hours">
          <h3>Business Hours</h3>
          <ul>
            <li>🕒 Mon - Sun: 9:00 AM - 9:00 PM</li>
            <li>📍 Nashik, Maharashtra, India</li>
            <li>📞 +91 9822771573</li>
            <li>📧 vsuniformmanufacturer@gmail.com</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-payment">
          <h3>We Accept</h3>
          <div className="payment-icons">
            <img
              src="/Images/payment Gateway Icons.png"
              alt="Payment Methods"
            />
          </div>
        </div>
      </div>

      {/* Social */}
      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a
            href="https://share.google/jWaG2gvEhZIGiskQo"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-google"></i>
          </a>

          <a
            href="https://www.instagram.com/vs_tailors_"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://whatsapp.com/channel/0029Vb5Uyq060eBbN0qagp06"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 VS Tailors. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;