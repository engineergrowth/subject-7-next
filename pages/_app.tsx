import type { AppProps } from "next/app";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "@/styles/globals.css"; 

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navigation />
      <div className="pt-20 flex-1 flex flex-col">
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
