# postcss@8 support for nuxt@2

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![license][license-src]][license-href]

## ⚠️ This package is no longer necessary with Nuxt >= 2.16 ⚠️

PR [nuxt#9671](https://github.com/nuxt/nuxt/pull/9671) upgraded PostCSS to version 8.

This module allows opting-in to [postcss@8](https://github.com/postcss/postcss/releases/tag/8.0.0) with nuxt 2 projects.

- Ensures supported nuxt version is used (`>= 2.15.3 < 2.16.0`)
- Forces to use correct dependencies using `__NUXT_PREPATHS__`
- Will self-adjust integration method based on future nuxt versions
- Use [`autoprefixer`](https://github.com/postcss/autoprefixer) instead of [`postcss-preset-env`](https://github.com/csstools/postcss-preset-env)

## Usage

Install `@nuxt/postcss8` as `devDependency` of project:

```sh
yarn add --dev @nuxt/postcss8
# or
npm i -D @nuxt/postcss8
```

Add `@nuxt/postcss8` to `buildModules` in `nuxt.config`:

```js
// nuxt.config
export default {
  buildModules: [
    '@nuxt/postcss8'
  ]
}
```

### For module authors

If you have a nuxt module that requires postcss@8, install `@nuxt/postcss8` as `dependency` of module:

```sh
yarn add postcss@8 @nuxt/postcss8
# or
npm i postcss@8 @nuxt/postcss8
```

Inside module:
```js
export default async function() {
  await this.addModule('@nuxt/postcss8')
}
```

## 📑 License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://flat.badgen.net/npm/v/@nuxt/postcss8
[npm-version-href]: https://npmjs.com/package/@nuxt/postcss8
[npm-downloads-src]: https://flat.badgen.net/npm/dm/@nuxt/postcss8
[npm-downloads-href]: https://npmjs.com/package/@nuxt/postcss8
[license-src]: https://flat.badgen.net/github/license/nuxt/postcss8
[license-href]: https://npmjs.com/package/@nuxt/postcss8
