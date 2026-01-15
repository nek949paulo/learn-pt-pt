# Publicar a tua app (GRÁTIS) e abrir no telemóvel — passo a passo (React + Vite)

A tua app é **React + Vite**, por isso **não dá** para copiar para o telemóvel e abrir o `index.html` diretamente.
Tens de **fazer build** e depois **alojar** (grátis).

---

## Opção A (recomendada): GitHub Pages (grátis)

### 1) Pré‑requisitos
- Instala Node.js LTS no PC (Windows): https://nodejs.org

### 2) Testar localmente (no PC)
1. Abre o Terminal na pasta do projeto
2. Corre:
   ```bash
   npm install
   npm run dev
   ```
3. Abre no browser: http://localhost:3000

### 3) Criar um repositório no GitHub
1. Vai a github.com e cria conta (se não tens)
2. Clica em **New repository**
3. Nome do repositório (ex.: **learn-pt-pt**)
   - O link final vai ser:
     `https://TEU_USER.github.io/learn-pt-pt/`

### 4) Ajustar a base do build (1 vez)
Abre o ficheiro:
- `.env.production`

Troca:
- `VITE_BASE=/REPO_NAME/`
por:
- `VITE_BASE=/learn-pt-pt/`  (usa o nome real do teu repositório)

### 5) Upload dos ficheiros para o GitHub (sem Git)
No repositório (no site do GitHub):
- **Add file → Upload files**
- Faz upload de tudo o que está nesta pasta (projeto)

⚠️ Muito importante:
- **NÃO subas** `node_modules` nem `dist` (se existirem)
- **NÃO subas** `.env.local` se tiver chaves reais

### 6) Ativar GitHub Pages com Actions
No repositório:
1. **Settings → Pages**
2. Em *Build and deployment*:
   - **Source: GitHub Actions**

### 7) Corrigir o workflow (1 vez)
Abre no GitHub o ficheiro:
- `.github/workflows/deploy.yml`

Procura a linha:
- `VITE_BASE: /REPO_NAME/`

E troca para:
- `VITE_BASE: /learn-pt-pt/` (o teu repo)

Depois faz **Commit**.

### 8) Publicação automática
Vai a:
- **Actions**

Quando aparecer verde ✅, a app está publicada.

O link fica em:
- **Settings → Pages**

### 9) Adicionar ao ecrã inicial
**Android (Chrome):**
- abre o link
- menu ⋮ → **Adicionar ao ecrã inicial**

**iPhone (Safari):**
- abre o link
- partilhar → **Adicionar ao ecrã principal**

---

## Opção B (a mais rápida): Netlify (grátis)
1. No PC:
   ```bash
   npm install
   npm run build
   ```
2. Vai a netlify.com → cria conta
3. Arrasta a pasta `dist` para o Netlify (drag & drop)
4. Ele dá-te um link pronto

---

## Nota sobre Gemini / API Key
O teu projeto traz `.env.local` e referências a `GEMINI_API_KEY`.

- Se não estiveres a usar Gemini, podes deixar sem nada.
- Se precisares da chave, **não a coloques pública**.
  No GitHub:
  - Settings → Secrets and variables → Actions → New repository secret
  - Nome: `GEMINI_API_KEY`
  - Valor: a tua chave
