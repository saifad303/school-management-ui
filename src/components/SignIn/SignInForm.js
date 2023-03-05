import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  signInLogoProperty,
  facebookLinkerImage,
  googleLinkerImage,
  twitterLinkerImage,
} from "../nextjsImageProperties/imageProperties";

export default function SignInForm() {
  return (
    <div id="signin-form-container">
      <div id="signin-form-wrapper">
        <div id="signin-form-head-wrapper">
          <Image {...signInLogoProperty} />
          <h1>Sign In</h1>
          <p>
            Don't have an account?{" "}
            <Link href="/sign-up">
              <span>Sign up</span>
            </Link>
          </p>
        </div>
        <form action="">
          <input type="text" placeholder="Email *" />
          <input type="text" placeholder="Password *" />
        </form>
        <div id="remember-me-wrapper">
          <div>
            <input type="checkbox" id="rememberMe-checker" name="" value="" />
          </div>
          <div>
            <span>Remember me</span>
          </div>
        </div>
        <button id="signin-btn">Sign In</button>
        <div id="social-linker-container">
          <div id="social-linker-head">
            <div />
            <p>Or continue with</p>
            <div />
          </div>
          <div id="social-linkers">
            <div id="facebook-linker">
              <Image {...facebookLinkerImage} />
            </div>
            <div id="twitter-linker">
              <Image {...twitterLinkerImage} />
            </div>
            <div id="google-linker">
              <Image {...googleLinkerImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
