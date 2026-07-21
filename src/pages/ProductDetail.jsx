// Product detail page — image, metadata, tasting notes, size + grind selectors,
// quantity stepper, reviews, and a related-products carousel placeholder.
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
import { getProductById, products } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";
import { useCart } from "../context/cartConfig.js";
import { useToast } from "../context/toastConfig.js";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [sizeIndex, setSizeIndex] = useState(0);
  const [grind, setGrind] = useState(product?.grindOptions[0] ?? "Whole Bean");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h1 className="font-display text-2xl font-bold text-toro-espresso">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-toro-clay underline">
          Back to shop
        </Link>
      </div>
    );
  }

  const selectedSize = product.sizes[sizeIndex];
  const soldOut = selectedSize.stock === 0;

  const related = products.filter((item) => item.id !== product.id).slice(0, 3);

  function handleAddToCart() {
    if (soldOut) return;
    addToCart(product, selectedSize.size, grind, quantity);
    showToast(`${product.name} added to cart`);
    navigate("/shop");
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <nav className="mb-4 text-sm text-toro-brown" aria-label="Breadcrumb">
        <Link to="/shop" className="hover:underline">Shop</Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </nav>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-toro bg-toro-sand">
          <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div>
          <h1 className="font-display text-3xl font-bold text-toro-espresso">{product.name}</h1>
          <p className="mt-1 text-toro-brown">{product.origin}</p>
          <p className="mt-2 text-sm text-toro-clay">Roasted {product.roastDate}</p>

          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="font-semibold text-toro-espresso">★ {product.rating}</span>
            <span className="text-toro-brown">({product.reviewCount} reviews)</span>
          </div>

          <p className="mt-4 text-toro-espresso">
            Tasting notes: {product.tastingNotes.join(", ")}.
          </p>

          <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <div><dt className="font-semibold">Process</dt><dd>{product.process}</dd></div>
            <div><dt className="font-semibold">Variety</dt><dd>{product.variety}</dd></div>
            <div><dt className="font-semibold">Roast Level</dt><dd>{product.roastLevel}</dd></div>
            <div><dt className="font-semibold">Price</dt><dd>from R{product.priceFrom.toFixed(2)}</dd></div>
          </dl>

          <fieldset className="mt-6">
            <legend className="text-sm font-semibold text-toro-espresso">Size</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((variant, index) => (
                <button
                  key={variant.size}
                  type="button"
                  onClick={() => setSizeIndex(index)}
                  className={`min-h-[44px] rounded-md px-4 py-2 text-sm font-medium ${
                    index === sizeIndex
                      ? "border-2 border-toro-brown bg-toro-brown text-toro-cream"
                      : "border border-toro-sand text-toro-espresso"
                  }`}
                >
                  {variant.size} — R{variant.price}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-4">
            <legend className="text-sm font-semibold text-toro-espresso">Grind</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.grindOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setGrind(option)}
                  className={`min-h-[44px] rounded-md px-4 py-2 text-sm font-medium ${
                    grind === option
                      ? "border-2 border-toro-brown bg-toro-brown text-toro-cream"
                      : "border border-toro-sand text-toro-espresso"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center rounded-md border border-toro-sand">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="min-h-[44px] min-w-[44px] text-lg"
              >
                −
              </button>
              <span className="min-w-[2rem] text-center">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity((q) => q + 1)}
                className="min-h-[44px] min-w-[44px] text-lg"
              >
                +
              </button>
            </div>

            <button
              type="button"
              disabled={soldOut}
              onClick={handleAddToCart}
              className="min-h-[44px] flex-1 rounded-full bg-toro-clay px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              {soldOut ? "Sold Out" : "Add to Cart"}
            </button>
          </div>
          {!soldOut && selectedSize.stock <= 5 && (
            <p className="mt-2 text-sm text-toro-clay">Only {selectedSize.stock} left</p>
          )}
        </div>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold text-toro-espresso">You May Also Like</h2>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
