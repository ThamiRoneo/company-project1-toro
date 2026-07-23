// Contact page — content pulled from torocoffee.co.za/contact.php
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

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
    }
    setErrors((prev) => ({ ...prev, [key]: message }));
    return !message;
  }

  function validateAll() {
    const keys = ["name", "email", "subject", "message"];
    const nextTouched = {};
    keys.forEach((key) => (nextTouched[key] = true));
    setTouched(nextTouched);
    let valid = true;
    keys.forEach((key) => {
      if (!validateField(key, form[key])) valid = false;
    });
    return valid;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validateAll()) return;

    const subject = encodeURIComponent(form.subject || "Contact Form");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`
    );
    window.location.href = `mailto:info@torocoffee.co.za?subject=${subject}&body=${body}`;
  }

  function inputClasses(key) {
    const base =
      "w-full rounded-md border px-4 py-3 text-base outline-none transition-colors";
    const error = touched[key] && errors[key];
    return `${base} ${
      error
        ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/40"
        : "border-toro-sand focus:border-toro-brown focus:ring-2 focus:ring-toro-brown/30"
    }`;
  }

  return (
    <div className="mx-auto max-w-2xl bg-toro-brown/40 px-4 py-12 sm:px-6">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-toro-espresso sm:text-5xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-toro-brown">
          We&apos;d love to hear from you. Send us a message and we&apos;ll
          respond as soon as possible.
        </p>
      </div>

      <section className="mt-10 grid gap-6 text-center sm:grid-cols-2">
        <div className="rounded-toro border border-toro-sand bg-white p-6 shadow-sm">
          <h2 className="font-display text-lg font-semibold text-toro-espresso">
            Email
          </h2>
          <p className="mt-2 flex items-center justify-center gap-2 text-sm text-toro-brown">
            <MailIcon /> info@torocoffee.co.za
          </p>
        </div>
        <div className="rounded-toro border border-toro-sand bg-white p-6 shadow-sm">
          <h2 className="font-display text-lg font-semibold text-toro-espresso">
            Phone
          </h2>
          <p className="mt-2 flex items-center justify-center gap-2 text-sm text-toro-brown">
            <PhoneIcon /> +27 72 470 1971
          </p>
        </div>
        <div className="rounded-toro border border-toro-sand bg-white p-6 shadow-sm sm:col-span-2">
          <h2 className="font-display text-lg font-semibold text-toro-espresso">
            Address
          </h2>
          <p className="mt-2 flex items-center justify-center gap-2 text-sm text-toro-brown pb-2">
            <MapPinIcon /> 99 Molen St, Potchefstroom, 2520
          </p>
          <h2 className="font-display text-lg font-semibold text-toro-espresso border-t border-toro-sand pt-2">
            Business Hours
          </h2>
          <p className="mt-1 text-sm text-toro-brown">
            Monday - Friday: 9:00 AM - 6:00 PM
            <br />
            Saturday: 10:00 AM - 4:00 PM
            <br />
            Sunday: Closed
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold text-toro-espresso">
          Send us a Message
        </h2>
        <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
          <div>
            <input
              ref={nameRef}
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              onBlur={() => setTouched((p) => ({ ...p, name: true }))}
              className={inputClasses("name")}
            />
            <p className="mt-1 min-h-[1.25rem] text-sm text-red-600">
              {touched.name && errors.name ? errors.name : ""}
            </p>
          </div>
          <div>
            <input
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              onBlur={() => setTouched((p) => ({ ...p, email: true }))}
              className={inputClasses("email")}
            />
            <p className="mt-1 min-h-[1.25rem] text-sm text-red-600">
              {touched.email && errors.email ? errors.email : ""}
            </p>
          </div>
          <div>
            <input
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => update("subject", e.target.value)}
              onBlur={() => setTouched((p) => ({ ...p, subject: true }))}
              className={inputClasses("subject")}
            />
            <p className="mt-1 min-h-[1.25rem] text-sm text-red-600">
              {touched.subject && errors.subject ? errors.subject : ""}
            </p>
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              onBlur={() => setTouched((p) => ({ ...p, message: true }))}
              className={inputClasses("message")}
            />
            <p className="mt-1 min-h-[1.25rem] text-sm text-red-600">
              {touched.message && errors.message ? errors.message : ""}
            </p>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-toro-brown px-6 py-3 font-semibold text-toro-cream hover:bg-toro-espresso"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-toro-brown">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-toro-brown">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-toro-brown">
      <path d="M20 10c0 6-12 14-12 14S4 16 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
