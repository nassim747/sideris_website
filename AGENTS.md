# Sideris Terra Website

## Project

Sideris Terra is an early-stage agricultural intelligence startup.

This website is primarily a credibility and presentation website for:

- farmers
- agronomists
- agricultural organizations
- researchers
- potential pilot partners
- investors and startup ecosystem partners

The website should communicate that Sideris Terra is a real, technically serious company actively developing its technology and seeking pilot projects.

Do not make the company appear more mature than it is.

Never invent:

- customers
- partnerships
- metrics
- testimonials
- pilot results
- scientific claims
- product capabilities

## Design Direction

The visual direction is:

- cinematic
- editorial
- minimalist
- scientific
- geospatial
- agricultural
- quiet and highly intentional

Think more like:

- an editorial publication
- a documentary title sequence
- an architectural studio website
- a scientific field report

and less like a SaaS startup landing page.

The website should rely primarily on:

- typography
- photography
- composition
- whitespace
- pacing
- alignment
- thin rules

## Typography

Preserve the existing typography system.

Use the serif display font for major editorial headlines.

Use the sans-serif font for body text and navigation.

Use monospace only sparingly for technical or contextual information.

Typography should feel editorial rather than like a dashboard.

## Layout

Prefer:

- asymmetric compositions
- large photographic moments
- occasional full-width or full-bleed imagery
- narrow text columns
- generous negative space
- varying section rhythm
- strong editorial typography

Sections should feel like a sequence of scenes rather than identical reusable components.

Do not force every section into the same grid.

## Avoid

Do not introduce generic AI-generated SaaS design patterns.

Avoid:

- gradient text
- glow effects
- glassmorphism
- decorative blobs
- large rounded cards
- feature-card grids
- pill labels
- icons inside colored squares
- excessive shadows
- excessive border radius
- animated gradients
- generic grid backgrounds
- fake dashboards
- fake statistics
- fake customer logos
- unnecessary decorative elements

When deciding between adding something and leaving whitespace, prefer whitespace.

When deciding between clever marketing copy and direct language, prefer direct language.

## Color

Preserve the restrained dark visual identity.

Use the agricultural green accent sparingly.

Do not introduce additional accent colors without a strong reason.

## Motion

Motion should be extremely restrained.

Acceptable examples:

- subtle opacity reveals
- very slight image movement
- gentle transitions

Avoid:

- bouncing elements
- aggressive scroll animations
- animation for its own sake

The site should remain effective with all animation disabled.

## Product / Content

Preserve the core content and meaning unless explicitly instructed otherwise.

The main narrative is:

Sideris Terra combines satellite and environmental information to help farmers and agronomists better understand crop conditions at the parcel level.

The company is currently seeking pilot partners.

Do not overstate what the technology currently does.

## Engineering

Keep the implementation simple.

Do not add dependencies unless there is a strong technical reason.

Prefer straightforward HTML, React, Tailwind and CSS over adding UI libraries.

Do not use a shadcn component merely because one exists.

Preserve responsive behavior and accessibility.

Make focused changes rather than rewriting the entire project unless explicitly requested.

Before modifying a major section, inspect the existing implementation and reuse what is already good.

## Validation

After making meaningful code changes, run:

npm run lint
npm test

Fix failures caused by your changes before considering the task complete.

Always summarize:

1. what was changed
2. why it was changed
3. which validation commands were run