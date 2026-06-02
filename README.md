# Maintenance AI Hub - Cloud Starter

Cloud route for the centralized maintenance troubleshooting and repair program.

## Stack

- Next.js app
- Vercel deployment
- Supabase Postgres database
- Supabase Storage for PDFs/manuals
- OpenAI API for troubleshooting assistant

## What this starter includes

- Equipment table/page
- Document upload metadata structure
- Repair log structure
- AI troubleshooting API route
- Supabase SQL schema
- Environment variable template

## Setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` inside the Supabase SQL editor.
3. Create a private Supabase Storage bucket named:

```text
machine-documents
```

4. Create a `.env.local` file from `.env.example`.
5. Install dependencies:

```bash
npm install
```

6. Run locally:

```bash
npm run dev
```

7. Deploy to Vercel when ready.

## Safety

This app is a maintenance assistant. It should not replace OEM manuals, approved company procedures, lockout/tagout, safety rules, or qualified maintenance judgment.
