import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <section className="purple-container">
      {/*//! Title */}
      <h1 className="head-text">Crafting Luxury Brands That Last</h1>

      {/*//! Description */}
      <p className="sub-text">
        We provide full-service brand strategy & Identity solutions for the
        discerning:
      </p>

      {/*//! Buttons */}
      <div className="flex gap-2 sm:gap-3 mt-8">
        <Button className="btn bg-light-2 text-dark-2 bg-gradient-to-t from-gray-1 to-light-1">Book your service now</Button>
        <Button className="btn text-light-2 shadow-md shadow-secondary-500">Explore Our Services</Button>
      </div>
    </section>
  );
}
