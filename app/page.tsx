"use client";

import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Phone,
  Car,
  Ruler,
  BadgeCheck,
} from "lucide-react";

export default function Home() {
  return (
    <main>

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="container">

          <div className="logo">

            <Image
              src="/logo.png"
              alt="Homes Real Estate"
              width={80
              
              }
              height={70}
              priority
            />

            <div>

              <h2>HOMES</h2>

              <p>Real Estate & Commercial</p>

            </div>

          </div>

          <nav>

            <a href="#home">Home</a>

            <a href="#about">About</a>

            <a href="#offices">Offices</a>

            <a href="#contact">Contact</a>

          </nav>

          <a
            href="https://wa.me/201000000000"
            className="nav-btn"
          >
            Contact Us
          </a>

        </div>

      </header>

      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <Image
          src="/images/hero2.jpg"
          alt="Office Building"
          fill
          priority
          className="hero-image"
        />

        <div className="overlay"></div>

        <div className="hero-content">

          <span className="small-title">

            COMMERCIAL REAL ESTATE

          </span>

          <h1>

            Find Your Perfect
            <br />
            Office Space

          </h1>

          <p>

            HOMES Real Estate & Commercial
            specializes in premium office
            buildings, headquarters and
            investment opportunities across Egypt.

          </p>

          <div className="hero-buttons">

            <a href="#offices" className="primary-btn">

              Explore Offices

              <ArrowRight size={18} />

            </a>

            <a

              href="tel:+201000000000"

              className="secondary-btn"

            >

              <Phone size={18} />

              Call Now

            </a>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="stats">

        <div className="container stats-grid">

          <div>

            <h2>5000+</h2>

            <p>Properties Sold</p>

          </div>

          <div>

            <h2>25+</h2>

            <p>Years Experience</p>

          </div>

          <div>

            <h2>300+</h2>

            <p>Commercial Offices</p>

          </div>

          <div>

            <h2>100%</h2>

            <p>Business Focused</p>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section
        className="about container"
        id="about"
      >

        <div className="about-text">

          <span className="section-tag">

            ABOUT US

          </span>

          <h2>

            Egypt's Trusted 
          Commercial Real Estate Consultant
            

          </h2>

          <p>

            We help businesses find premium office
            buildings, corporate headquarters and
            investment opportunities in the best
            commercial districts across Egypt.

          </p>

          <div className="about-features">

            <div>

              <Building2 />

              <span>
                Premium Office Buildings
              </span>

            </div>

            <div>

              <Ruler />

              <span>
                Large Commercial Spaces
              </span>

            </div>

            <div>

              <Car />

              <span>
                Dedicated Parking
              </span>

            </div>

            <div>

              <BadgeCheck />

              <span>
                Professional Brokerage
              </span>

            </div>

          </div>

        </div>

        <div className="about-image">

          <Image
            src="/images/about2.jpg"
            alt="Office"
            width={500}

            
            height={500}
          />

        </div>

      </section>
      {/* ================= FEATURED OFFICE ================= */}

      <section className="featured" id="offices">

        <div className="container">

          <div className="section-heading">

            <span>FEATURED OFFICE</span>

            <h2>Premium Office Building</h2>

            <p>
              A modern commercial office building designed for companies looking
              for premium workspace in New Cairo.
            </p>

          </div>

          <div className="office-card">

            <div className="office-image">

              <Image
                src="/images/office-main.jpg"
                alt="Office Building"
                width={650}
              
                
                height={550}
              />

            </div>

            <div className="office-info">

              <h3>
                Office Building
              </h3>

              <div className="office-grid">

                <div className="info-box">

                  <Ruler size={28} />

                  <div>

                    <h4>Area</h4>

                    <p>
                      1,200 sqm
                    </p>

                    <small>
                      (1,200 sqm Fully Finished private entrance )
                    </small>

                  </div>

                </div>

                <div className="info-box">

                  <Car size={28} />

                  <div>

                    <h4>Parking</h4>

                    <p>8 Dedicated Spaces</p>

                  </div>

                </div>

                <div className="info-box">

                  <Building2 size={28} />

                  <div>

                    <h4>price

                    
                    </h4>

                    <p>900,000egp</p>

                    <small>
                    
              
                    </small>

                  </div>

                </div>

                <div className="info-box">

                  <BadgeCheck size={28} />

                  <div>

                    <h4>Availability</h4>

                    <p>
                      Ready 60 Days After Contract Signing
                    </p>

                  </div>

                </div>

              </div>

              <div className="location-box">

                <h4>Location</h4>

                <p>
                  90 South Street, New Cairo
                </p>

              </div>

              <div className="office-buttons">

                <a
                  href="tel:+201000000000"
                  className="primary-btn"
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/201000000000"
                  className="secondary-btn"
                >
                  WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>





      {/* ================= CONTACT ================= */}

      <section className="contact" id="contact">

        <div className="container contact-box">

          <h2>
            Looking For Your Next Office?
          </h2>

          <p>
            Contact HOMES Real Estate & Commercial today and let our specialists
            help you find the ideal office space for your business.
          </p>

          <div className="contact-buttons">

            <a
              href="tel:+201000000000"
              className="primary-btn"
            >
              📞 Call Us
            </a>

            <a
              href="https://wa.me/201000000000"
              className="secondary-btn"
            >
              💬 Chat on WhatsApp
            </a>

          </div>

        </div>

      </section>





      {/* ================= FLOATING WHATSAPP ================= */}

      <a
        href="https://wa.me/201000000000"
        target="_blank"
        className="floating-whatsapp"
      >
        <span>💬</span>

        <div>

          <strong>WhatsApp</strong>

          <small>Chat with us</small>

        </div>

      </a>





      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container footer-content">

          <div className="footer-logo">

            <Image
              src="/logo.png"
              alt="Homes Logo"
              width={60}
              height={60}
            />

            <div>

              <h3>
                HOMES
              </h3>

              <p>
                Real Estate & Commercial
              </p>

            </div>

          </div>

          <p className="copyright">

            © 2026 HOMES Real Estate & Commercial.
            All Rights Reserved.

          </p>

        </div>

      </footer>
    </main>
  );
}