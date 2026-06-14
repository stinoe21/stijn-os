import type { ReactNode } from 'react'
import type { AppItem, BewijsItem } from '../types'
import CriteriaBadge from './CriteriaBadge'

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-1 mt-5 flex items-center gap-2">
      <span className="font-pixel text-[9px] uppercase tracking-wide text-accent-dark">{children}</span>
      <span className="h-px flex-1 bg-paper-line" />
    </div>
  )
}

function Polaroid({ item, rotate }: { item: BewijsItem; rotate: string }) {
  return (
    <figure
      className={`w-[140px] shrink-0 bg-white p-1.5 pb-5 shadow-window ${rotate}`}
      title="Bewijs — vervang dit door een echte screenshot/foto (zie src/data/apps.ts)"
    >
      <div className="flex h-[96px] items-center justify-center overflow-hidden border border-ink/10 bg-paper-dark">
        {item.image ? (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img src={item.image} alt={item.label} className="h-full w-full object-cover" />
        ) : (
          <span className="px-2 text-center font-pixel text-[7px] uppercase leading-relaxed text-ink/35">
            foto / screenshot
          </span>
        )}
      </div>
      <figcaption className="mt-1.5 px-0.5 text-center font-sans text-[10px] leading-tight text-ink/70">
        {item.label}
      </figcaption>
    </figure>
  )
}

const POLAROID_ROTATIONS = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']

export default function AppContent({ app }: { app: AppItem }) {
  const isReadme = app.id === 'readme'
  const isChangelog = app.id === 'update'

  return (
    <div className="font-sans text-[13.5px] leading-relaxed text-ink">
      {/* Teaser + criteria */}
      <p className="font-pixel text-[9px] uppercase tracking-wide text-ink/50">{app.teaser}</p>
      {app.criteria.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {app.criteria.map((c) => (
            <CriteriaBadge key={c} id={c} />
          ))}
        </div>
      )}

      {app.intro && <p className="mt-4 text-[14px]">{app.intro}</p>}

      {/* Detail */}
      {app.detail.length > 0 && (
        <>
          {isChangelog && <SectionLabel>Geplande updates</SectionLabel>}
          {isChangelog ? (
            <ul className="mt-2 space-y-1.5">
              {app.detail.map((d, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 font-pixel text-[10px] text-accent-dark">▸</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-3 space-y-2.5">
              {app.detail.map((d, i) => (
                <p key={i}>{d}</p>
              ))}
            </div>
          )}
        </>
      )}

      {/* Vertaaltabel (techniek -> klantwaarde) */}
      {app.vertaaltabel && app.vertaaltabel.length > 0 && (
        <>
          <SectionLabel>Techniek → klantwaarde</SectionLabel>
          <div className="mt-1 divide-y divide-paper-line border border-paper-line bg-paper-dark/40">
            {app.vertaaltabel.map((row, i) => (
              <div key={i} className="grid grid-cols-[auto,1fr] items-start gap-2 px-2 py-1.5 sm:grid-cols-[160px,1fr]">
                <span className="font-pixel text-[10px] text-retroblue">{row.van}</span>
                <span className="text-[13px] text-ink/80">→ {row.naar}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Reflectie */}
      <SectionLabel>Reflectie</SectionLabel>
      <p className="mt-1 border-l-4 border-accent bg-accent/10 px-3 py-2 text-[13.5px] italic">
        {app.reflectie}
      </p>

      {/* Quote */}
      {app.quote && (
        <blockquote className="mt-5 text-center font-crt text-2xl leading-tight text-retroblue">
          “{app.quote}”
        </blockquote>
      )}

      {/* Bewijs */}
      {app.bewijs.length > 0 && (
        <>
          <SectionLabel>Bewijs</SectionLabel>
          <div className="no-scrollbar -mx-1 mt-2 flex gap-3 overflow-x-auto px-1 pb-2">
            {app.bewijs.map((b, i) => (
              <Polaroid key={i} item={b} rotate={POLAROID_ROTATIONS[i % POLAROID_ROTATIONS.length]} />
            ))}
          </div>
        </>
      )}

      {/* Vervolgstap / kernontwikkeling */}
      <SectionLabel>{isReadme ? 'Mijn kernontwikkeling in één zin' : 'Volgende stap'}</SectionLabel>
      <p className="mt-1 flex gap-2">
        <span aria-hidden="true">{isReadme ? '🧠' : '→'}</span>
        <span className={isReadme ? 'font-medium' : ''}>{app.vervolgstap}</span>
      </p>
    </div>
  )
}
