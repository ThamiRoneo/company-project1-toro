// Reusable login form with email, password, and a "Remember me" checkbox.
import { useState } from "react";

export default function LoginForm({ onSubmit }) {
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (touched[key]) validateField(key, value);
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
    }
    setErrors((prev) => ({ ...prev, [key]: message }));
    return !message;
  }

  function validateAll() {
    const nextTouched = { email: true, password: true };
    setTouched(nextTouched);
    let valid = true;
    Object.keys(form).forEach((key) => {
      if (key === "remember") return;
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
          placeholder="Enter your password"
          aria-required="true"
          aria-invalid={!!(touched.password && errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
          className={inputClasses("password")}
        />
        {touched.password && errors.password && (
          <p id="password-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.password}
          </p>
        )}
        <label htmlFor="remember" className="mt-3 flex items-center gap-2 text-sm text-toro-espresso">
          <input
            id="remember"
            type="checkbox"
            checked={form.remember}
            onChange={(e) => update("remember", e.target.checked)}
            className="h-4 w-4 rounded border-toro-sand text-toro-brown focus:ring-toro-brown"
          />
          Remember me
        </label>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-toro-brown py-3 text-base font-semibold text-toro-cream hover:bg-toro-espresso focus:outline-none focus:ring-2 focus:ring-toro-brown/40 focus:ring-offset-2"
      >
        Log In
      </button>
    </form>
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
