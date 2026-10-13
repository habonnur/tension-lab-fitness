---
name: Tension Lab Fitness
description: Strength coaching with condensed type, near-black and crisp white, and real client evidence.
colors:
  ink: "#0b0b0c"
  white: "#ffffff"
  gray: "#5c5c5c"
  gray-light: "#bdbdbd"
  line: "#d1d1d1"
  control-line: "#888888"
  line-dark: "#3d3d40"
  surface-dark: "#151516"
  photo-frame: "#1d1d1f"
  button-hover: "#29292b"
  button-active: "#404043"
  outline-hover: "#f2f2f3"
  light-hover: "#e6e6e6"
  dark-section-hover: "#e6e6e6"
  disabled: "#ededee"
typography:
  display:
    fontFamily: '"Anton", "Arial Narrow", sans-serif'
    fontSize: "clamp(68px, 7.2vw, 108px)"
    fontWeight: 400
    lineHeight: 1.03
    letterSpacing: "-.025em"
  page-title:
    fontFamily: '"Anton", "Arial Narrow", sans-serif'
    fontSize: "clamp(48px, 6vw, 88px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-.015em"
  headline:
    fontFamily: '"Anton", "Arial Narrow", sans-serif'
    fontSize: "clamp(34px, 4vw, 58px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-.015em"
  title:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "27px"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: ".015em"
  body:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  navigation:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: ".09em"
  wordmark:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "23px"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: ".13em"
  button:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: ".065em"
  review:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  square: "0"
spacing:
  space-1: "4px"
  space-2: "8px"
  space-3: "12px"
  space-4: "16px"
  space-6: "24px"
  space-8: "32px"
  space-12: "48px"
  space-16: "64px"
  gutter: "clamp(22px, 5.5vw, 80px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.button-hover}"
  button-primary-active:
    backgroundColor: "{colors.button-active}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "12px 24px"
  button-outline-hover:
    backgroundColor: "{colors.outline-hover}"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "12px 24px"
  button-light-hover:
    backgroundColor: "{colors.light-hover}"
  button-dark-section-hover:
    backgroundColor: "{colors.dark-section-hover}"
  button-disabled:
    backgroundColor: "{colors.disabled}"
    textColor: "{colors.gray}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "12px 14px"
  navigation:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.navigation}"
  review-grid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.review}"
---

# Design System: Tension Lab Fitness

## Overview

**Creative North Star: "Condensed strength, real client evidence"**

Tension Lab Fitness pairs condensed uppercase headings with generous near-black and crisp white planes. Anton establishes the strong display voice; Barlow Condensed carries the wordmark, navigation, row headings, and square actions. Helvetica keeps explanations, reviews, and forms readable. The user selected the condensed-heading mockup, then requested crisp white surfaces in place of tan. Preserve the condensed typography with the updated white palette.

Large training imagery establishes atmosphere, while original client photographs and attributed accounts supply evidence. Fine dividers and spacing structure the flat pages. A single restrained homepage image reveal provides motion; the rest of the interface uses direct color changes and native disclosures. The durable system is extracted from the implemented site; page-specific composition lives in `.impeccable/surfaces/full-site.md`.

**Key Characteristics:**

- Near-black, crisp white, and muted gray surfaces.
- Anton display headings, Barlow Condensed controls, and Helvetica body copy.
- Square controls, fine rules, flat sections, and visible keyboard focus.
- Large illustrative training imagery alongside original, attributed client evidence.

## Colors

The palette is restrained and neutral; the frontmatter records the implemented values.

### Primary

- **Near-black / ink:** primary text and actions, header, footer, and dark sections.

### Neutral

- **Crisp white:** main canvas, photo captions, light actions, and text on dark sections.
- **Gray:** supporting copy, labels, and attribution on white.
- **Light gray:** supporting copy and attribution on dark sections.
- **Light rule / dark rule:** one-pixel dividers on their corresponding surfaces.
- **Control line:** a stronger neutral border for fields and outlined buttons on white.
- **Dark surface / photo frame:** photograph backing planes.
- **Button hover / active, outline hover, light hover, dark-section hover, disabled:** the implemented control-state fills.

There are no secondary or tertiary accent roles. The sidecar's derived tonal ramps are swatch previews, not additional implemented tokens.

**The Contrast Rule.** Use ink and white for the primary hierarchy; retain muted gray for supporting text and fine rules for separation. CTA emphasis comes from contrast, not an orange or blue accent.

