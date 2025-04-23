import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import handMobile from "@/assets/images/contact/hand.png";

const title = (
  <>
    Get in touch with our team and discover{" "}
    <br className="hidden md:inline" />
    how we can help your project thrive!
  </>
);
const subtitle = "Contact with us";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-background)] max-md:py-20 py-24 px-6 flex justify-center"
    >
      <div className="w-full max-w-4xl text-center">
        <span className="text-[12px] text-[var(--color-contactWithUs)] bg-[var(--color-contact-background)] px-5 py-1 rounded-full tracking-wide">
          {subtitle}
        </span>
        <h2 className="text-[var(--color-text)] text-[30px] font-bold mt-4 mb-12 leading-snug">
          {title}
        </h2>
        <ContactForm />
        <div className="mt-2 md:hidden">
          <Image
            src={handMobile}
            alt="Hand illustration"
            width={130}
            height={130}
            className=" absolute mx-auto left-[-20px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
