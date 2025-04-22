import ContactForm from "@/components/ContactForm";

const title = "Get in touch with our team and discover <br /> how we can help your project thrive!";
const subtitle = "Contact with us";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-background)] py-24 px-6 flex justify-center"
    >
      <div className="w-full max-w-4xl text-center">
        <span className="text-[12px] text-[var(--color-contactWithUs)] bg-[var(--color-contact-background)] px-5 py-1 rounded-full tracking-wide">
          {subtitle}
        </span>
        <h2
          className="text-[var(--color-text)] text-[30px] font-bold mt-4 mb-12 leading-snug"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <ContactForm />
      </div>
    </section>
  );
}
