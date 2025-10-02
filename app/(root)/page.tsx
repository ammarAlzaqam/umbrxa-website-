import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";

export default function Home() {
  return (
    <main>
      {/*//! Header */}
      <div className=" bg-gold_radial">
        <div className="container">
          <Header />
        </div>
      </div>

      {/*// Divider */}
      <div className="divider" />

      {/*//! About */}
      <div className="container">
        <About />
      </div>

      {/*// Divider */}
      <div className="divider" />

      {/*//! Services */}
      <div className="overflow-hidden container">
        <Services />
      </div>

      {/*// Divider */}
      <div className="divider" />

      {/*//! Portfolio */}
      <div id="portfolio" className="container">
        <Portfolio />
      </div>

      {/*// Divider */}
      <div className="divider" />

      {/*//! Contact */}
      <div id="contact" className="container">
        <Contact />
      </div>

      {/*// Divider */}
      <div className="divider" />
    </main>
  );
}
