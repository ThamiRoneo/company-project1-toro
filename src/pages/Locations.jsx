// Locations page — lists Toro's physical stores using the shared LocationsData.
import { LOCATIONS, LOCATION_HEADING, LOCATION_SUBHEADING } from "../data/LocationsData.js";
import LocationCard from "../components/LocationCard.jsx";

export default function Locations() {
  return (
    <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-toro-espresso sm:text-5xl">{LOCATION_HEADING}</h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-toro-brown">{LOCATION_SUBHEADING}</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {LOCATIONS.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
}
