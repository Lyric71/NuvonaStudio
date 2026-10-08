/**
 * The copy of the Campaigns page, one object per language, written in the
 * locale page (src/pages/campaigns.astro, fr/campagnes.astro,
 * zh/campaigns.astro). CampaignsFeature.astro holds the layout only.
 *
 * Fields ending in Html are rendered with set:html: they may hold a link or
 * the <span class="text-gradient"> accent of a headline, nothing else.
 */
export interface CampaignsCopy {
  hero: {
    eyebrow: string;
    h1Html: string;
    lede: string;
    primary: string;
    secondary: string;
    shotAlt: string;
  };
  holds: {
    label: string;
    h2Html: string;
    body: string[];
    listTitle: string;
    list: string[];
    facts: [string, string][];
  };
  pointers: {
    label: string;
    h2Html: string;
    intro: string;
    tiles: { title: string; body: string }[];
  };
  readers: {
    label: string;
    h2Html: string;
    intro: string;
    shotAlt: string;
    // tag: the card's label on the campaign's page in the app.
    cards: { tag: string; title: string; body: string }[];
    exampleHtml: string;
  };
  filling: {
    label: string;
    h2Html: string;
    intro: string;
    items: { title: string; body: string }[];
    shotAlt: string;
  };
  notAds: {
    label: string;
    h2Html: string;
    body: string;
    link: { label: string; href: string };
  };
  roles: {
    label: string;
    h2Html: string;
    intro: string;
    rows: { role: string; can: string }[];
    noteHtml: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: { q: string; a: string }[];
  };
  close: {
    h2Html: string;
    body: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
}
