// Locations page — lists Toro's physical stores.
export default function Locations() {
  const stores = [
    { name: "Rosebank", address: "173 Oxford Road, Rosebank, Sandton", hours: "Mon–Sun 07:00–17:00" },
    { name: "Braamfontein", address: "12 Jan Smuts Ave, Braamfontein", hours: "Mon–Fri 07:00–16:00" },
    { name: "Fourways", address: "Cnr Witkoppen & William Nicol, Fourways", hours: "Mon–Sun 07:00–18:00" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-bold text-toro-espresso">Locations</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {stores.map((store) => (
          <div key={store.name} className="rounded-toro border border-toro-sand bg-white p-6">
            <h2 className="font-display text-xl font-semibold text-toro-espresso">{store.name}</h2>
            <p className="mt-2 text-sm text-toro-brown">{store.address}</p>
            <p className="mt-2 text-sm text-toro-clay">{store.hours}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
