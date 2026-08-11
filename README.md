# Tariq Ali — Portfolio

Production-ready personal portfolio and résumé website for **Tariq Ali, Senior Full-Stack Software Engineer**.

Built with **Next.js, React, TypeScript, Node.js route handlers, MongoDB/Mongoose, and Gmail SMTP**, the project is designed to function as both a recruiter-facing portfolio and a technically credible full-stack application.

## Live Site

**https://tariqali13.com**

## Highlights

- Modern responsive portfolio homepage
- Dedicated résumé experience
- Project and engineering experience showcase
- Contact workflow backed by a server-side Next.js route
- MongoDB persistence for contact submissions
- Gmail SMTP delivery with Nodemailer
- SEO metadata, canonical URL, Open Graph metadata, sitemap and robots configuration
- Schema.org `Person` structured data
- Dark/light theme
- Accessible navigation and reduced-motion support
- Printable résumé page
- Downloadable PDF résumé

## Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- modern responsive CSS/UI patterns

### Backend

- Next.js Node.js route handlers
- MongoDB
- Mongoose
- Nodemailer / Gmail SMTP

### Platform & SEO

- Netlify / modern serverless deployment workflow
- custom domain
- Open Graph metadata
- canonical URLs
- sitemap
- robots.txt
- structured data

## Architecture

```text
Browser
   |
   v
Next.js Application
   |
   +------> Portfolio / Resume UI
   |
   +------> Server Route Handler
                 |
                 +------> MongoDB
                 |
                 +------> Gmail SMTP
```

The content layer is intentionally separated from the page components so experience, projects, skills and contact details can be maintained without repeatedly rewriting presentation logic.

## Local Development

### Requirements

- Node.js
- npm
- MongoDB connection for contact persistence
- Gmail App Password if SMTP delivery is enabled

### Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open:

```text
http://localhost:3000
```

## Environment Variables

Use `.env.example` as the source of required configuration.

Typical runtime configuration includes:

```text
MONGODB_URI=
GMAIL_USER=
GMAIL_APP_PASSWORD=
NEXT_PUBLIC_SITE_URL=
```

Never commit production credentials or ordinary Gmail passwords. Gmail SMTP should use an App Password on an account with 2-Step Verification enabled.

## Deployment

The project can be deployed to a modern Next.js-compatible hosting provider.

General deployment flow:

1. Push the repository to GitHub.
2. Connect the repository to the hosting provider.
3. Add environment variables securely in the deployment dashboard.
4. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
5. Connect the custom domain.
6. Verify the contact workflow and SEO URLs after deployment.

MongoDB Atlas can be used as the hosted database. Use a dedicated database user with appropriately restricted credentials.

## Contact Workflow

The site provides multiple recruiter/client contact paths:

- direct WhatsApp contact
- direct email contact
- structured contact form

The form can persist the inquiry in MongoDB and deliver a notification through Gmail SMTP.

## Content Management

Primary portfolio content is maintained in:

```text
data/portfolio.ts
```

This keeps experience, projects, skills and personal profile content separate from page rendering logic.

## Engineering Goals

This repository is intentionally more than a static résumé page. It demonstrates practical full-stack concerns such as:

- separation of content and presentation
- server-side contact handling
- database persistence
- secure environment configuration
- production SEO
- accessibility
- responsive design
- deployable application structure

## Author

**Tariq Ali**  
Senior Full-Stack Software Engineer

- Portfolio: https://tariqali13.com
- GitHub: https://github.com/Tariqali13
- LinkedIn: https://www.linkedin.com/in/tariq-ali-116678156/
