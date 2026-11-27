import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, CheckCircle2, Clock, Globe, MessageSquare, ShieldCheck } from "lucide-react";
import { keystoneLogoUrl } from "@/assets/keystone-logo";

const EMAIL = "info.keystone.hq@gmail.com";
const EARLY_ACCESS_URL = "https://berkeley.qualtrics.com/jfe/form/SV_50E0tbiwgJkoVVA";
const SETUP_CALL_URL = "https://calendar.app.google/zG5HB3Hdt8DvXJ817";

const WORKFLOW_STEPS = [
  {
    time: "8:14 PM",
    label: "Incoming text",
    detail: "\"Hi, do you have an SUV for airport pickup Saturday at 6am?\"",
    status: "Answered in 38 sec",
  },
  {
    time: "8:15 PM",
    label: "Checks your tools",
    detail: "Reads your calendar and booking software for driver & vehicle availability.",
    status: "Synced",
  },
  {
    time: "8:16 PM",
    label: "Sends quote & deposit",
    detail: "Replies in the customer's language with your exact rate and deposit link.",
    status: "Ready for your yes",
  },
];

const HOW_IT_WORKS = [
  {
    num: "01",
    title: "Explain your business once",
    body: "In a free 1-on-1 setup session, walk us through your pricing, calendar, tools, and rules. No complex software to learn.",
  },
  {
    num: "02",
    title: "Every call and text answered 24/7",
    body: "When you're with a client or off the clock, Keystone replies within a minute in your customer's language.",
  },
  {
    num: "03",
    title: "Bookings finished, on your terms",
    body: "Keystone coordinates details, checks availability, sends quotes and deposit links, and asks for your quick approval where you want it.",
  },
];

const CAPABILITIES = [
  {
    icon: Clock,
    title: "Replies in under a minute, 24/7",
    body: "Stop losing jobs to voicemail. Every inquiry gets an immediate, helpful response day or night.",
  },
  {
    icon: Globe,
    title: "Speaks your customer's language",
    body: "Automatically responds in whatever language your customer reaches out in, using your tone and rules.",
  },
  {
    icon: MessageSquare,
    title: "Works with your existing tools",
    body: "Checks your calendar and booking software, coordinates across customers and staff, and sends quotes and deposit links.",
  },
  {
    icon: ShieldCheck,
    title: "You stay in full control",
    body: "Choose what runs automatically and which steps need a quick yes. See every conversation and adjust your workflow anytime.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Keystone — AI Front Office for Service-Based Small Businesses" },
      {
        name: "description",
        content: "Keystone is an AI front office for service-based small business owners. Answer every call and text 24/7, check availability, send quotes, and stay in control.",
      },
      { property: "og:title", content: "Keystone — AI Front Office for Service-Based Small Businesses" },
      {
        property: "og:description",
        content: "Never miss a lead while you're on the job. Keystone handles calls, texts, quotes, and bookings 24/7 — built around your rules.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <a href="#top" className="flex items-center gap-2 focus:outline-none">
          <img src={keystoneLogoUrl} alt="Keystone" className="h-14 w-auto sm:h-16" />
        </a>
        <a
          href={SETUP_CALL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-ink-foreground transition hover:opacity-90 sm:px-5"
        >
          Book free setup call
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-12 md:pb-28 md:pt-16">
          <div className="md:col-span-7">
            <p className="animate-rise mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              AI Front Office for Service Businesses
            </p>
            <h1 className="animate-rise text-4xl font-semibold leading-[1.06] sm:text-5xl md:text-6xl" style={{ animationDelay: "0.08s" }}>
              Your 24/7 front office, built around <span className="text-primary">how you work.</span>
            </h1>
            <p className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg" style={{ animationDelay: "0.16s" }}>
              Service business owners lose revenue every time a call or text goes unanswered. Keystone answers inquiries in under a minute, checks your calendar and software, sends quotes and deposit links, and lets you approve the steps that matter.
            </p>
            <div className="animate-rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.24s" }}>
              <a
                href={SETUP_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 sm:text-base"
              >
                <Calendar className="h-4 w-4" />
                Book free setup call
              </a>
              <a
                href={EARLY_ACCESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-secondary sm:text-base"
              >
                Join early access
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <p className="animate-rise mt-5 text-sm text-muted-foreground" style={{ animationDelay: "0.3s" }}>
              Now onboarding our founding cohort of 15–20 owners with free 1-on-1 setup.
            </p>
          </div>

          <div className="animate-rise md:col-span-5" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Front-office workflow</p>
                  <p className="text-xs text-muted-foreground">Example: after-hours booking inquiry</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Active 24/7
                </span>
              </div>
              <div className="mt-5 space-y-4">
                {WORKFLOW_STEPS.map((step) => (
                  <div key={step.label} className="rounded-xl bg-muted/60 p-4">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-semibold text-foreground">{step.label}</span>
                      <span className="text-muted-foreground">{step.time}</span>
                    </div>
                    <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{step.detail}</p>
                    <p className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {step.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ink text-ink-foreground">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-24">
            <div>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Every unanswered call is a job you shouldn't have to lose.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-foreground/75">
                After interviewing over 100 small business owners, we heard the same story everywhere: booking a single job takes endless back-and-forth across calls, texts, calendars, booking software, and staff. When you're busy serving customers, inquiries wait — and leads move on.
              </p>
            </div>
            <div className="border-t border-ink-foreground/15 pt-8 md:border-l md:border-t-0 md:pl-14 md:pt-0">
              <h3 className="text-2xl font-semibold text-accent">Built for busy owners, not IT teams.</h3>
              <ul className="mt-6 space-y-4 text-ink-foreground/80">
                <li>— Handles real multi-step workflows, not generic pre-recorded scripts.</li>
                <li>— No complicated dashboard to configure yourself — we set it up with you 1-on-1.</li>
                <li>— One saved booking can cover an entire month of Keystone.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">How Keystone works</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.num} className="border-t border-border pt-6">
                <span className="font-display text-sm font-semibold text-primary">{item.num}</span>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-secondary/60">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">Designed for real service workflows</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {CAPABILITIES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-border bg-card p-6">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16 md:py-20">
            <h2 className="text-3xl font-semibold md:text-5xl">Join our founding cohort.</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/90 sm:text-lg">
              We're partnering hands-on with our first 15–20 service business owners. Book a free setup call or join early access to get started with a free trial.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={SETUP_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition hover:opacity-95 sm:text-base"
              >
                <Calendar className="h-4 w-4 text-primary" />
                Book free setup call
              </a>
              <a
                href={EARLY_ACCESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/35 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10 sm:text-base"
              >
                Join early access
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-border px-6 py-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <img src={keystoneLogoUrl} alt="Keystone" className="h-9 w-auto" />
          <span>© {new Date().getFullYear()} Keystone · San Francisco, CA</span>
        </div>
        <a href={`mailto:${EMAIL}`} className="hover:text-foreground">{EMAIL}</a>
      </footer>
    </div>
  );
}
