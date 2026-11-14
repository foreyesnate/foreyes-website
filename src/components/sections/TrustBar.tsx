import { Marquee } from "@/components/motion/Marquee";
import { EyeMark } from "@/components/site/LogoArt";

const items = [
  "Endorsed by ODs on Finance",
  "Trusted by TSO practices",
  "Trusted by ALLDocs practices",
  "Trusted by Vision Source practices",
  "Founded by an OD",
  "Eyecare practices only",
  "Remote, nationwide",
];

/** A slow ticker of the peer proof the brand leans on. */
export function TrustBar() {
  return (
    <section aria-label="Who trusts ForEyes" className="border-y border-stone-300/70 bg-white py-5">
      <Marquee>
        <ul className="flex items-center">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-8 whitespace-nowrap pr-8 font-display text-[1.0625rem] font-semibold text-ink-700"
            >
              {item}
              <EyeMark className="h-5 w-auto opacity-80" />
            </li>
          ))}
        </ul>
      </Marquee>
    </section>
  );
}
