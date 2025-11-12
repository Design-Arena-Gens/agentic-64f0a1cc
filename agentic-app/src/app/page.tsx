import { services } from "@/data/services";

const timeline = [
  {
    label: "Step 1",
    title: "Decide how quickly you need to clear SGN",
    detail:
      "Arrival fast-track is the biggest time-saver when the morning and late-night banks of international flights hit. Departures matter most for premium cabins or tight connections.",
  },
  {
    label: "Step 2",
    title: "Match your budget to the operator type",
    detail:
      "Official airport-run CIP packages start around VND 1.2M (~USD 48). Private concierge networks tend to quote in USD 60–80 per traveller with optional lounge or porter add-ons.",
  },
  {
    label: "Step 3",
    title: "Book at least 24h in advance",
    detail:
      "Providers require passport, flight, and baggage details to pre-clear you with immigration. Last-minute WhatsApp bookings can work, but peak holiday slots sell out.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-600 via-slate-900 to-slate-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-emerald-400 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-500 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-28 lg:py-36">
          <p className="mb-6 inline-flex items-center rounded-full border border-emerald-400/60 bg-emerald-500/10 px-4 py-1 text-sm font-medium tracking-wide text-emerald-100">
            Research briefing · Tan Son Nhat (SGN)
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Fast-track immigration services that actually work at Ho Chi Minh
            City
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200">
            We compared reputable concierge operators that meet you at the
            aircraft door, walk you past the lines, and hand you off landside at
            Tan Son Nhat International Airport. These shortlists focus on
            reliability, transparent pricing, and verifiable customer feedback
            gathered in November 2025.
          </p>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16 sm:py-20">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              TL;DR: pick the operator that matches how much hand-holding you
              need
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-200">
              The airport-run Song Viet CIP programme remains the best-value
              option if you simply want a guaranteed escort plus lounge access.
              Travellers who want English-first handlers before passing
              immigration—especially during the post-midnight arrival surge—still
              lean on the long-standing Vietnam Fast Track concierge networks.
              If you need an instant quote or want to bundle chauffeur service,
              marketplace platforms such as airssist now surface prices up-front
              and accept international cards without email back-and-forth.
            </p>
          </div>
          <aside className="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 p-6">
            <h3 className="text-lg font-semibold text-emerald-200">
              November 2025 snapshot
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-emerald-100">
              <li>🕖 Morning arrivals: immigration wait regularly exceeds 45 min</li>
              <li>💳 Most operators quote in USD; SASCO bills in VND</li>
              <li>📲 WhatsApp confirmations delivered within 2–6 hours</li>
              <li>🧾 Expect 10% VAT on official invoices from SASCO</li>
            </ul>
          </aside>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-white">
            The short list (ranked by transparency + reviews)
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.slug}
                className="flex h-full flex-col justify-between rounded-3xl border border-slate-700/70 bg-slate-900/60 p-8 shadow-[0_20px_60px_rgba(8,47,73,0.18)]"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white">
                      {service.name}
                    </h3>
                    <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-wide text-emerald-200">
                      {service.focus}
                    </span>
                  </div>
                  <p className="text-sm uppercase tracking-wide text-slate-400">
                    Operated by {service.operator}
                  </p>
                  <p className="text-base leading-relaxed text-slate-200">
                    {service.description}
                  </p>
                  <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-5 py-4">
                    <p className="text-sm font-semibold text-emerald-200">
                      Pricing snapshot
                    </p>
                    <p className="mt-2 text-sm text-slate-100">
                      {service.pricing.headline}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      {service.pricing.details}
                    </p>
                  </div>
                  {service.notes ? (
                    <p className="text-sm text-slate-400">{service.notes}</p>
                  ) : null}
                </div>
                <footer className="mt-6 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Sources
                  </p>
                  <ul className="space-y-2 text-sm text-emerald-200">
                    {service.sources.map((source) => (
                      <li key={source.url}>
                        <a
                          href={source.url}
                          className="hover:text-emerald-100 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            How to book without surprises
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {timeline.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-700/70 bg-slate-900/70 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  {item.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5 rounded-3xl border border-amber-400/40 bg-amber-500/10 p-8 text-amber-50">
          <h2 className="text-2xl font-semibold">Risk notes</h2>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li>
              Airlines and airport police periodically clamp down on informal
              agents. Stick to providers that show business registration numbers
              and issue VAT-compliant invoices.
            </li>
            <li>
              If you already hold an eVisa and carry-on luggage only, late-night
              waits averaged 20–25 minutes in November 2025; paying for fast
              track delivers marginal gains.
            </li>
            <li>
              Credit-card surcharges of 3–4% are common. SASCO accepts local
              cards and cash; international marketplaces accept Amex/Visa but
              settle in USD.
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-950/80">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Compiled 12 Nov 2025. Verify pricing directly with the provider
            before booking.
          </p>
          <p className="text-xs">
            Built for deployment on Vercel · Dataset stored locally in
            <code className="ml-1 rounded bg-slate-800 px-1 py-0.5 text-slate-300">
              src/data/services.ts
            </code>
          </p>
        </div>
      </footer>
    </div>
  );
}

