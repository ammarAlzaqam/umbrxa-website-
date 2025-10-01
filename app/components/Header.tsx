import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <section className="head-container">
      {/*//! Title */}
      <h1 className="head-text">
        <span className="font-heading text-primary-500 text-shadow-md text-shadow-primary-500/30">
          Umbrxa
        </span>{" "}
        - Where brands are crafted to last beyond time
      </h1>

      {/*//! Description */}
      <p className="sub-text">
        We don’t just design identities; we build stories that live in people’s
        minds
      </p>

      {/*//! CTA Button */}
      <Button className="mt-5 btn">
        Start Your Journey
      </Button>

      {/*//! Value Proposition */}
      <h2 className="mt-12 font-heading text-base-medium xs:text-heading2-semibold sm:text-heading1-semibold text-light-1 max-w-2xl">
        At Umbrxa, we believe a brand is more than visuals. It’s a promise, a
        story, and an experience that inspires
      </h2>

      {/*//! Quick Links */}
      <nav className="mt-10 w-full">
        <h3 className="link mb-5 text-primary-500">Quick Links</h3>
        <ul className="flex items-center gap-5 justify-between w-[80%] md:w-[40%]">
          <Link className="link" href="#services">Services</Link>
          <Link className="link" href="#portfolio">Portfolio</Link>
          <Link className="link" href="#contact">Contact</Link>
        </ul>
      </nav>
    </section>
  );
}
