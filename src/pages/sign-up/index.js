// File importing
import SignUpForm from "@/components/SignUp/SignUpForm";
import Welcome from "@/components/SignUp/Welcome";

export default function SignUp() {
  return (
    <div className="h-screen lg:flex lg:justify-between lg:items-start">
      <SignUpForm />
      <Welcome />
    </div>
  );
}
