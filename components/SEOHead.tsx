import Head from "next/head";
import { SEOConfig, generateStructuredData } from "@/lib/seo";

interface SEOHeadProps {
  config: SEOConfig;
}

export default function SEOHead({ config }: SEOHeadProps) {
  const {
    title,
    description,
    keywords,
    canonical,
    ogImage = "https://subject7.com/og-image.png",
    ogType = "website",
    twitterCard = "summary_large_image",
    structuredData,
    noindex = false
  } = config;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content="Subject7" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="application-name" content="Subject7" />
      <meta name="msapplication-tooltip" content="Subject7 Test Automation Platform" />
      <meta name="msapplication-starturl" content="https://subject7.com/" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical || "https://subject7.com"} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Subject7" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@Subject_7" />
      <meta name="twitter:creator" content="@Subject_7" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateStructuredData(structuredData)
          }}
        />
      )}
    </Head>
  );
}