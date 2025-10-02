import SendMsgForm from "@/components/forms/SendMsgForm";
import Link from "next/link";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";

export default function Contact() {
  return (
    <div className="flex max-lg:flex-col lg:justify-between gap-5">
      <div className="flex flex-col gap-5">
        {/*//! Title */}
        <h2 className="title mb-0">Let’s Start Your Journey</h2>

        {/*//! Description */}
        <p className="text-light-2 text-small-medium sm:text-base-medium">
          Your vision deserves to become a brand that lasts. Let’s bring it to
          life.
        </p>

        {/*//! Social Links in large screen */}
        <SocialLinks className="max-lg:hidden" />
      </div>

      {/*//! Send message form */}
      <SendMsgForm />

      {/*//! Social Links in small screen */}
      <SocialLinks className="lg:hidden mt-5" />
    </div>
  );
}

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex items-center max-sm:justify-between sm:gap-20">
        {/*//* Whats app link */}
        <Link href="#" className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center justify-center size-8 sm:size-10 p-2 rounded-full border border-primary-500">
            <FaWhatsapp className="size-5 text-light-2" />
          </div>
          <h3 className="text-light-2 text-small-medium sm:text-base-medium">
            {" "}
            WhatsApp
          </h3>
        </Link>

        {/*//* Linked in link */}
        <Link href="#" className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center justify-center size-8 sm:size-10 p-2 rounded-full border border-primary-500">
            <FaLinkedinIn className="size-5 text-light-2" />
          </div>
          <h3 className="text-light-2 text-small-medium sm:text-base-medium">
            LinkedIn
          </h3>
        </Link>
      </div>
    </div>
  );
}
