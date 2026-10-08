/**
 * The copy of the onboarding pages. Each locale page (src/pages/services/
 * onboarding*.astro and its fr, es, de and zh twins) holds its own copy and
 * passes it to the components in this folder, which hold the layout only.
 * Strings named *Html are trusted markup written in those page files (links,
 * the accent span), rendered with set:html.
 */

export interface OfferCopy {
  hero: {
    eyebrow: string;
    h1Html: string;
    lede: string;
    primary: string;
    secondary: string;
  };
  invoice: {
    label: string;
    walletLabel: string;
    walletValue: string;
    serviceLabel: string;
    serviceValue: string;
    /** Label, value. */
    facts: [string, string][];
  };
  wallet: {
    label: string;
    h2Html: string;
    body: string[];
    listTitle: string;
    list: string[];
    /** The help center's balance article, where it exists in this language. */
    link?: { label: string; href: string };
  };
  setup: {
    label: string;
    h2Html: string;
    intro: string;
    /** Four tiles, in this order: the team, LinkedIn, the money, the clients. */
    tiles: { title: string; body: string }[];
    proseHtml: string;
    asideHtml: string;
  };
  training: {
    label: string;
    h2Html: string;
    body: string;
    listTitle: string;
    list: string[];
    noteHtml: string;
  };
  support: {
    label: string;
    h2Html: string;
    body: string;
    afterHtml: string;
    listTitle: string;
    list: string[];
  };
  order: {
    label: string;
    h2Html: string;
    line: string;
    first: { tag: string; title: string; body: string; button: string };
    then: { tag: string; title: string; body: string; alreadyHtml: string };
  };
  close: {
    h2Html: string;
    body: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
}

export interface BookingCopy {
  hero: {
    eyebrow: string;
    h1Html: string;
    sub: string;
    noteHtml: string;
    facts: string[];
  };
  card: { title: string; note: string };
  legends: { you: string; company: string; sessions: string };
  optional: string;
  fields: {
    name: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    phone: { label: string; placeholder: string };
    role: { label: string; placeholder: string };
    company: { label: string; placeholder: string };
    website: { label: string; placeholder: string };
    team: { label: string; placeholder: string; hint: string };
    language: { label: string; options: { en: string; fr: string; zh: string } };
    date: { label: string; hint: string };
    attendees: { label: string; options: { '1': string; '2-5': string; '6-15': string; '16+': string } };
    people: { label: string; placeholder: string };
  };
  submit: string;
  sending: string;
  privacy: string;
  errors: {
    name: string;
    email: string;
    emailInvalid: string;
    company: string;
    language: string;
    date: string;
    datePast: string;
    attendees: string;
    server: string;
    network: string;
  };
  aside: {
    nextTitle: string;
    nextBody: string;
    unsureTitle: string;
    unsureBody: string;
    unsureLink: { label: string; href: string };
  };
}

export interface PaymentCopy {
  hero: {
    eyebrow: string;
    h1Html: string;
    lead: string;
    button: string;
    note: string;
  };
  stepsTitle: string;
  steps: { when: string; body: string }[];
  onwardTitle: string;
  onward: { label: string; body: string; href: string; cta: string }[];
}
