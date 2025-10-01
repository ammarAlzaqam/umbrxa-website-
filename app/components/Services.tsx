import { Button } from "@/components/ui/button";
import { services } from "@/constants/services";

export default function Services() {
  return (
    <div id="services">
      {/*//! title */}
      <h1 className="title">Services</h1>

      {/*//! Services Cards */}
      <div className="flex max-md:flex-wrap max-xs:flex-col gap-15">
        {services.map(({ Icon, title, description }, index) => (
          <div
            key={index}
            className="flex flex-col gap-7"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-duration={1300}
          >
            <h3 className="sub-title">{title}</h3>
            <Icon className="size-15 text-primary-500" />
            <p className="des">{description}</p>
          </div>
        ))}
      </div>

      {/*//! Button */}
      <Button className="btn mt-10">Let’s Build Your Brand</Button>
    </div>
  );
}
