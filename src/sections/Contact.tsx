const title = "Get in touch with our team and discover <br /> how we can help your project thrive!";
const subtitle = "Contact with us";
const buttonText = "Send message"

export default function Contact() {
    return (
      <section id="contact" className="bg-[var(--color-background)] py-24 px-6 flex justify-center">
        <div className="w-full max-w-4xl text-center">
          <span className="text-[12px] text-[var(--color-contactWithUs)] bg-[var(--color-contact-background)] px-5 py-1 rounded-full tracking-wide">
            {subtitle}
          </span>
          <h2 className="text-[var(--color-text)] text-[30px] font-bold mt-4 mb-12 leading-snug" dangerouslySetInnerHTML={{__html: title}}>
          </h2>
          <form className="flex flex-col items-center gap-6">
            <div className="w-full flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Full name"
                className="flex-1 bg-[var(--color-contact-background)] text-[var(--color-text)] placeholder:text-[var(--color-text)]/60 px-6 py-4 rounded-full outline-none"
              />
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-[var(--color-contact-background)] text-[var(--color-text)] placeholder:text-[var(--color-text)]/60 px-6 py-4 rounded-full outline-none"
              />
            </div>
            <textarea
              placeholder="Write a message"
              rows={5}
              className="w-full bg-[var(--color-contact-background)] text-[var(--color-text)] text-[16px] placeholder:[var(--color-text)]/60 px-6 py-4 rounded-xl outline-none resize-none"
            />
            <button
            type="submit"
            className="mt-2 w-[166px] h-[44px] 
              bg-[var(--color-button-bg)] 
              text-[var(--color-button-text)] 
              text-[16px] font-semibold rounded-full 
              border border-[var(--color-button-border)] 
              shadow-[0_7px_0_0_var(--color-button-shadow)]
              active:translate-y-[2px]"
          >
            {buttonText}
          </button>
          </form>
        </div>
      </section>
    );
  }
  