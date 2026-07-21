// About page — Toro's full brand story, interactive timeline, and dynamic content.
// a clickable year navigator, and animated counters.
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import aboutHero from "../assets/about-us.jpg";

const TIMELINE = [
  {
    year: "2014",
    label: "The Dream",
    title: "Where It All Began",
    body: "Toro began with a simple but bold dream: to bring exceptional specialty coffee into everyday life. Not just coffee for cafes, but coffee for people—for conversations, community, and moments that matter.",
  },
  {
    year: "2015",
    label: "The First Cup",
    title: "Opening Our Doors",
    body: "That dream became reality with the opening of our very first Toro store. From day one, Toro was built on quality, consistency, and the belief that great coffee should be accessible, not exclusive.",
  },
  {
    year: "2019",
    label: "Growing",
    title: "More Than a Cafe",
    body: "As our community grew, so did Toro. Our second store opened, confirming what we believed from the start—this was more than a cafe. It was a brand rooted in connection and trust.",
  },
  {
    year: "2025",
    label: "Expanding",
    title: "A New Season",
    body: "With our 3rd and 4th locations launching in 2025, Toro stepped into a new season of growth—stronger systems, deeper experience, and a proven model ready to scale.",
  },
  {
    year: "Today",
    label: "Sharing",
    title: "The Dream Continues",
    body: "What started as one vision is now a turnkey opportunity—ready to come to your town. After a decade of hands-on experience, learning, refining, and building, Toro is now open to sharing this dream with franchise partners.",
  },
];

const ROASTING_STORY = {
  title: "Roasting Our Own, Supplying Our Own",
  body: "To protect quality and control every step of the journey, we began roasting our own beans and supplying our own stores. From sourcing to roasting to cup, Toro became fully invested in excellence—every single day.",
};

const STATS = [
  { value: 10, suffix: "+", label: "Years of experience" },
  { value: 4, suffix: "", label: "Locations" },
  { value: 2015, suffix: "", label: "Founded" },
];

function AnimatedCounter({ value, suffix, trigger }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const end = value;
    const duration = 1200;
    const startTime = performance.now();

    function step(timestamp) {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    }
    requestAnimationFrame(step);
  }, [trigger, value]);

  return (
    <span className="font-display text-4xl font-bold text-toro-clay">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const [activeYear, setActiveYear] = useState("2014");
  const [storyInView, setStoryInView] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const storyRef = useRef(null);
  const statsRef = useRef(null);
  const active =
    TIMELINE.find((item) => item.year === activeYear) ?? TIMELINE[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStoryInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (storyRef.current) observer.observe(storyRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden bg-toro-espresso py-16 text-center text-toro-cream sm:py-24">
        <img
          src={aboutHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="font-display text-4xl font-bold sm:text-5xl md:text-6xl">
            The Toro Story
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-toro-sand">
            From Dream to Cup — bringing exceptional specialty coffee into
            everyday life.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-center text-lg text-toro-espresso">
          Toro began with a simple but bold dream: to bring exceptional
          specialty coffee into everyday life. Not just coffee for cafes, but
          coffee for people—for conversations, community, and moments that
          matter.
        </p>
      </section>

      {/* Interactive timeline */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-2">
          {TIMELINE.map((item) => (
            <button
              key={item.year}
              type="button"
              onClick={() => setActiveYear(item.year)}
              aria-pressed={activeYear === item.year}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                activeYear === item.year
                  ? "bg-toro-brown text-toro-cream shadow-lg"
                  : "border border-toro-sand text-toro-espresso hover:bg-toro-sand"
              }`}
            >
              {item.year}
            </button>
          ))}
        </div>

        <div
          key={activeYear}
          className="mt-8 rounded-toro border border-toro-sand bg-white p-6 shadow-sm transition-all sm:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-toro-clay">
            {active.label}
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-toro-espresso sm:text-3xl">
            {active.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-toro-espresso">
            {active.body}
          </p>
        </div>

        <ol className="mx-auto mt-10 max-w-3xl border-l-2 border-toro-sand">
          {TIMELINE.map((item) => (
            <li key={item.year} className="relative mb-8 pl-8">
              <button
                type="button"
                onClick={() => setActiveYear(item.year)}
                className={`absolute left-0 top-1 h-4 w-4 -translate-x-[9px] rounded-full transition-all ${
                  activeYear === item.year
                    ? "bg-toro-clay ring-4 ring-toro-clay/20"
                    : "bg-toro-sand hover:bg-toro-clay"
                }`}
                aria-label={`Jump to ${item.year}: ${item.label}`}
              />
              <p className="font-display text-lg font-semibold text-toro-brown">
                {item.year} — {item.label}
              </p>
              <p className="text-sm text-toro-espresso">{item.title}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Roasting story */}
      <section ref={storyRef} className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div
          className={`rounded-toro border border-toro-sand bg-toro-sand/50 p-6 transition-all duration-700 ${storyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h2 className="font-display text-2xl font-bold text-toro-espresso">
            {ROASTING_STORY.title}
          </h2>
          <p className="mt-3 text-toro-espresso">{ROASTING_STORY.body}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div ref={statsRef} className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-toro border border-toro-sand bg-white p-6 text-center transition-all duration-700 ${
                statsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <AnimatedCounter {...stat} trigger={statsInView} />
              <p className="mt-2 text-sm text-toro-brown">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl border-toro-sand rounded-toro border bg-white px-4 py-16 sm:px-6">
        <p className="text-center font-display text-2xl font-semibold text-toro-espresso sm:text-3xl">
          Join us on our journey to create a better future
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/shop"
            className="w-full rounded-full bg-toro-brown px-8 py-3 text-center text-base font-semibold text-toro-cream hover:bg-toro-espresso sm:w-auto"
          >
            Shop with us
          </Link>
          <Link
            to="/franchise"
            className="w-full rounded-full border-2 border-toro-brown px-8 py-3 text-center text-base font-semibold text-toro-brown hover:bg-toro-brown hover:text-toro-cream sm:w-auto"
          >
            Join our business
          </Link>
        </div>
      </section>
    </div>
  );
}