## Typography

**Display font:** Anton Regular, with Arial Narrow and sans-serif fallbacks. **Control and wordmark font:** Barlow Condensed Semibold, with the same fallbacks. Both are self-hosted with `font-display: swap`. **Body font:** Helvetica Neue, Helvetica, Arial, sans-serif.

Condensed uppercase type supplies the visual identity without stretching text. Body copy stays regular and sentence case. The hierarchy is a set of observed roles, not a fixed ratio.

- **Display:** homepage headline; tighter leading and tracking than interior headings. At the header breakpoint it uses `clamp(64px, 8.8vw, 88px)`; at the content breakpoint it uses `clamp(58px, 12vw, 88px)`.
- **Page title / headline:** interior introductions and section headings. Maximum widths are (900px) and (850px), respectively.
- **Title:** explanatory row headings use Barlow Condensed. All heading levels are uppercase with balanced wrapping except the homepage's explicit line breaks.
- **Body / lead:** ordinary body copy and introductory text. Leads are generally bounded to (44ch); homepage lead uses `clamp(18px, 1.7vw, 25px)` with (1.45) leading and a (36ch) desktop measure, capped at (35ch) on mobile; balanced wrapping keeps the short hero line from leaving an isolated word. Explanatory copy uses (54–65ch).
- **Navigation / wordmark / button:** uppercase Barlow Condensed with the role-specific tracking in frontmatter. Body-style form labels use (16px / 500), optional markers use (14px / 400), and attribution remains Helvetica.
- **Review:** client-review columns. Case quotes use (20px / 1.5); quote bands use `clamp(28px, 3.3vw, 44px)` with (1.3) leading. Result headings use Anton at `clamp(42px, 4.8vw, 68px)`.
- **Supporting type:** photo weights use tabular numerals; credits and microcopy use (12px).

**The Type Roles Rule.** Use Anton for display hierarchy, Barlow Condensed for navigation and actions, and Helvetica for sustained reading. Preserve the natural widths of all three families.

## Layout

The centered content container has a maximum width of (1520px), including the fluid gutter token. Standard sections use `clamp(56px, 7vw, 104px)` vertical padding. Interior introductions use (72px); result articles extend to a maximum of (1440px).

Desktop compositions use paired columns: preview photos/copy (1.15 / .85), informational split (.9 / 1.1), contact aside/form (.75 / 1.25), and result photos/content (1.2 / 1). Result articles alternate sides. Main reviews have three columns; the native expanded review group has two. These grids use `minmax(0, …)` so content can shrink.

The homepage has full-width background imagery behind copy occupying (51%) of the container and a hero minimum height of `clamp(620px, 49vw, 780px)`. Its method strip has four equal linked columns. Real client progress and a review follow before the coaching overview. This composition belongs to the homepage, not every surface.

- **At (900px) and below:** the header wraps, its desktop contact action hides, and navigation becomes two columns. JavaScript exposes a Menu / Close button and collapses the links; without JavaScript they remain visible. Contact becomes one column, the wordmark becomes (20px) with (.09em) tracking, and homepage copy becomes (60%) wide.
- **At (760px) and below:** the homepage copy and image become separate stacked blocks. Preview, informational split, method details, explanatory rows, and form columns also stack. Standard section padding becomes (56px). The method strip becomes two columns. Result articles order heading, photos, then copy; photos remain paired with a (10px) gap. Reviews become one column with horizontal separators. Footer navigation wraps below the wordmark.
- **Photo geometry:** client frames use (3:4). The desktop homepage image fills its hero with cover and a (65% center) position; mobile uses a height of `clamp(300px, 72vw, 520px)` and (80% center). The About image is (440px) high on desktop and (380px) on mobile.

## Elevation & Depth

There are no shadows. Near-black and white planes, dark image backing, whitespace, and one-pixel rules provide separation. A gradient over the desktop hero preserves text contrast. Sections and review columns remain flat; controls change color without lifting.

**The Flat Surface Rule.** Separate content through surface contrast, spacing, and rules rather than decorative shadows or floating cards.

## Shapes

Controls and photograph frames have square corners. Inputs explicitly use a zero radius. Thin borders define controls, list rows, reviews, and section boundaries. Client photographs are clipped to rectangular aspect-ratio frames. The site has no rounded cards, pills, or chips.

## Components

### Buttons

