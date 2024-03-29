import SignInForm from "@/components/SignIn/SignInForm";
import Welcome from "@/components/SignUp/Welcome";

export default function signInIndex() {
  return (
    <div className="h-screen lg:flex lg:justify-between lg:items-start">
      <SignInForm />
      <Welcome />
    </div>
  );
}
