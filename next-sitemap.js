module.exports = {
    siteUrl: 'https://example.org',
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions:
      process.env.NODE_ENV === 'production'
        ? {
            policies: [{ userAgent: '*', allow: '/' }],
          }
        : {
            policies: [{ userAgent: '*', disallow: '/' }],
          },
    // ...other options
  }