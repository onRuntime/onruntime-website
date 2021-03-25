module.exports = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en'
  },
  images: {
    domains: ['picsum.photos'],
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}