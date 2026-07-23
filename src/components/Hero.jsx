// Homepage hero — static background image, single primary CTA plus one
// lower-commitment secondary CTA, and a trust strip.
import { Link } from "react-router-dom";
import hero2 from "../assets/hero2.jpg";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-toro-espresso text-toro-cream">
      <img
        src={hero2}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />

      <div className="relative z-15 mx-auto max-w-3xl px-4 text-center">
        <h1 className="font-display text-6xl font-bold sm:text-5xl md:text-6xl">
          Artisan Coffee Beans
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-toro-sand">
          Sourced, roasted and delivered fresh — from our roastery to your cup.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/shop"
            className="rounded-full bg-toro-clay px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Shop Coffee
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-toro-cream px-6 py-3 font-semibold text-toro-cream hover:bg-toro-cream hover:text-toro-espresso"
          >
            Our Story
          </Link>
        </div>

        <p className="mt-6 text-sm text-toro-sand">
          Free delivery over R500 · Roasted to order · Nationwide shipping
        </p>
      </div>
    </section>
  );
}
