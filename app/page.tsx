"use client";

import { useMemo, useState } from "react";

type Listing = {
  id: number;
  title: string;
  location: string;
  area: string;
  price: string;
  type: string;
  image: string;
  parking?: string;
  description: string;
  features: string[];
};

const listings: Listing[] = [
  {
    id: 1,
    title: "Fully Finished Office – New Maadi",
    location: "New Maadi",
    area: "550 sqm",
    price: "Contact for price",
    type: "Office",
    image: "/images/office-1.jpg",
    parking: "4 cars",
    description:
      "Fully finished office in New Maadi. The property information shown in the original listing includes 550 sqm and parking for 4 cars.",
    features: ["Fully finished", "550 sqm", "4 cars"],
  },

  {
    id: 2,
    title: "Premium Office – Heliopolis Korba",
    location: "Heliopolis – Korba Street",
    area: "1,000 sqm",
    price: "960,000 EGP",
    type: "Corporate Office",
    image: "/images/office-2.jpg",
    parking: "2 cars",
    description:
      "Fully finished and unfurnished office in Heliopolis – Korba Street.",
    features: [
      "Fully finished",
      "Unfurnished",
      "Emergency exit",
      "Electrical generator",
      "Fire system",
      "Central AC",
      "2 cars",
    ],
  },

  {
    id: 3,
    title: "Office Building No. 2 – New Maadi",
    location: "New Maadi",
    area: "600 sqm",
    price: "400,000 EGP",
    type: "Office",
    image: "/images/office-3.jpg",
    parking: "5 cars",
    description:
      "Office Building No. 2 in New Maadi with a private entrance. The office is fully finished and was listed as under renovation and available now.",
    features: [
      "Fully finished",
      "Private entrance",
      "5 cars",
      "Under renovation",
      "Available now",
    ],
  },

  {
    id: 4,
    title: "Office Building No. 6 – Smart Village",
    location: "Smart Village – 6th of October",
    area: "700 sqm",
    price: "680,000 EGP",
    type: "Corporate Office",
    image: "/images/office-4.jpg",
    parking: "4 cars",
    description:
      "Fully finished and unfurnished office in Smart Village – October.",
    features: [
      "Fully finished",
      "Unfurnished",
      "4 cars",
      "Emergency exit",
      "Generator",
      "Fire system",
      "Central AC",
    ],
  },

  {
    id: 5,
    title: "Full Office Building – Furnished",
    location: "Location as shown in original listing",
    area: "3,350 sqm",
    price: "280,000,000 EGP",
    type: "Corporate Headquarters",
    image: "/images/office-5.jpg",
    description:
      "Large fully furnished office property consisting of a ground floor, 3 floors and a roof. The original listing states a sale price of 280 million EGP, with a 230 million EGP down payment and 50 million EGP installment.",
    features: [
      "3,350 sqm",
      "Ground floor + 3 floors + roof",
      "Fully furnished",
      "Elevators",
      "230M EGP down payment",
      "50M EGP installment",
    ],
  },

  {
    id: 6,
    title: "CFC New Cairo – Specification No. 8",
    location: "Ring Road – New Cairo",
    area: "920 sqm",
    price: "$55 / sqm including service",
    type: "Corporate Office",
    image: "/images/office-6.jpg",
    description:
      "Ground-floor office at CFC New Cairo. Fully finished and available from 1 August 2026.",
    features: [
      "CFC New Cairo",
      "Ground floor",
      "920 sqm gross area",
      "Fully finished",
      "Service included",
      "Available from 1 August 2026",
    ],
  },

  {
    id: 7,
    title: "Office Building No. 6 – Katameya",
    location: "Katameya Ring Road – New Cairo",
    area: "1,300 sqm per floor",
    price: "1,000 EGP/sqm Shell & Core",
    type: "Office Building",
    image: "/images/office-7.jpg",
    description:
      "Office Building No. 6 on Katameya Ring Road. The building has 3 floors, with approximately 1,300 sqm per floor.",
    features: [
      "3 floors",
      "1,300 sqm each floor",
      "Shell & Core: 1,000 EGP/sqm",
      "Fully furnished: 1,400 EGP/sqm",
      "Service included with furnished option",
    ],
  },

  {
    id: 8,
    title: "Office Space 3 – Maadi New",
    location: "Ring Road – Degla Maadi",
    area: "750 sqm",
    price: "650,000 EGP",
    type: "Office",
    image: "/images/office-8.jpg",
    description:
      "Fully finished second-floor office space in Degla Maadi. The listing includes a roof smoking area and rent including service.",
    features: [
      "Second floor",
      "750 sqm",
      "Fully finished",
      "Roof smoking area",
      "Rent including service",
    ],
  },

  {
    id: 9,
    title: "Office Floors – New Cairo",
    location: "New Cairo – Street 90",
    area: "3,000 sqm",
    price: "Contact for price",
    type: "Corporate Office",
    image: "/images/office-9.jpg",
    description:
      "Office space covering the second and third floors on Street 90 in New Cairo.",
    features: [
      "Floors 2 + 3",
      "3,000 sqm",
      "New Cairo",
      "Street 90",
    ],
  },

  {
    id: 10,
    title: "Office Building – Sheraton",
    location: "Sheraton – beside Mobil Station",
    area: "950 sqm",
    price: "200,000 EGP",
    type: "Office Building",
    image: "/images/office-10.jpg",
    description:
      "Office building in Sheraton beside the Mobil station. The property consists of 4 floors with approximately 255 sqm per floor.",
    features: [
      "950 sqm total",
      "4 floors",
      "Approximately 255 sqm per floor",
      "Fully finished",
      "Maintenance not included",
    ],
  },

  {
    id: 11,
    title: "Cairo Business Complex – Sheraton",
    location: "Sheraton – Cairo Airport",
    area: "1,000–3,000 sqm",
    price: "700 EGP/sqm Shell & Core",
    type: "Corporate Office",
    image: "/images/office-11.jpg",
    description:
      "Cairo Business Complex near Cairo Airport with office areas from 1,000 to 3,000 sqm.",
    features: [
      "1,000–3,000 sqm",
      "2-level parking",
      "10 cars per floor",
      "Shell & Core: 700 EGP/sqm",
      "Finished: 1,000 EGP/sqm",
      "Maintenance included",
      "Emergency exit",
      "Generator",
      "Fire system",
      "Central AC",
      "5-year contract",
      "Finished after 7 months",
    ],
  },

  {
    id: 12,
    title: "Office Space 3 – Sheraton",
    location: "Sheraton / Nasr City",
    area: "580 sqm",
    price: "500,000+ EGP",
    type: "Office",
    image: "/images/office-12.jpg",
    description:
      "Open-space, fully finished office in Sheraton / Nasr City.",
    features: [
      "580 sqm",
      "Open space",
      "Fully finished",
      "Emergency exit",
      "24-hour security",
      "Generator",
      "Fire system",
      "Central AC",
      "6 bathrooms",
    ],
  },

  {
    id: 13,
    title: "Office – Smart Village",
    location: "Smart Village – 6th of October",
    area: "1,033 sqm",
    price: "450,000 EGP including service",
    type: "Corporate Office",
    image: "/images/office-13.jpg",
    description:
      "Fully finished office in Smart Village. The listing states 1,033 sqm with floor areas of approximately 400 and 600 sqm available.",
    features: [
      "1,033 sqm",
      "Fully finished",
      "400 sqm floor option",
      "600 sqm floor option",
      "$29/sqm",
      "Service included",
    ],
  },

  {
    id: 14,
    title: "Fully Finished Office",
    location: "Contact us for location",
    area: "500 sqm",
    price: "Contact for price",
    type: "Office",
    image: "/images/office-14.jpg",
    parking: "6 cars",
    description:
      "Fully finished 500 sqm office with parking for 6 cars. The original price information in the photo was not clear enough to reproduce safely.",
    features: [
      "500 sqm",
      "Fully finished",
      "6 cars",
    ],
  },

  {
    id: 15,
    title: "Office Building No. 4 – New Maadi",
    location: "New Maadi",
    area: "700 sqm",
    price: "440,000 EGP including maintenance",
    type: "Office",
    image: "/images/office-16.jpg",
    parking: "2 cars",
    description:
      "Fully finished Office Building No. 4 in New Maadi. Rent includes maintenance.",
    features: [
      "700 sqm",
      "Fully finished",
      "2 cars",
      "Maintenance included",
      "Generator",
      "Emergency exit",
      "Fiber optics",
      "Split AC",
    ],
  },

  {
    id: 16,
    title: "Office Building A12 – Smart Village",
    location: "Smart Village – 6th of October",
    area: "500 sqm",
    price: "175,000 EGP including service",
    type: "Corporate Office",
    image: "/images/office-18.jpg",
    description:
      "Fully finished office in Office Building A12 at Smart Village. One floor is available.",
    features: [
      "500 sqm",
      "One floor available",
      "Fully finished",
      "$21/sqm",
      "Service included",
    ],
  },
];

