"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Phone, Car, Ruler, BadgeCheck } from "lucide-react";

export default function Home() {
  return <main>
    <header className="navbar"><div className="container nav-inner">
      <Link href="/" className="logo"><Image src="/logo.png" alt="Homes Real Estate" width={80} height={70} priority /><div><h2>HOMES</h2><p>Real Estate & Commercial</p></div></Link>
      <nav><a href="#home">Home</a><a href="#about">About</a><Link href="/listings">Offices</Link><a href="#contact">Contact</a></nav>
      <a href="https://wa.me/201223339652" className="nav-btn">Contact Us</a>
    </div></header>

    <section className="hero" id="home"><Image src="/images/hero2.jpg" alt="Office Building" fill priority className="hero-image" /><div className="overlay"/><div className="hero-content">
      <span className="small-title">COMMERCIAL REAL ESTATE</span><h1>Find Your Perfect<br/>Office Space</h1>
      <p>HOMES Real Estate & Commercial specializes in premium office buildings, headquarters and investment opportunities across Egypt.</p>
      <div className="hero-buttons"><Link href="/listings" className="primary-btn">Explore Offices <ArrowRight size={18}/></Link><a href="tel:+201223339652" className="secondary-btn"><Phone size={18}/> Call Now</a></div>
    </div></section>

    <section className="stats"><div className="container stats-grid"><div><h2>5000+</h2><p>Properties Sold</p></div><div><h2>25+</h2><p>Years Experience</p></div><div><h2>300+</h2><p>Commercial Offices</p></div><div><h2>100%</h2><p>Business Focused</p></div></div></section>

    <section className="about container" id="about"><div className="about-text"><span className="section-tag">ABOUT US</span><h2>Egypt&apos;s Trusted Commercial Real Estate Consultant</h2><p>We help businesses find premium office buildings, corporate headquarters and investment opportunities in the best commercial districts across Egypt.</p><div className="about-features"><div><Building2/><span>Premium Office Buildings</span></div><div><Ruler/><span>Large Commercial Spaces</span></div><div><Car/><span>Dedicated Parking</span></div><div><BadgeCheck/><span>Professional Brokerage</span></div></div></div><div className="about-image"><Image src="/images/about2.jpg" alt="Office" width={500} height={500}/></div></section>

    <section className="featured" id="offices"><div className="container"><div className="section-heading"><span>FEATURED OFFICE</span><h2>Office Building No. 2</h2><p>A fully finished commercial office building in New Maadi with a private entrance and dedicated parking.</p></div><div className="office-card"><div className="office-image"><Image src="/images/office-3.jpg" alt="Office Building No. 2 - New Maadi" width={650} height={550}/></div><div className="office-info"><h3>Office Building No. 2</h3><div className="office-grid"><Info icon={<Ruler size={28}/>} title="Area" value="600 sqm" extra="Fully finished • Private entrance"/><Info icon={<Car size={28}/>} title="Parking" value="5 Cars"/><Info icon={<Building2 size={28}/>} title="Rent" value="400,000 EGP"/><Info icon={<BadgeCheck size={28}/>} title="Availability" value="Available Now"/></div><div className="location-box"><h4>Location</h4><p>New Maadi</p></div><div className="office-buttons"><a href="tel:+201223339652" className="primary-btn">Call Now</a><a href="https://wa.me/201223339652" className="secondary-btn dark">WhatsApp</a></div></div></div></div></section>

    <section className="contact" id="contact"><div className="container contact-box"><h2>Looking For Your Next Office?</h2><p>Contact HOMES Real Estate & Commercial today and let our specialists help you find the ideal office space for your business.</p><div className="email-line"><strong>Email:</strong> <a href="mailto:amiryehia@homes-eg.com">amiryehia@homes-eg.com</a></div><div className="contact-buttons"><a href="tel:+201223339652" className="primary-btn">📞 Call Us</a><a href="https://wa.me/201223339652" className="secondary-btn">💬 Chat on WhatsApp</a><a href="mailto:amiryehia@homes-eg.com" className="secondary-btn">✉️ Email Us</a></div></div></section>
    <a href="https://wa.me/201223339652" target="_blank" rel="noreferrer" className="floating-whatsapp"><span>💬</span><div><strong>WhatsApp</strong><small>Chat with us</small></div></a>
    <footer className="footer"><div className="container footer-content"><div className="footer-logo"><Image src="/logo.png" alt="Homes Logo" width={60} height={60}/><div><h3>HOMES</h3><p>Real Estate & Commercial</p></div></div><div className="footer-contact"><p>📧 <a href="mailto:amiryehia@homes-eg.com">amiryehia@homes-eg.com</a></p><p>© 2026 HOMES Real Estate & Commercial. All Rights Reserved.</p></div></div></footer>
  </main>;
}
function Info({icon,title,value,extra}:{icon:React.ReactNode,title:string,value:string,extra?:string}){return <div className="info-box">{icon}<div><h4>{title}</h4><p>{value}</p>{extra&&<small>{extra}</small>}</div></div>}
