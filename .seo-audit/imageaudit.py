import json, subprocess, re, os
with open('C:/Users/cyril/Project/NuvoraStudioWeb/.seo-audit/analysis.json','r',encoding='utf-8') as f:
    data = json.load(f)
seen = {}
for k,v in data.items():
    for s in v['img_srcs']:
        if s.startswith('/'):
            url = 'https://www.nuvora.studio' + s
        elif s.startswith('http'):
            url = s
        else:
            url = 'https://www.nuvora.studio/' + s
        seen.setdefault(url, []).append(k)
# Also extract from raw home/case study for above-fold context
print(f"TOTAL UNIQUE IMG URLS: {len(seen)}")
results = []
for url, pages in sorted(seen.items()):
    try:
        out = subprocess.run(['curl','-sI','-L','--max-time','10', url], capture_output=True, text=True)
        h = out.stdout
        ct = re.search(r'(?im)^content-type:\s*(.+?)$', h)
        cl = re.search(r'(?im)^content-length:\s*(\d+)', h)
        cc = re.search(r'(?im)^cache-control:\s*(.+?)$', h)
        st = re.search(r'HTTP/[\d\.]+ (\d+)', h)
        results.append({
            'url': url,
            'status': st.group(1) if st else '?',
            'content_type': ct.group(1).strip() if ct else '?',
            'bytes': int(cl.group(1)) if cl else 0,
            'cache_control': cc.group(1).strip() if cc else '?',
            'pages': pages,
        })
    except Exception as e:
        results.append({'url': url, 'error': str(e), 'pages': pages})

results.sort(key=lambda r: -r.get('bytes', 0))
total_bytes = sum(r.get('bytes',0) for r in results)
print(f"GRAND TOTAL IMG BYTES (all unique): {total_bytes:,}")
print()
print(f"{'BYTES':>10}  {'TYPE':<35}  URL")
for r in results:
    print(f"{r.get('bytes',0):>10}  {r.get('content_type',''):<35}  {r['url']}")

with open('C:/Users/cyril/Project/NuvoraStudioWeb/.seo-audit/imageaudit.json','w',encoding='utf-8') as f:
    json.dump(results, f, indent=2)
