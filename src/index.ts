import { resolve } from 'path'
import { satisfies } from 'semver'
import createRequire from 'create-require'
import defu from 'defu'
import { name, version } from '../package.json'

function postcss8Module () {
  const { nuxt } = this
  const nuxtVersion = (nuxt.constructor.version || '0.0.0').split('-')[0]
  const expectedVersion = '>=2.15.3'
  if (!satisfies(nuxtVersion, expectedVersion)) {
    // eslint-disable-next-line no-console
    console.warn(`[nuxt-postcss8] postcss@8 is not compatible with current version of nuxt (${nuxtVersion}). Expected: ${expectedVersion}`)
    return
  }

  const r = createRequire(__dirname).resolve
  const moveToLast = (arr, item) => {
    if (!arr.includes(item)) { return arr }
    return arr.filter(el => el !== item).concat(item)
  }
  const moveToFirst = (arr, item) => {
    if (!arr.includes(item)) { return arr }
    return [item].concat(arr.filter(el => el !== item))
  }
  nuxt.options.build.postcss = defu(nuxt.options.build.postcss, {
    plugins: {
      [r('autoprefixer')]: {}
    },
    order (names) {
      names = moveToFirst(names, 'postcss-url')
      names = moveToFirst(names, 'postcss-import')
      names = moveToLast(names, 'autoprefixer')
      return names
    }
  })

  const pkgDir = resolve(__dirname, '..')
  // @ts-ignore
  global.__NUXT_PATHS__ = (global.__NUXT_PATHS__ || []).concat(pkgDir)
  // @ts-ignore
  global.__NUXT_PREPATHS__ = (global.__NUXT_PREPATHS__ || []).concat(pkgDir)
}

postcss8Module.meta = {
  name,
  version
}

export default postcss8Module
