/** @type {import('next').NextConfig} */
const repo = 'ui-coti-defi'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

