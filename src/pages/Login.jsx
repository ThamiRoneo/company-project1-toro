// Login page — wraps the reusable LoginForm.
import LoginForm from "../components/LoginForm.jsx";

export default function Login() {
  function handleSubmit(form) {
    alert(
      `Logged in as ${form.email}. Remember me: ${form.remember ? "yes" : "no"}. In a real app this would POST to your backend.`,
    );
  }

  function handleGoogleLogin() {
    alert("Google login would open here (demo only).");
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-12 sm:px-6">
      <div className="rounded-toro border border-toro-sand bg-white p-6 shadow-sm sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="font-display text-3xl font-bold text-toro-espresso">
            Welcome Back
          </h1>
          <p className="mt-2 text-toro-brown">
            Log in to your Toro Coffee account.
          </p>
        </div>
        <LoginForm onSubmit={handleSubmit} />
        <div className="mt-6 border-t border-toro-sand pt-2">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex w-full items-center justify-center gap-2 rounded-full mt-3 border border-toro-sand bg-white px-6 py-3 text-base font-semibold text-toro-espresso hover:bg-toro-sand"
          >
            <GoogleIcon />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-1 7.28-2.69l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}
