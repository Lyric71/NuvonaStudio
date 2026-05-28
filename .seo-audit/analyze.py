import re, sys, os, json
from urllib.parse import urljoin, urlparse

def analyze(path, base_url="https://www.nuvora.studio"):
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()
    total = len(html.encode('utf-8'))
    # Inline CSS (style tags)
    css_blocks = re.findall(r'<style[^>]*>([\s\S]*?)</style>', html, re.IGNORECASE)
    inline_css_bytes = sum(len(c.encode('utf-8')) for c in css_blocks)
    inline_css_count = len(css_blocks)
    # Inline JS (script with no src)
    inline_js_blocks = re.findall(r'<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)</script>', html, re.IGNORECASE)
    inline_js_bytes = sum(len(c.encode('utf-8')) for c in inline_js_blocks)
    inline_js_count = len(inline_js_blocks)
    # External scripts
    ext_scripts = re.findall(r'<script[^>]*\bsrc=["\']([^"\']+)["\']', html, re.IGNORECASE)
    # External stylesheets
    ext_css = re.findall(r'<link[^>]*\brel=["\']?stylesheet["\']?[^>]*>', html, re.IGNORECASE)
    # Preconnect / preload font
    preconnect = re.findall(r'<link[^>]*\brel=["\']?preconnect["\']?[^>]*>', html, re.IGNORECASE)
    preload = re.findall(r'<link[^>]*\brel=["\']?preload["\']?[^>]*>', html, re.IGNORECASE)
    # Fonts (font url patterns)
    font_links = [l for l in re.findall(r'<link[^>]*>', html, re.IGNORECASE) if 'font' in l.lower() or '.woff' in l.lower()]
    # Imgs
    img_tags = re.findall(r'<img[^>]*>', html, re.IGNORECASE)
    img_with_lazy = sum(1 for i in img_tags if 'loading="lazy"' in i or "loading='lazy'" in i)
    img_with_alt_empty = sum(1 for i in img_tags if re.search(r'alt=(?:""|\'\')', i))
    img_missing_alt = sum(1 for i in img_tags if not re.search(r'\balt=', i))
    img_with_dim = sum(1 for i in img_tags if 'width=' in i and 'height=' in i)
    img_srcs = []
    for it in img_tags:
        m = re.search(r'\bsrc=["\']([^"\']+)["\']', it)
        if m:
            img_srcs.append(m.group(1))
    # h1
    h1s = re.findall(r'<h1[^>]*>([\s\S]*?)</h1>', html, re.IGNORECASE)
    title = re.search(r'<title[^>]*>([\s\S]*?)</title>', html, re.IGNORECASE)
    meta_desc = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"\']+)["\']', html, re.IGNORECASE)
    viewport = re.search(r'<meta[^>]*name=["\']viewport["\'][^>]*>', html, re.IGNORECASE)
    out = {
        'file': path,
        'total_bytes': total,
        'inline_css_bytes': inline_css_bytes,
        'inline_css_blocks': inline_css_count,
        'inline_js_bytes': inline_js_bytes,
        'inline_js_blocks': inline_js_count,
        'external_scripts': ext_scripts,
        'external_stylesheets': len(ext_css),
        'preconnect': len(preconnect),
        'preload': preload,
        'font_links': font_links,
        'img_count': len(img_tags),
        'img_with_lazy': img_with_lazy,
        'img_with_alt_empty': img_with_alt_empty,
        'img_missing_alt': img_missing_alt,
        'img_with_dimensions': img_with_dim,
        'img_srcs': img_srcs,
        'h1': [re.sub(r'<[^>]+>', '', h).strip() for h in h1s],
        'title': re.sub(r'<[^>]+>','',title.group(1)).strip() if title else None,
        'meta_description': meta_desc.group(1) if meta_desc else None,
        'viewport': viewport.group(0) if viewport else None,
    }
    return out

if __name__ == '__main__':
    files = sys.argv[1:]
    results = {}
    for f in files:
        results[os.path.basename(f)] = analyze(f)
    print(json.dumps(results, indent=2))
