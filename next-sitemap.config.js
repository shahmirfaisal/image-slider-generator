/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  // ...other options
};

module.exports = config;
