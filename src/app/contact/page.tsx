import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import { Illustration } from "@/components/ui/Art";
import { TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container, Eyebrow, Section } from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { BookingCalendar } from "@/components/site/BookingCalendar";
import { LeadForm } from "@/components/site/LeadForm";
import {
  bookPath,
  callSteps,
  contactHero,
  contactMeta,
  directLines,
  interestOptions,
  messagePath,
  reassurance,
} from "@/components/pages/contact/content";

export const metadata: Metadata = {
  title: contactMeta.title,
  description: contactMeta.description,
  alternates: { canonical: "/contact" },
};

const { address } = site;

/** One of the two ways to get in touch: a labelled card with a tool inside. */
function PathCard({
  id,
  icon,
  label,
  title,
  body,
  children,
}: {
  id: string;
  icon: IconName;
  label: string;
  title: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="rounded-[2.5rem] bg-stone p-3 sm:p-4">
      <div className="flex items-start gap-4 px-3 pb-6 pt-4 sm:gap-5 sm:px-5 sm:pt-5">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-yellow text-ink">
          <Icon name={icon} size={26} />
        </span>
        <div>
          <p className="eyebrow text-[0.75rem] text-teal-700">{label}</p>
          <h2 id={`${id}-title`} className="text-heading mt-1.5">
            {title}
          </h2>
          <p className="mt-3 max-w-md text-ink-500">{body}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

function DirectLine({
  icon,
  label,
  children,
}: {
  icon: IconName;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-yellow ring-1 ring-inset ring-white/15">
        <Icon name={icon} size={20} />
      </span>
      <div className="min-w-0">
        <dt className="text-[0.875rem] text-white/65">{label}</dt>
        <dd className="mt-0.5 font-display text-[1.0625rem] font-semibold leading-snug">{children}</dd>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contactHero.eyebrow}
        title={contactHero.title}
        highlight={contactHero.highlight}
        lede={contactHero.lede}
        crumbs={[{ label: "Contact" }]}
        primaryCta={{ label: "Book a Discovery Call", href: "#book" }}
        secondaryCta={{ label: "Send a Message", href: "#message" }}
      />

      <Section tone="white" aria-label="Ways to get in touch">
        <Container size="wide">
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <Reveal blur={false}>
              <PathCard id="book" icon="calendar" {...bookPath}>
                <BookingCalendar />
              </PathCard>
            </Reveal>

            <div className="grid gap-6">
              <Reveal blur={false} delay={0.1}>
                <PathCard id="message" icon="mail" {...messagePath}>
                  <div className="rounded-[1.75rem] bg-white p-5 sm:p-7">
                    <LeadForm formName="Contact" interestOptions={interestOptions} />
                  </div>
                </PathCard>
              </Reveal>

              <Reveal blur={false} delay={0.15}>
                <section
                  aria-labelledby="direct-title"
                  className="relative overflow-hidden rounded-[2.5rem] bg-ink p-7 text-white sm:p-9"
                >
                  <div
                    aria-hidden="true"
                    className="bg-dots pointer-events-none absolute -right-10 -top-10 h-56 w-72 text-white/10 [mask-image:radial-gradient(closest-side,black,transparent)]"
                  />
                  <h2 id="direct-title" className="text-subheading relative">
                    {directLines.title}
                  </h2>
                  <dl className="relative mt-7 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    <DirectLine icon="phone" label={directLines.labels.phone}>
                      <a href={site.phone.href} className="tabular underline decoration-yellow decoration-2 underline-offset-4 hover:decoration-4">
                        {site.phone.display}
                      </a>
                    </DirectLine>
                    <DirectLine icon="mail" label={directLines.labels.email}>
                      <a
                        href={`mailto:${site.email}`}
                        className="underline decoration-yellow decoration-2 underline-offset-4 [overflow-wrap:anywhere] hover:decoration-4"
                      >
                        {site.email}
                      </a>
                    </DirectLine>
                    <DirectLine icon="clock" label={directLines.labels.hours}>
                      {site.hours}
                    </DirectLine>
                    <DirectLine icon="pin" label={directLines.labels.address}>
                      <address className="not-italic">
                        {address.street}
                        <br />
                        {address.city}, {address.region} {address.postalCode}
                      </address>
                    </DirectLine>
                  </dl>
                </section>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <ProcessSteps
        id="call-title"
        tone="navy"
        eyebrow={callSteps.eyebrow}
        title={callSteps.title}
        lede={callSteps.lede}
        steps={callSteps.steps.map((step) => ({ ...step }))}
        aside={
          <Illustration
            name="discovery-call"
            panel="teal"
            sizes="(min-width: 1024px) 34rem, 92vw"
            className="max-w-xl"
          />
        }
      />

      <Section tone="stone" aria-labelledby="reassurance-title" className="overflow-hidden">
        <Container size="wide">
          <div className="grid items-center gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <Reveal blur={false}>
              <Illustration name="handshake" panel="yellow" sizes="(min-width: 1024px) 32rem, 92vw" />
            </Reveal>
            <div>
              <Reveal>
                <Eyebrow>{reassurance.eyebrow}</Eyebrow>
                <h2 id="reassurance-title" className="text-title mt-5 max-w-2xl">
                  {reassurance.title}
                </h2>
              </Reveal>
              <Stagger as="ul" className="mt-9 grid gap-3">
                {reassurance.points.map((point) => (
                  <StaggerItem
                    as="li"
                    key={point.title}
                    className="flex items-start gap-4 rounded-[1.75rem] bg-white p-5 shadow-soft sm:p-6"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal-100 text-teal-800">
                      <Icon name={point.icon} size={22} />
                    </span>
                    <div>
                      <h3 className="font-display text-[1.125rem] font-semibold leading-snug tracking-[-0.015em]">
                        {point.title}
                      </h3>
                      <p className="mt-1 text-ink-500">{point.body}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.1}>
                <p className="mt-7 font-display font-semibold text-ink">{reassurance.trust}</p>
                <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-stone-300 pt-7">
                  <p className="text-ink-500">{reassurance.aside}</p>
                  <TextLink href={site.pricingHref}>Estimate Your Price</TextLink>
                  <TextLink href="/resources/faq">Read the FAQs</TextLink>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
