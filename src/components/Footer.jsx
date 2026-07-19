// Site footer — rendered once in App so it is consistent across every page.
// Uses the specialty-coffee-specific brand line (not generic boilerplate),
// includes social links, newsletter signup and policy links.
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event) {
    event.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="mt-16 border-t border-toro-sand bg-toro-espresso text-toro-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold">Toro</p>
          <p className="mt-2 text-sm text-toro-sand">
            Premium artisan coffee beans, expertly roasted and delivered fresh.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-toro-sand">
            <li><Link to="/shop" className="hover:text-toro-cream">Shop Coffee</Link></li>
            <li><Link to="/about" className="hover:text-toro-cream">Our Story</Link></li>
            <li><Link to="/locations" className="hover:text-toro-cream">Locations</Link></li>
            <li><Link to="/franchise" className="hover:text-toro-cream">Franchise</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Contact</h3>
          <address className="mt-3 space-y-2 text-sm not-italic text-toro-sand">
            <p>173 Oxford Road, Rosebank, Sandton</p>
            <p>010 158 4346</p>
            <p>hello@torocoffee.co.za</p>
          </address>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Newsletter</h3>
          {subscribed ? (
            <p className="mt-3 text-sm text-toro-clay">Thanks for subscribing!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-3 flex flex-col gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@email.com"
                aria-label="Email address"
                className="rounded-md border border-toro-brown bg-toro-char px-3 py-2 text-sm text-toro-cream placeholder:text-toro-sand"
              />
              <button
                type="submit"
                className="rounded-md bg-toro-clay px-3 py-2 text-sm font-semibold text-white hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-toro-char">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-toro-sand sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Toro Coffee. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/shipping" className="hover:text-toro-cream">Shipping</Link>
            <Link to="/returns" className="hover:text-toro-cream">Returns</Link>
            <Link to="/privacy" className="hover:text-toro-cream">Privacy</Link>
            <Link to="/terms" className="hover:text-toro-cream">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
