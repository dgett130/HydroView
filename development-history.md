# 📘 HydroView — Diario di Sviluppo

Un documento vivo che raccoglie in ordine cronologico tutte le decisioni, integrazioni, strumenti e soluzioni adottate durante lo sviluppo di HydroView.

---

## 📅 v0.0.4 — Prima milestone completa (Aprile 2025)

### 🎯 Obiettivi principali:
- Integrare Husky, Commitizen, Commitlint per gestire i commit in modo strutturato
- Generare changelog automaticamente
- Aggiungere linting, Prettier e lint-staged sui commit
- Configurare CI (GitHub Actions) con lint e coverage
- Integrare Codecov e badge dinamici
- Migliorare README con badge e guida completa

### ✅ Attività svolte

#### 🔧 Configurazione Git e commit
- Husky installato e configurato con hook pre-commit e prepare-commit-msg
- Commitizen usato tramite `git-cz`
- Commit linting gestito con `@commitlint/config-conventional`
- Script `npm run commit` con `cross-env CZ_RUNNING=true git cz`

#### 🧪 CI & linting
- Creato workflow GitHub Actions per lint (`npm run lint`) e test
- ESLint configurato con Flat Config + plugin `eslint-plugin-react`
- Prettier + lint-staged attivi su file staged

#### 📝 Changelog automatico
- Generato tramite `conventional-changelog` con configurazione personalizzata
- Titolo con nome progetto, versione e data
- Commit raggruppati per tipo (`feat`, `chore`, ...)
- Script `npm run changelog` tramite file `.mjs`

#### 📊 Codecov
- Coverage generata con Jest e `--coverage`
- Upload in CI con `codecov/codecov-action`
- Badge dinamico configurato via `v/tag` per supportare pre-release

#### 📄 Documentazione e badge
- README completamente riscritto:
    - Istruzioni chiare per setup, commit, CI
    - Badge: release, build, coverage, license, last commit
    - Riepilogo strumenti e struttura del progetto
- Licenza MIT aggiunta e badge correttamente valorizzato

#### 📦 Release GitHub
- Pull request creata, revisionata e mergiata in `master`
- Milestone `v0.0.4` chiusa
- Pubblicata release GitHub come pre-release `v0.0.4`

---

## 🔮 Prossimi passi (v0.0.5 — UI Base, Shadcn, Dark Mode e Dev Tools)

### 🎯 Obiettivo:
Iniziare a costruire l’interfaccia utente base del progetto, introducendo componenti riutilizzabili e preparando l’ambiente per sviluppi futuri (accessibilità, dark mode, preview, ecc.)

### 🧩 Issue pianificati

- 💡 **Setup Shadcn UI su React Native + Expo**  
  Integrazione iniziale, verifica compatibilità, preset di stile e tema.

- 🧩 **Creazione primi componenti base (Button, Input, Card)**  
  Implementazione con `shadcn/ui`, struttura `components/ui`.

- 🌗 **Dark mode toggle / theme provider**  
  Gestione modalità dark/light + override media query.

- 🛠️ **Separazione ambienti `dev` / `prod`**  
  Setup `.env` e comportamenti specifici.

- 👀 **Preview dev di componenti UI (tipo Storybook o simile)**  
  Ambiente di test visivo per i componenti condivisi.

- ♿ **Integrazione lint accessibilità**  
  Regole ESLint o strumenti per controllo accessibilità su React Native.

**Milestone creata il:** 6 aprile 2025

---
**Aggiornato al:** 6 aprile 2025
