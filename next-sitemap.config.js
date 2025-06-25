/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://subject7.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/submit-request-thank-you', '/404'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/submit-request-thank-you', '/404']
      }
    ],
    additionalSitemaps: [
      'https://subject7.com/sitemap.xml'
    ]
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    const customConfig = {
      loc: path,
      lastmod: new Date().toISOString(),
    }

    if (path === '/') {
      return {
        ...customConfig,
        priority: 1.0,
        changefreq: 'weekly'
      }
    }

    if (path === '/product' || path === '/about') {
      return {
        ...customConfig,
        priority: 0.9,
        changefreq: 'weekly'
      }
    }

    if (path === '/contact') {
      return {
        ...customConfig,
        priority: 0.8,
        changefreq: 'monthly'
      }
    }

    return {
      ...customConfig,
      priority: 0.7,
      changefreq: 'monthly'
    }
  }
}/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://subject7.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/submit-request-thank-you', '/404'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/submit-request-thank-you', '/404']
      }
    ],
    additionalSitemaps: [
      'https://subject7.com/sitemap.xml'
    ]
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    const customConfig = {
      loc: path,
      lastmod: new Date().toISOString(),
    }

    if (path === '/') {
      return {
        ...customConfig,
        priority: 1.0,
        changefreq: 'weekly'
      }
    }

    if (path === '/product' || path === '/about') {
      return {
        ...customConfig,
        priority: 0.9,
        changefreq: 'weekly'
      }
    }

    if (path === '/contact') {
      return {
        ...customConfig,
        priority: 0.8,
        changefreq: 'monthly'
      }
    }

    return {
      ...customConfig,
      priority: 0.7,
      changefreq: 'monthly'
    }
  }
}