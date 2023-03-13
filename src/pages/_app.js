// import css start
import "@/styles/globals.css";
import "@/styles/master.css";
import "@/styles/main.css";
import "@/styles/topNav/topNav.css";
import "@/styles/topNav/topNavLeft.css";
import "@/styles/topNav/topNavRight.css";
import "@/styles/sidebar/sidebar.css";
import "@/styles/sidebar/sidebarHeader.css";
import "@/styles/signup/signUpForm.css";
import "@/styles/signin/signInForm.css";
import "@/styles/signup/welcome.css";
// import css end

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmSans",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${dmSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
