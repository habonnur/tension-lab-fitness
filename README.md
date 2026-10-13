# Tension Lab Fitness

A complete static strength-coaching website for Sam in Long Beach.

- Live site: https://habonnur.github.io/tension-lab-fitness/
- Repository: https://github.com/habonnur/tension-lab-fitness
- Visual direction: the user-approved condensed-heading mockup, near-black and crisp white, with high-contrast coaching buttons.

## Pages

- `index.html` — homepage with a workout photograph, coaching overview, and client progress.
- `method.html` — Assess / Program / Coach / Adapt, with links to client evidence.
- `coaching.html` — coaching approach and practical questions.
- `results.html` — original client before/after photos and Google review excerpts.
- `about.html` — Sam's approach, using confirmed facts and client observations.
- `contact.html` — call Sam or prepare a message to open in the visitor's messaging app.
- `404.html` — a custom missing-page screen.

All pages share `assets/site.css`, navigation behavior, and contact configuration. Links are relative so the site works under a GitHub repository path as well as a custom domain.

## Open locally

No frontend package installation is needed. Python 3 packages the site, including metadata and a sitemap:

```sh
python3 scripts/build.py
python3 -m http.server 8765 --bind 127.0.0.1 --directory _site
```

Then open http://127.0.0.1:8765/ . The output directory is ignored by Git.

## Publish through GitHub Actions

1. Put the contents of this folder at the root of your GitHub repository, including the hidden `.github` folder.
2. Use `main` as the deployment branch, or edit the branch in `.github/workflows/deploy.yml`.
3. In the repository, select **Settings → Pages → Source → GitHub Actions**.
4. Push to `main`, or open **Actions → Deploy website to GitHub Pages → Run workflow**.

The workflow packages the public files into `_site`, uploads the Pages artifact, and deploys it. Product documentation and development notes are not included in the published website.

The workflow uses the current actions from [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages). Publishing-source setup is described in [GitHub's Pages settings guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Contact configuration

The public business number, (408) 202-7994, was verified against the Google listing on October 12, 2026. It powers the call and SMS links. Add Sam's email in `assets/site-config.js` if he prefers email inquiries:

```js
window.TENSION_LAB_CONFIG = Object.freeze({
  contactPhone: "+14082027994",
  contactEmail: ""
});
```

The **Preview message** action prepares a draft locally and offers **Open text message** or **Copy message**. A messaging app is required for SMS. With a valid email configured, **Email Sam** and **Open email app** also become available. Visitors review and send from their own app. The website has no message-delivery backend, analytics, advertising cookies, or database, and does not store form entries.

The deployment build also updates the email fallback for visitors with JavaScript disabled. After changing the public phone, update the visible phone text and fallback links in `contact.html` and structured data in `scripts/build.py` as well. For a custom domain, set `SITE_URL` in the workflow and configure that domain in Pages settings.

## Content and images

Photo and review sources are documented in `ASSETS.md`. The homepage campaign image is generated illustration; the About page uses credited stock photography. All four Results photos are original client review images, used with permission. Review links point to Google; the website does not claim a live review count.

The site does not invent prices, trainer credentials, a trainer portrait, or a private Tension Lab gym. Add confirmed information directly to the relevant HTML page when it is available.

## Work completed and review scope

The static build completed, and all six content pages were visually reviewed at 1440px and 390px widths; the homepage was also inspected at the user's 692px viewport. Screenshots are local review artifacts and are not published. No implementation tests were requested or run. A future form backend or booking integration needs Sam's chosen service and destination.
