export default function Contact() {
    return (
      <section className="bg-[#031F30] py-24 px-6 flex justify-center">
        <div className="w-full max-w-4xl text-center">
          <span className="text-sm text-[#A45D35] bg-[#341F16] px-5 py-1 rounded-full tracking-wide">
            Contact with us
          </span>
          <h2 className="text-white text-4xl font-bold mt-4 mb-12">
            Write a message
          </h2>
          <form className="flex flex-col items-center gap-6">
            <div className="w-full flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Full name"
                className="flex-1 bg-[#3B2C26] text-white placeholder:text-white/60 px-6 py-4 rounded-full outline-none"
              />
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-[#3B2C26] text-white placeholder:text-white/60 px-6 py-4 rounded-full outline-none"
              />
            </div>
            <textarea
              placeholder="Write a message"
              rows={5}
              className="w-full bg-[#3B2C26] text-white placeholder:text-white/60 px-6 py-4 rounded-xl outline-none resize-none"
            />
            <button
            type="submit"
            className="mt-4 px-8 py-3 bg-white text-black text-[22px] font-semibold rounded-full 
             border border-[#FF5800] 
             shadow-[0_7px_0_0_#FF5800]
             active:translate-y-[2px]"
            >
            Send a message
            </button>
          </form>
        </div>
      </section>
    );
  }
  