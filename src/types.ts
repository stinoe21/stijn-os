// ----------------------------------------------------------------------------
// Datatypes voor Stijn OS.
// De daadwerkelijke inhoud staat in src/data/apps.ts en src/data/criteria.ts.
// ----------------------------------------------------------------------------

/** De vijf beoordelingscriteria van het individuele eindassessment. */
export type CriterionId =
  | 'professioneel' // 1. Professionele ontwikkeling
  | 'competenties' // 2. Inzicht in en inzetten van competenties
  | 'bijdrage' // 3. Bijdrage in de onderneming
  | 'naarbuiten' // 4. Actief naar buiten treden
  | 'risico' // 5. Risicobereidheid

export interface Criterion {
  id: CriterionId
  nr: number
  /** Korte naam, voor chips/meter. */
  label: string
  /** Volledige naam zoals in de beoordelingscriteria. */
  full: string
}

/** Welk pixel-icoon hoort bij een app. */
export type IconKey =
  | 'readme'
  | 'cto'
  | 'vertaler'
  | 'keynote'
  | 'netwerk'
  | 'spiegel'
  | 'risico'
  | 'boekhouding'
  | 'update'

/** Eén bewijsstuk: een foto (polaroid) of een link naar een document (PDF). */
export interface BewijsItem {
  /** Bijschrift. */
  label: string
  /**
   * Optioneel pad naar een screenshot/foto -> toont een polaroid.
   * Zet je bestand in public/bewijs/ en verwijs ernaar als '/bewijs/jouwfoto.png'
   * (het base-path wordt automatisch toegevoegd).
   */
  image?: string
  /**
   * Optionele link naar een document -> toont een klikbare documentkaart.
   * Een lokaal PDF: zet 'm in public/bewijs/ en gebruik '/bewijs/verslag.pdf'.
   * Een externe link (bv. Google Drive) mag ook: 'https://...'.
   */
  href?: string
}

/** Eén programma/venster op het bureaublad = één onderdeel van mijn ontwikkeling. */
export interface AppItem {
  id: string
  /** Bestandsnaam-stijl label onder het icoon, bv. "CTO.exe". */
  fileName: string
  /** Menselijke titel bovenin het venster. */
  title: string
  /** Korte teaser (tooltip + subkop in venster). */
  teaser: string
  icon: IconKey
  /** Welke beoordelingscriteria dit onderdeel afdekt. */
  criteria: CriterionId[]
  /** Optionele inleidende alinea. */
  intro?: string
  /** Detailpunten / alinea's. */
  detail: string[]
  /** Optionele "vertaaltabel" (techniek → klantwaarde), alleen voor Vertaler.app. */
  vertaaltabel?: { van: string; naar: string }[]
  /** Reflectie-blok. */
  reflectie: string
  /** Optionele markante quote. */
  quote?: string
  /** Bewijs/voorbeelden. */
  bewijs: BewijsItem[]
  /** Nieuwe leerdoel / volgende stap. */
  vervolgstap: string
  /** Accent-icoon (bv. README valt op). */
  accent?: boolean
}
