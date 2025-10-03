# **Guide: React SPA Template - Deployment & Samarbejde**

Denne guide hjælper dig med at oprette dit eget React projekt, deploye det til GitHub Pages, og samarbejde med andre via GitHub.

- **Del 1 til 4** kan udføres af én i gruppen, men alle gruppemedlemmer må gerne følge med, så I er bevidste om processen.
- **Del 5 til 9** laves som samarbejde mellem alle gruppemedlemmer. 


---

## Del 1: Opret dit projekt fra template

### Step 1.1: Brug template på GitHub

1. Gå til dette repository: `https://github.com/cederdorff/react-vite-spa`
2. Klik på den grønne **"Use this template"** knap
3. Vælg **"Create a new repository"**
4. Navngiv dit nye repository (fx `my-react-app`)
5. Vælg **Public** (vigtigt for GitHub Pages)
6. Klik **"Create repository"**

### Step 1.2: Clone dit nye repository

1. Klik på den grønne **"Code"** knap på dit nye repository
2. Vælg **"Open with GitHub Desktop"**
3. Vælg hvor projektet skal gemmes på din computer
4. Klik **"Clone"**

### Step 1.3: Installer dependencies

```bash
npm install
```

### Step 1.4: Test at projektet kører lokalt

```bash
npm run dev
```

Åbn `http://localhost:5173` i din browser. Du skulle gerne se din React app køre.

---

## Del 2: Tilpas projekt til dit repository navn

For at GitHub Pages virker korrekt, skal du opdatere to filer med dit repository navn.

### Step 2.1: Opdater `vite.config.js`

Åbn `vite.config.js` og find denne linje:

```javascript
config.base = "/react-vite-spa/"; // 👈 Replace with your GitHub repository name
```

Ændr den til dit repository navn:

```javascript
config.base = "/DIT-REPO-NAVN/";
```

**Eksempel:** Hvis dit repo hedder `my-react-app`, skal linjen være:

```javascript
config.base = "/my-react-app/";
```

### Step 2.2: Opdater `src/main.jsx`

Åbn `src/main.jsx` og find denne linje:

```jsx
<BrowserRouter basename={import.meta.env.DEV ? "/" : "/react-vite-spa/"}>
```

Ændr den til dit repository navn:

```jsx
<BrowserRouter basename={import.meta.env.DEV ? "/" : "/DIT-REPO-NAVN/"}>
```

**Eksempel:** Hvis dit repo hedder `my-react-app`, skal linjen være:

```jsx
<BrowserRouter basename={import.meta.env.DEV ? "/" : "/my-react-app/"}>
```

### Step 2.3: Commit dine ændringer

**Vælg én af metoderne:**

**Metode A: GitHub Desktop** (anbefalet for begyndere)

1. Åbn **GitHub Desktop**
2. Du vil se dine ændringer i venstre side
3. Skriv commit besked: `"Update base paths for GitHub Pages"`
4. Klik **"Commit to main"**
5. Klik **"Push origin"** øverst

**Metode B: VS Code**

1. Klik på **Source Control** ikonet i venstre side (eller tryk `Ctrl+Shift+G`)
2. Du vil se dine ændringer
3. Skriv commit besked: `"Update base paths for GitHub Pages"`
4. Klik **"Commit"** (✓ ikonet)
5. Klik **"Sync Changes"** (eller **"Push"**)

---

## Del 3: Opsæt GitHub Pages

### Step 3.1: GitHub Actions workflow er allerede inkluderet

Template'n inkluderer allerede en deployment workflow i `.github/workflows/static.yml`.

Denne fil gør følgende automatisk hver gang du pusher til `main` branch:

- ✅ Installerer dependencies (`npm ci`)
- ✅ Bygger din React app (`npm run build`)
- ✅ Kopierer `index.html` til `404.html` (så React Router virker på GitHub Pages)
- ✅ Deployer til GitHub Pages

Du behøver ikke gøre noget med denne fil - den virker automatisk!

### Step 3.2: Commit dine base path ændringer

Hvis du har lavet ændringer i Step 2, skal du committe dem:

1. Åbn **GitHub Desktop**
2. Skriv en commit besked: `"Update base paths for GitHub Pages"`
3. Klik **"Commit to main"**
4. Klik **"Push origin"**

### Step 3.3: Aktivér GitHub Pages på GitHub

1. Gå til dit repository på GitHub
2. Klik på **Settings** (øverst)
3. Klik på **Pages** i venstre menu
4. Under **Source**, vælg **GitHub Actions**
5. Vent et par minutter mens GitHub bygger og deployer din side

