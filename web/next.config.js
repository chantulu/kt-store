// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  images: {
    domains: ['cdn.sanity.io'],
    loader: 'custom'
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    images: {
      unoptimized: true
    }
  }
})
