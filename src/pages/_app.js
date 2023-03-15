import "@/styles/styleExporter.css";

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
