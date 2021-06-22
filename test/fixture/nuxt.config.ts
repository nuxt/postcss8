import nuxtpostcss8 from '../../src'

export default {
  buildModules: [
    nuxtpostcss8
  ],
  css: [
    '~/css/app.css'
  ],
  build: {
    postcss: {
      plugins: [
        require('./mock-plugin')
      ]
    }
  }
}
