---
name: Tension Lab Fitness
description: Monochrome strength-coaching website with real client evidence.
colors:
  ink: "#0b0b0c"
  ivory: "#ffffff"
  gray: "#606063"
  gray-light: "#b0b0b4"
  line: "#cfcfd2"
  line-dark: "#3d3d40"
  surface-dark: "#151516"
  photo-frame: "#1d1d1f"
  button-hover: "#29292b"
  button-active: "#404043"
  outline-hover: "#f2f2f3"
  light-hover: "#e6e6e6"
  disabled: "#ededee"
typography:
  display:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "clamp(42px, 4.8vw, 72px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-.01em"
  page-title:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "clamp(40px, 5vw, 64px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-.01em"
  headline:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "clamp(30px, 3.5vw, 48px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-.01em"
  title:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-.01em"
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
  label:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.6
  button:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
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
    textColor: "{colors.ivory}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "12px 22px"
  button-primary-hover:
    backgroundColor: "{colors.button-hover}"
  button-primary-active:
    backgroundColor: "{colors.button-active}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "12px 22px"
  button-outline-hover:
    backgroundColor: "{colors.outline-hover}"
  button-light:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "12px 22px"
  button-light-hover:
    backgroundColor: "{colors.light-hover}"
  button-disabled:
    backgroundColor: "{colors.disabled}"
    textColor: "{colors.gray}"
  input:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "12px 14px"
  navigation:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
  review-grid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ivory}"
    typography: "{typography.review}"
---

# Design System: Tension Lab Fitness

## Overview

**Creative North Star: "Black, white, and real client evidence"**

Tension Lab Fitness uses a restrained monochrome system for strength coaching with Sam. Normal-width Helvetica Neue, short headings, square controls, and thin gray rules provide the interface; photographs and attributed client accounts provide the visual substance. The approved direction seeks premium quality inspired by Ultimate Performance.

The page backgrounds are pure white or near-black. Spacing separates information without decorative card layers or oversized slogans. This record describes the implemented HTML, CSS, and JavaScript source. No rendered desktop or mobile review, runtime test, or GitHub deployment is claimed.

**Key Characteristics:**

- Pure white, near-black, and neutral-gray surfaces.
- Normal-width Helvetica Neue throughout.
- Square controls, thin rules, and flat sections.
- Large photographs with visible provenance and factual captions.

## Colors

The palette is monochrome. Frontmatter values preserve the source colors; the source token named `ivory` is pure white.

### Primary

- **Near-black / ink:** primary text, buttons, header, footer, and dark sections.

### Neutral

- **Pure white / ivory:** main canvas, photo captions, light buttons, and text on dark sections.
- **Gray:** supporting copy, labels, and attribution on white.
- **Light gray:** supporting copy and attribution on dark sections.
- **Light rule / dark rule:** one-pixel dividers on their corresponding surfaces.
- **Dark surface / photo frame:** photograph backing planes.
- **Button hover / active, outline hover, light hover, disabled:** the existing neutral control states.

There are no secondary or tertiary accent roles. Sidecar tonal ramps are derived swatch previews, not additional implemented color tokens.

## Typography

**Display and body font:** Helvetica Neue, with Helvetica, Arial, and sans-serif fallbacks. All roles use this normal-width stack; no separate mono or display family is loaded.

Headings use moderate weight, slightly tight tracking, and balanced wrapping. Body copy stays regular and comfortable to read. The scale is a set of observed roles, not a fixed ratio.

- **Display:** homepage headline; the separate page-title role serves interior introductions.
- **Headline / title:** section headings and explanatory row headings. Standard headings have a maximum width of (760px).
- **Body / lead:** lead copy is generally bounded to (44ch), homepage lead to (34ch), explanations to (54–65ch).
- **Label / button:** compact navigation, attribution, and actions. Form labels use (16px / 500); optional markers use (14px / 400).
- **Review:** client-review columns. Case quotes use (20px / 1.5); full-width quote bands use (`clamp(28px, 3.3vw, 44px)` / 1.3).
- **Result heading:** (`clamp(32px, 4.4vw, 56px)`); image weights use tabular numerals. Credits and microcopy use (12px).

## Layout

The centered content container has a maximum width of (1360px), including the fluid gutter token. Standard sections use the largest spacing step vertically; headers, rows, and action groups use the smaller shared steps. Result articles extend to a maximum of (1440px).

Desktop compositions use paired columns: homepage copy/photo (.95 / 1.05), preview photos/copy (1.15 / .85), informational split (.9 / 1.1), contact aside/form (.75 / 1.25), and result photos/content (1.2 / 1). Result articles alternate sides. Main reviews have three columns; the native expanded review group has two. These layouts use `minmax(0, …)` to let content shrink.

