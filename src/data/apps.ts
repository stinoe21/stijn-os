import type { AppItem } from '../types'

// ============================================================================
//  STIJN OS — INHOUD
//  Dit is de ENIGE plek waar je teksten hoeft aan te passen.
//  Elke `AppItem` is één programma/venster op het bureaublad.
//
//  Bewijs/screenshots toevoegen?
//   1. Zet je afbeelding in de map  /public/bewijs/   (bv. keynote.jpg)
//   2. Verwijs ernaar bij `bewijs` met  image: '/bewijs/keynote.jpg'
//   (zonder image verschijnt het bewijs als een 'lege' polaroid met bijschrift)
// ============================================================================

export const KERNZIN =
  'Ik heb niet alleen technische vaardigheden geleerd, maar geleerd hoe techniek waarde krijgt binnen een onderneming: door het begrijpbaar, verkoopbaar en toepasbaar te maken.'

export const KERNONTWIKKELING =
  'Ik ben gegroeid van iemand die vooral technisch wilde leren en soms meebewoog, naar iemand die techniek, verhaal, klantcontact en strategie bewuster inzet om een onderneming vooruit te brengen.'

export const APPS: AppItem[] = [
  // --------------------------------------------------------------------------
  {
    id: 'readme',
    fileName: 'LEESMIJ.txt',
    title: 'Start hier — welkom in Stijn OS',
    teaser: 'Lees mij eerst',
    icon: 'readme',
    accent: true,
    criteria: [],
    intro:
      'Dit is Stijn OS: een klein besturingssysteem dat ik zelf heb gebouwd, als bewijs én als verhaal van mijn ontwikkeling tijdens de minor Ondernemerschap met Kaires.',
    detail: [
      'Elk programma op dit bureaublad opent een onderdeel van mijn groei: techniek, het verhaal van Kaires, sales, mijn persoonlijkheid, risico en mijn volgende stappen.',
      'Rechtsboven zie je een meter met de vijf beoordelingscriteria. Elke keer dat je een venster opent, kleurt het bijbehorende criterium in — zo zie je precies waar wat wordt afgedekt.',
      'Het feit dat deze site bestaat, is zelf een stukje bewijs: een jaar geleden had ik dit niet kunnen bouwen.',
    ],
    reflectie:
      'Ik koos bewust voor een besturingssysteem als vorm. Het laat in één klap zien wat mijn grootste ontwikkeling is: techniek niet als doel, maar als manier om een idee tastbaar, begrijpbaar en bruikbaar te maken.',
    quote: KERNZIN,
    bewijs: [],
    vervolgstap: KERNONTWIKKELING,
  },

  // --------------------------------------------------------------------------
  {
    id: 'cto',
    fileName: 'CTO.exe',
    title: 'CTO worden door te doen',
    teaser: 'Technische groei & bijdrage',
    icon: 'cto',
    criteria: ['professioneel', 'bijdrage'],
    intro:
      'Op 11 maart schreef ik dat ik mij wilde ontwikkelen in de technische kant van de onderneming. Dat was toen nog abstract. Tijdens de minor heb ik het concreet gemaakt door echt te bouwen.',
    detail: [
      'Binnen mijn opleiding krijg ik nauwelijks software engineering. Tijdens deze minor heb ik daar heel bewust voor gekozen.',
      'Ik heb dingen gedaan die ik hiervoor nog nooit had gedaan: websites bouwen, applicaties opzetten en installeren, automatiseringen maken en technische systemen aan elkaar koppelen.',
      'Vrijwel alles wat ik met Kaires technisch heb gedaan, was nieuw voor mij — of op een heel ander niveau dan ervoor. Ik heb daar enorme stappen in gezet.',
    ],
    reflectie:
      'Techniek was voor mij geen losse hobby. Ik bouwde om Kaires te laten bestaan als onderneming: professioneler, testbaar en verkoopbaar. Daardoor veranderde mijn rol van "iemand die techniek interessant vindt" naar CTO die verantwoordelijkheid neemt voor wat we technisch leveren.',
    quote: 'Ik bouwde niet om te bouwen. Ik bouwde zodat Kaires kon bestaan als onderneming.',
    // De live Kaires-website is hét tastbare bewijs van wat ik technisch bouwde.
    bewijs: [{ label: 'Kaires-website (live, kaires.nl)', href: 'https://kaires.nl/' }],
    vervolgstap:
      'Software engineering verder verdiepen, maar altijd gekoppeld aan klantwaarde en haalbaarheid.',
  },

  // --------------------------------------------------------------------------
  {
    id: 'vertaler',
    fileName: 'Vertaler.app',
    title: 'Techniek begrijpbaar maken',
    teaser: 'Van techniek naar klantwaarde',
    icon: 'vertaler',
    criteria: ['competenties', 'bijdrage'],
    intro:
      'Een belangrijke groei is dat ik technische aspecten begrijpbaar kan maken voor mensen die niet technisch zijn.',
    detail: [
      'Als CTO moet je niet alleen zelf snappen hoe iets werkt, maar ook kunnen uitleggen waaróm het belangrijk is — aan klanten, coaches, partners en je eigen team.',
      'Ik leerde technische taal te vertalen naar iets dat waarde en vertrouwen oplevert:',
    ],
    vertaaltabel: [
      { van: 'Weighted matrix', naar: 'een systeem dat context vertaalt naar muziekkeuzes' },
      { van: 'Raspberry Pi / speler', naar: 'een klein apparaat dat muziek lokaal en stabiel afspeelt' },
      { van: 'Automatiseringen', naar: 'minder handwerk en professioneler opvolgen' },
      {
        van: 'Backend / database',
        naar: 'de plek waar muziek, instellingen en klantinformatie logisch samenkomen',
      },
    ],
    reflectie:
      'Door techniek te vertalen naar klantwaarde, haalbaarheid en vertrouwen werd het niet alleen iets van mij, maar iets waar het hele team en onze klanten iets aan hadden. Dat is voor een onderneming onmisbaar.',
    bewijs: [],
    vervolgstap:
      'Technische keuzes in elk gesprek nog scherper koppelen aan businesswaarde.',
  },

  // --------------------------------------------------------------------------
  {
    id: 'keynote',
    fileName: 'Keynote.exe',
    title: 'De keynote als grote salescall',
    teaser: 'Sales, storytelling & opvolging',
    icon: 'keynote',
    criteria: ['professioneel', 'naarbuiten'],
    intro:
      'Mijn oorspronkelijke leerdoel was om steviger te worden in salesgesprekken voor Kaires — ik wilde een aantal salescalls voeren om overtuigender te worden.',
    detail: [
      'In overleg met mijn coach Max en met Oskar verschoof onze aanpak. In plaats van veel losse cold calls kozen we voor warme contacten, persoonlijk contact en vooral de keynote.',
      'Dat was geen afzwakking van mijn doel, maar een realistischer en sterkere ondernemersactie. De keynote werd eigenlijk één groot salesmoment: ik hoefde niet één klant te overtuigen, maar een hele zaal stakeholders tegelijk.',
      'Ik moest Kaires scherp uitleggen, urgentie creëren, vertrouwen winnen en daarna gericht opvolgen.',
      'Max gaf mij mee om niet alleen resultaatgedreven te kijken (hoeveel klanten haalden we binnen), maar actiegedreven: welke acties brengen ons dichter bij klanten, partners en validatie?',
    ],
    reflectie:
      'Ik leerde dat sales niet alleen bellen is, maar ook zichtbaar worden, je verhaal testen, vertrouwen opbouwen en opvolgen. Uit mijn netwerk-assessment bleek het ook: elke keer dat ik Kaires uitlegde, werd het verhaal scherper.',
    quote: 'Elke keer dat ik Kaires uitlegde, werd het verhaal scherper.',
    bewijs: [{ label: 'Onze keynote op het podium (Max & Stijn)', image: '/bewijs/keynote-podium.jpeg' }],
    vervolgstap:
      'Scherper leren closen: prijs, commitment en vervolgstappen duidelijker durven benoemen.',
  },

  // --------------------------------------------------------------------------
  {
    id: 'netwerk',
    fileName: 'Netwerk.app',
    title: 'Van netwerk naar ondernemingsactie',
    teaser: 'Actief naar buiten treden',
    icon: 'netwerk',
    criteria: ['naarbuiten'],
    intro:
      'Ik ben vaker en bewuster naar buiten getreden met Kaires — niet alleen binnen school, maar ook met coaches, stakeholders, events, potentiële klanten en partners.',
    detail: [
      'Ik merkte dat persoonlijk en warm contact bij mij beter werkt dan koude acquisitie.',
      'Hoe vaker ik op events mijn bedrijf uitlegde, hoe sterker het verhaal werd — dat bevestigde ook mijn netwerk-assessment.',
    ],
    reflectie:
      'Ik leerde dat een netwerk pas waardevol wordt als je er actie aan koppelt: opvolgen, vragen stellen, een vervolgafspraak maken. Verbinden is mijn kracht; daar bewust iets mee dóén is mijn groei.',
    bewijs: [{ label: 'Netwerkverslag Kaires', href: '/bewijs/netwerkverslag-kaires.pdf' }],
    vervolgstap: 'Contacten consequenter omzetten in concrete vervolgstappen.',
  },

  // --------------------------------------------------------------------------
  {
    id: 'spiegel',
    fileName: 'Spiegel.sys',
    title: 'Waarnemer & vredestichter',
    teaser: 'Mijn persoonlijkheid (Enneagram)',
    icon: 'spiegel',
    criteria: ['competenties'],
    intro:
      'Uit mijn Enneagramtest kwam naar voren dat ik sterk ben als waarnemer en vredestichter.',
    detail: [
      'Kracht: ik kan goed luisteren, verbanden zien, rust bewaren en mensen verbinden.',
      'Valkuil: ik kan soms te snel meegaan, te voorzichtig zijn of conflict vermijden.',
      'Tijdens de minor merkte ik dat deze kant me hielp in gesprekken en samenwerking, maar me soms in de weg zat bij scherpe keuzes, prijs of het stevig innemen van mijn eigen standpunt.',
    ],
    reflectie:
      'Mijn groei zit erin dat ik vaker richting ben gaan geven: als CTO, in technische keuzes en in het verhaal van Kaires. Mijn doel is niet om minder verbindend te worden, maar om verbinding te combineren met stevigheid.',
    quote: 'Verbinden is mijn kracht. Richting geven is mijn groei.',
    bewijs: [{ label: 'Ontwikkelcanvas — 11 maart', href: '/bewijs/ontwikkelcanvas.pdf' }],
    vervolgstap: 'Minder snel meebewegen; sneller en duidelijker richting geven.',
  },

  // --------------------------------------------------------------------------
  {
    id: 'risico',
    fileName: 'Risico.exe',
    title: 'Niet wachten tot het perfect is',
    teaser: 'Risicobereidheid',
    icon: 'risico',
    criteria: ['risico'],
    intro:
      'Ondernemen betekende dat we met Kaires naar buiten moesten terwijl nog niet alles perfect was.',
    detail: [
      'Ik moest technische keuzes maken zonder dat ik vooraf alles wist of zeker wist dat het zou werken.',
      'De keynote, klantgesprekken en de technische bouw vroegen allemaal om handelen ondanks onzekerheid.',
    ],
    reflectie:
      'Ik ben minder gaan wachten op zekerheid en meer gaan leren door actie. Fouten werden onderdeel van het proces in plaats van iets om te vermijden.',
    quote: 'Ik leerde door te doen, niet door te wachten tot ik zeker wist dat het goed zat.',
    bewijs: [],
    vervolgstap: 'Bewuster afgewogen risico’s nemen en sneller valideren.',
  },

  // --------------------------------------------------------------------------
  {
    id: 'boekhouding',
    fileName: 'Boekhouding.xls',
    title: 'Grip op de zakelijke basis',
    teaser: 'Financiën & administratie',
    icon: 'boekhouding',
    criteria: ['professioneel', 'bijdrage'],
    intro:
      'Naast techniek, verhaal en sales ben ik ook gegroeid in de zakelijke basis van ondernemen.',
    detail: [
      'In mijn ontwikkelcanvas van 11 maart stond al dat ik me wilde ontwikkelen in financiële en administratieve onderdelen.',
      'Tijdens de minor heb ik dat concreter gemaakt: facturen versturen en kosten bijhouden in Sheets.',
      'Dat klinkt minder spectaculair dan een keynote of een applicatie, maar voor ondernemerschap is het essentieel.',
    ],
    reflectie:
      'Ik ben geen boekhouder geworden, maar ik ben wél meer eigenaar geworden van de financiële basis van onze onderneming. Ik leerde dat een bedrijf niet alleen draait om een goed idee of een werkend product, maar ook om overzicht, verantwoordelijkheid en discipline.',
    quote:
      'Ondernemen werd concreter toen ik niet alleen aan Kaires bouwde, maar ook ging begrijpen wat er financieel nodig is om het draaiende te houden.',
    // De factuur (2026-0001.pdf) staat klaar, maar is privacygevoelig (klantgegevens)
    // en is daarom nog NIET gepubliceerd. Zeg het als je 'm toch wilt toevoegen.
    bewijs: [{ label: 'Kostenoverzicht in Sheets', image: '/bewijs/kostentabel-kaires.png' }],
    vervolgstap:
      'Beter worden in begrotingen, marges en prijsstrategie, zodat ik zakelijke keuzes onderbouw met cijfers en niet alleen op gevoel.',
  },

  // --------------------------------------------------------------------------
  {
    id: 'update',
    fileName: 'Update v2.0',
    title: 'Stijn OS v2.0 — komende updates',
    teaser: 'Mijn nieuwe leerdoelen',
    icon: 'update',
    criteria: ['professioneel'],
    intro:
      'Een besturingssysteem is nooit af. Dit zijn de updates die ik voor mezelf heb gepland. Ik ben technisch en als ondernemer sterk gegroeid, maar ik ben er nog niet — en dat is precies de bedoeling.',
    detail: [
      'Scherper leren closen in commerciële gesprekken.',
      'Prijs, commitment en vervolgstappen duidelijker durven benoemen.',
      'Technische keuzes nog beter vertalen naar businesswaarde.',
      'Minder snel meebewegen, sneller richting geven.',
      'Software engineering verder verdiepen — altijd gekoppeld aan klantwaarde en ondernemerschap.',
    ],
    reflectie:
      'Deze leerdoelen zijn niet bedacht voor een formulier; ze komen rechtstreeks voort uit wat ik deze minor tegenkwam toen ik moest kiezen, presenteren, verkopen en leveren.',
    quote:
      'Mijn volgende stap is niet alleen beter bouwen, maar ook scherper richting geven aan wat er met dat bouwen mogelijk wordt.',
    bewijs: [],
    vervolgstap:
      'Verbinding (mijn kracht) combineren met stevigheid en commerciële scherpte.',
  },
]
