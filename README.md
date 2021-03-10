# postcss8 support for nuxt 2.15+

Since [nuxt@2.15](https://github.com/nuxt/nuxt.js/releases/tag/v2.15.0) nuxt supports opting-in to use `postcss@8` (via [nuxt/nuxt.js#8546](https://github.com/nuxt/nuxt.js/pull/8546)).

Upgrade is pending for [csstools/postcss-preset-env#191](https://github.com/csstools/postcss-preset-env/issues/191) (see [nuxt/nuxt.js#8087](https://github.com/nuxt/nuxt.js/issues/8087) and [nuxt/nuxt.js#8408](https://github.com/nuxt/nuxt.js/pull/8408))

In the meantime, this module allows rapid migration:

- Ensures supported nuxt version is used (`>= 2.15.3`)
- Forces to use upgraded dependencies using `__NUXT_PREPATHS__`
- Will be updated accordingly to self-disable when a nuxt version with default postcss8 detected
- Use `autoprefixer` instead of `postcss-preset-env`

## Usage

Install `@nuxt/postcss8` as `devDependency`:

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

If you have a nuxt module that requires postcss@8, install `postcss@8` and `@nuxt/postcss8` as `dependency`:

```sh
yarn add postcss@8 @nuxt/postcss8
# or
npm i postcss@8 @nuxt/postcss8
```

Inside module:
```js
export default async function() {
  await this.addModule(require('@nuxt/postcss8'))
}
```

