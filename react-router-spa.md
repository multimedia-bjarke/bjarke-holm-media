# Guide: Opret et React SPA med Vite og React Router

Denne guide hjælper dig med at oprette en moderne React Single Page Application (SPA) med Vite og React Router. Undervejs får du forklaringer, refleksioner og tips, så du ikke bare følger opskriften, men også forstår hvad du laver.

---

## 1. Opret et nyt Vite-projekt

Inden du kan begynde at kode, skal du have et projekt at arbejde i. Det er vigtigt at have styr på mappestrukturen, så du nemt kan finde rundt i dine filer senere.

**Hvorfor Vite?**
Vite er et moderne værktøj, der gør det nemt og hurtigt at starte et nyt webprojekt. Det hjælper dig med at få en god struktur og automatiserer mange ting, så du kan fokusere på at lære React.

**Sådan gør du:**
Følg step 1 i denne guide: [Getting started with React](https://race.notion.site/Getting-started-with-React-0fd48b8ae90a438bb6ec8dc95628f13f?source=copy_link)

Her bliver du hjulpet igennem oprettelsen af et nyt Vite-projekt med React og JavaScript. Du får både billeder og forklaringer, så du kan se hvordan det skal se ud undervejs.

> 💡 Det er helt normalt at være i tvivl om nogle af trinnene. Bare følg guiden, og spørg hvis du er i tvivl!

---

## 2. Installer React Router

Når projektet er oprettet, skal du installere React Router, som gør det muligt at navigere mellem sider. Det gør du med denne kommando:

```sh
npm install react-router@latest
```

**Hvad betyder det?**

- `react-router` er den nyeste version af React Router (v7), som bruges til navigation mellem sider i din app.
- `react` og `react-dom` er allerede installeret, da de følger med når du opretter et Vite-projekt.

> Bemærk: Tidligere brugte man `react-router-dom`, men med version 7 bruger man nu kun `react-router`.

Når du kører denne kommando, henter din computer den nyeste version af React Router og gør den klar til brug i dit projekt.

> 💡 Hvis du får fejl, så tjek om du står i den rigtige mappe i terminalen. Du skal være i din projektmappe!

---

## 3. Opsætning af React Router

Nu skal du gøre din app klar til at kunne navigere mellem forskellige sider – uden at genindlæse browseren. Det er her React Router kommer ind i billedet.

### src/main.jsx

Her starter din app og "binder" den til HTML-siden. Du skal sørge for at pakke din app ind i en `BrowserRouter`, så React Router virker:

```jsx
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

**Refleksion:**
BrowserRouter gør det muligt for din app at "lytte" efter ændringer i URL'en og vise den rigtige side – uden at genindlæse hele appen.

---

## 4. Opret din første side og route

Nu bygger vi din app trin for trin. Vi starter med forsiden og udvider gradvist.

### Opret mapper til komponenter og sider

Først skal du oprette mapper til at organisere din kode. Opret disse mapper i `src`:

- `src/components` (til navigation og andre komponenter)
- `src/pages` (til dine sider)

---

### src/pages/HomePage.jsx

Lad os starte med at lave forsiden til din app. Opret filen `src/pages/HomePage.jsx` med følgende indhold:

```jsx
function HomePage() {
  return <h1>Velkommen til forsiden!</h1>;
}

export default HomePage;
```

Nu har du en simpel forside. Lad os nu definere en route til denne side, så du kan se den i browseren.

---

### src/App.jsx

Åbn `src/App.jsx` og definer kun forsiden i dine routes til at starte med:

```jsx
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
```

**Test din app nu:**

1. Kør `npm run dev` i terminalen
2. Åbn http://localhost:5173 i din browser
3. Du skulle nu se "Velkommen til forsiden!" på siden

> 💡 Hvis du ikke ser din side, tjek terminalen for fejl eller sørg for at alle filer er gemt.

Når du har styr på det, kan du udvide med flere sider.

---

### Tilføj AboutPage og ContactPage

Opret nu de to andre sider:

#### src/pages/AboutPage.jsx

```jsx
function AboutPage() {
  return <h1>Om os</h1>;
}

export default AboutPage;
```

#### src/pages/ContactPage.jsx

```jsx
function ContactPage() {
  return <h1>Kontakt</h1>;
}

export default ContactPage;
```

Udvid nu dine routes i `src/App.jsx`:

```jsx
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
```

**Test dine nye routes:**

1. Gem alle filer og gå til din browser
2. Skriv følgende i adresselinjen og tryk enter:
   - `http://localhost:5173/` (skal vise "Velkommen til forsiden!")
   - `http://localhost:5173/about` (skal vise "Om os")
   - `http://localhost:5173/contact` (skal vise "Kontakt")

> 💡 Hvis en side ikke vises, tjek at filnavnet og importen matcher præcist (store/små bogstaver betyder noget!).

---

### Tilføj navigation

Til sidst kan du tilføje en navigation, så du nemt kan skifte mellem siderne:

#### src/components/Nav.jsx

```jsx
import { Link } from "react-router";

function Nav() {
  return (
    <nav>
      <Link to="/">Forside</Link> | <Link to="/about">Om</Link> |
      <Link to="/contact">Kontakt</Link>
    </nav>
  );
}

export default Nav;
```

Indsæt navigationen i din `App.jsx`:

```jsx
import { Routes, Route } from "react-router";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
```

**Test din navigation:**

1. Gem alle filer og gå til din browser
2. Du skulle nu se navigation-linkene øverst på siden
3. Klik på linkene og se at du skifter mellem siderne uden at siden genindlæses
4. Læg mærke til at URL'en ændrer sig i adresselinjen når du klikker

> 💡 Hvis linkene ikke virker, tjek at du har importeret `Link` fra "react-router" og ikke brugt `<a>` tags.

Nu har du en fuldt fungerende app med navigation og flere sider, bygget op trin for trin!

---

## 5. Tilføj lidt styling (valgfrit)

Det er rart at din app ser lidt pæn ud. Du kan tilføje en simpel CSS-fil:

### src/index.css

```css
body {
  font-family: Arial, sans-serif;
  margin: 2rem;
}

nav {
  margin-bottom: 2rem;
}

nav a {
  margin-right: 1rem;
  text-decoration: none;
  color: #333;
}

nav a:hover {
  text-decoration: underline;
}
```

**Refleksion:**
Du kan altid ændre eller udvide din styling, så din app får det udtryk du ønsker.

---

## 6. Test den færdige app

Nu er du klar til at se din app i browseren! Hvis den ikke allerede kører, så kør denne kommando i terminalen:

```sh
npm run dev
```

Du får nu en lokal adresse (typisk http://localhost:5173), som du kan åbne i din browser og se din app.

**Din app skulle nu have:**

- Navigation øverst på siden
- Mulighed for at klikke mellem Forside, Om og Kontakt
- URL'en ændrer sig når du navigerer
- Siden genindlæses ikke når du skifter mellem sider

> 💡 Hvis du får fejl, så læs fejlbeskeden og prøv at forstå hvad der er galt. Spørg gerne om hjælp!

---

## Hvad har du lært?

- **Vite** bruges til at oprette og køre React-projekter hurtigt.
- **React** er UI-biblioteket til at bygge brugergrænseflader.
- **React Router** bruges til navigation mellem sider uden at genindlæse browseren.
- **Komponenter** og **pages** er delt op for at gøre koden overskuelig og vedligeholdelig.
- **BrowserRouter** pakker din app ind, så routing virker.
- **Routes og Route** definerer hvilke komponenter der vises på hvilke URL'er.
- **Link** bruges til navigation i stedet for `<a>` tags.

---

## Næste skridt og udvidelser

Nu hvor du har en grundlæggende SPA, kan du udvide den med:

- **Flere sider:** Opret nye komponenter i `src/pages` og tilføj dem til `<Routes>`.
- **Styling:** Udvid CSS'en eller prøv CSS-frameworks som Tailwind CSS.
- **State management:** Lær om React hooks som `useState` og `useEffect`.
- **API-kald:** Hent data fra eksterne APIs og vis dem på dine sider.
- **Formular-håndtering:** Tilføj kontaktformularer eller login-sider.

---

## 7. Opgaver til at forbedre din app

### Opgave 7.1: Forbedre CSS med variabler og moderne styling

Din nuværende CSS er meget simpel. Lad os gøre den mere professionel:

**Mål:** Tilføj CSS custom properties (variabler) og forbedre designet.

**Sådan gør du:**
Erstat indholdet i `src/index.css` med denne forbedrede version:

```css
/* ---------- Root Variables ---------- */
:root {
  --primary-color: rgb(38, 76, 89);
  --primary-dark: rgb(9, 47, 59);
  --primary-light: rgb(172, 198, 201);
  --background: #f1f1f4;
  --text-dark: #333;
  --text-light: #f1f1f1;
  --white: #ffffff;
  --border-radius: 8px;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* ---------- Global Styling ---------- */
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  background-color: var(--background);
  color: var(--text-dark);
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

/* ---------- Navigation ---------- */
nav {
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  box-shadow: var(--shadow);
}

nav a {
  color: var(--text-light);
  text-decoration: none;
  margin-right: 2rem;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: var(--primary-dark);
}

/* ---------- Main Content ---------- */
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page {
  background-color: var(--white);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
}

.page h1 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}
```

**Test dit resultat:**

1. Gem filen og se ændringerne i browseren
2. Læg mærke til hvordan navigation nu har en mørk baggrund
3. Se hvordan indholdet nu er centreret og har kort-lignende styling

**Refleksion:** CSS custom properties gør det nemt at ændre farver og styling på tværs af hele sitet.

---

### Opgave 7.2: Upgrade til NavLink med aktiv styling

`Link` virker fint, men `NavLink` er bedre til navigation, da det kan vise hvilken side du er på.

**Mål:** Erstat `Link` med `NavLink` og tilføj aktiv styling.

## Hvad er NavLink?

> _"A `<NavLink>` is a special kind of [`<Link>`](https://reactrouter.com/docs/en/v6/api#link) that knows whether or not it is "active". This is useful when building a navigation menu such as a breadcrumb or a set of tabs where you'd like to show which of them is currently selected."_
>
> _"By default, an `active` class is added to a `<NavLink>` component when it is active."_

Med andre ord: `NavLink` gør det samme som `Link`, men tilføjer automatisk CSS-klassen `active` til det link der matcher den side du er på lige nu.

**Sådan gør du:**

1. **Opdater din `src/components/Nav.jsx`:**

```jsx
import { NavLink } from "react-router";

function Nav() {
  return (
    <nav>
      <NavLink to="/">Forside</NavLink>
      <NavLink to="/about">Om</NavLink>
      <NavLink to="/contact">Kontakt</NavLink>
    </nav>
  );
}

export default Nav;
```

2. **Tilføj CSS for aktiv navigation i `src/index.css`:**

Tilføj disse linjer til din CSS (efter de eksisterende nav regler):

```css
/* Active navigation link */
nav a.active {
  background-color: var(--primary-dark);
  font-weight: 600;
}
```

**Test dit resultat:**

1. Gem filerne og åbn browseren
2. Klik mellem siderne og se at den aktive side nu er highlighted
3. Refresh siden - den aktive side forbliver highlighted

**Refleksion:** `NavLink` tilføjer automatisk klassen `active` til det link der matcher den nuværende URL.

---

### Opgave 7.3: Tilføj semantic HTML struktur

Gør din HTML mere semantisk korrekt ved at tilføje `<main>` wrapper og `.page` klasser.

**Mål:** Forbedre HTML strukturen og tilgængeligheden.

**Sådan gør du:**

1. **Opdater `src/App.jsx`:**

```jsx
import { Routes, Route } from "react-router";
import Nav from "./components/Nav";
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
        </Routes>
      </main>
    </>
  );
}

export default App;
```

2. **Opdater dine side-komponenter til at bruge `.page` klasse:**

**src/pages/HomePage.jsx:**

```jsx
function HomePage() {
  return (
    <section className="page">
      <h1>Velkommen til forsiden!</h1>
      <p>Dette er en moderne React SPA bygget med Vite og React Router.</p>
    </section>
  );
}

export default HomePage;
```

**src/pages/AboutPage.jsx:**

```jsx
function AboutPage() {
  return (
    <section className="page">
      <h1>Om os</h1>
      <p>Denne side fortæller om vores virksomhed og værdier.</p>
    </section>
  );
}

export default AboutPage;
```

**src/pages/ContactPage.jsx:**

```jsx
function ContactPage() {
  return (
    <section className="page">
      <h1>Kontakt</h1>
      <p>Her kan du finde vores kontaktoplysninger.</p>
    </section>
  );
}

export default ContactPage;
```

**Test dit resultat:**
Se hvordan dine sider nu har en pæn kort-styling med skygger og afrundede hjørner.

---

### Opgave 7.4: Tilføj catch-all route med Navigate

Hvad sker der hvis en bruger skriver en URL der ikke findes? Lad os håndtere det elegant.

**Mål:** Redirect brugere til forsiden hvis de indtaster en ugyldig URL.

**Sådan gør du:**

1. **Opdater `src/App.jsx` for at importere `Navigate`:**

```jsx
import { Routes, Route, Navigate } from "react-router";
import Nav from "./components/Nav";
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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
```

**Test dit resultat:**

1. Åbn browseren og gå til en side der ikke findes, fx: `http://localhost:5173/nonexistent`
2. Du skulle automatisk blive redirected til forsiden
3. Tjek at URL'en ændrer sig til `/`

**Refleksion:**

- `path="*"` matcher alle URLs der ikke matcher de andre routes
- `Navigate` component laver en redirect
- `replace` sørger for at den falske URL ikke gemmes i browser historik

---

### Opgave 7.5: Brug moderne export syntax

Moderniser din kode ved at bruge `export default function` syntaks.

**Mål:** Gør koden mere moderne og konsistent.

**Eksempel på opdatering af HomePage.jsx:**

```jsx
export default function HomePage() {
  return (
    <section className="page">
      <h1>Velkommen til forsiden!</h1>
      <p>Dette er en moderne React SPA bygget med Vite og React Router.</p>
    </section>
  );
}
```

Opdater alle dine komponenter på samme måde.

---

## 8. Ekstra udfordringer

- **Tilføj en 404-side** i stedet for redirect til forsiden
- **Eksperimenter med CSS animations** på navigation hover
- **Tilføj en footer-komponent**
- **Prøv at tilføje ikoner** til navigation (brug emoji eller SVG)

---

Spørg endelig hvis du har brug for mere hjælp eller ønsker at udvide projektet!
