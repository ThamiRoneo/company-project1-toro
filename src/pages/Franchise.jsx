// Franchise page — content adapted from torocoffee.co.za/franchise.
export default function Franchise() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <header className="mb-8 text-center">
        <h1 className="font-display text-4xl font-bold text-toro-espresso">
          Franchise Opportunities
        </h1>
        <p className="mt-3 text-lg text-toro-brown">
          Join our growing family of coffee entrepreneurs and build a profitable
          business with Toro's proven system.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a
            href="mailto:franchise@torocoffee.co.za"
            className="rounded-full bg-toro-brown px-6 py-3 font-semibold text-toro-cream hover:bg-toro-espresso"
          >
            Apply Now
          </a>
          <a
            href="#inquiry"
            className="rounded-full border border-toro-brown px-6 py-3 font-semibold text-toro-brown hover:bg-toro-sand"
          >
            Franchise Inquiry
          </a>
        </div>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="bg-white/40 p-4 rounded-lg">
          <h2 className="font-display font-semibold text-center text-2xl text-toro-espresso border-b border-toro-sand p-3">
            Why Franchise with Us?
          </h2>
          <p className="mt-3 text-toro-espresso">
            We combine premium products with exceptional customer service —
            partnering with passionate operators to grow our brand.
          </p>
          <ul className="mt-4 space-y-3 list-inside list-disc text-toro-brown">
            <li>
              <strong>Proven Success:</strong> Join an established brand with a
              track record of profitability and loyal customers.
            </li>
            <li>
              <strong>Complete Training:</strong> Comprehensive program covering
              operations, service and business management.
            </li>
            <li>
              <strong>Ongoing Support:</strong> Continuous operational,
              marketing and supply-chain support.
            </li>
            <li>
              <strong>Marketing Power:</strong> Benefit from national campaigns
              and established brand recognition.
            </li>
          </ul>
        </div>

        <div className="bg-white/40 p-4 rounded-lg">
          <h2 className="font-display font-semibold border-b border-toro-sand p-3 text-center text-2xl text-toro-espresso">
            What We Provide
          </h2>
          <div className="mt-3 space-y-4 text-toro-brown">
            <div>
              <h3 className="font-bold">Training & Development</h3>
              <p className="mt-1">
                4-week comprehensive training covering coffee, customer service,
                operations and systems.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Site Selection & Setup</h3>
              <p className="mt-1">
                Assistance with location selection, lease negotiation, store
                design and complete setup including equipment.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Marketing & Branding</h3>
              <p className="mt-1">
                National marketing, social support, promotional materials and
                local store marketing guidance.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Supply Chain & Products</h3>
              <p className="mt-1">
                Access to our premium beans, equipment and supplies with
                reliable deliveries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display font-bold text-2xl text-center border-t pt-6 border-toro-sand text-toro-espresso">
          Franchise Requirements
        </h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="bg-toro-sand/40 p-4 rounded-lg">
            <h3 className="font-medium">Financial Requirements</h3>
            <ul className="mt-2 list-inside list-disc text-toro-brown">
              <li>Initial Investment: R500,000 - R1,500,000</li>
              <li>Franchise Fee: R150,000</li>
              <li>Royalty Fee: 5% of gross sales</li>
              <li>Marketing Fee: 2% of gross sales</li>
              <li>Liquid Capital Required: R300,000</li>
            </ul>
          </div>

          <div className="bg-toro-sand/40 p-4 rounded-lg">
            <h3 className="font-medium">Personal Requirements</h3>
            <ul className="mt-2 list-inside list-disc text-toro-brown">
              <li>Passion for coffee and customer service</li>
              <li>Strong business and leadership skills</li>
              <li>Commitment to quality and excellence</li>
              <li>Hands-on involvement in daily operations</li>
              <li>Alignment with our brand values</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display font-semibold text-2xl text-toro-espresso">
          How to Get Started
        </h2>
        <ol className="mt-4 list-decimal list-inside space-y-3 text-toro-brown">
          <li>
            <strong>Submit Inquiry:</strong> Fill out the franchise inquiry form
            below to express your interest.
          </li>
          <li>
            <strong>Initial Interview:</strong> Meet with our franchise team to
            discuss goals and opportunity.
          </li>
          <li>
            <strong>Discovery Day:</strong> Visit our HQ, meet the team and
            experience operations firsthand.
          </li>
          <li>
            <strong>Agreement & Training:</strong> Sign the agreement and begin
            training.
          </li>
          <li>
            <strong>Grand Opening:</strong> Launch your store with full support.
          </li>
        </ol>
      </section>

      <section
        id="inquiry"
        className="mt-12 bg-white/60 p-6 rounded-lg shadow-sm"
      >
        <h2 className="font-display font-semibold text-2xl text-toro-espresso">
          Franchise Inquiry Form
        </h2>
        <p className="mt-2 text-sm text-toro-brown">
          Fill out the form below and our franchise team will contact you within
          24-48 hours.
        </p>

        <form className="mt-4 grid gap-3 md:grid-cols-2">
          <input
            name="fullName"
            placeholder="Full Name"
            className="p-3 rounded border"
          />
          <input
            name="email"
            placeholder="Email Address"
            className="p-3 rounded border"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            className="p-3 rounded border"
          />
          <input
            name="location"
            placeholder="Preferred Location"
            className="p-3 rounded border"
          />
          <select name="investmentRange" className="p-3 rounded border">
            <option>R500,000 - R1,000,000</option>
            <option>R1,000,000 - R1,500,000</option>
            <option>Other</option>
          </select>
          <textarea
            name="about"
            placeholder="Tell us about yourself"
            className="p-3 rounded border md:col-span-2"
          />

          <button
            type="submit"
            className="mt-2 inline-block rounded-full bg-toro-brown px-6 py-3 font-semibold text-toro-cream hover:bg-toro-espresso md:col-span-2"
          >
            Submit Franchise Inquiry
          </button>
        </form>

        <p className="mt-4 text-xs text-toro-brown text-center">
          By submitting this form, you agree to be contacted by our franchise
          team regarding franchise opportunities.
        </p>
      </section>
    </div>
  );
}
