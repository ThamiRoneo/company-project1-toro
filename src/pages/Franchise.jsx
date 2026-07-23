// Franchise page — content adapted from torocoffee.co.za/franchise.
import { useRef, useState } from "react";
import hero1 from "../assets/hero1.jpg";

export default function Franchise() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    investmentRange: "",
    about: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const fullNameRef = useRef(null);

  function focusFullName() {
    setTimeout(() => fullNameRef.current?.focus(), 100);
  }

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
    } else if (key === "phone") {
      const phoneRegex = /^[+]?[\d\s()-]{7,}$/;
      if (!phoneRegex.test(value.trim())) message = "Enter a valid phone number";
    }
    setErrors((prev) => ({ ...prev, [key]: message }));
    return !message;
  }

  function validateAll() {
    const nextTouched = {
      fullName: true,
      email: true,
      phone: true,
      location: true,
      investmentRange: true,
      about: true,
    };
    setTouched(nextTouched);
    let valid = true;
    Object.keys(form).forEach((key) => {
      if (!validateField(key, form[key])) valid = false;
    });
    return valid;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validateAll()) return;

    const subject = encodeURIComponent("Franchise Inquiry");
    const body = encodeURIComponent(
      `Full Name: ${form.fullName}\nEmail: ${form.email}\nPhone: ${form.phone}\nPreferred Location: ${form.location}\nInvestment Range: ${form.investmentRange}\nAbout: ${form.about}`
    );
    window.location.href = `mailto:info@torocoffee.co.za?subject=${subject}&body=${body}`;
  }

  function inputClasses(key) {
    const base =
      "flex-1 p-2 rounded border bg-white text-toro-espresso placeholder:text-toro-brown";
    const error = touched[key] && errors[key];
    return `${base} ${error ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/40" : "border-toro-sand focus:border-toro-brown focus:ring-2 focus:ring-toro-brown/30"}`;
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <header className="relative overflow-hidden rounded-toro mb-8 text-center">
        <img
          src={hero1}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="relative z-10 py-12">
          <h1 className="font-display text-4xl font-bold text-white">
            Franchise Opportunities
          </h1>
          <p className="mt-3 text-lg text-white/98">
            Join our growing family of coffee entrepreneurs and build a
            profitable business with Toro's proven system, premium products, and
            comprehensive support.
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
              onClick={focusFullName}
              className="rounded-full border border-toro-brown px-6 py-3 font-semibold text-toro-brown bg-toro-cream/60 hover:bg-toro-sand"
            >
              Franchise Inquiry
            </a>
          </div>
        </div>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="bg-white/40 p-8 rounded-lg">
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

        <div className="bg-white/40 p-8 rounded-lg">
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
        <h2 className="font-display font-bold text-2xl text-center border-t pt-6 pb-2 border-toro-sand text-toro-espresso">
          Franchise Requirements
        </h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="bg-toro-sand/40 p-5 rounded-lg">
            <h3 className="font-display font-bold border-b p-2 text-center">
              Financial Requirements
            </h3>
            <ul className="mt-2 list-inside list-disc text-toro-brown">
              <li>
                <strong>Initial Investment:</strong> R500,000 - R1,500,000
              </li>
              <li>
                <strong>Franchise Fee:</strong> R150,000
              </li>
              <li>
                <strong>Royalty Fee:</strong> 5% of gross sales
              </li>
              <li>
                <strong>Marketing Fee:</strong> 2% of gross sales
              </li>
              <li>
                <strong>Liquid Capital Required:</strong> R300,000
              </li>
            </ul>
          </div>

          <div className="bg-toro-sand/40 p-5 rounded-lg">
            <h3 className="font-display font-bold border-b p-2 text-center">
              Personal Requirements
            </h3>
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
        <h2 className="font-display font-semibold border-t border-toro-sand pt-6 pb-2 text-2xl text-center text-toro-espresso">
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
        className="mt-12 bg-white/60 p-6 text-center rounded-lg shadow-sm"
      >
        <h2 className="font-display font-semibold text-center text-2xl text-toro-espresso">
          Franchise Inquiry Form
        </h2>
        <p className="mt-2 text-sm text-center text-toro-brown">
          Fill out the form below and our franchise team will contact you within
          24-48 hours.
        </p>

        <form onSubmit={handleSubmit} className="mt-4 grid gap-3 md:grid-cols-2 ">
          <div className="flex items-center gap-2">
            <UserIcon />
            <input
              ref={fullNameRef}
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              onBlur={() => setTouched((p) => ({ ...p, fullName: true }))}
              className={inputClasses("fullName")}
            />
          </div>
          <p className="md:col-span-2 min-h-[1.25rem] text-sm text-red-600">
            {touched.fullName && errors.fullName ? errors.fullName : ""}
          </p>
          <div className="flex items-center gap-2">
            <MailIcon />
            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              onBlur={() => setTouched((p) => ({ ...p, email: true }))}
              className={inputClasses("email")}
            />
          </div>
          <p className="md:col-span-2 min-h-[1.25rem] text-sm text-red-600">
            {touched.email && errors.email ? errors.email : ""}
          </p>
          <div className="flex items-center gap-2">
            <PhoneIcon />
            <input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
              className={inputClasses("phone")}
            />
          </div>
          <p className="md:col-span-2 min-h-[1.25rem] text-sm text-red-600">
            {touched.phone && errors.phone ? errors.phone : ""}
          </p>
          <div className="flex items-center gap-2">
            <MapPinIcon />
            <input
              name="location"
              placeholder="Preferred Location"
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
              onBlur={() => setTouched((p) => ({ ...p, location: true }))}
              className={inputClasses("location")}
            />
          </div>
          <p className="md:col-span-2 min-h-[1.25rem] text-sm text-red-600">
            {touched.location && errors.location ? errors.location : ""}
          </p>
          <div className="flex items-center gap-2">
            <BriefcaseIcon />
            <select
              name="investmentRange"
              value={form.investmentRange}
              onChange={(e) => update("investmentRange", e.target.value)}
              onBlur={() => setTouched((p) => ({ ...p, investmentRange: true }))}
              className={inputClasses("investmentRange")}
            >
              <option value="">Select Range</option>
              <option>R500,000 - R750,000</option>
              <option>R750,000 - R1,000,000</option>
              <option>R1,000,000 - R1,500,000</option>
              <option>Other</option>
            </select>
          </div>
          <p className="md:col-span-2 min-h-[1.25rem] text-sm text-red-600">
            {touched.investmentRange && errors.investmentRange ? errors.investmentRange : ""}
          </p>
          <div className="flex items-center gap-2 md:col-span-2">
            <MessageIcon />
            <textarea
              name="about"
              placeholder="Tell us about yourself...\ni.e. Share your experiences, goals, and why you want to franchise us."
              value={form.about}
              onChange={(e) => update("about", e.target.value)}
              onBlur={() => setTouched((p) => ({ ...p, about: true }))}
              className={inputClasses("about")}
            />
          </div>
          <p className="md:col-span-2 min-h-[1.25rem] text-sm text-red-600">
            {touched.about && errors.about ? errors.about : ""}
          </p>

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

function UserIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 text-toro-brown"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 text-toro-brown"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 text-toro-brown"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 text-toro-brown"
    >
      <path d="M20 10c0 6-12 14-12 14S4 16 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 text-toro-brown"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 text-toro-brown"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
