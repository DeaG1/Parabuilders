"use client";

import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { useLanguage } from "@/components/translations/LanguageContext";
import { FadeUp } from "@/components/motions/motionFadeUp";
import { FadeImage } from "@/components/motions/motionFadeImage";
import handMobile from "@/assets/images/contact/hand.png";

export default function Contact() {
  const { t } = useLanguage();
  const contact = t("contact");

  return (
    <section
      id="contact"
      className="bg-[var(--color-background)] max-md:py-20 py-24 px-6 flex justify-center"
    >
      <div className="w-full max-w-4xl text-center relative">
        <FadeUp>
          <span className="text-[12px] text-[var(--color-contactWithUs)] bg-[var(--color-contact-background)] px-5 py-1 rounded-full tracking-wide">
            {contact.subtitle}
          </span>
        </FadeUp>
        <FadeUp>
          <h2
            className="text-[var(--color-text)] text-[28px] font-bold mt-4 mb-12 max-md:mb-6 leading-snug"
            dangerouslySetInnerHTML={{ __html: contact.title }}
          />
        </FadeUp>
        <FadeUp>
          <ContactForm />
        </FadeUp>
        <div className="mt-2 md:hidden">
          <FadeImage>
            <Image
              src={handMobile}
              alt="Hand illustration"
              width={130}
              height={130}
              className="absolute mx-auto left-[-20px]"
              priority
            />
          </FadeImage>
        </div>
      </div>
    </section>
  );
}