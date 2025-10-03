# React Vite SPA Template

En moderne React Single Page Application (SPA) template bygget med Vite, React 19, React Router 7, og klar til deployment på GitHub Pages.

## 🚀 Features

- ⚡ **Vite** - Ultra-hurtig build tool
- ⚛️ **React 19** - Nyeste version af React
- 🔀 **React Router 7** - Client-side routing
- 📦 **SWC** - Hurtigere compilation end Babel
- 🎨 **CSS** - Moderne styling med CSS custom properties
- 🔍 **ESLint** - Code linting med ESLint v9
- 🌐 **GitHub Pages Ready** - Klar til deployment

## 📁 Projekt Struktur

```
react-vite-spa/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow til deployment
├── src/
│   ├── components/
│   │   └── Nav.jsx            # Navigation komponent
│   ├── pages/
│   │   ├── HomePage.jsx       # Forside
│   │   ├── AboutPage.jsx      # Om-siden
│   │   └── ContactPage.jsx    # Kontakt-siden
│   ├── App.jsx                # Hoved app komponent
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styling
├── index.html                  # HTML template
├── vite.config.js             # Vite konfiguration
├── eslint.config.js           # ESLint konfiguration
├── package.json                    # Dependencies
├── deployment-collaboration.md # Deployment & collaboration guide
└── README.md                       # Denne fil
```

## 🎯 Kom i gang

### Brug denne template

1. Klik på **"Use this template"** knappen øverst på GitHub
2. Navngiv dit nye repository
3. Klik på den grønne **"Code"** knap og vælg **"Open with GitHub Desktop"**
4. Vælg hvor projektet skal gemmes på din computer

### Installer dependencies

```bash
npm install
```

### Kør development server

```bash
npm run dev
```

Åbn [http://localhost:5173](http://localhost:5173) i din browser.

## 📝 Tilpas til dit projekt

Før deployment til GitHub Pages skal du opdatere:

### 1. `vite.config.js`

Find og ændr:

```javascript
config.base = "/react-vite-spa/"; // 👈 Ændr til dit repo navn
```

### 2. `src/main.jsx`

Find og ændr:

```jsx
<BrowserRouter basename={import.meta.env.DEV ? "/" : "/react-vite-spa/"}>
  {/* 👆 Ændr til dit repo navn */}
</BrowserRouter>
```

### 3. `package.json`

Opdater projekt navn:

```json
{
  "name": "dit-projekt-navn"
}
```

## 🌐 Deploy til GitHub Pages

Følg den detaljerede guide i [deployment-collaboration.md](./deployment-collaboration.md)

**Quick version:**

1. Opdater base paths (se ovenfor)
2. GitHub Actions workflow er allerede inkluderet
3. Push til main branch
4. Aktivér GitHub Pages under Settings → Pages → Source: GitHub Actions
5. Din app vil være tilgængelig på: `https://DIT-BRUGERNAVN.github.io/DIT-REPO-NAVN/`

## 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build til production
npm run preview  # Preview production build lokalt
npm run lint     # Check kode med ESLint
```

## 🛠️ Tech Stack

| Technology   | Version | Purpose             |
| ------------ | ------- | ------------------- |
| React        | 19.2.0  | UI Library          |
| React DOM    | 19.2.0  | React renderer      |
| React Router | 7.9.3   | Client-side routing |
| Vite         | 7.1.8   | Build tool          |
| ESLint       | 9.36.0  | Code linting        |
| SWC          | 4.1.0   | Fast compilation    |

## 📚 Læringsmål

Dette projekt er designet til at lære:

- ✅ React komponenter og hooks
- ✅ React Router til navigation
- ✅ Modern build tooling med Vite
- ✅ Git workflow og GitHub collaboration
- ✅ GitHub Actions til CI/CD
- ✅ Deployment til GitHub Pages

## 🤝 Samarbejde

Se [deployment-collaboration.md](./deployment-collaboration.md) Del 5-6 for guide til:

- Invite collaborators
- Arbejde med branches
- Lave Pull Requests
- Code review process
- Merge strategies

## 🐛 Troubleshooting

Se [deployment-collaboration.md](./deployment-collaboration.md) Del 8 for almindelige problemer og løsninger.

## 📖 Dokumentation

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 🎓 Lavet til undervisning

Dette template er lavet til undervisningsbrug og inkluderer:

- Klar-til-brug projekt struktur
- Best practices for React udvikling
- Moderne tooling setup
- Deployment automation
- Collaboration workflow eksempler

## 📄 License

Dette projekt er open source og tilgængeligt under MIT License.

## 👨‍💻 Forfatter

**Rasmus Cederdorff**

- GitHub: [@cederdorff](https://github.com/cederdorff)
- Website: [cederdorff.com](https://cederdorff.com)

---

**Held og lykke med dit projekt! 🚀**

Hvis du har spørgsmål eller forslag til forbedringer, er du velkommen til at åbne et issue eller pull request.
