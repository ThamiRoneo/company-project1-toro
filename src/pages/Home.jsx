// Home page — hero plus a condensed trust strip surfacing Toro's story.
import Hero from "../components/Hero.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import { products } from "../data/products.js";
import { Link } from "react-router-dom";

export default function Home() {
  const featured = products.filter((product) => product.status).slice(0, 3);

  return (
    <div>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-display text-3xl border-b border-toro-sand pb-2 mb-4 text-center font-bold text-toro-espresso">Our Selection</h2>
        <ProductGrid products={featured} />
        <div className="mt-8 text-center">
          <Link
            to="/shop"
            className="rounded-full border border-toro-brown px-6 py-3 font-semibold text-toro-brown hover:bg-toro-brown hover:text-toro-cream"
          >
            View All Coffee
          </Link>
        </div>
      </section>

      <section className="bg-toro-sand">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6">
          <p className="font-display text-2xl font-semibold text-toro-espresso">
            Trusted by our community since 2015 · 3 locations across Johannesburg
          </p>
        </div>
      </section>
    </div>
  );
}
