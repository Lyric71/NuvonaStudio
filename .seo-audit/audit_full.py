import os, re, json, glob, sys
from html.parser import HTMLParser

ROOT_EN = 'C:/tmp/audit'
ROOT_INTL = 'C:/tmp/audit'

# Build URL -> file
files = {}
for d in [ROOT_EN]:
    for fp in glob.glob(d + '/*.html'):
        bn = os.path.basename(fp)
        path = bn[:-5]
        if path.startswith('en_'):
            path = path[3:]
        path = path.replace('_','/')
        if not path.startswith('/'):
            path = '/' + path
        path = re.sub(r'/+','/',path)
        files[path] = fp

# Extract hreflang, canonical, og:url, twitter, viewport, theme-color, title, meta description, jsonld, favicon
def parse(fp):
    with open(fp, encoding='utf-8', errors='ignore') as f:
        html = f.read()
    # head only
    head_m = re.search(r'<head[^>]*>(.*?)</head>', html, re.S | re.I)
    head = head_m.group(1) if head_m else html
    out = {}
    # title
    t = re.search(r'<title[^>]*>(.*?)</title>', head, re.S | re.I)
    out['title'] = (t.group(1).strip() if t else None)
    # meta description
    md = re.search(r'<meta[^>]+name=["\']description["\'][^>]+content=["\']([^"\']*)["\']', head, re.I)
    if not md:
        md = re.search(r'<meta[^>]+content=["\']([^"\']*)["\'][^>]+name=["\']description["\']', head, re.I)
    out['meta_desc'] = md.group(1) if md else None
    # canonical
    c = re.search(r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\']([^"\']+)["\']', head, re.I)
    out['canonical'] = c.group(1) if c else None
    # og:url
    og = re.search(r'<meta[^>]+property=["\']og:url["\'][^>]+content=["\']([^"\']+)["\']', head, re.I)
    out['og_url'] = og.group(1) if og else None
    # og:image
    ogi = re.search(r'<meta[^>]+property=["\']og:image["\'][^>]+content=["\']([^"\']+)["\']', head, re.I)
    out['og_image'] = ogi.group(1) if ogi else None
    # og:title
    ogt = re.search(r'<meta[^>]+property=["\']og:title["\'][^>]+content=["\']([^"\']+)["\']', head, re.I)
    out['og_title'] = ogt.group(1) if ogt else None
    # twitter
    tw = re.search(r'<meta[^>]+name=["\']twitter:card["\'][^>]+content=["\']([^"\']+)["\']', head, re.I)
    out['twitter_card'] = tw.group(1) if tw else None
    twi = re.search(r'<meta[^>]+name=["\']twitter:image["\'][^>]+content=["\']([^"\']+)["\']', head, re.I)
    out['twitter_image'] = twi.group(1) if twi else None
    # viewport
    v = re.search(r'<meta[^>]+name=["\']viewport["\'][^>]+content=["\']([^"\']+)["\']', head, re.I)
    out['viewport'] = v.group(1) if v else None
    # theme-color
    tc = re.search(r'<meta[^>]+name=["\']theme-color["\'][^>]+content=["\']([^"\']+)["\']', head, re.I)
    out['theme_color'] = tc.group(1) if tc else None
    # robots
    rb = re.search(r'<meta[^>]+name=["\']robots["\'][^>]+content=["\']([^"\']+)["\']', head, re.I)
    out['meta_robots'] = rb.group(1) if rb else None
    # favicon / apple-touch-icon
    fav = re.findall(r'<link[^>]+rel=["\'](?:icon|shortcut icon|apple-touch-icon|mask-icon|manifest)["\'][^>]*>', head, re.I)
    out['icon_links'] = fav
    # html lang
    hl = re.search(r'<html[^>]+lang=["\']([^"\']+)["\']', html, re.I)
    out['html_lang'] = hl.group(1) if hl else None
    # hreflang
    hreflangs = re.findall(r'<link[^>]+rel=["\']alternate["\'][^>]+hreflang=["\']([^"\']+)["\'][^>]+href=["\']([^"\']+)["\']', head, re.I)
    if not hreflangs:
        # try inverted order
        hreflangs = []
        for m in re.finditer(r'<link[^>]+rel=["\']alternate["\'][^>]*>', head, re.I):
            tag = m.group(0)
            hl = re.search(r'hreflang=["\']([^"\']+)["\']', tag, re.I)
            href = re.search(r'href=["\']([^"\']+)["\']', tag, re.I)
            if hl and href:
                hreflangs.append((hl.group(1), href.group(1)))
    out['hreflang'] = hreflangs
    # JSON-LD blocks
    jsonld = re.findall(r'<script[^>]+type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', html, re.S | re.I)
    parsed = []
    for j in jsonld:
        j = j.strip()
        try:
            obj = json.loads(j)
            parsed.append(obj)
        except Exception as e:
            parsed.append({'_RAW_PARSE_ERROR': str(e), '_PREVIEW': j[:200]})
    out['jsonld'] = parsed
    # h1
    h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.S | re.I)
    out['h1'] = [re.sub(r'<[^>]+>','',x).strip() for x in h1s]
    return out

# Run on all
results = {}
for url in sorted(files):
    results[url] = parse(files[url])

# Save full dump
with open('C:/tmp/audit_dump.json','w',encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False, default=str)

# Print compact summary
for url in sorted(files):
    r = results[url]
    print('='*80)
    print('URL:', url)
    print(' html.lang   :', r['html_lang'])
    print(' title       :', (r['title'] or '')[:100])
    print(' meta_desc   :', (r['meta_desc'] or '')[:120])
    print(' canonical   :', r['canonical'])
    print(' og:url      :', r['og_url'])
    print(' og:image    :', r['og_image'])
    print(' twitter:card:', r['twitter_card'])
    print(' viewport    :', r['viewport'])
    print(' theme-color :', r['theme_color'])
    print(' meta robots :', r['meta_robots'])
    print(' h1          :', r['h1'][:3])
    print(' hreflang ({}):'.format(len(r['hreflang'])))
    for hl, h in r['hreflang']:
        print('   {:10s} -> {}'.format(hl, h))
    types=[]
    for j in r['jsonld']:
        if isinstance(j, dict):
            t = j.get('@type') or j.get('_RAW_PARSE_ERROR','PARSE_ERROR')
            types.append(t)
        elif isinstance(j, list):
            for it in j:
                if isinstance(it, dict):
                    types.append(it.get('@type','?'))
    print(' jsonld@type :', types)
    print(' icon_links  :', len(r['icon_links']), 'tags')

print()
print('Saved dump to C:/tmp/audit_dump.json')
