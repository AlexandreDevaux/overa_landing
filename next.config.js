/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    HJID: process.env.HJID,
    HJSV: process.env.HJSV,
    GADS: process.env.GADS,
    GTM: process.env.GTM,
    GA: process.env.GA
  }
}

module.exports = nextConfig
