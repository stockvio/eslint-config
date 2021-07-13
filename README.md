# @stockvio/eslint-config

Prettier & Typescript ready config for ESLint, along with a few rules to match
Stockvio's coding standards and style.

## Usage
*Be sure to have [eslint](https://github.com/eslint/eslint), [typescript](https://github.com/microsoft/TypeScript) and [prettier](https://github.com/prettier/prettier) installed first*
<br/>

Install the config:
```bash
$ yarn add -D @stockvio/eslint-config
# or
$ npm intall --save-dev @stockvio/eslint-config
```

Then, add @stockvio to the `extends` array in your `.eslintrc.*` file. Make sure to put it **last,** so it gets the chance to override other configs.

```json
{
  "extends": [
    "some-other-config-you-use",
    "@stockvio"
  ]
}
```

## React
If using with ReactJS, you will need to install the React plugin as well:
```bash
$ yarn add -D eslint-plugin-react
```
Last, you will need to make a few additions your eslint config. It should look like this:
```json5
{
  "extends": ["@stockvio"],
  "env": {
    "browser": true
  },
  "plugins": ["react"]
}
```
