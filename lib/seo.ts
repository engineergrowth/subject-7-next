export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
}

export const defaultSEO: SEOConfig = {
  title: "Subject7 - Test Automation Made Easy | #1 Codeless Testing Platform",
  description: "Subject7 simplifies end-to-end test automation across web, mobile, desktop, and APIs. Trusted by GovTech & Enterprise companies. Start automating without code today.",
  keywords: [
    "test automation",
    "codeless testing",
    "web testing",
    "mobile testing",
    "API testing",
    "desktop testing",
    "QA automation",
    "software testing",
    "automated testing",
    "Subject7",
    "enterprise testing",
    "govtech testing",
    "no-code testing",
    "testing platform",
    "quality assurance"
  ],
  canonical: "https://subject7.com/",
  ogImage: "https://subject7.com/og-image.png",
  ogType: "website",
  twitterCard: "summary_large_image"
};

export const pageSEO: Record<string, SEOConfig> = {
  home: {
    title: "Subject7 - Test Automation Made Easy | #1 Codeless Testing Platform",
    description: "Ditch manual testing and supercharge your deployments with Subject7. The #1 trusted QA automation platform for GovTech & Enterprise companies. Automate web, mobile, API, and desktop testing without code.",
    keywords: [
      "test automation platform",
      "codeless testing",
      "automated QA",
      "web testing automation",
      "mobile testing automation",
      "API testing automation",
      "desktop testing automation",
      "enterprise testing",
      "govtech testing solutions",
      "no-code testing platform",
      "Subject7",
      "quality assurance automation",
      "software testing tools",
      "deployment automation",
      "continuous testing"
    ],
    canonical: "https://subject7.com/",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://subject7.com/#organization",
          "name": "Subject7",
          "url": "https://subject7.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://subject7.com/logo.png",
            "width": 200,
            "height": 60
          },
          "sameAs": [
            "https://www.linkedin.com/company/subject7",
            "https://twitter.com/subject7"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "availableLanguage": "English"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://subject7.com/#website",
          "url": "https://subject7.com",
          "name": "Subject7",
          "description": "Test automation platform for web, mobile, desktop, and API testing without code",
          "publisher": {
            "@id": "https://subject7.com/#organization"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://subject7.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "SoftwareApplication",
          "name": "Subject7",
          "description": "Test automation platform for web, mobile, desktop, and API testing without code",
          "url": "https://subject7.com",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Web-based",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Free demo available"
          },
          "provider": {
            "@id": "https://subject7.com/#organization"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "150"
          }
        }
      ]
    }
  },
  about: {
    title: "About Subject7 - Built by Testers, Trusted by Enterprise | Our Story",
    description: "Learn about Subject7's mission to make testing fast, scalable, and accessible. Built by testers who understand real automation challenges. Discover our journey and values.",
    keywords: [
      "Subject7 company",
      "about Subject7",
      "testing company",
      "automation company history",
      "QA automation experts",
      "enterprise testing solutions",
      "testing platform founders",
      "Subject7 mission",
      "Subject7 values",
      "testing industry leaders",
      "automation platform story",
      "Subject7 team",
      "testing innovation",
      "QA platform development"
    ],
    canonical: "https://subject7.com/about",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Subject7",
      "url": "https://subject7.com",
      "description": "Subject7 was born from real frustration with brittle, slow, and overly technical automation tools. Our mission is to make testing fast, scalable, and accessible to everyone.",
      "foundingDate": "2020",
      "industry": "Software Testing",
      "knowsAbout": [
        "Test Automation",
        "Quality Assurance",
        "Software Testing",
        "API Testing",
        "Web Testing",
        "Mobile Testing"
      ]
    }
  },
  product: {
    title: "Subject7 Product - Total Test Automation Platform | Web, Mobile, API & Desktop",
    description: "Discover Subject7's unified testing platform. Automate web, desktop, mobile, API, and database testing without writing code. Enterprise-grade reliability and scalability.",
    keywords: [
      "Subject7 product",
      "total test automation",
      "unified testing platform",
      "web testing platform",
      "mobile testing platform",
      "API testing platform",
      "desktop testing platform",
      "database testing automation",
      "enterprise testing platform",
      "codeless automation platform",
      "no-code testing solution",
      "automated testing features",
      "testing platform capabilities",
      "QA automation tools",
      "cross-platform testing"
    ],
    canonical: "https://subject7.com/product",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Subject7 Test Automation Platform",
      "description": "One unified platform that empowers teams to automate web, desktop, mobile, API, and database testing — all without writing a single line of code.",
      "brand": {
        "@type": "Brand",
        "name": "Subject7"
      },
      "category": "Software Testing Platform",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "price": "Contact for pricing",
        "priceCurrency": "USD"
      }
    }
  },
  contact: {
    title: "Contact Subject7 - Get in Touch | Questions, Support & Demo Requests",
    description: "Get in touch with Subject7. Have questions about our test automation platform? Need support or want to book a demo? We're here to help with all your testing needs.",
    keywords: [
      "contact Subject7",
      "Subject7 support",
      "testing platform support",
      "automation platform contact",
      "Subject7 demo",
      "get in touch Subject7",
      "Subject7 questions",
      "testing platform help",
      "automation support",
      "Subject7 customer service",
      "testing consultation",
      "QA automation help",
      "Subject7 sales",
      "testing platform inquiry"
    ],
    canonical: "https://subject7.com/contact",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Subject7",
      "description": "Get in touch with Subject7 for questions, support, or demo requests",
      "url": "https://subject7.com/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "Subject7",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "availableLanguage": "English"
        }
      }
    }
  },
  "submit-request-thank-you": {
    title: "Thank You - Message Received | Subject7 Contact Confirmation",
    description: "Thank you for contacting Subject7! We've received your message and will respond within 24 hours. Learn what happens next in our response process.",
    keywords: [
      "Subject7 thank you",
      "message received",
      "contact confirmation",
      "Subject7 response",
      "thank you page",
      "contact success",
      "Subject7 support confirmation"
    ],
    canonical: "https://subject7.com/submit-request-thank-you",
    noindex: true
  },
  "404": {
    title: "Page Not Found - Subject7 | Test Automation Platform",
    description: "The page you're looking for doesn't exist. Return to Subject7's homepage to explore our test automation platform and solutions.",
    keywords: [
      "Subject7 404",
      "page not found",
      "Subject7 error page"
    ],
    canonical: "https://subject7.com/404",
    noindex: true
  }
};

export function getSEOConfig(page: string): SEOConfig {
  return pageSEO[page] || defaultSEO;
}

export function generateStructuredData(data: object): string {
  return JSON.stringify(data, null, 2);
}