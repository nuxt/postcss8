import { resolve } from 'path'
import { satisfies } from 'semver'
import { name, version } from '../package.json'

const pkgDir = resolve(__dirname, '..')

// @ts-ignore
global.__NUXT_PATHS__ = (global.__NUXT_PATHS__ || [])
  .concat(pkgDir)

function postcss8Module () {
  const { nuxt } = this
  const nuxtVersion = nuxt.constructor.version || '0.0.0'
  const expectedVersion = '>=2.15.0'
  if (!satisfies(nuxtVersion, expectedVersion)) {
    // eslint-disable-next-line no-console
    console.warn(`[nuxt-postcss8] postcss@8 is not compatible with current version of nuxt (${nuxtVersion}). Expected: ${expectedVersion}`)
  }
}

postcss8Module.meta = {
  name,
  version
}

export default postcss8Module
