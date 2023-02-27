import "@/styles/globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-dmSans",
});

export default function App({ Component, pageProps }) {
  return;
  <main className={`${dmSans.variable} font-sans`}>
    <Component {...pageProps} />
  </main>;
}
