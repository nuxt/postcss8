const postcss8Module = require('../../dist')

describe('@nuxt/postcss8', () => {
  const mockNuxt: any = (() => {
    const nuxt: any = {}
    nuxt.constructor.version = '2.15.3'
    nuxt.options = {
      build: {
        postcss: {}
      }
    }

    return { nuxt }
  })()

  describe.each([
    [
      'plugins are specified by object',
      {
        pluginA: {},
        pluginB: {}
      },
      {
        pluginA: {},
        pluginB: {},
        autoprefixer: {}
      }
    ],
    [
      'plugins are specified by array',
      [
        ['pluginA', {}],
        ['pluginB', {}]
      ],
      [
        ['autoprefixer', {}],
        ['pluginA', {}],
        ['pluginB', {}]
      ]
    ]
  ])('when %s', (_case: string, pluginsInDefaults: object, pluginsExpected: object) => {
    describe(`defaults are ${JSON.stringify(pluginsInDefaults)}`, () => {
      it(`should overwrite build.postcss.plugins to ${JSON.stringify(pluginsExpected)}`, () => {
        mockNuxt.nuxt.options.build.postcss = { plugins: pluginsInDefaults }
        mockNuxt.module = postcss8Module
        mockNuxt.module()

        expect(mockNuxt.nuxt.options.build.postcss.plugins).toStrictEqual(pluginsExpected)
      })
    })
  })
})
