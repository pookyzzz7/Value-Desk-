"use client";

/**
 * Value Desk — site marketing une page (structure alignée sur le modèle Lovable)
 * Stack : Next.js (App Router) + Tailwind CSS + Framer Motion
 *
 * EMPLACEMENTS D'IMAGES (remplace les fichiers dans /public/images, garde les noms) :
 *   logo           → /public/images/logo.svg           (logo header, hero et footer)
 *   hero-bg        → /public/images/hero-bg.svg        (photo de court en fond de hero)
 *   icon-1..icon-6 → /public/images/icon-1.svg …       (icônes des 6 cartes services)
 *   footer-bg      → /public/images/footer-bg.svg      (fond du footer)
 *
 * LIENS À BRANCHER : remplace TELEGRAM_URL et CHECKOUT_URL ci-dessous.
 */

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const TELEGRAM_URL = "https://t.me/+HnnJ8bhLs90wZTdk"; // ← ton canal Telegram
const CHECKOUT_URL = "#https://sublaunch.com/smartbet"; // ← lien de paiement (Stripe, etc.)

/* ----------------------------------------------------------------
   Animation d'apparition au scroll — désactivée si reduced motion
   ---------------------------------------------------------------- */
function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
      <span aria-hidden="true" className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
      {children}
    </p>
  );
}

/* ----------------------------------------------------------------
   En-tête
   ---------------------------------------------------------------- */
function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-wrap items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-3 font-display text-xl tracking-tight text-chalk">
          {/* IMAGE SLOT: logo — remplacer /public/images/logo.svg */}
          <img src="/images/logo.svg" alt="" width={36} height={36} className="h-9 w-9 rounded-lg" />
          Value&nbsp;Desk
        </a>
        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-6 text-sm text-chalk/80">
            <li className="hidden md:block"><a href="#services" className="transition hover:text-chalk">Services</a></li>
            <li className="hidden md:block"><a href="#tarifs" className="transition hover:text-chalk">Tarifs</a></li>
            <li className="hidden md:block"><a href="#temoignages" className="transition hover:text-chalk">Témoignages</a></li>
            <li className="hidden md:block"><a href="#faq" className="transition hover:text-chalk">FAQ</a></li>
            <li>
              <a href="#tarifs" className="rounded-full bg-accent px-4 py-2 font-medium text-[#10241B] transition hover:brightness-105">
                S&rsquo;abonner
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

/* ----------------------------------------------------------------
   1. Hero — emplacement : hero-bg — + bandeau de stats
   ---------------------------------------------------------------- */
const stats = [
  { value: "+18,5%", label: "ROI moyen" },
  { value: "1 200+", label: "Pronostics suivis" },
  { value: "350+", label: "Membres actifs" },
  { value: "68%", label: "Taux de réussite" },
];

function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" className="relative isolate overflow-hidden bg-court text-chalk">
      {/* IMAGE SLOT: hero-bg — remplacer /public/images/hero-bg.svg (photo de court) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url('/images/hero-bg.svg')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />

      <div className="mx-auto max-w-wrap px-6 pb-16 pt-36 text-center md:pt-44">
        <motion.h1
          {...rise(0.05)}
          className="mx-auto max-w-3xl font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          La value, c&rsquo;est ici.
        </motion.h1>
        <motion.p {...rise(0.13)} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-chalk/80">
          Pronostics professionnels sur le tennis. Analyses data-driven pour
          détecter les <em>value bets</em> sur les marchés ATP et Challenger.
        </motion.p>
        <motion.div {...rise(0.21)} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={CHECKOUT_URL}
            className="rounded-full bg-accent px-7 py-3.5 font-medium text-[#10241B] transition hover:brightness-105"
          >
            Rejoindre Value Desk
          </a>
          <a href="#services" className="text-sm text-chalk/80 underline-offset-4 transition hover:text-chalk hover:underline">
            Découvrir le service
          </a>
        </motion.div>
        <motion.p {...rise(0.27)} className="mt-6 font-mono text-xs text-chalk/60">
          Sans engagement · Accès immédiat · Annulation à tout moment
        </motion.p>

        {/* Bandeau de stats */}
        <motion.dl
          {...rise(0.35)}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-chalk/15 bg-chalk/10 backdrop-blur-md sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-black/30 px-4 py-6">
              <dd className="font-mono text-2xl text-accent sm:text-3xl">{s.value}</dd>
              <dt className="mt-1 text-xs text-chalk/70">{s.label}</dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   2. Services — 6 cartes — emplacements : icon-1 … icon-6
   ---------------------------------------------------------------- */