- **At (900px) and below:** the header wraps, its desktop contact button is hidden, and navigation becomes two columns. JavaScript exposes a Menu / Close button and collapses navigation; without JavaScript the links remain visible. The contact layout becomes one column.
- **At (760px) and below:** hero, preview, informational split, and form columns stack. Standard section padding becomes (40px). Result articles order heading, photos, then copy; paired photos remain side by side with a (10px) gap. Reviews become a single column with horizontal separators. Footer navigation wraps below the wordmark.
- **Photo geometry:** homepage frame (4:5), client frames (3:4). The homepage frame is capped at (600px) high below the narrower breakpoint.

## Elevation & Depth

The system has no shadows. Contrast between white and near-black planes, dark photograph backing, whitespace, and one-pixel rules separate content. Sections and review columns remain flat; controls change color rather than lift or translate.

## Shapes

Controls and photograph frames have square corners. Inputs explicitly use a zero radius. Thin borders define controls, list rows, reviews, and section boundaries; photographs are clipped to rectangular aspect-ratio frames. The site does not use rounded cards, pills, or chips.

## Components

### Buttons

Square, compact actions with a minimum height of (48px) and a one-pixel border. Primary buttons use ink with white text; outlined buttons use a transparent surface and light rule; light buttons reverse the primary assignment for dark headers. Frontmatter holds their padding and colors.

Primary hover and active states use their existing gray fills. Outline hover changes the background and strengthens the border to ink. Light hover uses its neutral fill. Disabled buttons use muted gray text and the disabled surface. Color and border changes use (150ms ease); no motion is added to the shape.

Interactive elements use a visible current-color outline (2px), offset (4px). Inline text links and attribution links have minimum heights of (44px).

### Inputs / Fields

White fields with one-pixel light rules, a minimum height of (48px), and the body font. Hover strengthens the border to gray; focus strengthens it to ink and keeps the shared focus outline. Textareas resize vertically and start at (136px) high; the read-only inquiry draft starts at (260px). Fields have visible labels and optional markers.

Required name and goals are trimmed before validation; empty or whitespace-only values receive native validation messages. Email uses native email validation. JavaScript enables the prepare action, reveals the local draft, and announces status through a polite live region. Edits hide a stale draft; copy failure selects the text for manual copying. A configured real address exposes an email-draft link. The current placeholder remains explicit, and the page never reports that a message was sent or saved.

### Navigation

A dark header with a text wordmark, ordinary page links, and a light contact action. The header is (80px) tall on desktop; the wordmark uses (18px / 600) with normal tracking. Navigation uses the label role and (48px) link targets. Hover and the current page are underlined, with a (6px) underline offset.

The mobile wordmark is (16px); the menu target is at least (44px). Source behavior closes an open menu on Escape, outside click, and crossing to desktop width; Escape returns focus to its button. A skip-to-content link becomes visible on focus. Footer links remain ordinary links.

### Lists / Review Containers

Explanatory rows place a title beside muted supporting copy, separated by light horizontal rules. Desktop rows use (24px) vertical padding and a (32px) column gap, then stack below the narrower breakpoint.

Reviews sit directly on a dark plane with dark vertical rules and (32px) desktop padding. Text uses the review role; attributed names are linked and muted. A native details disclosure exposes the additional reviews. No carousel, rating feed, or floating card treatment is implemented.

### Photographs / Client Results

The homepage workout photograph is grayscale, fills its frame with `object-fit: cover`, and uses `object-position: center 85%`. Its Rodrigo Rodrigues / Unsplash credit remains visible. It is stock workout imagery, not a trainer or client portrait.

Client before/after pairs retain their actual source photographs, visible Before / After captions, and original Google-review attribution. They are not given the homepage grayscale filter. The first result pair fills its frames with cover; the reversed result pair uses contain. White caption strips align labels and factual weights where supplied. Client names, result headings, context, and short quotes sit beside the photographs on desktop and below/above them in the documented mobile order.

### FAQ Disclosure

Native details rows have light separators and a summary at least (64px) high. A (20px) inline chevron rotates (180deg) when open, using the same (150ms ease) timing. Answers use muted body copy bounded to (65ch). Reduced-motion preferences remove transitions and replace smooth scrolling with automatic scrolling.

## Do's and Don'ts

### Do:

- **Do** use the existing monochrome palette and normal-width Helvetica Neue stack.
- **Do** preserve square controls, visible keyboard focus, and the established spacing rhythm.
- **Do** keep client photographs, review attribution, and stock-photo credit visible.
- **Do** describe contact actions as preparing, copying, or opening an inquiry draft.

### Don't:

- **Don't** add blue, orange, cream, or taupe surfaces, condensed type, or horizontally scaled text.
- **Don't** add decorative shadows, rounded cards, generic slogans, or unsupported metrics.
- **Don't** present stock imagery as Sam or a client, or imply that Tension Lab owns a private gym.
- **Don't** invent pricing, credentials, contact details, or a message-sent state.
