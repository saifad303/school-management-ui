// File importing
import SignUpForm from "@/components/SignUp/SignUpForm";
import Welcome from "@/components/SignUp/Welcome";

export default function signUpIndex() {
  return (
    <div id="CredentialContainer">
      <SignUpForm />
      <Welcome />
    </div>
  );
}
