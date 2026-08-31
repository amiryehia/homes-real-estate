"use client";
import { useMemo, useState } from "react";

import Image from "next/image";
import {
  Search,
  MapPin,
  Building2,
  Phone,
  MessageCircle,
  X,
} from "lucide-react";

type Listing = {
  id: number;
  title: string;
  location: string;
  area: string;
  price: number;
  type: string;
  image: string;
};

const locations = [
  "All Locations",
  "Maadi",
  "New Cairo",
  "Nasr City",
  "Heliopolis",
  "Downtown Cairo",
  "6th of October",
  "Sheikh Zayed",
];

const types = [
  "All Types",
  "Office",
  "Administrative Office",
  "Corporate Office",
  "Medical Office",
];

const listings: Listing[] = [
  {
    id: 1,
    title: "Premium Office in Maadi",
    location: "Maadi",
    area: "Maadi Corniche",
    price: 45000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 2,
    title: "Modern Corporate Office",
    location: "New Cairo",
    area: "5th Settlement",
    price: 65000,
    type: "Corporate Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 3,
    title: "Executive Office Space",
    location: "Heliopolis",
    area: "Korba",
    price: 38000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 4,
    title: "Luxury Administrative Office",
    location: "New Cairo",
    area: "North 90th Street",
    price: 72000,
    type: "Administrative Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 5,
    title: "Fully Finished Office",
    location: "Maadi",
    area: "Degla",
    price: 32000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 6,
    title: "Business Center Office",
    location: "Downtown Cairo",
    area: "Tahrir",
    price: 29000,
    type: "Corporate Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 7,
    title: "Premium Business Office",
    location: "Nasr City",
    area: "Makram Ebeid",
    price: 41000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 8,
    title: "Large Corporate Headquarters",
    location: "New Cairo",
    area: "Golden Square",
    price: 95000,
    type: "Corporate Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 9,
    title: "Modern Office Suite",
    location: "Sheikh Zayed",
    area: "ZED Area",
    price: 55000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 10,
    title: "Professional Office Space",
    location: "6th of October",
    area: "Mall of Arabia Area",
    price: 36000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 11,
    title: "Elegant Executive Office",
    location: "Maadi",
    area: "Maadi Gardens",
    price: 47000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 12,
    title: "Prime Administrative Office",
    location: "New Cairo",
    area: "Business District",
    price: 68000,
    type: "Administrative Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 13,
    title: "Medical Office Suite",
    location: "New Cairo",
    area: "Medical Park",
    price: 52000,
    type: "Medical Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 14,
    title: "High-End Office",
    location: "Heliopolis",
    area: "El Merghany",
    price: 43000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 15,
    title: "Modern Business Office",
    location: "Nasr City",
    area: "Abbas El Akkad",
    price: 35000,
    type: "Corporate Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 16,
    title: "Premium Office Floor",
    location: "New Cairo",
    area: "Downtown Katameya",
    price: 88000,
    type: "Corporate Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 17,
    title: "Furnished Executive Office",
    location: "Maadi",
    area: "Zahraa Maadi",
    price: 30000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 18,
    title: "Contemporary Office",
    location: "Sheikh Zayed",
    area: "Beverly Hills",
    price: 62000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 19,
    title: "Corporate Office Suite",
    location: "6th of October",
    area: "Smart Village",
    price: 74000,
    type: "Corporate Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 20,
    title: "Premium Medical Office",
    location: "New Cairo",
    area: "Medical District",
    price: 59000,
    type: "Medical Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 21,
    title: "Executive Business Center",
    location: "Downtown Cairo",
    area: "Garden City",
    price: 44000,
    type: "Corporate Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 22,
    title: "Luxury Office Suite",
    location: "Maadi",
    area: "New Maadi",
    price: 51000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 23,
    title: "Prime Office Location",
    location: "Heliopolis",
    area: "Roxy",
    price: 39000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 24,
    title: "Large Administrative Space",
    location: "New Cairo",
    area: "Cairo Festival Area",
    price: 79000,
    type: "Administrative Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 25,
    title: "Modern Office Hub",
    location: "Nasr City",
    area: "City Stars Area",
    price: 33000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 26,
    title: "Premium Corporate Office",
    location: "New Cairo",
    area: "90th Street",
    price: 85000,
    type: "Corporate Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 27,
    title: "Professional Office Suite",
    location: "Maadi",
    area: "Sarayat El Maadi",
    price: 46000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 28,
    title: "Executive Medical Office",
    location: "New Cairo",
    area: "New Cairo Medical Zone",
    price: 57000,
    type: "Medical Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 29,
    title: "Contemporary Corporate Space",
    location: "Sheikh Zayed",
    area: "Arkan Area",
    price: 69000,
    type: "Corporate Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 30,
    title: "Premium Office Center",
    location: "6th of October",
    area: "October Gardens",
    price: 42000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 31,
    title: "Elegant Business Office",
    location: "Heliopolis",
    area: "Salah Salem",
    price: 48000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 32,
    title: "Large Corporate Office",
    location: "New Cairo",
    area: "One Ninety",
    price: 98000,
    type: "Corporate Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 33,
    title: "Fully Equipped Office",
    location: "Maadi",
    area: "Degla Square",
    price: 37000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 34,
    title: "Modern Administrative Suite",
    location: "Nasr City",
    area: "Mostashfa El Sadr",
    price: 40000,
    type: "Administrative Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 35,
    title: "Prime Business Office",
    location: "Downtown Cairo",
    area: "Zamalek Area",
    price: 58000,
    type: "Corporate Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 36,
    title: "Luxury Office Floor",
    location: "New Cairo",
    area: "Financial District",
    price: 105000,
    type: "Corporate Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 37,
    title: "Executive Office",
    location: "Sheikh Zayed",
    area: "Galleria Area",
    price: 61000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 38,
    title: "Premium Medical Suite",
    location: "Heliopolis",
    area: "Al Ahram Street",
    price: 53000,
    type: "Medical Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 39,
    title: "Professional Corporate Office",
    location: "6th of October",
    area: "Industrial Area",
    price: 49000,
    type: "Corporate Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 40,
    title: "Modern Office Space",
    location: "Maadi",
    area: "Maadi Corniche",
    price: 34000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 41,
    title: "High-End Administrative Office",
    location: "New Cairo",
    area: "Sodic Area",
    price: 76000,
    type: "Administrative Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 42,
    title: "Corporate Headquarters",
    location: "New Cairo",
    area: "Business Plus",
    price: 92000,
    type: "Corporate Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 43,
    title: "Executive Office Suite",
    location: "Nasr City",
    area: "Moustafa El Nahas",
    price: 45000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 44,
    title: "Modern Medical Office",
    location: "New Cairo",
    area: "Point 90 Area",
    price: 63000,
    type: "Medical Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 45,
    title: "Premium Business Space",
    location: "Maadi",
    area: "Laselky",
    price: 39000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 46,
    title: "Luxury Corporate Office",
    location: "Sheikh Zayed",
    area: "Capital Business Park",
    price: 83000,
    type: "Corporate Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 47,
    title: "Prime Administrative Space",
    location: "Heliopolis",
    area: "Cleopatra",
    price: 47000,
    type: "Administrative Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 48,
    title: "Large Professional Office",
    location: "6th of October",
    area: "Dreamland",
    price: 54000,
    type: "Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 49,
    title: "Executive Corporate Suite",
    location: "New Cairo",
    area: "Cairo Festival City",
    price: 89000,
    type: "Corporate Office",
    image: "/images/office-main.jpg",
  },
  {
    id: 50,
    title: "HOMES Premium Headquarters",
    location: "New Cairo",
    area: "Financial District",
    price: 115000,
    type: "Corporate Office",
    image: "/images/office-main.jpg",
  },
];

