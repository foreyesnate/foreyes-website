import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { Reveal } from "@/components/motion/Reveal";
import { JourneyLine, type JourneyStep } from "@/components/graphics/JourneyLine";

const steps: JourneyStep[] = [
  {
    icon: "eye",
    owner: "billing",
    title: "Patient is seen",
    body: "The exam is coded and the claim is reviewed for accuracy before it goes anywhere.",
  },
  {
    icon: "claim",
    owner: "billing",
    title: "Claim goes out",
    body: "Submitted to the payer, tracked, and followed up. Denials are appealed.",
  },
  {
    icon: "check",
    owner: "billing",
    title: "Payment is posted",
    body: "Insurance and patient payments are posted promptly, so A/R stays current.",
  },
  {
    icon: "ledger",
    owner: "books",
    title: "Deposit is matched",
    body: "The deposit is categorized and the account reconciled to its statement.",
  },
  {
    icon: "chart",
    owner: "books",
    title: "It shows on your P&L",
    body: "Reviewed reports land in your portal by the 10th business day.",
  },
];

/** Why books and billing belong with the same team. */
export function BetterTogether() {
  return (
    <Section tone="ink" aria-labelledby="together-title" className="overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(65_93_158/0.5),transparent)]" />
      </div>
      <Container size="wide" className="relative">
        <Reveal>
          <SectionHeading
            id="together-title"
            tone="light"
            align="center"
            eyebrow="Better together"
            title="From the first patient encounter to the final payment."
            lede="When the same team keeps your books and works your claims, the revenue on your P&L and the money in your bank account finally agree."
          />
        </Reveal>
        <div className="mt-16 lg:mt-20">
          <JourneyLine steps={steps} />
        </div>
      </Container>
    </Section>
  );
}
