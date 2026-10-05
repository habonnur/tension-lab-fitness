"""Package the static site for GitHub Pages. No third-party dependencies."""

from html import escape
import os
from pathlib import Path
import re
import shutil

ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "_site"
PAGES = ("index.html", "coaching.html", "results.html", "about.html", "contact.html", "404.html")
base_path = os.environ.get("SITE_BASE_PATH", "").rstrip("/")
if base_path and not base_path.startswith("/"):
    raise ValueError("SITE_BASE_PATH must be empty or start with a slash")

config = (ROOT / "assets" / "site-config.js").read_text(encoding="utf-8")
email_match = re.search(r'contactEmail:\s*"([^"\n]+)"', config)
email = email_match.group(1).strip() if email_match else "hello@example.com"
is_real_contact = (
    re.search(r"contactIsPlaceholder:\s*false\b", config) is not None
    and re.fullmatch(r"[^\s@]+@[^\s@]+\.[^\s@]+", email) is not None
    and not re.search(r"@example\.(com|org|net)$", email, re.I)
)

OUTPUT.mkdir(exist_ok=True)
shutil.copytree(ROOT / "assets", OUTPUT / "assets", dirs_exist_ok=True)

for filename in PAGES:
    content = (ROOT / filename).read_text(encoding="utf-8")
    if filename == "contact.html" and is_real_contact:
        content = content.replace("hello@example.com", escape(email, quote=True))
        content = content.replace("data-email-link hidden", "data-email-link")
        content = content.replace("data-placeholder-note>", "data-placeholder-note hidden>")
        content = content.replace(
            "JavaScript is needed to prepare an inquiry. The contact email is a placeholder in this draft.",
            "JavaScript is needed to prepare an inquiry. You can also email Sam directly using the link on this page.",
        )
    if filename == "404.html":
        def root_link(match):
            attribute, value = match.groups()
            if value.startswith(("http:", "https:", "mailto:", "#", "/", "data:")):
                return match.group(0)
            return f'{attribute}="{base_path}/{value}"'
        content = re.sub(r'(href|src)="([^"]+)"', root_link, content)
    (OUTPUT / filename).write_text(content, encoding="utf-8")

(OUTPUT / ".nojekyll").write_text("", encoding="utf-8")
print(f"Packaged {len(PAGES)} pages and their assets in {OUTPUT}")