### Step 3.4: Find din live URL

Din side vil være tilgængelig på:

```
https://DIT-BRUGERNAVN.github.io/DIT-REPO-NAVN/
```

**Eksempel:** `https://rasmusdoeker.github.io/my-react-app/`

---

## Del 4: Test at ændringer bliver deployed

### Step 4.1: Lav en lille ændring

Åbn `src/pages/HomePage.jsx` og ændr teksten:

```jsx
export default function HomePage() {
  return (
    <section className="page">
      <h1>Min Første React App på GitHub Pages! 🚀</h1>
      <p>Dette er en moderne React SPA bygget med Vite og React Router.</p>
    </section>
  );
}
```

### Step 4.2: Commit og push ændringen

**GitHub Desktop:**

1. Åbn **GitHub Desktop**
2. Se din ændring i `src/pages/HomePage.jsx`
3. Skriv commit besked: `"Update homepage text"`
4. Klik **"Commit to main"**
5. Klik **"Push origin"**

**VS Code:**

1. Klik på **Source Control** (`Ctrl+Shift+G`)
2. Se din ændring i listen
3. Skriv commit besked: `"Update homepage text"`
4. Klik **"Commit"** (✓)
5. Klik **"Sync Changes"**

### Step 4.3: Følg deployment processen

1. Gå til dit repository på GitHub
2. Klik på **Actions** fanen (øverst)
3. Du skulle se en ny workflow køre
4. Vent til den er færdig (grøn check mark ✅)
5. Besøg din live URL og refresh siden
6. Din ændring skulle nu være synlig online!

> 💡 **Tip:** Det tager normalt 1-3 minutter fra du pusher til ændringen er live.

---

## Del 5: Inviter collaborators (samarbejde)

### Step 5.1: Inviter kollega(er)

**Repository ejer** inviterer gruppedeltagere:

1. Gå til dit repository på GitHub
2. Klik på **Settings**
3. Klik på **Collaborators** i venstre menu
4. Klik **"Add people"**
5. Indtast din kollegas GitHub brugernavn eller email
6. Klik **"Add [navn] to this repository"**
7. Gentag for alle i gruppen (2-4 personer total)

Dine kolleger vil modtage en invitation via email og skal acceptere den.

### Step 5.2: Alle collaborators cloner repository

**Alle i gruppen** skal nu clone projektet:

1. Accepter invitation (via email eller GitHub notifikationer)
2. Gå til repository på GitHub
3. Klik på den grønne **"Code"** knap
4. Vælg **"Open with GitHub Desktop"**
5. Vælg hvor projektet skal gemmes
6. Åbn projektet i VS Code
7. Åbn terminal i VS Code og kør: `npm install`
8. Test at projektet virker: `npm run dev`

### Step 5.3: Fordel opgaver i gruppen

**Vigtig:** I skal arbejde på **forskellige features** samtidigt for at øve samarbejde!

Vælg hvem der laver hvad (baseret på antal personer):

| Person       | Branch navn                 | Feature           | Beskrivelse                    |
| ------------ | --------------------------- | ----------------- | ------------------------------ |
| **Person A** | `feature/add-footer`        | Footer komponent  | Tilføj footer med copyright    |
| **Person B** | `feature/improve-homepage`  | Forbedre HomePage | Tilføj hero sektion og styling |
| **Person C** | `feature/add-services-page` | Services side     | Ny side med services           |
| **Person D** | `feature/style-about-page`  | Style About side  | Forbedre About siden           |

> 💡 **Tip:** Hvis I kun er 2 personer, lav Person A og B opgaverne. Ved 3 personer, tilføj Person C osv.

---

## Del 6: Samarbejde med branches og Pull Requests

> ⚠️ **Vigtigt:** Hver person følger disse steps for **deres egen opgave** fra Step 5.3!

### Step 6.1: Opret din branch

**Alle personer** opretter hver deres branch (brug dit tildelte navn fra Step 5.3):

**GitHub Desktop:**

1. Klik på **"Current Branch"** øverst
2. Klik **"New Branch"**
3. Navngiv din branch (brug dit navn fra tabellen, fx `feature/add-footer`)
4. Klik **"Create Branch"**

**VS Code:**

1. Klik på branch navnet nederst til venstre (står `main`)
2. Vælg **"Create new branch..."**
3. Navngiv din branch (brug dit navn fra tabellen, fx `feature/add-footer`)
4. Tryk Enter

> 💡 **Naming convention:** Brug beskrivende navne som `feature/add-contact-page` eller `fix/navigation-bug`

### Step 6.2: Implementer din feature

