import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import "../styles/style.css";
import "../styles/about.css";

function About() {
  return (
    <>
      <Loader />
      <Navbar />

      {/* Hero Section */}
      <section id="about-hero">
        <h2>About VS Tailors 👔</h2>
        <p>Crafting Your Perfect Fit with Passion and Precision</p>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <div className="about-container">
          <div className="about-text">
            <h2>
              Who <span>We Are</span>
            </h2>

            <p>
              Welcome to <strong>VS Tailors</strong>, your trusted name in custom tailoring and professional uniform manufacturing for over <strong>31 years</strong>. Established in <strong>1993</strong>, we have been delivering exceptional craftsmanship, perfect fits, and high-quality uniforms to individuals and businesses alike.
            </p>

            <p>
              With a <strong>5-star rating on Google</strong>, our expertise extends beyond personal tailoring to large-scale uniform production for hospitals, schools, corporate offices, and showrooms. From premium suits, shirts, pants, coats, blazers, and jackets to industrial and corporate uniforms, we ensure precision in every stitch. We also offer convenient <strong>doorstep measurement services</strong>, providing a seamless and personalized experience.
            </p>

            <p>
              Our skilled team blends traditional tailoring craftsmanship with modern trends to create garments that reflect quality, comfort, and elegance. Whether it’s a single custom outfit or bulk production, we maintain the same dedication to excellence in every order. <strong>At VS Tailors, we don’t just stitch clothes — we create confidence.</strong>
            </p>
          </div>

          <div className="about-image">
            <img src="/Images/About us img.jpg" alt="Tailoring Craft" />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-by">
        <h2>
          Trusted<span> By</span>
        </h2>
        <p className="trusted-subtitle">
          Proudly serving schools, hospitals, corporates & businesses for over 31+ years.
        </p>

        <div className="client-grid">
          {[
              "Fravashi International Academy",
              "Fravashi Town",
              "Agrifert India Pvt Ltd",
              "Patil & Shah Group",
              "Belleza Unisex Studio Salon",
              "Rohan Travels",
              "Brandroot Salon & Spa Ltd",
              "Go Green Cabs",
              "Neocare Hospital",
              "Sulakhe Hospital",
              "Larive Kitchen and Cocktail",
              "Lifecare Hospital",
              "Guruji Hospital",
              "Bright Future Education Group",
              "Six Sigma Hospital",
              "Vakratund Parcel Point",
              "Shrikrishna Engineering Co",
              "Progress Engineering",
              "Shantanu Bottling Machines",
              "Wellness Multi Speciality Hospital",
              "Mark Mall Pvt Ltd",
              "Car Mall",
              "Mr. Automotive",
              "Takle Bandhu Saraf",
              "K.P. Auto Services",
              "Excellent Group of Hotel",
              "Om Saikrupa Car Services",
              "Scorpion Enterprises",
              "Racca Sales & Services\n(Maruti-Suzuki)",
              "Tattva Supplements Private\nLimited",
              "Sanika Facility Services\nPrivate Limited",
              "Sanjit Instruments Private\nLimited",
          ].map((client, index) => (
            <div key={index} className="client-card">
              {client}
            </div>
          ))}
        </div>

        <p className="more-clients">
          <strong>…and many more trusted clients.</strong>
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-modern">
        <div className="mission-vision-container">
          <div className="mission-vision-card">
            <div className="icon">🎯</div>
            <h2>Our Mission</h2>
            <p>
              At <strong>VS Tailors</strong>, our mission is to craft garments that combine timeless artistry with modern style. We bring comfort, elegance, and confidence into every piece while delivering personalized service.
            </p>
          </div>

          <div className="mission-vision-card">
            <div className="icon">👁️</div>
            <h2>Our Vision</h2>
            <p>
              We aim to be India’s most trusted tailoring brand — known for precision, innovation, and customer-first service. Our vision is to redefine tailoring by blending tradition with modern trends.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values-modern">
        <div className="core-values-container">
          <h2>
            Our<span> Core Values</span>
          </h2>

          <p className="core-subtitle">
            The principles that shape every stitch at <strong>VS Tailors</strong>
          </p>

          <div className="values-grid">
            <div className="value-card">
              <div className="icon">🧵</div>
              <h3>Precision Craftsmanship</h3>
              <p>
                Every detail matters. We ensure each stitch reflects elegance and quality.
              </p>
            </div>

            <div className="value-card">
              <div className="icon">🤝</div>
              <h3>Customer Satisfaction</h3>
              <p>
                Your comfort and happiness are at the heart of every design we create.
              </p>
            </div>

            <div className="value-card">
              <div className="icon">🚪</div>
              <h3>Free Home Service</h3>
              <p>
                We bring the tailoring experience to your doorstep for ultimate convenience.
              </p>
            </div>

            <div className="value-card">
              <div className="icon">💼</div>
              <h3>Professional Team</h3>
              <p>
                Our experienced team ensures a seamless, high-quality tailoring journey.
              </p>
            </div>

            <div className="value-card">
              <div className="icon">🎯</div>
              <h3>On-Time Delivery</h3>
              <p>
                We value your time. Every order is delivered promptly without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="founders-section">
        <h2 className="team-title">
          Meet<span> Our Founders</span>
        </h2>
        <p class="team-subtitle">The people behind VS Tailors, working together to deliver quality and trust.</p>

        <div className="team-container">
          <div className="team-card">
            <div className="image-box bg-orange">
              <img src="/Images/VS Tailor Papa .jpg" alt="Founder 1" />
            </div>
            <h3>Vikas Sonawane</h3>
            <p className="role">Founder & CEO</p>
          </div>

          <div className="team-card">
            <div className="image-box bg-green">
              <img src="/Images/Krushna.png" alt="Founder 2" />
            </div>
            <h3>Krushnal Patil</h3>
            <p className="role">Head of Marketing</p>
          </div>

          <div className="team-card">
            <div className="image-box bg-pink">
              <img src="/Images/Akash Photo.png" alt="Founder 3" />
            </div>
            <h3>Akash Sonawane</h3>
            <p className="role">Creative Director</p>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}

export default About;