const services = [
  {
    icon: "icon-1",
    title: "Analyses ATP & Challenger",
    body: "Pronostics détaillés sur tous les tournois majeurs, avec une couverture complète du circuit principal et secondaire.",
  },
  {
    icon: "icon-2",
    title: "Value bets identifiés",
    body: "Notre modèle statistique détecte les cotes sous-évaluées par le marché. On ne parie que quand il y a de la valeur réelle.",
  },
  {
    icon: "icon-4",
    title: "Gestion de bankroll",
    body: "Suivi rigoureux des mises et recommandations de staking adaptées à votre profil de risque.",
  },
  {
    icon: "icon-3",
    title: "Updates en temps réel",
    body: "Alertes avant les matchs et ajustements en live selon les évolutions du marché et les dernières infos.",
  },
  {
    icon: "icon-5",
    title: "Couverture complète",
    body: "Du Grand Chelem aux Challenger, en passant par les Masters 1000 et les ATP 250 — aucun tournoi n'est négligé.",
  },
  {
    icon: "icon-6",
    title: "Canal Telegram privé",
    body: "Accès exclusif à notre canal Telegram où tous les pronostics sont partagés instantanément avec la communauté.",
  },
];

function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-6">
        <Reveal className="text-center">
          <Eyebrow>Services</Eyebrow>
          <h2 id="services-title" className="mx-auto mt-4 max-w-xl font-display text-4xl tracking-tight sm:text-5xl">
            Ce que vous recevez chaque jour
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Un service complet de pronostics tennis, construit sur l&rsquo;analyse
            statistique et une gestion rigoureuse du risque.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <article className="h-full rounded-2xl border border-line/10 bg-surface p-7 transition hover:border-line/25">
                {/* IMAGE SLOT: {s.icon} — remplacer /public/images/{s.icon}.svg */}
                <img src={`/images/${s.icon}.svg`} alt="" width={44} height={44} className="h-11 w-11" />
                <h3 className="mt-6 font-display text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   3. Tarifs — 3 formules
   ---------------------------------------------------------------- */
const plans = [
  {
    name: "Mensuel",
    tagline: "Parfait pour découvrir le service sans engagement.",
    price: "19,99\u00A0€",
    cadence: "/mois",
    highlight: false,
    perks: ["Accès au canal Telegram", "Pronostics quotidiens", "Analyses détaillées", "Support par email"],
    cta: "Choisir Mensuel",
  },
  {
    name: "Trimestriel",
    tagline: "Notre plan le plus populaire. Économisez 8%.",
    price: "54,99\u00A0€",
    cadence: "/3 mois",
    highlight: true,
    perks: [
      "Accès au canal Telegram",
      "Pronostics quotidiens",
      "Analyses détaillées",
      "Support prioritaire",
      "Rapports mensuels de performance",
    ],
    cta: "Choisir Trimestriel",
  },
  {
    name: "Annuel",
    tagline: "Le meilleur rapport qualité-prix. Économisez 17%.",
    price: "199,99\u00A0€",
    cadence: "/an",
    highlight: false,
    perks: [
      "Accès au canal Telegram",
      "Pronostics quotidiens",
      "Analyses détaillées",
      "Support VIP",
      "Rapports mensuels de performance",
      "Stratégies de bankroll avancées",
    ],
    cta: "Choisir Annuel",
  },
];

