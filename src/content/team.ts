// The team, in the order shown on foreyessolutions.com/about-us/our-team.
//
// Bios are carried over word for word. The only edits: "ForEyes Solutions"
// became "ForEyes Books & Billing" (first mention on the page) or "ForEyes".
// Richard's bio lost two filler words ("actionable", "empower"); the meaning
// is unchanged. None of the bios mentioned tax services.
// Laura Pittman, Mae Labongray, and Heather Bank have no bio on the current
// site. Do not write one for them here without the person's sign-off.

export type TeamPhoto = {
  /** Path under /public. */
  src: string;
  width: number;
  height: number;
  /** CSS object-position, for crops tighter than the square original. */
  position?: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  /** First name, for button labels such as "More about Wade". */
  firstName: string;
  title: string;
  group: "owners" | "leads";
  /** Omit when no headshot exists; an initials avatar is drawn instead. */
  photo?: TeamPhoto;
  /** Paragraphs, verbatim from the current site (see the note above). */
  bio?: string[];
};

export const team: TeamMember[] = [
  {
    slug: "wade-weisz",
    name: "Wade Weisz, OD",
    firstName: "Wade",
    title: "CEO & Founder",
    group: "owners",
    photo: { src: "/team/wade-weisz.jpg", width: 1000, height: 1000, position: "50% 20%" },
    bio: [
      "Wade Weisz, OD, is the founder and President & CEO of ForEyes Books & Billing. He brings over 25 years of experience as a practicing OD and multi-location practice owner. After years of struggling to find accounting and advisory support that truly reflected the realities of running a practice, he built ForEyes to give eyecare professionals the accurate financial data and expert guidance they’ve always deserved.",
      "A North Dakota native, Wade earned his OD from the Southern California College of Optometry before falling in love with Nashville in 2021. When he’s not building the firm, you’ll find him catching live music or exploring the city with his wife, Sylvia.",
    ],
  },
  {
    slug: "nathan-taylor",
    name: "Nathan Taylor",
    firstName: "Nathan",
    title: "COO & Co-owner",
    group: "owners",
    photo: { src: "/team/nathan-taylor.jpg", width: 600, height: 600, position: "45% 30%" },
    bio: [
      "Nathan Taylor is Co-owner and COO of ForEyes. After 23 years in broadcast television and video production, he transitioned into operations before joining ForEyes in 2022. An innovator and natural leader, Nathan has played a vital role in the firm’s growth, driving business development and leading operations from first client conversation through engagement.",
      "Raised between California and Arizona and having lived coast to coast, Nathan now calls Nashville home. He enjoys exploring new technologies and getting outdoors with his Labrador Retriever, Otis, who loves to make video meeting appearances as much as he can.",
    ],
  },
  {
    slug: "amanda-bennett",
    name: "Amanda Bennett",
    firstName: "Amanda",
    title: "Director of Practice Performance",
    group: "leads",
    photo: { src: "/team/amanda-bennett.jpg", width: 1024, height: 1024, position: "50% 20%" },
    bio: [
      "Amanda Bennett is the Director of Practice Performance at ForEyes, leading the firm’s Practice Solutions division across Practice Management & Consulting, Revenue Cycle Management, and Remote Staffing. Before joining ForEyes in January 2025, Amanda helped launch and grow a cold start practice in Georgia, serving as its practice manager for over 16 years.",
      "Amanda has a genuine passion for the eyecare industry and the owners, ODs, and staff she serves. When she’s not sharpening her knowledge in technology and practice operations, you’ll find her outside “running to find her sanity,” as she likes to say.",
    ],
  },
  {
    slug: "richard-schisler",
    name: "Richard Schisler",
    firstName: "Richard",
    title: "Director of Client Accounting Services",
    group: "leads",
    photo: { src: "/team/richard-schisler.jpg", width: 864, height: 864, position: "50% 20%" },
    bio: [
      "As Director of Client Accounting Services, Richard oversees all client accounting operations, setting the standards, processes, and quality controls that ensure accuracy and consistency across every client engagement. Since joining ForEyes in March 2022, he has built deep expertise in optometry practice accounting and a strong foundation in business administration, playing a key role in translating financial data into clear insights that help practice owners make confident, informed decisions.",
      "When he’s not working, Richard enjoys spending quality time with his family. Whether it’s hiking outdoors, playing sports, or building elaborate train tracks with his boys, he values staying active and making the most of life’s simple moments.",
    ],
  },
  {
    slug: "esta-steenkamp",
    name: "Esta Steenkamp",
    firstName: "Esta",
    title: "Senior Manager, Accounting & Quality Control",
    group: "leads",
    photo: { src: "/team/esta-steenkamp.jpg", width: 512, height: 512, position: "50% 20%" },
    bio: [
      "Esta Steenkamp is Senior Manager of Accounting & Quality Control at ForEyes. Since joining the firm in December 2021, she has played a key role in overseeing the accuracy and integrity of client financial records while guiding the bookkeeping team through review and process improvement. She brings extensive experience in bookkeeping, payroll, and financial management, with a strong commitment to reliable reporting and compliance.",
      "When Esta is not crunching the numbers, she is a busy mama of 3 and a wife to her loving husband. She and her family love spending time outdoors, especially if it includes fishing and camping.",
    ],
  },
  {
    slug: "laura-pittman",
    name: "Laura Pittman",
    firstName: "Laura",
    title: "Head of RCM",
    group: "leads",
    photo: { src: "/team/laura-pittman.jpg", width: 1024, height: 1024, position: "55% 20%" },
  },
  {
    slug: "mae-labongray",
    name: "Mae Labongray",
    firstName: "Mae",
    title: "Director of Client & Admin Support",
    group: "leads",
    photo: { src: "/team/mae-labongray.jpg", width: 512, height: 512, position: "50% 25%" },
  },
  {
    slug: "heather-bank",
    name: "Heather Bank",
    firstName: "Heather",
    title: "Director of Sales & Marketing",
    group: "leads",
  },
];

export const owners = team.filter((member) => member.group === "owners");
export const leads = team.filter((member) => member.group === "leads");

export function initialsOf(name: string) {
  return name
    .replace(/,.*$/, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}
