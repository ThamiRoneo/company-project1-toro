// Cart page — line-item summary with totals and a checkout entry point.
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/cartConfig.js";

export default function Cart() {
  const { items, count, total, removeFromCart, updateQuantity, clearCart, user } = useCart();
  const navigate = useNavigate();

  function handleCheckout() {
    if (!user) {
      navigate("/login", { state: { from: "/cart" } });
      return;
    }
    alert("Checkout flow would start here (demo only).");
  }

  if (!items.length) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-3xl font-bold text-toro-espresso">Your Cart</h1>
        <p className="mt-6 text-toro-brown">Your cart is currently empty.</p>
        <Link to="/shop" className="mt-4 inline-block rounded-full bg-toro-brown px-6 py-3 text-sm font-semibold text-toro-cream hover:bg-toro-espresso">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold text-toro-espresso">Your Cart</h1>
        <button type="button" onClick={clearCart} className="text-sm text-toro-clay hover:underline">
          Clear cart
        </button>
      </div>

      <ul className="mt-8 space-y-4">
        {items.map((item) => (
          <li key={item.id} className="flex flex-col gap-4 rounded-toro border border-toro-sand bg-white p-4 sm:flex-row sm:items-center">
            <img src={item.image} alt={item.name} className="h-16 w-16 rounded-md object-cover" />
            <div className="flex-1">
              <p className="font-display font-semibold text-toro-espresso">{item.name}</p>
              <p className="text-xs text-toro-brown">
                {item.size} · {item.grind}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center rounded-md border border-toro-sand">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="min-h-[36px] min-w-[36px] text-lg"
                >
                  −
                </button>
                <span className="min-w-[2rem] text-center text-sm">{item.quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="min-h-[36px] min-w-[36px] text-lg"
                >
                  +
                </button>
              </div>
              <span className="w-20 text-right text-sm font-semibold text-toro-espresso">
                R{(item.price * item.quantity).toFixed(2)}
              </span>
              <button
                type="button"
                onClick={() => removeFromCart(item.id)}
                aria-label={`Remove ${item.name}`}
                className="text-toro-clay hover:text-red-600"
              >
                <TrashIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col items-end gap-4">
        <div className="w-full rounded-toro border border-toro-sand bg-white p-6 sm:w-72">
          <div className="flex justify-between text-sm text-toro-brown">
            <span>Subtotal ({count} items)</span>
            <span>R{total.toFixed(2)}</span>
          </div>
          <div className="mt-2 flex justify-between text-base font-semibold text-toro-espresso">
            <span>Total</span>
            <span>R{total.toFixed(2)}</span>
          </div>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/shop"
            className="rounded-full border-2 border-toro-brown px-6 py-3 text-center text-base font-semibold text-toro-brown hover:bg-toro-brown hover:text-toro-cream"
          >
            Continue Shopping
          </Link>
          <button
            type="button"
            onClick={handleCheckout}
            className="rounded-full bg-toro-brown px-6 py-3 text-base font-semibold text-toro-cream hover:bg-toro-espresso"
          >
            Proceed to Checkout
          </button>
        </div>
        <div className="flex items-center gap-4 text-toro-brown">
          <VisaIcon />
          <MastercardIcon />
          <EftIcon />
          <SnapScanIcon />
        </div>
      </div>
    </div>
  );
}

function TrashIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function VisaIcon() {
  return (
    <svg width="32" height="10" viewBox="0 0 32 10" fill="none" aria-hidden="true">
      <text x="0" y="9" fontSize="9" fontWeight="bold" fill="currentColor">VISA</text>
    </svg>
  );
}

function MastercardIcon() {
  return (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="6" fill="#EB001B" />
      <circle cx="15" cy="8" r="6" fill="#F79E1B" />
    </svg>
  );
}

function EftIcon() {
  return (
    <svg width="28" height="12" viewBox="0 0 28 12" fill="none" aria-hidden="true">
      <rect x="0" y="0" width="28" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <text x="4" y="9" fontSize="7" fontWeight="bold" fill="currentColor">EFT</text>
    </svg>
  );
}

function SnapScanIcon() {
  return (
    <svg width="30" height="12" viewBox="0 0 30 12" fill="none" aria-hidden="true">
      <rect x="0" y="0" width="30" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <text x="2" y="9" fontSize="7" fontWeight="bold" fill="currentColor">SnapScan</text>
    </svg>
  );
}
