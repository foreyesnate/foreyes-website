import { site } from "@/content/site";
import { hub, type HubRowKey } from "@/content/audiences/hub";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container, Eyebrow, Section } from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const rowIcons: Record<HubRowKey, IconName> = {
  reports: "ledger",
  claims: "claim",
  bills: "bill",
  people: "users",
};

/** "Wherever you are": how a fully remote team reaches a practice in any state. */
export function AudienceRemote() {
  const { remote } = hub;
  return (
    <Section tone="navy" aria-labelledby={remote.id} className="overflow-hidden">
      <div aria-hidden="true" className="bg-dots pointer-events-none absolute inset-0 text-white/[0.07] [mask-image:radial-gradient(60%_70%_at_15%_40%,black,transparent)]" />
      <Container size="wide" className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal>
            <Eyebrow tone="light" className="mb-5">
              {remote.eyebrow}
            </Eyebrow>
            <h2 id={remote.id} className="text-title">
              {remote.title}
            </h2>
            <p className="text-lede mt-6 max-w-xl text-white/80">{remote.body[0]}</p>
            <p className="mt-5 max-w-xl font-display text-xl font-semibold tracking-[-0.015em] text-yellow">{remote.body[1]}</p>
            <dl className="mt-9 grid gap-4 border-t border-white/15 pt-7 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Icon name="phone" size={20} className="mt-1 shrink-0 text-teal-200" />
                <div>
                  <dt className="text-sm text-white/65">Call us</dt>
                  <dd>
                    <a href={site.phone.href} className="inline-flex min-h-11 items-center font-display text-lg font-semibold underline decoration-yellow decoration-2 underline-offset-[6px] hover:decoration-4">
                      {site.phone.display}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="clock" size={20} className="mt-1 shrink-0 text-teal-200" />
                <div>
                  <dt className="text-sm text-white/65">Hours</dt>
                  <dd className="flex min-h-11 items-center font-display text-lg font-semibold leading-snug">{site.hours}</dd>
                </div>
              </div>
            </dl>
          </Reveal>

          <Stagger as="ul" className="grid gap-4 sm:grid-cols-2">
            {remote.rows.map((row) => (
              <StaggerItem as="li" key={row.key}>
                <div className="h-full rounded-[1.75rem] bg-white/[0.07] p-6 ring-1 ring-inset ring-white/10 sm:p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-yellow">
                    <Icon name={rowIcons[row.key]} size={24} />
                  </span>
                  <h3 className="text-subheading mt-6">{row.title}</h3>
                  <p className="mt-2.5 text-white/75">{row.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
