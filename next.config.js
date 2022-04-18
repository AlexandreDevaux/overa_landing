/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env:{
    HJID: process.env.HJID,
    HJSV: process.env.HJSV,
    GADS: process.env.GADS,
    GTM: process.env.GTM,
    GA: process.env.GA,
    GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
    GSHEET_ID: process.env.GSHEET_ID,
  }
}

module.exports = nextConfig
