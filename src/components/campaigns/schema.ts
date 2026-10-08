// JSON-LD for the Campaigns page: a WebPage about the app's Campaigns module,
// with the language's capture of the Campaigns page as its main image. Added
// to the Layout's @graph, beside the organization, the site and the
// breadcrumbs.
import { localizedPath } from '../../i18n/index';

const SITE = 'https://www.nuvora.studio';

export function campaignsPageSchemas(
  lang: 'en' | 'fr' | 'zh',
  name: string,
  description: string,
): Record<string, unknown>[] {
  const url = `${SITE}${localizedPath('campaigns', lang)}`;
  const suffix = lang === 'en' ? '' : `.${lang}`;
  return [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name,
      description,
      inLanguage: lang === 'zh' ? 'zh-CN' : lang,
      isPartOf: { '@id': `${SITE}/#website` },
      publisher: { '@id': `${SITE}/#organization` },
      breadcrumb: { '@id': `${url}#breadcrumbs` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${SITE}/images/help/campaigns-list${suffix}.webp`,
        width: 1440,
        height: 900,
      },
    },
  ];
}
