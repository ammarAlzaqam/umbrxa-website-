import projectsList from "@/constants/projects";
import { Glasses } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div>
      <h2 className="title">Portfolio</h2>

      <div className="flex flex-wrap gap-10">
        {projectsList.map(({ name, des, route, src }) => (
          <div
            key={name}
            data-aos="fade-down"
            data-aos-duration="1000"
            className="shrink-0 grow relative card-after_dark w-full sm:w-[500px] h-[500px] rounded-md ring-2 ring-primary-500 overflow-hidden"
          >
            {/*//! Brand photo */}
            <Image
              src={src}
              alt="portfolio-img"
              fill
              className="-z-10 object-cover transition-opacity duration-500"
            />
            {/*//! Brand Content */}
            <div className="w-full h-full flex flex-col justify-end p-7">
              {/*//* Brand Name */}
              <h2 className="text-shadow-sm text-shadow-gray-200 font-heading text-heading3-bold text-white leading-[160%]">
                {name}
              </h2>

              {/*//* Brand description */}
              <p className="des text-gray-200 line-clamp-3">
                From workshop to inspiring brand. We transformed metalwork into
                a visual language of strength, artistry, and passion
              </p>

              {/*//* Brand route */}
              <Link href={route} className="w-fit flex items-center gap-2 mt-3">
                <h3 className="sub-title text-primary-500 !font-body">
                  Lead Branding
                </h3>
                <Glasses className=" text-primary-500" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
