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

## 🔮 Prossimi passi (v0.0.5)
- Introduzione dei componenti `shadcn/ui`
- Prima implementazione di UI interattive
- Separazione ambienti dev/prod
- Integrazione preview componenti e linting accessibilità
- Gestione delle milestone successive con lo stesso rigore

---

**Aggiornato al:** 6 aprile 2025
