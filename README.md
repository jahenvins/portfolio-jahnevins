# Gmail-inbox portfolio (Next.js + TypeScript + Tailwind + Framer Motion)

## 1. Install
```bash
npm install
```

## 2. Run locally
```bash
npm run dev
```
Open http://localhost:3000

## 3. Make it yours
Edit `data/portfolio.ts` — your name, about text, skills, real projects,
email, LinkedIn, GitHub, and resume path.

Drop your actual `resume.pdf` into the `public/` folder — it's already
referenced as `/resume.pdf` in the data file.

## 4. Wire up the real contact form (Formspree)
1. Go to https://formspree.io and sign up free.
2. Create a new form, copy the endpoint it gives you
   (looks like `https://formspree.io/f/abcd1234`).
3. Open `components/ComposeModal.tsx` and replace:
   ```ts
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
   with your real endpoint.
4. That's it — messages sent through the "Compose" button will land in
   your Formspree inbox (and can forward to your real email).

## 5. Deploy (free)
1. Push this project to a GitHub repo.
2. Go to https://vercel.com, "Import Project", pick your repo.
3. Deploy — you'll get a live URL in about a minute.
4. (Optional) Add a custom domain in Vercel's project settings.

## Project structure
```
app/            Next.js App Router pages + layout + global CSS
components/     All UI pieces (Sidebar, EmailList, ReadingPane, ComposeModal, Inbox)
data/           portfolio.ts — all your editable content lives here
lib/            Shared TypeScript types
public/         Static files (put resume.pdf here)
```

## Notes
- Fonts are loaded via `next/font/google` (Roboto) — no separate Fontsource
  install needed since Next.js optimizes and self-hosts Google Fonts
  automatically at build time.
- Colors and design tokens live in `tailwind.config.ts` under `theme.colors`
  (`gred`, `gblue`, `gsidebar`, etc.) if you want to retheme later.
