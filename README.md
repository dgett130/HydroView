# 💧 Hydroview


[![GitHub release](https://img.shields.io/github/v/release/dgett130/HydroView)](https://github.com/dgett130/HydroView/releases)
![Build Status](https://img.shields.io/github/actions/workflow/status/dgett130/hydroview/ci.yml)
[![codecov](https://codecov.io/gh/dgett130/HydroView/branch/master/graph/badge.svg)](https://codecov.io/gh/dgett130/HydroView)
[![License](https://img.shields.io/github/license/dgett130/HydroView)](https://github.com/dgett130/HydroView/blob/master/LICENSE)
![Last Commit](https://img.shields.io/github/last-commit/dgett130/hydroview)

**Hydroview** is a mobile application built with **React Native** using the **Expo** framework.  
It’s designed to offer a clean and modern UI for managing and monitoring water usage or related utilities.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app

```bash
npx expo start
```

You can also use:

```bash
npm run android
npm run ios
npm run web
```

---

## ✅ Commit Workflow

Hydroview uses **Commitizen** via **git-cz** for consistent, emoji-enhanced commits.

### 🔧 Make a commit:

```bash
npm run commit
```

> This opens a guided prompt to write meaningful and standardized commits.

---

## 📄 Changelog Generation

To generate or update the `CHANGELOG.md` based on conventional commits:

```bash
npm run changelog
```

This uses `cz-conventional-changelog` to parse commits and format the changelog file.

---

## 🧼 Reset the project (start fresh)

If you want to clear the example code and start clean:

```bash
npm run reset-project
```

This moves starter code to an `app-example` folder and creates a new blank `app/` directory.

---

## 🛠️ Tooling Setup (Husky, Commitlint, Prettier, Lint-staged)

The project includes a full Git hook setup to enforce code style and commit rules.

### ✔️ Tools used:
- [Husky](https://typicode.github.io/husky/) — Git hooks
- [Commitlint](https://commitlint.js.org/) — Validates commit messages
- [git-cz](https://www.npmjs.com/package/git-cz) — Commitizen wrapper with emoji support
- [cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog) — Changelog parser
- [lint-staged](https://github.com/okonet/lint-staged) — Runs linters on staged files
- [Prettier](https://prettier.io/) — Code formatter
- [ESLint](https://eslint.org/) — Linter

### 📦 Key dev dependencies installation (if needed):

```bash
npm install --save-dev husky lint-staged prettier eslint \
@commitlint/cli @commitlint/config-conventional \
cz-conventional-changelog conventional-changelog-cli \
git-cz
```

---

## 🧪 Lint & Format on Commit

`lint-staged` runs Prettier and ESLint on staged files automatically via Husky.

Configured in `package.json`:

```json
"lint-staged": {
  "*.{css,less,scss,html,json,jsx,js}": [
    "prettier --write"
  ],
  "*.{jsx, js}": [
    "eslint --max-warnings 0 --silent"
  ]
}
```

---

## ✨ Commit Example

```bash
✨ feat(auth): add biometric login support
🐛 fix(ui): resolve layout bug on Android
📝 docs(readme): update setup instructions
```

---

## 📁 Project Structure

```
/
├── app/                  # Your actual app code lives here
├── app-example/          # Preserved starter template after reset
├── scripts/              # Internal dev scripts
├── .husky/               # Git hooks
├── CHANGELOG.md          # Auto-generated changelog
├── README.md             # This file
└── package.json
```

---

## 📣 Contributing

Feel free to fork, clone, and open issues or PRs if you have ideas or improvements!

---

## 🧑‍💻 Author

Developed with ❤️ by dgett130

---

## 📜 License

MIT — feel free to use and adapt!

