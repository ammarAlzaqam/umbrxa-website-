import { Button } from "@/components/ui/button";
import { services } from "@/constants/services";

export default function Services() {
  return (
    <>
      {/*//! title */}
      <h1 className="title">Our Services</h1>

      {/*//! Services Cards */}
      <div className="overflow-hidden flex max-md:flex-wrap justify-center items-center max-xs:flex-col gap-5">
        {services.map(({ Icon, title, description }, index) => (
          <div
            key={index}
            className="min-h-[230px] xs:min-h-[300px] w-[250px] flex justify-evenly items-center text-center flex-col p-6 rounded-2xl shadow-md shadow-secondary-500 bg-dark-2"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-duration={1300}

          >
            <Icon className="size-15 text-primary-500" />
            <h3 className="sub-title">{title}</h3>
            <p className="des line-clamp-3">{description}</p>
          </div>
        ))}
      </div>

      {/*//! Button */}
      <div className="flex justify-center mt-10">
        <Button className="text-light-2 shadow-md shadow-secondary-500">
          View All Services
        </Button>
      </div>
    </>
  );
}
