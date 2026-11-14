// Client quotes, verbatim. The four bookkeeping quotes were carried over from
// foreyessolutions.com (given to "ForEyes Solutions"; one spelling was
// normalised, "For Eyes" to "ForEyes"). The two billing quotes were supplied
// by ForEyes for the Books & Billing site.
export type Testimonial = {
  name: string;
  role?: string;
  /** A short pull line shown large. Taken word for word from `quote`. */
  highlight: string;
  quote: string;
  /** Path under /public, when a headshot is available. */
  photo?: string;
  topic: "bookkeeping" | "billing" | "general";
};

export const testimonials: Testimonial[] = [
  {
    name: "Ryan Corte, OD",
    highlight:
      "They’re responsive, detail-oriented, and take the time to explain financials in a way that’s easy to understand.",
    quote:
      "Wade and his team do an outstanding job providing accurate, timely, and reliable bookkeeping services. They’re responsive, detail-oriented, and take the time to explain financials in a way that’s easy to understand. Working with them has given me greater peace of mind and confidence in the financial side of my business. I highly recommend Wade and his team to any business owner looking for a trustworthy and professional bookkeeping partner.",
    topic: "bookkeeping",
  },
  {
    name: "Patty Haley",
    role: "Family Eyecare",
    highlight:
      "This is all the RCM team does. They're highly trained, and it will pay off for you.",
    quote:
      "I believe 100% that you need to stop trying to handle RCM yourself. This is all the RCM team does. They're highly trained, and it will pay off for you. Laura trained our staff to verify benefits and collect copays and deductibles before patients left, which improved our cash flow and cut our patient billing costs.",
    topic: "billing",
  },
  {
    name: "Nona Kalfayan, OD",
    highlight:
      "What sets them apart is their communication — fast, reliable, and always helpful. You never feel left in the dark and are always supported.",
    quote:
      "I've been working with Wade and his team at ForEyes Solutions for the past two years, and the experience has been nothing short of excellent. From onboarding to goal setting and ongoing support, they've made a huge impact on my business by taking bookkeeping and organization off my plate so I can focus on growth. They truly understand the industry and provide value whether you're just starting out or already established and looking to improve your systems. What sets them apart is their communication — fast, reliable, and always helpful. You never feel left in the dark and are always supported. If you're looking for bookkeeping or business consulting, I highly recommend ForEyes Solutions. They're professional, knowledgeable, and genuinely committed to your success. They are absolutely the real deal!",
    topic: "general",
  },
  {
    name: "Brandon Luu, OD",
    highlight: "Wade and his team have been rock solid.",
    quote:
      "Wade and his team have been rock solid. It's been about 2 years, and they've done an excellent job keeping my books in order. They are always available if I have any questions. Recently, Wade has really elevated his business beyond just bookkeeping. I am excited to be along for the ride. Extremely satisfied client and would definitely recommend his services to other practice owners.",
    topic: "bookkeeping",
  },
  {
    name: "Kim Crance",
    role: "Northeastern Washington Eyecare",
    highlight:
      "Optometrists are the expert in their field; billing is not their field.",
    quote:
      "Optometrists are the expert in their field; billing is not their field. Having someone in your corner that understands that and can help vocalize that to the team and simplify things down. I would highly recommend!",
    topic: "billing",
  },
  {
    name: "Cristine Areola, OD",
    highlight:
      "I am very thankful for their expertise and their attentiveness to the small financial details.",
    quote:
      "ForEyes has been a great resource for my business as a first-time practice owner. I am very thankful for their expertise and their attentiveness to the small financial details. I don't know what I would do without them!",
    topic: "general",
  },
];

/** Quotes about Insurance Billing, for the billing page. */
export const billingTestimonials = testimonials.filter((t) => t.topic === "billing");

/** Quotes about the books (and general ones), for the bookkeeping page. */
export const bookkeepingTestimonials = testimonials.filter((t) => t.topic !== "billing");
