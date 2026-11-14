// Client quotes carried over verbatim from foreyessolutions.com. They were
// given to "ForEyes Solutions"; confirm with each client that they may appear
// under the new name. One spelling was normalised ("For Eyes" to "ForEyes").
export type Testimonial = {
  name: string;
  role?: string;
  /** A short pull line shown large. Taken word for word from `quote`. */
  highlight: string;
  quote: string;
  /** Path under /public, when a headshot is available. */
  photo?: string;
  topic: "bookkeeping" | "consulting" | "general";
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
    name: "Cristine Areola, OD",
    highlight:
      "I am very thankful for their expertise and their attentiveness to the small financial details.",
    quote:
      "ForEyes has been a great resource for my business as a first-time practice owner. I am very thankful for their expertise and their attentiveness to the small financial details. I don't know what I would do without them!",
    topic: "general",
  },
];
