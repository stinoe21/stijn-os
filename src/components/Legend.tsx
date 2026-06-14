// Compacte, vaste legenda op het bureaublad: helpt de beoordelaar snel begrijpen
// dat elk icoon een onderdeel van de ontwikkeling opent. Puur informatief.

const ITEMS: { naam: string; uitleg: string }[] = [
  { naam: 'CTO.exe', uitleg: 'technische groei als CTO' },
  { naam: 'Vertaler.app', uitleg: 'techniek begrijpbaar maken' },
  { naam: 'Keynote.exe', uitleg: 'sales & storytelling' },
  { naam: 'Netwerk.app', uitleg: 'actief naar buiten treden' },
  { naam: 'Spiegel.sys', uitleg: 'competenties, kracht en valkuilen' },
  { naam: 'Risico.exe', uitleg: 'handelen ondanks onzekerheid' },
  { naam: 'Boekhouding.xls', uitleg: 'zakelijke basis' },
  { naam: 'Update v2.0', uitleg: 'nieuwe leerdoelen' },
]

export default function Legend() {
  return (
    <div className="w-[230px] border-2 border-ink bg-paper shadow-window transition-shadow hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.35)]">
      <div className="border-b-2 border-ink bg-gradient-to-b from-retroblue to-[#152744] px-2.5 py-1.5">
        <span className="font-pixel text-[11px] tracking-tight text-paper">Legenda</span>
      </div>
      <div className="px-3 py-2.5">
        <p className="mb-2 font-sans text-[12.5px] leading-snug text-ink/75">
          Elk icoon opent een onderdeel van mijn ontwikkeling.
        </p>
        <ul className="space-y-1">
          {ITEMS.map((it) => (
            <li key={it.naam} className="leading-snug">
              <span className="font-pixel text-[9px] text-accent-dark">{it.naam}</span>{' '}
              <span className="font-sans text-[12px] text-ink/75">— {it.uitleg}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2.5 border-t border-paper-line pt-2 font-sans text-[11px] italic leading-snug text-ink/60">
          De criteria-meter rechtsboven laat zien welke beoordelingscriteria terugkomen.
        </p>
      </div>
    </div>
  )
}
