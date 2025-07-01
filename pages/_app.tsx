import type { AppProps } from "next/app";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "@/styles/globals.css"; 

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-950 text-white">
      <Navigation />
      <div className="pt-20">
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
