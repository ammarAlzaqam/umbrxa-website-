import About from "../components/About";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";

export default function Home() {
  return (
    <main>
      {/*//! Header */}
      <div className="container bg-gold_radial">
        <Header />
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

      <div id="portfolio" className="container">
        <Portfolio />
      </div>

      {/*// Divider */}
      <div className="divider" />
    </main>
  );
}
