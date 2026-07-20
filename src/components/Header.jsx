// Site navigation header.
// Provides primary B2C nav (Home, Shop, About, Locations), a distinct
// "Business" tab for franchise enquiries, search entry, and a persistent
// mini-cart indicator. Collapses to a hamburger drawer below md.
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import toroLogo from "../assets/toro-logo.png";

const primaryLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/locations", label: "Locations" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-toro-sand backdrop-blur bg-transparent rounded-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <img
            src={toroLogo}
            alt="Toro Coffee"
            className="h-9 w-auto rounded-full"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {primaryLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm font-large transition-colors hover:text-toro-clay ${
                  isActive ? "text-toro-clay" : "text-toro-espresso"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/franchise"
            className="rounded-full border border-toro-brown px-3 py-1 text-xs font-semibold uppercase tracking-wide text-toro-brown hover:bg-toro-brown hover:text-toro-cream"
          >
            Business
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/account"
            className="hidden text-sm font-medium text-toro-espresso hover:text-toro-clay md:inline-block"
          >
            Sign In
          </Link>
          <button
            type="button"
            aria-label="Search products"
            className="rounded-full p-2 text-toro-espresso hover:bg-toro-sand"
          >
            <SearchIcon />
          </button>
          <Link
            to="/cart"
            aria-label="Open cart"
            className="relative rounded-full p-2 text-toro-espresso hover:bg-toro-sand"
          >
            <CartIcon />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-toro-clay text-[10px] font-bold text-white">
              0
            </span>
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full p-2 text-toro-espresso hover:bg-toro-sand md:hidden"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-toro-sand bg-toro-cream md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col px-4 py-2">
            {primaryLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-medium text-toro-espresso"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/franchise"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-semibold uppercase tracking-wide text-toro-brown"
              >
                Business / Franchise
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/account"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-toro-espresso"
              >
                Sign In
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 6h15l-1.5 9h-12z" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
      <path d="M6 6 5 3H2" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}
