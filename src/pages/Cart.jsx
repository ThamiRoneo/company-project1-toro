// Cart page — line-item summary with totals and a checkout entry point.
// (Full cart state/context is introduced in a later implementation step.)
export default function Cart() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-toro-espresso">Your Cart</h1>
      <p className="mt-6 text-toro-brown">Your cart is currently empty.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <span className="text-sm text-toro-brown">We accept:</span>
        <span className="rounded bg-toro-sand px-2 py-1 text-xs font-semibold">Visa</span>
        <span className="rounded bg-toro-sand px-2 py-1 text-xs font-semibold">Mastercard</span>
        <span className="rounded bg-toro-sand px-2 py-1 text-xs font-semibold">EFT</span>
        <span className="rounded bg-toro-sand px-2 py-1 text-xs font-semibold">SnapScan</span>
      </div>
    </div>
  );
}
