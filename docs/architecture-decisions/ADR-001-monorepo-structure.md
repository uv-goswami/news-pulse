# ADR-001: Monorepo Structure

## Status
Accepted – Implemented

## Context
The project has three distinct components: a Python scraper, a Node.js API, and a Next.js frontend. These need to be delivered in a single repository for easy review and deployment. The assessment explicitly asks for `/scraper`, `/backend`, and `/frontend` folders.

## Decision
I chose a single Git monorepo with clearly separated top‑level folders.

## Why
- One `git clone` gives the entire project – simple for the reviewer.
- Shared configuration (`.env.example`, root `.gitignore`) lives in one place.
- Branches (`docs`, `backend`, `frontend`) map directly to the folder structure, making it clear which part is being worked on.

## Alternatives Considered
**Three separate repositories** – would isolate services but require multiple clones and add friction for reviewing the whole project.  

## Consequences
- Python and Node.js dependencies live in the same repo but in separate virtual environments / `node_modules` – they never share runtime.
- The root README must document the overall project and link to each service’s own documentation.

## Date
2026-06-27