function Pricing() {
  return (
    <section id="tarifs" aria-labelledby="pricing-title" className="bg-court py-24 text-chalk md:py-32">
      <div className="mx-auto max-w-wrap px-6">
        <Reveal className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-chalk/60">
            <span aria-hidden="true" className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
            Tarifs
          </p>
          <h2 id="pricing-title" className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
            Choisissez votre accès
          </h2>
          <p className="mx-auto mt-4 max-w-md text-chalk/70">
            Un abonnement, un canal Telegram. Accédez à tous les pronostics dès
            votre inscription.
          </p>
        </Reveal>
        <div className="mx-auto mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <article
                className={`flex h-full flex-col rounded-2xl border p-8 ${
                  plan.highlight
                    ? "border-accent/70 bg-black/30 backdrop-blur-md"
                    : "border-chalk/15 bg-black/20"
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl">{plan.name}</h3>
                  {plan.highlight && (
                    <span className="whitespace-nowrap rounded-full border border-accent/60 px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent">
                      Le plus populaire
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-chalk/70">{plan.tagline}</p>
                <p className="mt-6 font-mono">
                  <span className="text-4xl">{plan.price}</span>
                  <span className="text-chalk/60">{plan.cadence}</span>
                </p>
                <ul className="mt-7 space-y-3 text-sm text-chalk/80">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex gap-3">
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href={CHECKOUT_URL}
                  className={`mt-auto pt-9 text-center font-medium ${plan.highlight ? "" : ""}`}
                >
                  <span
                    className={`block rounded-full px-6 py-3 transition ${
                      plan.highlight
                        ? "bg-accent text-[#10241B] hover:brightness-105"
                        : "border border-chalk/25 hover:border-chalk/60"
                    }`}
                  >
                    {plan.cta}
                  </span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 text-center font-mono text-xs text-chalk/60">
            Paiement sécurisé. Annulation à tout moment. Aucun remboursement après
            l&rsquo;accès au canal.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   4. Témoignages — 3 cartes
   ---------------------------------------------------------------- */
const testimonials = [
  {
    quote:
      "Je suis sceptique de nature, mais les résultats parlent d'eux-mêmes. +22% de ROI sur 6 mois. La gestion de bankroll est impeccable et les analyses sont vraiment poussées.",
    name: "Thomas L.",
    since: "Membre depuis 8 mois",
  },
  {
    quote:
      "Le meilleur service de pronostics tennis que j'ai testé. Ce qui m'a convaincu, c'est la transparence : chaque pari est expliqué avec les données derrière. Pas de bluff.",
    name: "Karim B.",
    since: "Membre depuis 1 an",
  },
  {
    quote:
      "Le canal Telegram est super réactif. Les ajustements en live m'ont déjà sauvé plusieurs mises. Pour le prix, c'est un no-brainer si vous pariez sérieusement sur le tennis.",
    name: "Alexandre D.",
    since: "Membre depuis 3 mois",
  },
];

function Testimonials() {
  return (
    <section id="temoignages" aria-labelledby="testimonials-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-6">
        <Reveal className="text-center">
          <Eyebrow>Témoignages</Eyebrow>
          <h2 id="testimonials-title" className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
            Ce que disent nos membres
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Rejoignez une communauté de parieurs sérieux qui partagent la même
            approche&nbsp;: la valeur avant tout.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-line/10 bg-surface p-7">
                <blockquote className="flex-1 text-sm leading-relaxed text-muted">
                  «&nbsp;{t.quote}&nbsp;»
                </blockquote>
                <figcaption className="mt-6 border-t border-line/10 pt-4">
                  <p className="font-medium">{t.name}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted">{t.since}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   5. FAQ — accordéon accessible (<details>)
   ⚠️ Réponses rédigées par défaut : à relire et ajuster.
   ---------------------------------------------------------------- */
const faq = [
  {
    q: "Comment fonctionne l'abonnement ?",
    a: "Vous choisissez une formule, le paiement se fait en ligne de façon sécurisée, et vous recevez immédiatement votre lien d'invitation vers le canal Telegram privé. Tous les pronostics et analyses y sont publiés.",
  },
  {
    q: "Quel est le nombre moyen de pronostics par semaine ?",
    a: "En général entre 5 et 15, selon le calendrier des tournois. Nous ne publions un pronostic que lorsqu'une value réelle est identifiée — jamais pour remplir le canal.",
  },
  {
    q: "Puis-je annuler mon abonnement ?",
    a: "Oui, à tout moment et sans justification. Vous conservez l'accès au canal jusqu'à la fin de la période déjà payée.",
  },
  {
    q: "Quels tournois couvrez-vous ?",
    a: "L'ensemble du circuit masculin : Grand Chelem, Masters 1000, ATP 500, ATP 250 et le circuit Challenger.",
  },
  {
    q: "Faut-il avoir des connaissances en paris sportifs ?",
    a: "Non. Chaque pronostic est accompagné de la cote, de la mise conseillée et de l'analyse qui le justifie. Les débutants peuvent suivre tel quel, les parieurs expérimentés adapter les mises à leur bankroll.",
  },
];

function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="pb-24 md:pb-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="faq-title" className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
            Questions fréquentes
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Tout ce que vous devez savoir avant de rejoindre Value Desk.
          </p>
        </Reveal>
        <div className="mt-12 space-y-3">
          {faq.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <details className="group rounded-2xl border border-line/10 bg-surface px-6 py-4 open:pb-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="font-mono text-lg text-accent transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   6. CTA final
   ---------------------------------------------------------------- */
function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="pb-24 md:pb-32">
      <div className="mx-auto max-w-wrap px-6">
        <Reveal>
          <div className="rounded-3xl bg-court px-8 py-16 text-center text-chalk md:py-20">
            <h2 id="cta-title" className="mx-auto max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
              Prêt à trouver la valeur&nbsp;?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-chalk/70">
              Rejoignez Value Desk dès aujourd&rsquo;hui et accédez à des pronostics
              professionnels sur le tennis.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={CHECKOUT_URL}
                className="rounded-full bg-accent px-8 py-4 font-medium text-[#10241B] transition hover:brightness-105"
              >
                S&rsquo;abonner maintenant
              </a>
              <a
                href={TELEGRAM_URL}
                className="rounded-full border border-chalk/30 px-8 py-4 font-medium text-chalk transition hover:border-chalk/70"
              >
                Nous contacter sur Telegram
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   7. Footer — emplacement : footer-bg
   ---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-court text-chalk">
      {/* IMAGE SLOT: footer-bg — remplacer /public/images/footer-bg.svg */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url('/images/footer-bg.svg')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/35" />

      <div className="mx-auto max-w-wrap px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="flex items-center gap-3 font-display text-xl">
            <img src="/images/logo.svg" alt="" width={32} height={32} className="h-8 w-8 rounded-lg" />
            Value Desk
          </p>
          <p className="text-sm text-chalk/70">
            <a href={TELEGRAM_URL} className="transition hover:text-chalk">Contact</a>
            <span className="mx-3 text-chalk/30">|</span>
            © {new Date().getFullYear()} Value Desk
          </p>
        </div>
        <div className="mt-10 border-t border-chalk/15 pt-6">
          <p className="font-mono text-xs leading-relaxed text-chalk/60">
            Interdit aux mineurs (18+). Les paris sportifs comportent des risques&nbsp;:
            endettement, isolement, dépendance. Ne pariez que ce que vous pouvez perdre.
            Value Desk ne garantit aucun gain. Jouez responsablement — pour être aidé,
            appelez le 09&nbsp;74&nbsp;75&nbsp;13&nbsp;13 (appel non surtaxé),
            joueurs-info-service.fr.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------------------------------------------
   Page
   ---------------------------------------------------------------- */
export default function Page() {
  return (
    <>
      <a href="#main" className="skip-link">
        Aller au contenu
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Pricing />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
