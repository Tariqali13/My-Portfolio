# Tariq Ali — Portfolio

A production-ready portfolio and résumé site built with Next.js, React, TypeScript, Node.js route handlers, MongoDB/Mongoose and Gmail SMTP.

## Features

- Modern responsive portfolio homepage
- Project showcase and full résumé routes
- Direct WhatsApp contact link
- Direct Gmail compose link
- Contact form backed by a Next.js Node route
- MongoDB persistence for contact submissions
- Gmail SMTP delivery with Nodemailer
- SEO metadata, canonical URL, Open Graph image, sitemap and robots.txt
- Schema.org `Person` structured data
- Dark/light theme
- Keyboard-friendly navigation and reduced-motion support
- Printable résumé page
- Downloadable PDF résumé

## Run locally

1. Install Node.js.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy environment variables:

   ```bash
   cp .env.example .env.local
   ```

4. Add your MongoDB Atlas connection string.

5. For Gmail form delivery, enable 2-Step Verification on the Google account and create a Google App Password. Put the app password in `GMAIL_APP_PASSWORD`. Do not use your normal Gmail password.

6. Start:

   ```bash
   npm run dev
   ```

Open `http://localhost:3000`.

## Deploy

Vercel is the simplest deployment target for this Next.js project:

- Push this folder to GitHub.
- Import the repository in Vercel.
- Add the environment variables from `.env.example`.
- Set `NEXT_PUBLIC_SITE_URL` to the final domain.
- Deploy.

MongoDB Atlas works well as the hosted database. Restrict database credentials and create a dedicated database user for this site.

## Contact behavior

- Phone link opens WhatsApp directly at `+92 310 4832079`.
- Email button opens a pre-addressed Gmail compose window for `tariqali99.ta@gmail.com`.
- The contact form can both save the inquiry in MongoDB and send an email via Gmail SMTP.

## Content

Edit `data/portfolio.ts` to change experience, projects, skills, contact details or résumé copy without touching the page components.
