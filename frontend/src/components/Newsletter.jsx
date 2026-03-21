import { useState } from "react";
import "../styles/newsletter.css";

function Newsletter() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <h2>📩 Stay Updated with Us!</h2>

        <p>
          Subscribe to our newsletter for the latest updates,
          exclusive offers, and style inspiration. Also, join our
          WhatsApp Channel for instant alerts!
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>

        <div className="whatsapp-link">
          <a
            href="https://whatsapp.com/channel/0029Vb5Uyq060eBbN0qagp06"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/Images/WhatsApp Icon.png"
              alt="WhatsApp"
            />{" "}
            Join WhatsApp Channel
          </a>
        </div>

        {showSuccess && (
          <div
            style={{
              color: "green",
              fontSize: "1.2rem",
              marginTop: "10px",
            }}
          >
            Thank you for subscribing! You'll receive the
            latest updates soon.
          </div>
        )}
      </div>
    </section>
  );
}

export default Newsletter;