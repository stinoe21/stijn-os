import type { AppItem } from '../types'

// ============================================================================
//  STIJN OS — INHOUD
//  Dit is de ENIGE plek waar je teksten hoeft aan te passen.
//  Elke `AppItem` is één programma/venster op het bureaublad.
//
//  Bewijs/screenshots toevoegen?
//   1. Zet je bestand in  /public/bewijs/   (bv. keynote.jpg of verslag.pdf)
//   2. Foto  -> image: '/bewijs/foto.png'   (polaroid, klikbaar om te vergroten)
//      Document/link -> href: '/bewijs/verslag.pdf'  of  href: 'https://...'
//   Het base-path wordt automatisch toegevoegd.
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
      'Welkom in Stijn OS: een klein besturingssysteem dat ik zelf heb gebouwd als vorm én bewijs van mijn persoonlijke ontwikkeling tijdens de minor Ondernemerschap met Kaires.',
    detail: [
      'Elk programma op dit bureaublad opent een onderdeel van mijn groei: techniek, storytelling, sales, netwerk, persoonlijkheid, risico, zakelijke verantwoordelijkheid en mijn volgende leerdoelen.',
      'Rechtsboven zie je de vijf beoordelingscriteria. Elk venster laat zien welk criterium wordt afgedekt. Zo blijft de vorm creatief, maar is de inhoud gekoppeld aan de beoordeling.',
      'Het feit dat deze site bestaat, is zelf ook bewijs van ontwikkeling. Een jaar geleden had ik dit technisch niet kunnen bouwen. Maar belangrijker: ik heb geleerd dat techniek pas waarde krijgt als je het begrijpbaar, verkoopbaar en toepasbaar maakt binnen een onderneming.',
    ],
    reflectie: [
      'Ik koos bewust voor een besturingssysteem als vorm, omdat mijn ontwikkeling niet uit één rechte lijn bestaat. Ik heb op verschillende lagen geleerd: technisch bouwen, mijn verhaal uitleggen, naar buiten treden, omgaan met mijn valkuilen en meer verantwoordelijkheid nemen voor de zakelijke kant.',
    ],
    bewijs: [],
    vervolgstap: KERNONTWIKKELING,
  },

  // --------------------------------------------------------------------------
  {
    id: 'cto',
    fileName: 'CTO.exe',
    title: 'CTO worden door te doen',
    teaser: 'Technische groei & bijdrage aan de onderneming',
    icon: 'cto',
    criteria: ['professioneel', 'bijdrage'],
    intro:
      'Op 11 maart schreef ik dat ik mij wilde ontwikkelen in de technische kant van de onderneming. Dat was toen nog vrij abstract. Tijdens de minor heb ik dat concreet gemaakt door echt te bouwen.',
    detail: [
      'Binnen mijn opleiding krijg ik nauwelijks software engineering. Daarom moest ik dit grotendeels zelf uitzoeken. Ik heb websites gebouwd, applicaties opgezet, automatiseringen gemaakt en technische systemen aan elkaar gekoppeld. Vrijwel alles wat ik technisch voor Kaires deed, had ik hiervoor nog niet op dit niveau gedaan.',
    ],
    reflectie: [
      'Mijn technische groei was groot, maar het belangrijkste inzicht is dat techniek binnen een onderneming nooit los staat. Ik bouwde niet om te laten zien dat ik kon bouwen. Ik bouwde om Kaires professioneler, testbaarder en verkoopbaarder te maken.',
      'Tegelijkertijd zie ik ook mijn valkuil. Bouwen voelt voor mij soms veiliger dan verkopen. In techniek zie ik snel vooruitgang, terwijl commerciële gesprekken, prijs en commitment vragen spannender zijn. Juist daarom moest ik leren om techniek niet als schuilplek te gebruiken, maar als middel om de onderneming vooruit te helpen.',
    ],
    quote: 'Ik bouwde niet om te bouwen. Ik bouwde zodat Kaires kon bestaan als onderneming.',
    // De live Kaires-website is hét tastbare bewijs van wat ik technisch bouwde.
    bewijs: [{ label: 'Kaires-website (live, kaires.nl)', href: 'https://kaires.nl/' }],
    vervolgstap:
      'Software engineering verder verdiepen, maar elke technische keuze blijven koppelen aan klantwaarde, haalbaarheid en businesswaarde.',
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
      'Een belangrijke ontwikkeling is dat ik technische aspecten begrijpbaar heb leren maken voor mensen die niet technisch zijn. Als CTO moet je niet alleen zelf snappen hoe iets werkt, maar ook kunnen uitleggen waarom het belangrijk is.',
    detail: [],
    vertaaltabel: [
      { van: 'Weighted matrix', naar: 'een systeem dat context vertaalt naar muziekkeuzes' },
      { van: 'Raspberry Pi / speler', naar: 'een klein apparaat dat muziek lokaal en stabiel afspeelt' },
      { van: 'Automatiseringen', naar: 'minder handwerk en professioneler opvolgen' },
      {
        van: 'Backend / database',
        naar: 'de plek waar muziek, instellingen en klantinformatie logisch samenkomen',
      },
    ],
    reflectie: [
      'Ik merkte dat technische taal snel afstand kan creëren. Als ik te veel praat vanuit tools, systemen of functies, begrijpen mensen misschien wat ik heb gebouwd, maar niet waarom het waardevol is.',
      'Mijn groei zit erin dat ik techniek beter ben gaan vertalen naar klantwaarde, vertrouwen en haalbaarheid. Daardoor werd techniek niet alleen iets van mij, maar iets waar Max, klanten, coaches en partners iets mee konden.',
    ],
    bewijs: [],
    vervolgstap:
      'Nog scherper leren uitleggen wat technische keuzes opleveren in gewone taal: minder technisch bewijs, meer ondernemerswaarde.',
  },

  // --------------------------------------------------------------------------
  {
    id: 'keynote',
    fileName: 'Keynote.exe',
    title: 'De keynote als grote salescall',
    teaser: 'Presenteren, pitchen & sales',
    icon: 'keynote',
    criteria: ['professioneel', 'naarbuiten'],
    intro:
      'Mijn oorspronkelijke leerdoel was om steviger te worden in salesgesprekken voor Kaires. Eerst dacht ik daarbij vooral aan salescalls voeren.',
    detail: [
      'Tijdens de minor verschoof onze aanpak. In overleg met Max en Oskar kozen we niet voor veel losse cold calls, maar voor warme contacten, persoonlijk contact en vooral de keynote. Dat was geen afzwakking van mijn leerdoel, maar juist een sterkere ondernemersactie.',
      'De keynote werd eigenlijk één groot salesmoment. Ik moest Kaires niet technisch, maar scherp, menselijk en zakelijk uitleggen. Niet één klant overtuigen, maar een hele zaal stakeholders meenemen in het probleem, de oplossing en de waarde van Kaires.',
      'Presenteren was voor mij niet alleen een communicatieskill, maar ook een persoonlijke drempel. Juist daarom werd de keynote een belangrijk ontwikkelmoment: ik moest niet alleen iets vertellen, maar echt gaan staan voor Kaires.',
      'En het bleef niet bij die ene keynote. Ik heb binnen én buiten de minor ontzettend veel gepitcht: voor Google (terug te vinden in ons netwerkverslag), bij Boost your Business — de pitchwedstrijd om € 1.000 binnen de minor, waar ik er alleen voor stond en mezelf bewust in het diepe gooide — en bij veel potentiële klanten.',
      'Max gaf mij mee om niet alleen resultaatgedreven te kijken, maar actiegedreven. Dus niet alleen: hoeveel klanten hebben we direct binnengehaald? Maar: welke acties brengen ons dichter bij klanten, partners, validatie en groei?',
    ],
    reflectie: [
      'Ik leerde dat sales niet alleen bellen is. Sales is ook zichtbaar worden, vertrouwen opbouwen, je verhaal testen en daarna opvolgen.',
      'Door het zó vaak te doen — van de keynote tot losse pitches — zakte de drempel en werd presenteren steeds meer een kracht in plaats van een spanningsbron.',
      'Tegelijkertijd zit hier mijn volgende uitdaging. Ik kan interesse opwekken en een verhaal neerzetten, maar ik wil scherper worden in het moment daarna: doorvragen, prijs benoemen, commitment vragen en concrete vervolgstappen vastleggen.',
    ],
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
      'Tijdens de minor ben ik vaker en bewuster naar buiten getreden met Kaires. Niet alleen binnen school, maar ook richting coaches, stakeholders, events, potentiële klanten en partners.',
    detail: [
      'Ik merkte dat persoonlijk en warm contact beter bij mij past dan koude acquisitie. Op events en in gesprekken kon ik beter aansluiten, luisteren en uitleggen. Hoe vaker ik Kaires uitlegde, hoe scherper ons verhaal werd.',
    ],
    reflectie: [
      'Mijn kracht is contact maken en verbinding leggen. Maar een netwerk heeft pas ondernemerswaarde als je er ook actie aan koppelt. Alleen een goed gesprek is niet genoeg. De vervolgstap bepaalt of een contact waarde krijgt voor de onderneming.',
      'Daar ligt voor mij nog groei. Ik wil consequenter worden in opvolging: na elk gesprek sneller bepalen wat de volgende actie is, wie verantwoordelijk is en wanneer er contact wordt gelegd.',
    ],
    bewijs: [{ label: 'Netwerkverslag Kaires', href: '/bewijs/netwerkverslag-kaires.pdf' }],
    vervolgstap: 'Contacten consequenter omzetten in concrete vervolgstappen.',
  },

  // --------------------------------------------------------------------------
  {
    id: 'spiegel',
    fileName: 'Spiegel.sys',
    title: 'Waarnemer & vredestichter',
    teaser: 'Mijn persoonlijkheid en competenties',
    icon: 'spiegel',
    criteria: ['competenties'],
    intro:
      'Uit mijn Enneagramtest kwam naar voren dat ik sterk ben als waarnemer en vredestichter.',
    detail: [
      'Mijn kracht is dat ik goed kan luisteren, verbanden zie, rust bewaar en mensen verbind. Dat heeft mij geholpen in de samenwerking met Max, in gesprekken met stakeholders en in het verwerken van feedback.',
      'Mijn valkuil is dat ik soms te snel meebeweeg. Ik kan voorzichtig zijn, conflict vermijden of te lang wachten voordat ik mijn eigen standpunt duidelijk maak.',
    ],
    reflectie: [
      'Tijdens de minor merkte ik dat mijn verbindende kant waardevol is, maar niet genoeg. Ondernemerschap vraagt ook dat je richting geeft. Als CTO moest ik technische keuzes maken. In de keynote moest ik duidelijk staan voor het verhaal van Kaires. En in commerciële situaties moest ik leren dat aardig en meedenkend zijn niet hetzelfde is als scherp ondernemerschap.',
      'Mijn doel is niet om minder verbindend te worden. Mijn doel is om verbinding te combineren met stevigheid.',
    ],
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
      'Mijn risico zat tijdens deze minor niet vooral in grote financiële investeringen, maar in zichtbaar worden met iets dat nog niet perfect was.',
    detail: [
      'Met Kaires moesten we naar buiten terwijl het concept, de techniek en het verhaal nog in ontwikkeling waren. Ik moest technische keuzes maken zonder vooraf precies te weten of alles zou werken. Ook de keynote vroeg om lef: we stonden daar met een onderneming die nog volop in opbouw was.',
    ],
    reflectie: [
      'Ik ben minder gaan wachten op zekerheid en meer gaan leren door actie. Dat is voor mij een belangrijke ondernemersles. Fouten en onzekerheid horen niet pas aan het einde geëvalueerd te worden; ze zijn onderdeel van het proces.',
      'Mijn valkuil is dat ik soms eerst wil begrijpen of bouwen tot iets goed genoeg voelt. Maar ondernemerschap vraagt soms dat je eerder test, eerder feedback vraagt en eerder naar buiten gaat.',
    ],
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
      'Naast techniek, storytelling en sales ben ik ook gegroeid in de zakelijke basis van ondernemen.',
    detail: [
      'In mijn ontwikkelcanvas van 11 maart stond al dat ik mij wilde ontwikkelen in financiële en administratieve onderdelen. Tijdens de minor heb ik dat concreter gemaakt door facturen te versturen en kosten bij te houden in Sheets.',
      'Dat klinkt minder spectaculair dan een keynote of applicatie, maar voor ondernemerschap is het essentieel.',
    ],
    reflectie: [
      'Ik ben geen boekhouder geworden, maar ik ben wel meer eigenaar geworden van de financiële basis van onze onderneming. Ik leerde dat een bedrijf niet alleen draait om een goed idee, een werkend product of een sterk verhaal, maar ook om overzicht, verantwoordelijkheid en discipline.',
      'Hier zit ook nog een duidelijk leerpunt. Ik heb meer grip gekregen op administratie, maar ik wil financiën minder zien als iets dat achteraf moet worden bijgehouden en meer als stuurinformatie voor keuzes.',
    ],
    quote:
      'Ondernemen werd concreter toen ik niet alleen aan Kaires bouwde, maar ook ging begrijpen wat er financieel nodig is om het draaiende te houden.',
    bewijs: [
      { label: 'Kostenoverzicht in Sheets', image: '/bewijs/kostentabel-kaires.png' },
      { label: 'Factuur 2026-0001 (gevoelige gegevens afgedekt)', image: '/bewijs/factuur-afgedekt.png' },
    ],
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
      'Een besturingssysteem is nooit af. Deze updates zijn mijn volgende leerdoelen. Ik ben technisch en ondernemend sterk gegroeid, maar ik ben er nog niet. Mijn volgende ontwikkeling zit vooral in commerciële scherpte, financiële onderbouwing en steviger richting geven.',
    detail: [
      'Scherper leren closen in commerciële gesprekken.',
      'Prijs, commitment en vervolgstappen duidelijker durven benoemen.',
      'Technische keuzes nog beter vertalen naar businesswaarde.',
      'Minder snel meebewegen en sneller richting geven.',
      'Software engineering verder verdiepen, maar altijd gekoppeld aan klantwaarde en ondernemerschap.',
      'Financiële keuzes sterker onderbouwen met cijfers, marges en planning.',
    ],
    reflectie: [
      'Deze leerdoelen zijn niet bedacht voor een formulier. Ze komen voort uit wat ik deze minor tegenkwam toen ik moest bouwen, presenteren, verkopen, uitleggen en verantwoordelijkheid nemen.',
    ],
    quote:
      'Mijn volgende stap is niet alleen beter bouwen, maar ook scherper richting geven aan wat er met dat bouwen mogelijk wordt.',
    bewijs: [],
    vervolgstap: 'Verbinding, mijn kracht, combineren met stevigheid en commerciële scherpte.',
  },
]
