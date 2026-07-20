// Sign-up page — wraps the reusable SignUpForm.
import SignUpForm from "../components/SignUpForm.jsx";

export default function SignUp() {
  function handleSubmit(form) {
    alert(
      `Account created for ${form.fullName} (${form.email}). In a real app this would POST to your backend.`
    );
  }

  return (
    <div className="py-12">
      <div className="mb-8 text-center">
        <h1 className="font-display text-3xl font-bold text-toro-espresso">Create an Account</h1>
        <p className="mt-2 text-toro-brown">Join Toro Coffee and order fresh roasted beans delivered to your door.</p>
      </div>
      <SignUpForm onSubmit={handleSubmit} />
    </div>
  );
}
