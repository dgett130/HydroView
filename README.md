# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```
   
## To Commit

Type
   ```bash
      npm run commit
   ```


## Get a fresh project

When you're ready, run:

```bash
  npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Husky - commitlint - commitizen

### Installation

Install Cli Tools of commitizen

```bash
  npm install commitizen -D -g
```

Initialize commitizen on project

```bash
  commitizen init cz-conventional-changelog --save-dev --save-exact
```

Now install Husky, commitlit cli, prettier and lint-staged

```bash
  npm install @commitlint/cli @commitlint/config-conventional --save-dev
```

Now configure the commitlint.config.js (if not exists, create it)

```js
module.exports = {
  extends: ["@commitlint/config-conventional"],
};
```

Configure staged-lint

```json
{
  "*.{css,less,scss,html,json,jsx,js}": ["prettier — write"],
  "*.{jsx, js}": ["eslint — max-warnings 0"]
}
```

Install git-cz

git-cz beautify commitizen process.

```bash
  npm install --save-dev git-cz
```
