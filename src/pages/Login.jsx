// Login page — wraps the reusable LoginForm.
import LoginForm from "../components/LoginForm.jsx";

export default function Login() {
  function handleSubmit(form) {
    alert(
      `Logged in as ${form.email}. Remember me: ${form.remember ? "yes" : "no"}. In a real app this would POST to your backend.`
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-12 sm:px-6">
      <div className="rounded-toro border border-toro-sand bg-white p-6 shadow-sm sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="font-display text-3xl font-bold text-toro-espresso">Welcome Back</h1>
          <p className="mt-2 text-toro-brown">Log in to your Toro Coffee account.</p>
        </div>
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
