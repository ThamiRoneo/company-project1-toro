// Reusable location card component used by the About and Locations pages.
export default function LocationCard({ location, inView = true, delay = 0 }) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-toro border border-toro-sand bg-white shadow-sm transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-toro-sand">
        <img
          src={location.image}
          alt={location.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-toro-espresso">{location.name}</h3>
        <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-toro-brown">
          <MapPinIcon />
          <span>{location.address}</span>
        </p>

        <div className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
          <span className="col-span-2 border-b border-toro-sand pb-1 text-xs font-semibold uppercase tracking-wide text-toro-clay">
            Trading Hours
          </span>
          {location.hours.map((slot) => (
            <>
              <span className="font-medium text-toro-espresso">{slot.day}</span>
              <span className="text-toro-brown">{slot.open}{slot.close ? ` – ${slot.close}` : ""}</span>
            </>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <a
            href={location.maps}
            target="_blank"
            rel="noreferrer noopener"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-toro-brown py-2.5 text-center text-sm font-semibold text-toro-cream hover:bg-toro-espresso"
          >
            Get Directions
            <ExternalIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-toro-clay">
      <path d="M20 10c0 6-12 14-12 14S4 16 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
