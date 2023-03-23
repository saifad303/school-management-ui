import "@/styles/styleExporter.css";

import { store } from "@/redux/store";
import { Provider } from "react-redux";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmSans",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main className={`${dmSans.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