**Find din opgave nedenfor og følg instruktionerne:**

---

#### 👤 Person A: Footer komponent

Opret en ny fil `src/components/Footer.jsx`:

```jsx
export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "2rem",
        padding: "1rem",
        textAlign: "center",
        borderTop: "1px solid #ccc"
      }}>
      <p>&copy; 2025 - Lavet med ❤️ af [DIT NAVN]</p>
    </footer>
  );
}
```

Tilføj Footer til `App.jsx`:

```jsx
import { Routes, Route, Navigate } from "react-router";
import Nav from "./components/Nav";
import Footer from "./components/Footer"; // 👈 Tilføj dette
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer /> {/* 👈 Tilføj dette */}
    </>
  );
}

export default App;
```

---

#### 👤 Person B: Forbedre HomePage

Åbn `src/pages/HomePage.jsx` og erstat indholdet:

```jsx
export default function HomePage() {
  return (
    <section className="page">
      <div className="hero">
        <h1>Velkommen til vores React App! 🚀</h1>
        <p className="subtitle">En moderne SPA bygget med Vite, React 19 og React Router 7</p>
        <div className="features">
          <div className="feature-card">
            <h3>⚡ Lynhurtig</h3>
            <p>Vite giver instant hot module replacement</p>
          </div>
          <div className="feature-card">
            <h3>🎨 Moderne</h3>
            <p>Nyeste React 19 features</p>
          </div>
          <div className="feature-card">
            <h3>🔀 Routing</h3>
            <p>React Router 7 til navigation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

Tilføj styling i `src/index.css` (nederst i filen):

```css
.hero {
  text-align: center;
  padding: 2rem 0;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.feature-card {
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #f9f9f9;
}

.feature-card h3 {
  margin-bottom: 0.5rem;
}
```

---

#### 👤 Person C: Services side

Opret en ny fil `src/pages/ServicesPage.jsx`:

```jsx
export default function ServicesPage() {
  const services = [
    {
      title: "Web Udvikling",
      description: "Moderne responsive websites",
      icon: "💻"
    },
    {
      title: "App Udvikling",
      description: "Native og cross-platform apps",
      icon: "📱"
    },
    {
      title: "Cloud Services",
      description: "Deployment og hosting",
      icon: "☁️"
    }
  ];

  return (
    <section className="page">
      <h1>Vores Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

Tilføj route i `App.jsx`:

```jsx
import ServicesPage from "./pages/ServicesPage"; // 👈 Tilføj import

// I Routes:
<Route path="/services" element={<ServicesPage />} /> {/* 👈 Tilføj route */}
```

Tilføj link i `Nav.jsx`:

```jsx
<NavLink to="/services">Services</NavLink> {/* 👈 Tilføj link */}
```

Tilføj styling i `src/index.css`:

```css
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  padding: 2rem;
  border: 2px solid #4a90e2;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}
```

---

#### 👤 Person D: Style About side

Åbn `src/pages/AboutPage.jsx` og erstat indholdet:

```jsx
export default function AboutPage() {
  return (
    <section className="page">
      <div className="about-container">
        <h1>Om Os</h1>
        <div className="about-content">
          <div className="about-text">
            <h2>Vores Historie</h2>
            <p>
              Vi er et passioneret team af udviklere der elsker at bygge moderne web applikationer med de nyeste
              teknologier.
            </p>
            <h2>Vores Mission</h2>
            <p>
              At levere de bedste web løsninger ved hjælp af cutting-edge teknologier som React, Vite og moderne web
              standards.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>10+</h3>
              <p>Projekter</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Team Members</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Tilfredse kunder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

Tilføj styling i `src/index.css`:

```css
.about-container {
  max-width: 900px;
  margin: 0 auto;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}

.about-text h2 {
  color: #4a90e2;
  margin-top: 1.5rem;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.stat {
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
}

.stat h3 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.stat p {
  font-size: 1rem;
  opacity: 0.9;
}
```

---

### Step 6.3: Test din ændring lokalt

**Alle personer** tester deres feature:

Kør dev server i terminal:

```bash
npm run dev
```

**Test dit feature:**

- **Person A:** Tjek at footer vises på alle sider
- **Person B:** Tjek hero section og feature cards på homepage
- **Person C:** Åbn `/services` og tjek services grid
- **Person D:** Åbn `/about` og tjek styling og stats

### Step 6.4: Commit din ændring

**Brug din egen commit besked baseret på dit feature:**

**GitHub Desktop:**

1. Se dine ændringer i listen
2. Skriv commit besked:
   - Person A: `"Add footer component"`
   - Person B: `"Improve homepage with hero section"`
   - Person C: `"Add services page with grid layout"`
   - Person D: `"Style about page with stats section"`
3. Klik **"Commit to [din-branch-navn]"**

**VS Code:**

1. Klik på **Source Control** (`Ctrl+Shift+G`)
2. Se dine ændringer
3. Skriv commit besked (brug din fra listen ovenfor)
4. Klik **"Commit"** (✓)

### Step 6.5: Push branch til GitHub

**GitHub Desktop:**

1. Klik **"Publish branch"** øverst (eller **"Push origin"** hvis allerede published)

**VS Code:**

1. Klik **"Sync Changes"** (eller **"Publish Branch"**)
2. Vælg at pushe til remote

### Step 6.6: Opret Pull Request (PR)

**Alle personer** opretter hver deres PR:

1. Gå til dit repository på GitHub
2. Du skulle se en gul banner med **"Compare & pull request"** - klik på den
3. Ellers: Klik på **Pull requests** → **"New pull request"**
4. Vælg din branch i dropdown
5. Skriv en beskrivelse (tilpas til dit feature):

   **Person A - Footer:**

   ```
   ## Hvad er ændret?
   - Tilføjet Footer komponent
   - Footer vises på alle sider med copyright notice

   ## Test
   - [x] Testet lokalt - footer vises korrekt
   ```

   **Person B - Homepage:**

   ```
   ## Hvad er ændret?
   - Forbedret homepage med hero sektion
   - Tilføjet feature cards med grid layout
   - Tilføjet responsiv styling

   ## Test
   - [x] Testet lokalt - hero og cards vises korrekt
   ```

   **Person C - Services:**

   ```
   ## Hvad er ændret?
   - Tilføjet ny Services side
   - Services grid med 3 service kort
   - Tilføjet route og navigation link

   ## Test
   - [x] Testet lokalt - services side virker
   - [x] Navigation link fungerer
   ```

   **Person D - About:**

   ```
   ## Hvad er ændret?
   - Redesignet About siden
   - Tilføjet stats sektion med gradient
   - Forbedret layout og typografi

   ## Test
   - [x] Testet lokalt - about side ser professionel ud
   ```

6. Klik **"Create pull request"**

### Step 6.7: Review hinanden's PRs (VIGTIG DEL!)

**Nu lærer I at reviewe hinandens kode:**

1. **Hver person** går til **Pull requests** fanen
2. Se alle åbne PRs fra gruppen
3. **Vælg EN anden persons PR** (ikke din egen)
4. Klik på PR'en og gennemgå:
   - Læs beskrivelsen
   - Klik på **"Files changed"** tab
   - Se kodeændringerne
5. Skriv en kommentar eller:
   - Klik **"Review changes"**
   - Vælg **"Approve"** (hvis koden ser god ud)
   - Eller skriv konstruktiv feedback
   - Klik **"Submit review"**

> 💡 **Tip:** Vær konstruktiv i feedback. Ros det der er godt, foreslå forbedringer hvis nødvendigt.

### Step 6.8: Merge PRs én ad gangen

**Vigtigt:** Merge PRs **én ad gangen** for at undgå konflikter!

**Repository ejer** (eller den første person) merger først:

1. Sørg for at din PR har mindst 1 approval
2. Klik **"Merge pull request"**
3. Klik **"Confirm merge"**
4. Klik **"Delete branch"**

**Næste person venter** til første PR er merged, opdaterer deres branch (se Step 6.9), og merger derefter deres PR.

Gentag indtil alle PRs er merged.

### Step 6.9: Opdater din branch (hvis du ikke er først)

**Hvis din PR endnu ikke er merged**, skal du opdatere den med ændringer fra main:

**GitHub Desktop:**

1. Klik på **"Current Branch"** og vælg **"main"**
2. Klik **"Fetch origin"** og derefter **"Pull origin"**
3. Skift tilbage til **din feature branch**
4. Klik **"Branch"** menu → **"Update from main"**
5. Hvis der er konflikter, løs dem (se Del 7)
6. Push ændringer: Klik **"Push origin"**

**VS Code:**

1. Skift til **main** branch (nederst til venstre)
2. Klik **"Sync Changes"**
3. Skift tilbage til **din feature branch**
4. Åbn Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
5. Vælg **"Git: Merge Branch..."**
6. Vælg **"main"**
7. Hvis konflikter: løs dem (se Del 7)
8. Push: Klik **"Sync Changes"**

Nu er din PR opdateret og klar til merge!

### Step 6.10: Opdater lokal main branch (efter alle er merged)

**Når alle PRs er merged**, skal alle opdatere deres lokale main branch:

**GitHub Desktop:**

1. Klik på **"Current Branch"** og vælg **"main"**
2. Klik **"Fetch origin"** (henter ændringer)
3. Klik **"Pull origin"** (henter alle features)

**VS Code:**

1. Klik på branch navnet nederst til venstre
2. Vælg **"main"** branch
3. Klik **"Sync Changes"** (henter alle features)

**Test den komplette app:**

```bash
npm run dev
```

Nu skulle I kunne se **alle features** fra hele gruppen! 🎉

GitHub Pages vil automatisk deploye den komplette app.

---

## Del 7: Best Practices

### ✅ Gode commit messages

**Godt:**

```bash
git commit -m "Add contact form with validation"
git commit -m "Fix navigation active state bug"
git commit -m "Update homepage hero section styling"
```

**Dårligt:**

```bash
git commit -m "changes"
git commit -m "fix"
git commit -m "update"
```

### ✅ Branch naming

- `feature/` - ny funktionalitet
- `fix/` - bug fixes
- `update/` - opdateringer
- `refactor/` - kode omstrukturering

**Eksempler:**

- `feature/user-authentication`
- `fix/mobile-navigation`
- `update/dependencies`

### ✅ Pull Request best practices

1. **Lav en PR per feature** - ikke 10 ting i én PR
2. **Skriv god beskrivelse** - forklar hvad og hvorfor
3. **Test før du laver PR** - sikr at koden virker
4. **Hold PR'er små** - lettere at reviewe
5. **Besvar kommentarer** - vær i dialog med din reviewer

### ✅ Merge konflikter

Hvis du får merge konflikter:

**GitHub Desktop:**

1. Skift til **main** branch
2. Klik **"Fetch"** og derefter **"Pull origin"**
3. Skift tilbage til **din feature branch**
4. Klik **"Branch"** → **"Update from main"**
5. Hvis der er konflikter, vil GitHub Desktop vise dem
6. Åbn filen(e) med konflikter i VS Code
7. Vælg hvilken version du vil beholde (VS Code viser valg)
8. Commit løsningen

**VS Code:**

1. Skift til **main** branch (klik nederst til venstre)
2. Klik **"Sync Changes"**
3. Skift tilbage til **din feature branch**
4. Åbn Command Palette (`Cmd+Shift+P`)
5. Vælg **"Git: Merge Branch..."** og vælg **main**
6. Hvis konflikter: VS Code viser dem med valgmuligheder
7. Vælg "Accept Current" / "Accept Incoming" / eller rediger manuelt
8. Commit løsningen
9. Push ændringerne

---

## Del 8: Troubleshooting

### Problem: GitHub Pages viser 404

**Løsning:**

1. Tjek at `base` i `vite.config.js` matcher dit repo navn
2. Tjek at `basename` i `main.jsx` matcher dit repo navn
3. Tjek at GitHub Pages er aktiveret under Settings → Pages
4. Vent 2-3 minutter efter push - deployment tager tid

### Problem: Routing virker ikke på GitHub Pages

**Løsning:**

- Sørg for at `basename` er sat korrekt i `BrowserRouter`
- Alle routes skal være relative til dit repo navn

### Problem: CSS eller billeder mangler

**Løsning:**

- Tjek at alle stier er relative (brug `/` i starten)
- Rebuild og deploy igen: `npm run build` → push

### Problem: "npm install" fejler

**Løsning:**

1. Slet `node_modules` og `package-lock.json`
2. Kør `npm install` igen
3. Hvis det stadig fejler, tjek Node version: `node -v` (skal være v18+)

---

## Del 9: Næste skridt

Når du har fulgt hele guiden, har du:

✅ Oprettet dit eget React projekt fra template  
✅ Tilpasset det til dit repository  
✅ Deployed det til GitHub Pages  
✅ Testet deployment processen  
✅ Lært at samarbejde via branches og PR's  
✅ Forstået best practices for Git workflow

**Udfordringer til dig:**

1. **Tilføj en ny side** - Lav en "Projects" side med dine projekter
2. **Lav bedre styling** - Tilføj mere CSS eller prøv Tailwind
3. **Tilføj funktionalitet** - Integrer Firebase, fetch data fra API
4. **Samarbejd** - Inviter en ven og lav features sammen
5. **Automatiser mere** - Tilføj linting til GitHub Actions

---

## Nyttige links

- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Markdown Guide](https://www.markdownguide.org/)

---

**Held og lykke med dit projekt! 🚀**

Hvis du løber ind i problemer, spørg din underviser eller brug GitHub Issues til at dokumentere bugs.
