import { HomeHero } from "@/components/sections/HomeHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Flagships } from "@/components/sections/Flagships";
import { BetterTogether } from "@/components/sections/BetterTogether";
import { OneOrTwo } from "@/components/sections/OneOrTwo";
import {
  Audiences,
  FounderNote,
  MoreServices,
  NationwideBand,
  Tools,
  WhyForEyes,
} from "@/components/sections/HomeSections";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <Flagships />
      <BetterTogether />
      <OneOrTwo />
      <MoreServices />
      <WhyForEyes />
      <Audiences />
      <NationwideBand />
      <Testimonials />
      <FounderNote />
      <Tools />
      <CtaBand />
    </>
  );
}
