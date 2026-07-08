export default function Home() {
  return (
    <main>

      <header className="header">
        <div className="logo">
          HOMES REAL ESTATE
        </div>

        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#offices">Offices</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>


      <section className="hero">

        <div className="hero-content">

          <h1>
            Premium Office Spaces
            <span>
              For Modern Businesses
            </span>
          </h1>

          <p>
            Homes Real Estate provides professional
            commercial office solutions for companies
            looking for the perfect workplace.
          </p>

          <a className="hero-btn" href="#offices">
            Check Our Offices
          </a>

        </div>

      </section>



      <section id="about" className="about">

        <h2>
          About Homes Real Estate
        </h2>

        <p>
          We specialize in commercial real estate,
          helping businesses find professional offices
          in strategic locations.
        </p>

        <p>
          Our experience and market knowledge help
          clients choose the right property.
        </p>

      </section>





      <section id="services" className="services">

        <h2>
          Our Services
        </h2>


        <div className="cards">

          <div className="card">
            <h3>Office Leasing</h3>
            <p>
              Finding suitable office spaces for businesses.
            </p>
          </div>


          <div className="card">
            <h3>Commercial Properties</h3>
            <p>
              Professional spaces for companies and investors.
            </p>
          </div>


          <div className="card">
            <h3>Real Estate Consulting</h3>
            <p>
              Expert guidance for property decisions.
            </p>
          </div>

        </div>

      </section>





      <section className="facts">

        <h2>
          Why Choose Us
        </h2>


        <div className="stats">

          <div>
            <h3>25+</h3>
            <p>Years Experience</p>
          </div>

          <div>
            <h3>7000+</h3>
            <p>Successful Deals</p>
          </div>

          <div>
            <h3>2000+</h3>
            <p>Happy Clients</p>
          </div>

          <div>
            <h3>100%</h3>
            <p>Professional Service</p>
          </div>

        </div>

      </section>






      <section id="offices" className="offices">

        <h2>
          Check Our Offices
        </h2>

        <p>
          Explore our modern office spaces and commercial projects.
        </p>


        <div className="office-grid">


          <div className="office-card">

            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
              alt="Modern office"
            />

            <h3>
              Corporate Offices
            </h3>

            <p>
              Modern offices designed for professional businesses.
            </p>

          </div>




          <div className="office-card">

            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
              alt="Executive office"
            />

            <h3>
              Executive Offices
            </h3>

            <p>
              Premium workspaces with modern designs.
            </p>

          </div>




          <div className="office-card">

            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c"
              alt="Business center"
            />

            <h3>
              Business Centers
            </h3>

            <p>
              Flexible spaces for growing companies.
            </p>

          </div>


        </div>

      </section>






      <section id="contact" className="contact">

        <h2>
          Contact Homes Real Estate
        </h2>

        <p>
          📞 01223339652
        </p>

        <p>
          📧 amiryehia.homes@yahoo.com
        </p>

        <p>
          📍 10 Mostafa Kamel St., Maadi, Cairo, Egypt
        </p>

      </section>




      <a
        className="whatsapp"
        href="https://wa.me/201223339652"
        target="_blank"
      >
        WhatsApp
      </a>


    </main>
  );
}