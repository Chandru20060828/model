import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      image: "/images/service1.jpg",
      title: "Premium Service",
      description:
        "We provide reliable and high-quality services for our customers."
    },
    {
      image: "/images/service2.jpg",
      title: "Quality Products",
      description:
        "Our products are carefully selected to provide excellent value."
    },
    {
      image: "/images/service3.jpg",
      title: "Customer Support",
      description:
        "We are always available to help our customers with their needs."
    }
  ];

  const products = [
    {
      image: "/images/product1.jpg",
      name: "Product One",
      price: "₹999"
    },
    {
      image: "/images/product2.jpg",
      name: "Product Two",
      price: "₹1,499"
    },
    {
      image: "/images/product3.jpg",
      name: "Product Three",
      price: "₹1,999"
    }
  ];

  return (
    <div>

      {/* NAVBAR */}

      <header className="navbar">
        <div className="container nav-container">

          <div className="logo">
            Your Business
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>

            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>

            <a href="#products" onClick={() => setMenuOpen(false)}>
              Products
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

          </nav>

        </div>
      </header>


      {/* HERO */}

      <section id="home" className="hero">

        <div className="container hero-content">

          <div className="hero-text">

            <p className="small-title">
              WELCOME TO OUR BUSINESS
            </p>

            <h1>
              Quality Products.
              <br />
              Trusted Service.
            </h1>

            <p>
              We provide high-quality products and reliable
              services for our customers.
            </p>

            <div className="hero-buttons">

              <a href="#products" className="primary-button">
                View Products
              </a>

              <a href="#contact" className="secondary-button">
                Contact Us
              </a>

            </div>

          </div>


          <div className="hero-image">

            <img
              src="/images/hero.jpg"
              alt="Our Business"
            />

          </div>

        </div>

      </section>


      {/* SERVICES */}

      <section id="services" className="section">

        <div className="container">

          <div className="section-heading">

            <p className="small-title">
              WHAT WE OFFER
            </p>

            <h2>Our Services</h2>

            <p>
              We focus on quality, reliability and customer
              satisfaction.
            </p>

          </div>


          <div className="card-grid">

            {services.map((service, index) => (

              <div className="service-card" key={index}>

                <img
                  src={service.image}
                  alt={service.title}
                />

                <div className="card-content">

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* PRODUCTS */}

      <section id="products" className="section products-section">

        <div className="container">

          <div className="section-heading">

            <p className="small-title">
              OUR PRODUCTS
            </p>

            <h2>Featured Products</h2>

          </div>


          <div className="card-grid">

            {products.map((product, index) => (

              <div className="product-card" key={index}>

                <img
                  src={product.image}
                  alt={product.name}
                />

                <div className="card-content">

                  <h3>{product.name}</h3>

                  <p className="price">
                    {product.price}
                  </p>

                  <a
                    href="#contact"
                    className="product-button"
                  >
                    Enquire Now
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section id="about" className="about-section">

        <div className="container about-container">

          <div className="about-image">

            <img
              src="/images/about.jpg"
              alt="About us"
            />

          </div>


          <div className="about-text">

            <p className="small-title">
              ABOUT US
            </p>

            <h2>
              Your Trusted Local Business
            </h2>

            <p>
              We are committed to providing quality products
              and excellent service to our customers.
            </p>

            <p>
              Our goal is to build long-term relationships
              with our customers through trust and quality.
            </p>

            <a
              href="#contact"
              className="primary-button"
            >
              Get In Touch
            </a>

          </div>

        </div>

      </section>


      {/* CONTACT */}

      <section id="contact" className="contact-section">

        <div className="container contact-container">

          <div>

            <p className="small-title">
              CONTACT US
            </p>

            <h2>
              Let's Talk About Your Requirements
            </h2>

            <p>
              Contact us today to know more about our
              products and services.
            </p>

          </div>


          <div className="contact-details">

            <p>
              📞 <strong>+91 98765 43210</strong>
            </p>

            <p>
              ✉️ example@gmail.com
            </p>

            <p>
              📍 Coimbatore, Tamil Nadu
            </p>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-button"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer>

        <div className="container footer-content">

          <h3>Your Business</h3>

          <p>
            Quality products. Trusted service.
          </p>

          <p className="copyright">
            © 2026 Your Business. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;