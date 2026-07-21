// Shop page — product grid with category, tasting-note filters and sort.
// State for filter/sort is kept local; the derived list is memoised.
import { useEffect, useMemo, useRef, useState } from "react";
import ProductGrid from "../components/ProductGrid.jsx";
import { products, tastingNoteOptions } from "../data/products.js";
import { useLocation, useSearchParams } from "react-router-dom";

const categories = ["All", "Coffee Beans", "Special Release"];
const sortOptions = [
  { value: "roast", label: "Newest Roast" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "popularity", label: "Popularity" },
];

export default function Shop() {
  const [category, setCategory] = useState("All");
  const [notes, setNotes] = useState([]);
  const [sort, setSort] = useState("roast");
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const gridRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.fromAddToCart && gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.state]);

  function toggleNote(note) {
    setNotes((current) =>
      current.includes(note)
        ? current.filter((n) => n !== note)
        : [...current, note],
    );
  }

  const visible = useMemo(() => {
    let list = products;

    if (category !== "All") {
      list = list.filter((product) => product.category === category);
    }
    if (notes.length) {
      list = list.filter((product) =>
        notes.every((note) => product.tastingNotes.includes(note)),
      );
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (product) =>
          product.name.toLowerCase().includes(q) ||
          product.origin.toLowerCase().includes(q) ||
          product.tastingNotes.some((note) => note.toLowerCase().includes(q))
      );
    }

    return [...list].sort((a, b) => {
      if (sort === "price-asc") return a.priceFrom - b.priceFrom;
      if (sort === "price-desc") return b.priceFrom - a.priceFrom;
      if (sort === "popularity") return b.reviewCount - a.reviewCount;
      return new Date(b.roastDate) - new Date(a.roastDate);
    });
  }, [category, notes, sort, searchQuery]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-toro-espresso">
        {searchQuery ? `Search: "${searchQuery}"` : "Shop Coffee"}
      </h1>

      <div className="mt-6 flex flex-col gap-4 border-b border-toro-sand pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                category === cat
                  ? "bg-toro-brown text-toro-cream"
                  : "border border-toro-sand text-toro-espresso hover:bg-toro-sand"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-sm text-toro-espresso">
          Sort by
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="rounded-md border border-toro-sand bg-white px-2 py-1"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tastingNoteOptions.map((note) => (
          <button
            key={note}
            type="button"
            onClick={() => toggleNote(note)}
            className={`rounded-full px-3 py-1 text-sm capitalize ${
              notes.includes(note)
                ? "bg-toro-clay text-white"
                : "border border-toro-sand text-toro-espresso hover:bg-toro-sand"
            }`}
          >
            {note}
          </button>
        ))}
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchParams({})}
            className="rounded-full bg-toro-espresso px-3 py-1 text-sm font-semibold text-toro-cream hover:bg-toro-brown"
          >
            Clear search
          </button>
        )}
      </div>

      <div ref={gridRef} className="mt-10">
        <ProductGrid products={visible} />
      </div>
    </div>
  );
}