Square, uppercase actions have a minimum height of (52px) and a one-pixel border. Primary actions use ink with white text; outlined actions use a transparent background and the control-line border; light actions reverse the palette. Prominent inquiry entry links use Contact Sam. Frontmatter holds their padding and colors.

Primary hover and active states use the recorded fills. Outline hover strengthens its border to ink and applies its light fill. Light actions use the light-hover fill; actions inside dark sections and the review band use the separate dark-section-hover fill. The homepage outline action starts white on ink and inverts on hover. Disabled actions use muted text and the disabled surface.

Background and border transitions use (150ms ease). On mobile, homepage actions use (17px) text and (17px) horizontal padding. Interactive elements share a current-color focus outline (2px), offset (4px). Inline links and attribution targets have a minimum height of (44px).

### Inputs / Fields

White fields have one-pixel control-line borders, a minimum height of (48px), and the body font. Hover strengthens the border to gray; focus strengthens it to ink with the shared outline. Textareas resize vertically and start at (136px); the read-only inquiry draft starts at (260px). Visible labels distinguish required fields and optional information. A short explanation above the fields establishes that visitors prepare a message and then review and send it from their own messaging app.

The name and goals are required and trimmed before native validation. Email is optional with native format validation. Preparing an inquiry reveals a local draft and announces its state through a polite live region. Editing the form hides a stale draft. Copy failure selects the draft for manual copying. Call, text-draft, and copy actions are explicit; an email-draft action appears only when a valid address is configured. No successful-send state exists.

Use Contact Sam for entry actions, Preview message for the form action, and Your message / Copy message for the draft. Keep the messaging-app handoff clear. Marketing headings and supporting copy should be brief and centered on tailored training, technique, and consistency; retain attributed client quotes verbatim.

### Navigation

A dark header combines the Barlow Condensed wordmark, page links, and a light contact action. Desktop header minimum height is (82px); navigation targets are at least (48px). Hover and the current page are underlined with a (6px) offset. The wordmark uses the frontmatter role.

Mobile header minimum height is (76px), with (16px) vertical padding and a Menu / Close target at least (44px). An open menu closes on Escape, outside click, or crossing to desktop width; Escape returns focus to the menu button. A skip-to-content link appears on focus. The footer uses ordinary body-style links.

### Lists / Review Containers

Explanatory rows place a Barlow Condensed title beside muted body copy, separated by light rules. Desktop rows use (24px) vertical padding and a (32px) gap, then stack at the content breakpoint. The linked method strip uses Barlow Condensed uppercase labels at (24px), becoming (21px) on mobile.

Reviews sit directly on a dark plane with dark vertical rules and (32px) desktop padding. Attributed names are linked and muted. A native details disclosure exposes additional reviews. Mobile reviews use (24px) vertical padding and horizontal separators.

### Photographs / Client Results

The homepage campaign image is generated illustration, not a real client, trainer, result, or verified training location. It uses cover cropping and a desktop gradient; it receives no grayscale filter. A clip-path reveal runs for (950ms) with `cubic-bezier(.16,1,.3,1)` only when reduced motion is not requested.

The About stock photograph uses grayscale and cover cropping with (center 75%) positioning. Its visible Rodrigo Rodrigues / Unsplash credit remains attached. Original client before/after photographs retain visible captions and Google-review attribution. They receive no generated alterations or grayscale filter. The first pair uses cover; the reversed pair uses contain. White caption strips align labels with factual weights when supplied.

### FAQ Disclosure

Native details rows have light separators and a summary at least (64px) high. A (20px) inline SVG chevron rotates (180deg) when open with a (150ms ease) transition. Answers use muted body copy bounded to (65ch). Reduced-motion preferences remove animations and transitions and change smooth scrolling to automatic scrolling.

## Do's and Don'ts

### Do:

- Do use near-black and crisp white with the documented Anton, Barlow Condensed, and Helvetica roles.
- Do preserve square controls, visible keyboard focus, and the established responsive spacing.
- Do retain original client photographs, review attribution, and the About stock-photo credit.
- Do describe inquiry actions as preparing, copying, or opening a draft for the visitor to send.

### Don't:

- Don't restore warm tan surfaces, replace the condensed display type with Helvetica, or add orange or blue CTAs.
- Don't horizontally scale type, introduce decorative shadows, or round the established square controls.
- Don't present generated or stock imagery as a real client, Sam, or his training location.
- Don't invent result metrics, credentials, prices, contact details, or a message-sent state.
