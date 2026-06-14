# Stijn OS

Interactief eindassessment **Persoonlijke Ontwikkeling** — minor Ondernemerschap (HvA), gemaakt rond
Kaires. Een zelfgebouwd, retro besturingssysteem als metafoor voor mijn ondernemersbrein: elk
programma op het bureaublad opent een onderdeel van mijn groei.

## Lokaal draaien

```bash
npm install
npm run dev      # http://localhost:5173/stijn-os/
```

```bash
npm run build    # productiebuild in /dist
npm run preview  # bekijk de build lokaal
```

## Waar pas ik dingen aan?

| Wat | Bestand |
| --- | --- |
| **Alle teksten** (titels, reflecties, quotes, leerdoelen) | `src/data/apps.ts` |
| Kernzin & kernontwikkeling | bovenin `src/data/apps.ts` |
| Beoordelingscriteria | `src/data/criteria.ts` |
| **Bewijs / screenshots** | zet afbeeldingen in `public/bewijs/` en koppel ze in `src/data/apps.ts` |
| Kleuren / fonts | `tailwind.config.ts` |
| Pixel-iconen | `src/components/PixelIcon.tsx` |

## De vensters (programma's)

`LEESMIJ.txt` · `CTO.exe` · `Vertaler.app` · `Keynote.exe` · `Netwerk.app` · `Spiegel.sys` ·
`Risico.exe` · `Boekhouding.xls` · `Update v2.0`

De meter rechtsboven vinkt de vijf beoordelingscriteria af naarmate je vensters opent.

## Online zetten (GitHub Pages)

1. Push deze map naar een GitHub-repo met de naam **`stijn-os`**.
2. Repo → Settings → Pages → *Build and deployment* → Source: **GitHub Actions**.
3. De workflow in `.github/workflows/deploy.yml` bouwt en publiceert automatisch bij elke push naar
   `main`. URL: `https://<jouw-username>.github.io/stijn-os/`.

> Andere repo-naam of een eigen domein/Vercel? Pas `base` aan in `vite.config.ts`.