export default function ListingsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [type, setType] = useState("All Types");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const locations = [
    "All Locations",
    "New Maadi",
    "Maadi",
    "New Cairo",
    "Heliopolis",
    "Sheraton",
    "Nasr City",
    "Smart Village",
    "6th of October",
    "Katameya",
  ];

  const types = [
    "All Types",
    "Office",
    "Corporate Office",
    "Corporate Headquarters",
    "Office Building",
  ];

  const filteredListings = useMemo(() => {
    const query = search.toLowerCase().trim();

    return listings.filter((listing) => {
      const matchesSearch =
        !query ||
        listing.title.toLowerCase().includes(query) ||
        listing.location.toLowerCase().includes(query) ||
        listing.area.toLowerCase().includes(query) ||
        listing.description.toLowerCase().includes(query) ||
        listing.features.some((feature) =>
          feature.toLowerCase().includes(query)
        );

      const matchesLocation =
        location === "All Locations" ||
        listing.location.toLowerCase().includes(location.toLowerCase());

      const matchesType =
        type === "All Types" || listing.type === type;

      return matchesSearch && matchesLocation && matchesType;
    });
  }, [search, location, type]);

  return (
    <main className="listings-page">
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f5f8fc;
          color: #102a43;
        }

        .listings-page {
          min-height: 100vh;
          background: #f5f8fc;
        }

        .listings-hero {
          min-height: 390px;
          padding: 100px 24px 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(
              rgba(5, 30, 65, 0.78),
              rgba(5, 30, 65, 0.82)
            ),
            url("/images/hero2.jpg") center/cover;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          color: white;
        }

        .hero-badge {
          display: inline-block;
          padding: 9px 18px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 999px;
          font-size: 13px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
          background: rgba(255, 255, 255, 0.08);
        }

        .hero-content h1 {
          margin: 0;
          font-size: clamp(42px, 7vw, 72px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: -2px;
        }

        .hero-content p {
          margin: 22px auto 0;
          max-width: 700px;
          font-size: 18px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
        }

        .filters-wrapper {
          max-width: 1200px;
          margin: -42px auto 45px;
          padding: 0 20px;
          position: relative;
          z-index: 5;
        }

        .filters {
          background: white;
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 15px 45px rgba(11, 49, 88, 0.14);
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 14px;
        }

        .search-box,
        .select-box {
          height: 52px;
          border: 1px solid #d9e2ec;
          border-radius: 10px;
          background: white;
          color: #102a43;
          font-size: 15px;
          padding: 0 15px;
          width: 100%;
          outline: none;
        }

        .search-box:focus,
        .select-box:focus {
          border-color: #1769aa;
          box-shadow: 0 0 0 3px rgba(23, 105, 170, 0.1);
        }

        .results {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px 80px;
        }

        .results-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 25px;
        }

        .results-header h2 {
          margin: 0;
          color: #0b2f55;
          font-size: 28px;
        }

        .results-header span {
          color: #627d98;
          font-size: 14px;
        }

        .listings-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 25px;
        }

        .listing-card {
          background: white;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #e1e8ef;
          box-shadow: 0 8px 30px rgba(11, 49, 88, 0.07);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .listing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 45px rgba(11, 49, 88, 0.13);
        }

        .image-wrapper {
          height: 280px;
          position: relative;
          background: #dfe7ef;
          cursor: pointer;
          overflow: hidden;
        }

        .listing-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }

        .image-wrapper:hover .listing-image {
          transform: scale(1.04);
        }

        .image-label {
          position: absolute;
          left: 15px;
          top: 15px;
          padding: 7px 11px;
          border-radius: 7px;
          background: rgba(7, 43, 79, 0.9);
          color: white;
          font-size: 12px;
          font-weight: 700;
        }

        .listing-content {
          padding: 23px;
        }

        .listing-content h3 {
          margin: 0 0 9px;
          font-size: 23px;
          line-height: 1.2;
          color: #0b2f55;
        }

        .location {
          margin-bottom: 18px;
          color: #627d98;
          font-size: 14px;
        }

        .main-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 18px;
        }

        .info-box {
          padding: 13px;
          border-radius: 10px;
          background: #f3f7fb;
        }

        .info-label {
          display: block;
          font-size: 11px;
          color: #829ab1;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          margin-bottom: 5px;
        }

        .info-value {
          display: block;
          font-size: 15px;
          font-weight: 700;
          color: #0b2f55;
        }

        .description {
          color: #486581;
          font-size: 14px;
          line-height: 1.65;
          margin: 0 0 18px;
        }

        .features {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 20px;
        }

        .feature {
          padding: 7px 10px;
          border-radius: 6px;
          background: #eef5fb;
          color: #1769aa;
          font-size: 12px;
          font-weight: 600;
        }

        .actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .action-button {
          border: none;
          border-radius: 9px;
          padding: 13px 10px;
          text-align: center;
          text-decoration: none;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
        }

        .call-button {
          background: #0b3d6e;
          color: white;
        }

        .whatsapp-button {
          background: #16804d;
          color: white;
        }

        .empty {
          background: white;
          padding: 60px 20px;
          border-radius: 16px;
          text-align: center;
          color: #627d98;
        }

        .empty h3 {
          color: #0b2f55;
          margin-top: 0;
        }

        .floating-whatsapp {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 50;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #16804d;
          color: white;
          text-decoration: none;
          font-size: 27px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
        }

        .lightbox img {
          max-width: 95vw;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
        }

        .close-lightbox {
          position: fixed;
          top: 20px;
          right: 25px;
          width: 45px;
          height: 45px;
          border: none;
          border-radius: 50%;
          background: white;
          color: #0b2f55;
          font-size: 25px;
          cursor: pointer;
        }

        @media (max-width: 850px) {
          .filters {
            grid-template-columns: 1fr;
          }

          .listings-grid {
            grid-template-columns: 1fr;
          }

          .listings-hero {
            min-height: 340px;
            padding-top: 80px;
          }
        }

        @media (max-width: 550px) {
          .results-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .listing-content {
            padding: 18px;
          }

          .image-wrapper {
            height: 230px;
          }

          .hero-content h1 {
            letter-spacing: -1px;
          }
        }
      `}</style>

      <section className="listings-hero">
        <div className="hero-content">
          <div className="hero-badge">
            HOMES Real Estate & Commercial
          </div>

          <h1>Find Your Perfect Office</h1>

          <p>
            Premium commercial office spaces across Cairo and Egypt.
            Explore verified office details, sizes, locations and prices.
          </p>
        </div>
      </section>

      <div className="filters-wrapper">
        <div className="filters">
          <input
            className="search-box"
            type="text"
            placeholder="Search by office, location, size or feature..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="select-box"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            {locations.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            className="select-box"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {types.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      <section className="results">
        <div className="results-header">
          <div>
            <h2>Available Offices</h2>
            <span>
              {filteredListings.length} verified listings
            </span>
          </div>

          <span>25+ Years Experience</span>
        </div>

        {filteredListings.length === 0 ? (
          <div className="empty">
            <h3>No offices found</h3>
            <p>
              Try changing your search or selecting a different location.
            </p>
          </div>
        ) : (
          <div className="listings-grid">
            {filteredListings.map((listing) => (
              <article className="listing-card" key={listing.id}>
                <div
                  className="image-wrapper"
                  onClick={() => setSelectedImage(listing.image)}
                >
                  <img
                    className="listing-image"
                    src={listing.image}
                    alt={listing.title}
                  />

                  <div className="image-label">
                    Office #{String(listing.id).padStart(2, "0")}
                  </div>
                </div>

                <div className="listing-content">
                  <h3>{listing.title}</h3>

                  <div className="location">
                    📍 {listing.location}
                  </div>

                  <div className="main-info">
                    <div className="info-box">
                      <span className="info-label">Area</span>
                      <span className="info-value">
                        {listing.area}
                      </span>
                    </div>

                    <div className="info-box">
                      <span className="info-label">Price</span>
                      <span className="info-value">
                        {listing.price}
                      </span>
                    </div>

                    {listing.parking && (
                      <div className="info-box">
                        <span className="info-label">Parking</span>
                        <span className="info-value">
                          {listing.parking}
                        </span>
                      </div>
                    )}

                    <div className="info-box">
                      <span className="info-label">Type</span>
                      <span className="info-value">
                        {listing.type}
                      </span>
                    </div>
                  </div>

                  <p className="description">
                    {listing.description}
                  </p>

                  <div className="features">
                    {listing.features.map((feature) => (
                      <span className="feature" key={feature}>
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="actions">
                    <a
                      className="action-button call-button"
                      href="tel:+201223339652"
                    >
                      📞 Call
                    </a>

                    <a
                      className="action-button whatsapp-button"
                      href={`https://wa.me/201223339652?text=${encodeURIComponent(
                        `Hello, I'm interested in ${listing.title} (${listing.area}) in ${listing.location}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <a
        className="floating-whatsapp"
        href="https://wa.me/201223339652"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        💬
      </a>

      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="close-lightbox"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Office"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}