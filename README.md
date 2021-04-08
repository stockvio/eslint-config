# eslint-config-stockvio

Prettier & Typescript ready config for ESLint, along with a few rules to match
Stockvio's coding standards and style.

## Usage
*Be sure to have [eslint](https://github.com/eslint/eslint) and [typescript](https://github.com/microsoft/TypeScript) installed first*
<br/>

Install eslint-config-stockvio:
```bash
$ yarn add -D eslint-config-stockvio
# or
$ npm intall --save-dev eslint-config-stockvio
```

Then, add eslint-config-stockvio to the "extends" array in your `.eslintrc.*` file. Make sure to put it **last,** so it gets the chance to override other configs.

```json
{
  "extends": [
    "some-other-config-you-use",
    "@stockvio"
  ]
}
```