const fs = require('fs');
const path = require('path');

const files = process.argv.slice(2);
const decode = s => s
  .replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>')
  .replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&nbsp;/g,' ')
  .replace(/&rsquo;/g,'’').replace(/&lsquo;/g,'‘')
  .replace(/&ldquo;/g,'“').replace(/&rdquo;/g,'”')
  .replace(/&#(\d+);/g, (m,n)=>String.fromCharCode(parseInt(n)))
  .replace(/&#x([0-9a-f]+);/gi, (m,n)=>String.fromCharCode(parseInt(n,16)));

const stripTags = h => {
  h = h.replace(/<script[\s\S]*?<\/script>/gi,' ');
  h = h.replace(/<style[\s\S]*?<\/style>/gi,' ');
  h = h.replace(/<noscript[\s\S]*?<\/noscript>/gi,' ');
  h = h.replace(/<!--[\s\S]*?-->/g,' ');
  // Remove header/nav/footer for content-only count
  return h;
};

const extractBody = h => {
  const m = h.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (m) return m[1];
  const b = h.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return b ? b[1] : h;
};

const onlyText = h => decode(h.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim());

for (const f of files) {
  const html = fs.readFileSync(f,'utf8');
  const name = path.basename(f, '.html');
  const stripped = stripTags(html);
  const body = stripped; // count full body
  const mainBody = extractBody(stripped);

  const fullText = onlyText(body);
  const mainText = onlyText(mainBody);

  const headings = (tag) => {
    const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`,'gi');
    const out = [];
    let m;
    while ((m = re.exec(body)) !== null) out.push(onlyText(m[1]));
    return out;
  };

  const h1s = headings('h1');
  const h2s = headings('h2');
  const h3s = headings('h3');

  // Internal vs external links - count anchors in body
  const aRe = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
  let internal = 0, external = 0, anchors=0;
  let m;
  const sample = stripped;
  while ((m = aRe.exec(sample)) !== null) {
    const href = m[1];
    if (href.startsWith('#')) { anchors++; continue; }
    if (href.startsWith('mailto:') || href.startsWith('tel:')) continue;
    if (href.startsWith('http')) {
      if (href.includes('nuvora.studio')) internal++; else external++;
    } else if (href.startsWith('/')) internal++;
  }

  // Detect AI tells in text (simple heuristics)
  const aiTells = {};
  const patterns = {
    'em dashes (—)': /—/g,
    'rule-of-three commas': /\b\w+, \w+, (?:and )?\w+\b/g,
    '"rather than"': /\brather than\b/gi,
    '"not just X, it\'s Y"': /\bnot just\b[^.]{1,80}\bit'?s?\b/gi,
    '"stands as"/"serves as"': /\b(stands as|serves as|functions as)\b/gi,
    'showcase/showcasing': /\bshowcas\w+\b/gi,
    'tapestry': /\btapestry\b/gi,
    'testament': /\btestament\b/gi,
    'pivotal/crucial': /\b(pivotal|crucial|vital)\b/gi,
    'leverage (verb)': /\bleverag\w+\b/gi,
    'underscore (verb)': /\bunderscor\w+\b/gi,
    'landscape (abstract)': /\b(evolving|competitive|digital|marketing|business) landscape\b/gi,
    'in today\'s [X] world': /\bin today'?s [^.,]{1,40}\b(world|landscape|environment)\b/gi,
    'delve': /\bdelv\w+\b/gi,
    'tailing negation "no X"': / no [a-z]{3,12}\./g,
    'persuasive "the real question"': /\bthe real (question|issue|problem)\b/gi,
    'signposting "let\'s"': /\blet'?s (dive|explore|break|look at)\b/gi,
  };
  for (const [k,re] of Object.entries(patterns)) {
    const matches = mainText.match(re) || [];
    if (matches.length) aiTells[k] = matches.length;
  }

  console.log(`=== ${name} ===`);
  console.log(`Words (body text, incl nav/footer): ${fullText.split(' ').length}`);
  console.log(`Words (main content only): ${mainText.split(' ').length}`);
  console.log(`H1: ${h1s.length} | H2: ${h2s.length} | H3: ${h3s.length} | Internal links: ${internal} | External: ${external}`);
  if (h1s.length) console.log('  H1:', h1s[0].slice(0,160));
  for (let i=0;i<h2s.length;i++) console.log('  H2:', h2s[i].slice(0,160));
  for (let i=0;i<Math.min(h3s.length,30);i++) console.log('  H3:', h3s[i].slice(0,160));
  console.log('AI tells:', Object.keys(aiTells).length ? aiTells : 'none detected by heuristics');
  // First 600 chars of main text
  console.log('LEDE:', mainText.slice(0,600));
  console.log();
}
