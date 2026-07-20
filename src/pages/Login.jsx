// Login page — wraps the reusable LoginForm.
import LoginForm from "../components/LoginForm.jsx";

export default function Login() {
  function handleSubmit(form) {
    alert(
      `Logged in as ${form.email}. Remember me: ${form.remember ? "yes" : "no"}. In a real app this would POST to your backend.`
    );
  }

  return (
    <div className="py-12">
      <div className="mb-8 text-center">
        <h1 className="font-display text-3xl font-bold text-toro-espresso">Welcome Back</h1>
        <p className="mt-2 text-toro-brown">Log in to your Toro Coffee account.</p>
      </div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}
