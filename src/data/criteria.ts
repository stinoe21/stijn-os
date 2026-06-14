import type { Criterion, CriterionId } from '../types'

// De vijf beoordelingscriteria van het individuele eindassessment
// (minor Ondernemerschap). Bron: beoordelingscriteria "Individueel".
export const CRITERIA: Criterion[] = [
  {
    id: 'professioneel',
    nr: 1,
    label: 'Professionele ontwikkeling',
    full: 'Professionele ontwikkeling: leerdoelen, aantoonbare ontwikkeling, reflectie en nieuwe leerdoelen.',
  },
  {
    id: 'competenties',
    nr: 2,
    label: 'Inzicht in competenties',
    full: 'Inzicht in en inzetten van competenties: persoonlijkheid, kwaliteiten en valkuilen herkennen en benutten.',
  },
  {
    id: 'bijdrage',
    nr: 3,
    label: 'Bijdrage in de onderneming',
    full: 'Bijdrage in de onderneming: concrete waarde toevoegen aan de onderneming.',
  },
  {
    id: 'naarbuiten',
    nr: 4,
    label: 'Actief naar buiten treden',
    full: 'Actief naar buiten treden: contact met stakeholders, markt, netwerk en events; de onderneming vertegenwoordigen.',
  },
  {
    id: 'risico',
    nr: 5,
    label: 'Risicobereidheid',
    full: 'Risicobereidheid: handelen ondanks onzekerheid en buiten de comfortzone durven stappen.',
  },
]

export const CRITERIA_BY_ID: Record<CriterionId, Criterion> = CRITERIA.reduce(
  (acc, c) => {
    acc[c.id] = c
    return acc
  },
  {} as Record<CriterionId, Criterion>,
)
