// Franchise page — distinct B2B journey separated from the primary shopping nav.
export default function Franchise() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold text-toro-espresso">Franchise with Toro</h1>
      <p className="mt-4 text-toro-espresso">
        Bring Toro's roasted-to-order coffee to your community. We partner with
        operators who share our craft-first approach.
      </p>
      <a
        href="mailto:franchise@torocoffee.co.za"
        className="mt-6 inline-block rounded-full bg-toro-brown px-6 py-3 font-semibold text-toro-cream hover:bg-toro-espresso"
      >
        Enquire Now
      </a>
    </div>
  );
}
