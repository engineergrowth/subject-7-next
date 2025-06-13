import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Subject7 simplifies end-to-end test automation across web, mobile, desktop, and APIs." />
        <meta name="keywords" content="test automation, codeless testing, web testing, Subject7" />
        <meta name="author" content="Subject7" />
        <link rel="canonical" href="https://subject7.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Subject7 - Test Automation Made Easy" />
        <meta property="og:description" content="Automate everything from web to mobile and API with Subject7." />
        <meta property="og:image" content="https://subject7.com/og-image.png" />
        <meta property="og:url" content="https://subject7.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Subject7" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://subject7.com/og-image.png" />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

