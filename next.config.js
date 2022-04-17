/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    HJID: process.env.HJID,
    HJSV: process.env.HJSV,
    GID: process.env.GID,
    GTM: process.env.GTM,
  }
}

module.exports = nextConfig
