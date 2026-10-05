# Tension Lab Fitness

A complete static strength-coaching website for Sam in Long Beach.

## Pages

- `index.html` — homepage with a workout photograph, coaching overview, and client progress.
- `coaching.html` — coaching approach and practical questions.
- `results.html` — original client before/after photos and Google review excerpts.
- `about.html` — Sam's approach, using confirmed facts and client observations.
- `contact.html` — an inquiry form that prepares text locally.
- `404.html` — a custom missing-page screen.

All pages share `assets/site.css`, navigation behavior, and contact configuration. Links are relative so the site works under a GitHub repository path as well as a custom domain.

## Open locally

Open `index.html` in a browser. No installation or framework build is required to view the source site.

## Publish through GitHub Actions

1. Put the contents of this folder at the root of your GitHub repository, including the hidden `.github` folder.
2. Use `main` as the deployment branch, or edit the branch in `.github/workflows/deploy.yml`.
3. In the repository, select **Settings → Pages → Source → GitHub Actions**.
4. Push to `main`, or open **Actions → Deploy website to GitHub Pages → Run workflow**.

The workflow packages the public files into `_site`, uploads the Pages artifact, and deploys it. Product documentation and development notes are not included in the published website.

The workflow uses the current actions from [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages). Publishing-source setup is described in [GitHub's Pages settings guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Contact configuration

The user requested a placeholder contact for this draft. Edit `assets/site-config.js` when Sam supplies a real email:

```js
window.TENSION_LAB_CONFIG = Object.freeze({
  contactEmail: "sam@your-real-domain.com",
  contactIsPlaceholder: false
});
```

With the placeholder enabled, the form prepares an inquiry that visitors can copy. It does not send messages. With a real email configured, it also provides **Open email app**, with the inquiry already filled in. The visitor sends it through their email app; GitHub Pages does not provide a form backend.

The deployment build also updates the static email fallback. Run `python3 scripts/build.py` to package locally after changing the configuration.

## Content and images

Photo and review sources are documented in `ASSETS.md`. The workout photograph is stock imagery; the Results photos are the original client photos used in the existing project. The Google rating is a recorded content snapshot, not a live integration.

The site does not invent prices, trainer credentials, a trainer portrait, or a private Tension Lab gym. Add confirmed information directly to the relevant HTML page when it is available.

## Work completed and review scope

Source files and original imagery were reviewed. No implementation tests or live browser screenshots were run in this build. The earlier browser local-file restriction was respected.
