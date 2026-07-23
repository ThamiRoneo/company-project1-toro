// Forgot password page placeholder.
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="mx-auto max-w-xl px-4 py-12 sm:px-6">
      <div className="rounded-toro border border-toro-sand bg-white p-6 shadow-sm sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="font-display text-3xl font-bold text-toro-espresso">Forgot Password?</h1>
          <p className="mt-2 text-toro-brown">Enter your email and we&apos;ll send you a reset link.</p>
        </div>
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Reset link sent (demo)'); }}>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold text-toro-espresso">Email Address</label>
            <input id="email" type="email" required placeholder="jane@example.com" className="w-full rounded-md border border-toro-sand bg-white px-4 py-3 text-base outline-none transition-colors focus:border-toro-brown focus:ring-2 focus:ring-toro-brown/30" />
          </div>
          <button type="submit" className="w-full rounded-full bg-toro-brown py-3 text-base font-semibold text-toro-cream hover:bg-toro-espresso">Send Reset Link</button>
        </form>
        <p className="mt-4 text-center text-sm text-toro-brown">
          Remember your password?{" "}
          <Link to="/login" className="font-semibold text-toro-clay hover:underline">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}
