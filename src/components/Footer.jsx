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
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              className="text-toro-sand hover:text-toro-cream"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://instagram.com/toro.community"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="text-toro-sand hover:text-toro-cream"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="X (Twitter)"
              className="text-toro-sand hover:text-toro-cream"
            >
              <XIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-toro-sand">
            <li>
              <Link to="/shop" className="hover:text-toro-cream">
                Shop Coffee
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-toro-cream">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/locations" className="hover:text-toro-cream">
                Locations
              </Link>
            </li>
            <li>
              <Link to="/franchise" className="hover:text-toro-cream">
                Franchise
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">
            Contact
          </h3>
          <address className="mt-3 space-y-2 text-sm not-italic text-toro-sand">
            <p className="flex items-start gap-2">
              <MapPinIcon />
              <span>99 Mollen St, Potchefstrooom</span>
            </p>
            <p className="flex items-center gap-2">
              <PhoneIcon />
              <span>+27 72 470 1971</span>
            </p>
            <p className="flex items-center gap-2">
              <MailIcon />
              <span>hello@torocoffee.co.za</span>
            </p>
          </address>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">
            Newsletter
          </h3>
          {subscribed ? (
            <p className="mt-3 text-sm text-toro-clay">
              Thanks for subscribing!
            </p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="mt-3 flex flex-col gap-2"
            >
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
            <Link to="/shipping" className="hover:text-toro-cream">
              Shipping
            </Link>
            <Link to="/returns" className="hover:text-toro-cream">
              Returns
            </Link>
            <Link to="/privacy" className="hover:text-toro-cream">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-toro-cream">
              Terms
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20 10c0 6-12 14-12 14S4 16 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}
