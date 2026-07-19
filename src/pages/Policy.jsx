// Static policy page used for Shipping / Returns / Privacy / Terms routes.
export default function Policy({ title, body }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-toro-espresso">{title}</h1>
      <p className="mt-4 text-toro-espresso">{body}</p>
    </div>
  );
}
