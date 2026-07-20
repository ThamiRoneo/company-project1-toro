// Reusable sign-up form with validation, ARIA attributes, and responsive styling.
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpForm({ onSubmit }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    postalAddress: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [passwordChecks, setPasswordChecks] = useState({ length: false, upper: false, number: false, symbol: false });

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (touched[key]) validateField(key, value);
    if (key === "password") {
      setPasswordChecks({
        length: value.length >= 8,
        upper: /[A-Z]/.test(value),
        number: /[0-9]/.test(value),
        symbol: /[^A-Za-z0-9]/.test(value),
      });
    }
  }

  function validateField(key, value) {
    let message = "";
    if (!value.trim()) {
      message = "This field is required";
    } else if (key === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) message = "Enter a valid email address";
    } else if (key === "password") {
      if (value.length < 8) message = "Password must be at least 8 characters";
      else if (!/[A-Z]/.test(value)) message = "Include at least one uppercase letter";
      else if (!/[0-9]/.test(value)) message = "Include at least one number";
      else if (!/[^A-Za-z0-9]/.test(value)) message = "Include at least one symbol";
    }
    setErrors((prev) => ({ ...prev, [key]: message }));
    return !message;
  }

  function validateAll() {
    const nextTouched = { fullName: true, email: true, password: true, postalAddress: true };
    setTouched(nextTouched);
    let valid = true;
    Object.keys(form).forEach((key) => {
      if (!validateField(key, form[key])) valid = false;
    });
    return valid;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateAll()) onSubmit(form);
  }

  const inputClasses = (key) =>
    `w-full rounded-md border px-4 py-3 text-base outline-none transition-colors ${
      touched[key] && errors[key]
        ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/40"
        : "border-toro-sand focus:border-toro-brown focus:ring-2 focus:ring-toro-brown/30"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-xl space-y-6 px-4 sm:px-6">
      <div>
        <label htmlFor="fullName" className="mb-1 flex items-center gap-2 text-sm font-semibold text-toro-espresso">
          <UserIcon /> Full Name
        </label>
        <input
          id="fullName"
          type="text"
          value={form.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          onBlur={() => setTouched((p) => ({ ...p, fullName: true }))}
          placeholder="Jane Doe"
          aria-required="true"
          aria-invalid={!!(touched.fullName && errors.fullName)}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          className={inputClasses("fullName")}
        />
        {touched.fullName && errors.fullName && (
          <p id="fullName-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.fullName}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 flex items-center gap-2 text-sm font-semibold text-toro-espresso">
          <MailIcon /> Email Address
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          onBlur={() => setTouched((p) => ({ ...p, email: true }))}
          placeholder="jane@example.com"
          aria-required="true"
          aria-invalid={!!(touched.email && errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClasses("email")}
        />
        {touched.email && errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="mb-1 flex items-center gap-2 text-sm font-semibold text-toro-espresso">
          <LockIcon /> Password
        </label>
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={(e) => update("password", e.target.value)}
          onBlur={() => setTouched((p) => ({ ...p, password: true }))}
          placeholder="At least 8 characters, 1 uppercase, 1 number, 1 symbol"
          aria-required="true"
          aria-invalid={!!(touched.password && errors.password)}
          aria-describedby={errors.password ? "password-error" : "password-hint"}
          className={inputClasses("password")}
        />
        <ul className="mt-2 space-y-1 text-xs" id="password-hint">
          <PasswordRule label="At least 8 characters" met={passwordChecks.length} />
          <PasswordRule label="1 uppercase letter" met={passwordChecks.upper} />
          <PasswordRule label="1 number" met={passwordChecks.number} />
          <PasswordRule label="1 symbol (e.g. !@#$%)" met={passwordChecks.symbol} />
        </ul>
        {touched.password && errors.password && (
          <p id="password-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.password}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="postalAddress" className="mb-1 flex items-center gap-2 text-sm font-semibold text-toro-espresso">
          <MapPinIcon /> Postal Address
        </label>
        <textarea
          id="postalAddress"
          rows={3}
          value={form.postalAddress}
          onChange={(e) => update("postalAddress", e.target.value)}
          onBlur={() => setTouched((p) => ({ ...p, postalAddress: true }))}
          placeholder="123 Main Rd, Suburb, City, 0000"
          aria-required="true"
          aria-invalid={!!(touched.postalAddress && errors.postalAddress)}
          aria-describedby={errors.postalAddress ? "postalAddress-error" : undefined}
          className={inputClasses("postalAddress")}
        />
        {touched.postalAddress && errors.postalAddress && (
          <p id="postalAddress-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.postalAddress}
          </p>
        )}
      </div>

        <button
          type="submit"
          className="w-full rounded-full bg-toro-brown py-3 text-base font-semibold text-toro-cream hover:bg-toro-espresso focus:outline-none focus:ring-2 focus:ring-toro-brown/40 focus:ring-offset-2"
        >
          Create Account
        </button>
        <p className="text-center text-sm text-toro-brown">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-toro-clay hover:underline">
            Login
          </Link>
        </p>
    </form>
  );
}

function PasswordRule({ label, met }) {
  return (
    <li className={`flex items-center gap-2 ${met ? "text-green-600" : "text-gray-400"}`}>
      <span aria-hidden="true">{met ? "✓" : "•"}</span>
      <span>{label}</span>
    </li>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-toro-brown">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-toro-brown">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-toro-brown">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-toro-brown">
      <path d="M20 10c0 6-12 14-12 14S4 16 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
