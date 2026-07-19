// About page — Toro's brand story and a condensed timeline of milestones.
export default function About() {
  const timeline = [
    { year: "2015", text: "Toro opens its first roastery in Potchefstrooom." },
    { year: "2019", text: "Expanded to three physical locations across the city." },
    { year: "2024", text: "A decade of roasting — nationwide online shipping launched." },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold text-toro-espresso">Our Story</h1>
      <p className="mt-4 text-toro-espresso">
        Toro is a Potchefstroom specialty coffee roastery. We source green beans from
        single-origin farms, roast to order in small batches, and deliver fresh across
        South Africa.
      </p>

      <ol className="mt-10 border-l-2 border-toro-clay pl-6">
        {timeline.map((item) => (
          <li key={item.year} className="relative mb-8">
            <span className="absolute -left-[1.65rem] top-1 h-3 w-3 rounded-full bg-toro-clay" />
            <p className="font-display text-xl font-semibold text-toro-brown">{item.year}</p>
            <p className="text-toro-espresso">{item.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
