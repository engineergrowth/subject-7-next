import type { AppProps } from "next/app";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "@/styles/globals.css"; 

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <div className="pt-20 bg-gray-950 text-white min-h-screen flex flex-col">
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
