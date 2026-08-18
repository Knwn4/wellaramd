import Reveal from "./Reveal";

export default function GuideCapture() {
  return (
    <section className="bg-ivory px-3 lg:px-5 py-6">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[var(--r)] grain min-h-[460px] flex items-center">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(20,20,20,0.9) 0%, rgba(20,20,20,0.55) 48%, rgba(20,20,20,0.12) 80%)" }} />

            <div className="relative z-10 p-8 lg:p-16 max-w-md">
              <span className="eyebrow" style={{ color: "#FFFEF8" }}>Free Guide</span>
              <h2 className="display text-ivory text-[2.6rem] lg:text-[3.4rem] leading-[1.03] mt-3">
                The Longevity Guide to Peptides
              </h2>
              <p className="mt-4 text-white/75 text-[1rem]">
                Written by board certified physicians to support your journey.
              </p>

              <form className="mt-8" action="#">
                <input
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  className="w-full rounded-[18px] bg-white/95 px-5 py-4 text-ink placeholder-black/40 outline-none focus:ring-2 focus:ring-[#FFC671]"
                />
                <button type="submit" className="btn btn-dark w-full mt-4">
                  Get the guide
                </button>
              </form>
              <p className="mt-4 text-white/45 text-[0.72rem] leading-relaxed">
                By creating an account using email, I agree to the Terms &amp;
                Conditions, and acknowledge the Privacy Policy.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
