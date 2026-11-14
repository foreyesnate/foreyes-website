import { teamPage } from "@/content/about";
import { leads, owners, team, type TeamMember } from "@/content/team";
import { Counter } from "@/components/motion/Counter";
import { cn } from "@/lib/cn";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { BioDisclosure } from "./BioDisclosure";
import { TeamPortrait } from "./TeamPortrait";

function Paragraphs({ items }: { items: string[] }) {
  return (
    <>
      {items.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </>
  );
}

/** A wide card for an owner: portrait, the working bio, the personal one a tap away. */
function OwnerCard({ member, preload }: { member: TeamMember; preload: boolean }) {
  const [working, ...personal] = member.bio ?? [];
  return (
    <article className="group grid h-full gap-7 rounded-[2.5rem] bg-white p-5 shadow-soft transition-[transform,box-shadow] duration-500 ease-(--ease-focus) hover:-translate-y-1.5 hover:shadow-lift sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] sm:p-6 lg:gap-8">
      <TeamPortrait
        member={member}
        decorative
        zoomOnHover
        preload={preload}
        sizes="(min-width: 1024px) 20rem, (min-width: 640px) 40vw, 90vw"
        className="mx-auto aspect-[4/5] w-full max-w-[20rem] self-start sm:max-w-none"
      />
      <div className="px-2 pb-3 sm:px-0 sm:pr-3 sm:pt-4">
        <p className="eyebrow text-teal-700">{member.title}</p>
        <h3 className="text-heading mt-3">{member.name}</h3>
        {working ? <p className="mt-5 text-ink-500">{working}</p> : null}
        {personal.length ? (
          <BioDisclosure
            className="mt-6"
            label={`More about ${member.firstName}`}
            openLabel="Show less"
            srContext={member.name}
          >
            <Paragraphs items={personal} />
          </BioDisclosure>
        ) : null}
      </div>
    </article>
  );
}

/** A portrait card. People with a bio get a "Read bio" panel; the rest show name and title. */
function LeadCard({ member }: { member: TeamMember }) {
  return (
    <article className="group grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-x-5 rounded-[2rem] bg-stone p-4 transition-[transform,box-shadow,background-color] duration-500 ease-(--ease-focus) hover:-translate-y-1.5 hover:bg-white hover:shadow-lift sm:block sm:rounded-[2.5rem] sm:p-5">
      <TeamPortrait
        member={member}
        decorative
        zoomOnHover
        className="aspect-[4/5] w-full sm:mx-auto sm:max-w-[22rem]"
      />
      <div className="sm:px-2 sm:pt-6">
        <h3 className="text-subheading">{member.name}</h3>
        <p className="mt-1.5 leading-snug text-ink-500">{member.title}</p>
      </div>
      {member.bio?.length ? (
        <BioDisclosure
          className="col-span-2 mt-4 sm:mt-5 sm:px-2 sm:pb-2"
          label="Read bio"
          openLabel="Close bio"
          srContext={member.name}
        >
          <Paragraphs items={member.bio} />
        </BioDisclosure>
      ) : (
        <div aria-hidden="true" className="hidden sm:block sm:pb-2" />
      )}
    </article>
  );
}

export function TeamOwners() {
  const copy = teamPage.owners;
  return (
    <Section tone="stone" aria-labelledby="owners-title">
      <Container size="wide">
        <Reveal>
          <SectionHeading id="owners-title" eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede} />
        </Reveal>
        <Stagger as="ul" className="mt-14 grid gap-5 xl:grid-cols-2" stagger={0.14}>
          {owners.map((member, i) => (
            <StaggerItem as="li" key={member.slug} className="h-full">
              <OwnerCard member={member} preload={i === 0} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

export function TeamLeads() {
  const copy = teamPage.leads;
  return (
    <Section tone="white" aria-labelledby="leads-title">
      <Container size="wide">
        <Reveal>
          <SectionHeading id="leads-title" eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede} />
        </Reveal>
        <Stagger as="ul" className="mt-14 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leads.map((member) => (
            <StaggerItem as="li" key={member.slug}>
              <LeadCard member={member} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

const offsets = ["lg:mr-16", "lg:ml-16", "lg:mx-8"];

/**
 * Hero visual for the team page: three people, three figures from their bios.
 * The numbers count up once as the cards come into focus.
 */
export function TeamExperience() {
  return (
    <Stagger as="ul" className="mx-auto grid w-full max-w-[34rem] gap-4 lg:mr-0" stagger={0.16}>
      {teamPage.experience.map((item, i) => {
        const member = team.find((person) => person.slug === item.slug) as TeamMember;
        return (
          <StaggerItem as="li" key={item.slug} className={offsets[i % offsets.length]}>
            <div className="flex items-center gap-4 rounded-[1.75rem] bg-white p-4 text-ink shadow-float sm:gap-5 sm:p-5">
              <TeamPortrait
                member={member}
                shape="circle"
                decorative
                sizes="6rem"
                className={cn("h-20 w-20 shrink-0 sm:h-24 sm:w-24", i === 0 && "ring-4 ring-yellow")}
              />
              <p className="min-w-0">
                <span className="tabular block font-display text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)] font-bold leading-none tracking-[-0.04em]">
                  {item.value > 1000 ? (
                    <>
                      {item.prefix}
                      {item.value}
                    </>
                  ) : (
                    <>
                      <Counter value={item.value} suffix={item.suffix} />
                      <span className="ml-2 text-[0.5em] font-semibold tracking-[-0.01em] text-ink-500">
                        {item.unit}
                      </span>
                    </>
                  )}
                </span>
                <span className="mt-2 block text-[0.95rem] leading-snug text-ink-500">{item.line}</span>
              </p>
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
