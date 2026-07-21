// Product card used in the shop grid.
// Renders name, origin, price and status tag. Out-of-stock products show a
// disabled "Sold Out" state instead of an active Add to Cart (no false affordance).
import { Link } from "react-router-dom";

const statusStyles = {
  Special: "bg-toro-clay text-white",
  New: "bg-toro-brown text-toro-cream",
  Limited: "bg-toro-espresso text-toro-cream",
};

export default function ProductCard({ product }) {
  const soldOut = product.sizes.every((variant) => variant.stock === 0);

  return (
    <article className="group flex flex-col overflow-hidden rounded-toro border border-toro-sand bg-white">
      <Link to={`/product/${product.id}`} className="relative block aspect-square overflow-hidden bg-toro-sand">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {(product.status || soldOut) && (
          <span
            className={`absolute left-3 top-3 rounded-full px-2 py-1 text-xs font-semibold ${
              soldOut ? "bg-gray-500 text-white" : statusStyles[product.status]
            }`}
          >
            {soldOut ? "Sold Out" : product.status}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-semibold text-toro-espresso">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-sm text-toro-brown">{product.origin}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="font-semibold text-toro-espresso">
            from R{product.priceFrom.toFixed(2)}
          </span>
          {soldOut ? (
            <span className="cursor-not-allowed rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-500">
              Sold Out
            </span>
          ) : (
            <Link
              to={`/product/${product.id}`}
              className="rounded-full bg-toro-brown px-3 py-1 text-sm font-semibold text-toro-cream hover:bg-toro-espresso"
            >
              Add to Cart
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
