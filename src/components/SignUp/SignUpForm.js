import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signUpLogoProperty } from "../nextjsImageProperties/imageProperties";

export default function SignUpForm() {
  return (
    <div id="signup-form-container">
      <div id="signup-form-wrapper">
        <div id="signup-form-head-wrapper">
          <Image {...signUpLogoProperty} />
          <h1>Sign Up</h1>
          <p>
            Already have an account?{" "}
            <Link href="/sign-in">
              <span>Sign in</span>
            </Link>
          </p>
        </div>
        <form action="">
          <input type="text" placeholder="Enter Your Name *" />
          <input type="text" placeholder="Email *" />
          <input type="text" placeholder="Password *" />
          <input type="text" placeholder="Password (Confirm) *" />
        </form>
        <div id="terms-check-wrapper">
          <div>
            <input type="checkbox" name="" value="" />
          </div>
          <div>
            <span>I agree to the Terms of Service and Privacy Policy</span>
          </div>
        </div>
        <button id="signUpSubmit">Create your free account</button>
      </div>
    </div>
  );
}
