"""Package the static site for GitHub Pages. No third-party dependencies."""

from html import escape
import json
import os
from pathlib import Path
import re
import shutil

ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "_site"
PAGES = ("index.html", "method.html", "coaching.html", "results.html", "about.html", "contact.html", "404.html")
base_path = os.environ.get("SITE_BASE_PATH", "").rstrip("/")
if base_path and not base_path.startswith("/"):
    raise ValueError("SITE_BASE_PATH must be empty or start with a slash")
site_url = os.environ.get("SITE_URL", "https://habonnur.github.io/tension-lab-fitness").rstrip("/")

config = (ROOT / "assets" / "site-config.js").read_text(encoding="utf-8")
email_match = re.search(r'contactEmail:\s*"([^"\n]+)"', config)
email = email_match.group(1).strip() if email_match else "hello@example.com"
is_real_contact = (
    re.fullmatch(r"[^\s@]+@[^\s@]+\.[^\s@]+", email) is not None
    and not re.search(r"@example\.(com|org|net)$", email, re.I)
)

OUTPUT.mkdir(exist_ok=True)
shutil.copytree(ROOT / "assets", OUTPUT / "assets", dirs_exist_ok=True, ignore=shutil.ignore_patterns("*.json"))

for filename in PAGES:
    content = (ROOT / filename).read_text(encoding="utf-8")
    canonical = f"{site_url}/" if filename == "index.html" else f"{site_url}/{filename}"
    metadata = (
        f'<link rel="canonical" href="{escape(canonical, quote=True)}">\n'
        f'  <meta property="og:url" content="{escape(canonical, quote=True)}">\n'
        f'  <meta property="og:image" content="{escape(site_url, quote=True)}/assets/strength-hero.webp">\n'
        '  <meta property="og:image:alt" content="Illustrative strength training image">\n'
        '  <meta name="twitter:card" content="summary_large_image">\n'
        '  <link rel="preload" href="assets/fonts/anton-regular.ttf" as="font" type="font/ttf" crossorigin>\n'
    )
    if filename == "404.html":
        metadata = '<meta name="robots" content="noindex">\n'
    if filename == "index.html":
        data = {"@context": "https://schema.org", "@type": "ProfessionalService", "name": "Tension Lab Fitness", "url": f"{site_url}/", "telephone": "+1-408-202-7994", "areaServed": {"@type": "City", "name": "Long Beach"}, "description": "Personal strength coaching with Sam in Long Beach."}
        metadata += f'  <script type="application/ld+json">{json.dumps(data)}</script>\n'
    content = content.replace("  <title>", f"  {metadata}  <title>", 1)
    if filename == "contact.html" and is_real_contact:
        content = content.replace('href="mailto:" data-email-link', f'href="mailto:{escape(email, quote=True)}" data-email-link')
        content = content.replace("data-email-link hidden", "data-email-link")
    if filename == "404.html":
        def root_link(match):
            attribute, value = match.groups()
            if value.startswith(("http:", "https:", "mailto:", "#", "/", "data:")):
                return match.group(0)
            return f'{attribute}="{base_path}/{value}"'
        content = re.sub(r'(href|src)="([^"]+)"', root_link, content)
    (OUTPUT / filename).write_text(content, encoding="utf-8")

(OUTPUT / ".nojekyll").write_text("", encoding="utf-8")
(OUTPUT / "sitemap.xml").write_text(
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + "".join(f'<url><loc>{escape(site_url)}/{"" if page == "index.html" else page}</loc></url>\n' for page in PAGES if page != "404.html")
    + '</urlset>\n', encoding="utf-8"
)
(OUTPUT / "robots.txt").write_text(f"User-agent: *\nAllow: /\nSitemap: {site_url}/sitemap.xml\n", encoding="utf-8")
print(f"Packaged {len(PAGES)} pages and their assets in {OUTPUT}")
