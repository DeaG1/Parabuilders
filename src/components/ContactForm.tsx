"use client";
import { FormEvent } from "react";

export default function ContactForm() {
  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const reason = (form.elements.namedItem("reason") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent("Contato via site Parabuilders");
    const body = encodeURIComponent(
      `Name: ${name}\nAbout: ${reason}\n\nMessage:\n${message}`
    );

    const mailtoLink = `mailto:parabuilders@proton.me?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSend} className="flex flex-col items-center gap-6">
      <div className="w-full flex flex-col md:flex-row gap-6">
        <input
          name="name"
          type="text"
          placeholder="Full name"
          required
          className="flex-1 bg-[var(--color-contact-background)] text-[var(--color-text)] placeholder:text-[var(--color-text)]/60 px-6 py-4 rounded-full outline-none"
        />
        <input
          name="reason"
          type="text"
          placeholder="About"
          required
          className="flex-1 bg-[var(--color-contact-background)] text-[var(--color-text)] placeholder:text-[var(--color-text)]/60 px-6 py-4 rounded-full outline-none"
        />
      </div>
      <textarea
        name="message"
        placeholder="Write a message"
        rows={5}
        required
        className="w-full bg-[var(--color-contact-background)] text-[var(--color-text)] text-[16px] placeholder:text-[var(--color-text)]/60 px-6 py-4 rounded-xl outline-none resize-none"
      />
      <button
        type="submit"
        className="mt-2 w-[166px] h-[44px] max-md:w-full max-md:h-[50px]
                   bg-[var(--color-button-bg)] 
                   text-[var(--color-button-text)] 
                   text-[16px] font-semibold rounded-full 
                   border border-[var(--color-button-border)] 
                   shadow-[0_7px_0_0_var(--color-button-shadow)]
                   active:translate-y-[2px]"
      >
        Send a message
      </button>
    </form>
  );
}