export default function ListingsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [type, setType] = useState("All Types");
  const [maxPrice, setMaxPrice] = useState(120000);

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      const text = search.toLowerCase();

      const matchesSearch =
        listing.title.toLowerCase().includes(text) ||
        listing.location.toLowerCase().includes(text) ||
        listing.area.toLowerCase().includes(text);

      const matchesLocation =
        location === "All Locations" ||
        listing.location === location;

      const matchesType =
        type === "All Types" ||
        listing.type === type;

      const matchesPrice = listing.price <= maxPrice;

      return (
        matchesSearch &&
        matchesLocation &&
        matchesType &&
        matchesPrice
      );
    });
  }, [search, location, type, maxPrice]);

  function clearFilters() {
    setSearch("");
    setLocation("All Locations");
    setType("All Types");
    setMaxPrice(120000);
  }

  return (
    <main className="listings-page">
      <section className="hero">
        <div className="hero-content">
          <div className="badge">
            <Building2 size={16} />
            HOMES REAL ESTATE
          </div>

          <h1>
            Find Your
            <span>Perfect Office</span>
          </h1>

          <p>
            Premium commercial office spaces across Cairo.
            Find the right workplace for your business.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="search-panel">
          <div className="search-box">
            <Search size={20} />

            <input
              type="text"
              placeholder="Search offices, locations or areas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filters">
            <div>
              <label>Location</label>

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                {locations.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div>
              <label>Office Type</label>

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                {types.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div className="price">
              <label>
                Maximum Monthly Rent:{" "}
                <strong>
                  {maxPrice.toLocaleString()} EGP
                </strong>
              </label>

              <input
                type="range"
                min="20000"
                max="120000"
                step="5000"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(Number(e.target.value))
                }
              />
            </div>

            <button onClick={clearFilters}>
              <X size={16} />
              Clear
            </button>
          </div>
        </div>

        <div className="results">
          <div>
            <small>AVAILABLE OFFICES</small>

            <h2>
              {filteredListings.length} Commercial Office
              {filteredListings.length !== 1 ? "s" : ""}
            </h2>
          </div>

          <div className="experience">
            <strong>25+</strong>
            <span>Years Experience</span>
          </div>
        </div>

        {filteredListings.length === 0 ? (
          <div className="empty">
            <Building2 size={50} />

            <h3>No offices found</h3>

            <p>
              Try changing your search or filters.
            </p>

            <button onClick={clearFilters}>
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid">
            {filteredListings.map((listing) => (
              <article
                className="card"
                key={listing.id}
              >
                <div className="image">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />

                  <div className="type">
                    {listing.type}
                  </div>

                  <div className="number">
                    #{String(listing.id).padStart(2, "0")}
                  </div>
                </div>

                <div className="content">
                  <div className="location">
                    <MapPin size={15} />
                    {listing.area}, {listing.location}
                  </div>

                  <h3>{listing.title}</h3>

                  <div className="price-text">
                    <small>Starting from</small>

                    <strong>
                      {listing.price.toLocaleString()} EGP
                    </strong>

                    <span>/ month</span>
                  </div>

                  <div className="actions">
                    <a
                      href="tel:+201000000000"
                      className="call"
                    >
                      <Phone size={16} />
                      Call
                    </a>

                    <a
                      href="https://wa.me/201000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp"
                    >
                      <MessageCircle size={16} />
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
        href="https://wa.me/201000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="floating"
      >
        <MessageCircle size={28} />
      </a>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .listings-page {
          min-height: 100vh;
          background: #f5f8fc;
          color: #102a47;
        }

        .hero {
          min-height: 430px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background:
            linear-gradient(
              135deg,
              rgba(5, 29, 61, 0.97),
              rgba(16, 82, 145, 0.9)
            ),
            url("/images/hero.jpg") center / cover;
        }

        .hero-content {
          width: min(900px, 92%);
          padding: 80px 0;
          color: white;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 17px;
          border: 1px solid rgba(255,255,255,.3);
          border-radius: 50px;
          background: rgba(255,255,255,.08);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .hero h1 {
          margin: 25px 0 0;
          font-size: clamp(45px, 7vw, 78px);
          line-height: .98;
          letter-spacing: -3px;
        }

        .hero h1 span {
          display: block;
          color: #a8d1f7;
        }

        .hero p {
          max-width: 650px;
          margin: 25px auto 0;
          color: rgba(255,255,255,.8);
          font-size: 18px;
          line-height: 1.7;
        }

        .container {
          width: min(1250px, 92%);
          margin: -55px auto 80px;
          position: relative;
        }

        .search-panel {
          background: white;
          padding: 25px;
          border-radius: 20px;
          border: 1px solid #e3eaf2;
          box-shadow: 0 20px 60px rgba(20,50,90,.13);
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px 18px;
          border: 1px solid #dce5ee;
          border-radius: 12px;
          background: #f8fafc;
          color: #56718e;
        }

        .search-box input {
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          font-size: 15px;
          color: #102a47;
        }

        .filters {
          display: grid;
          grid-template-columns: 1fr 1fr 1.5fr auto;
          gap: 15px;
          margin-top: 18px;
          align-items: end;
        }

        label {
          display: block;
          margin-bottom: 8px;
          color: #738399;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .7px;
        }

        select {
          width: 100%;
          height: 46px;
          padding: 0 12px;
          border: 1px solid #dce5ee;
          border-radius: 10px;
          background: white;
          color: #183552;
          outline: none;
        }

        .price strong {
          color: #145ca8;
          font-size: 13px;
        }

        .price input {
          width: 100%;
          accent-color: #145ca8;
        }

        .filters button,
        .empty button {
          height: 46px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border: 1px solid #dce5ee;
          border-radius: 10px;
          background: white;
          color: #63758b;
          font-weight: 700;
          cursor: pointer;
        }

        .results {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 55px 0 25px;
        }

        .results small {
          color: #3972a8;
          font-weight: 800;
          letter-spacing: 1.5px;
          font-size: 11px;
        }

        .results h2 {
          margin: 8px 0 0;
          font-size: 30px;
        }

        .experience {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 18px;
          background: white;
          border: 1px solid #e3eaf2;
          border-radius: 12px;
        }

        .experience strong {
          font-size: 28px;
          color: #145ca8;
        }

        .experience span {
          font-size: 12px;
          color: #74869b;
          font-weight: 700;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .card {
          overflow: hidden;
          background: white;
          border: 1px solid #e2e9f1;
          border-radius: 18px;
          box-shadow: 0 8px 30px rgba(20,50,90,.06);
          transition: .25s ease;
        }

        .card:hover {
          transform: translateY(-7px);
          box-shadow: 0 20px 45px rgba(20,50,90,.14);
        }

        .image {
          position: relative;
          height: 235px;
          overflow: hidden;
          background: #dfe7ef;
        }

        .image img {
          object-fit: cover;
          transition: .5s ease;
        }

        .card:hover .image img {
          transform: scale(1.06);
        }

        .type,
        .number {
          position: absolute;
          top: 14px;
          padding: 7px 10px;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 800;
        }

        .type {
          left: 14px;
          background: rgba(7,35,68,.9);
          color: white;
        }

        .number {
          right: 14px;
          background: rgba(255,255,255,.92);
          color: #183552;
        }

        .content {
          padding: 20px;
        }

        .location {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #678099;
          font-size: 12px;
          font-weight: 600;
        }

        .location svg {
          color: #145ca8;
        }

        .content h3 {
          margin: 11px 0 18px;
          font-size: 19px;
          line-height: 1.3;
        }

        .price-text {
          padding-bottom: 17px;
          border-bottom: 1px solid #edf1f5;
        }

        .price-text small {
          display: block;
          color: #8998a9;
          font-size: 10px;
          text-transform: uppercase;
        }

        .price-text strong {
          color: #145ca8;
          font-size: 20px;
        }

        .price-text span {
          margin-left: 5px;
          color: #8493a3;
          font-size: 11px;
        }

        .actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
          margin-top: 16px;
        }

        .actions a {
          min-height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border-radius: 9px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
        }

        .call {
          background: #edf5fc;
          color: #145ca8;
        }

        .whatsapp {
          background: #145ca8;
          color: white;
        }

        .floating {
          position: fixed;
          right: 24px;
          bottom: 24px;
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #1da851;
          color: white;
          z-index: 100;
          box-shadow: 0 12px 30px rgba(29,168,81,.35);
        }

        .empty {
          padding: 80px 20px;
          background: white;
          border-radius: 18px;
          text-align: center;
        }

        .empty svg {
          color: #145ca8;
        }

        .empty h3 {
          font-size: 24px;
          margin: 18px 0 5px;
        }

        .empty p {
          color: #708198;
        }

        .empty button {
          margin: 15px auto 0;
          background: #145ca8;
          color: white;
          border: 0;
        }

        @media (max-width: 1000px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .filters {
            grid-template-columns: 1fr 1fr;
          }

          .price {
            grid-column: span 2;
          }
        }

        @media (max-width: 650px) {
          .hero {
            min-height: 390px;
          }

          .hero h1 {
            font-size: 45px;
          }

          .hero p {
            font-size: 15px;
          }

          .container {
            width: 94%;
            margin-top: -30px;
          }

          .filters {
            grid-template-columns: 1fr;
          }

          .price {
            grid-column: auto;
          }

          .results {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
          }

          .experience {
            width: 100%;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .image {
            height: 250px;
          }

          .floating {
            right: 18px;
            bottom: 18px;
          }
        }
      `}</style>
    </main>
  );
}
