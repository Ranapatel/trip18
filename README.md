# TripSage — AI Travel Planner Landing Page

A production-ready Next.js 14 landing page with Supabase lead capture.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Supabase** (PostgreSQL + Row Level Security)

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.local.example .env.local
```
Edit `.env.local` and add your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Set up Supabase database
- Go to your [Supabase dashboard](https://supabase.com/dashboard)
- Open **SQL Editor**
- Paste and run the contents of `supabase/migration.sql`

### 4. Run dev server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
/
├── app/
│   ├── globals.css        # Tailwind base styles
│   ├── layout.tsx         # Root layout + metadata + Inter font
│   └── page.tsx           # Page composition
├── components/
│   ├── Header.tsx         # Sticky nav with scroll-to anchors
│   ├── Hero.tsx           # Hero + floating trip card preview
│   ├── Problem.tsx        # Dark "Travel Planning is Broken" section
│   ├── Solution.tsx       # 3-step solution + AI builder card
│   ├── Features.tsx       # 4-feature grid + stat row
│   ├── Example.tsx        # Full Goa trip breakdown card
│   ├── Comparison.tsx     # Traditional Apps vs TripSage table
│   ├── Testimonials.tsx   # 3 user quotes + social proof bar
│   ├── CTA.tsx            # Dark final CTA section
│   ├── LeadForm.tsx       # Supabase waitlist form (full validation)
│   └── Footer.tsx         # Footer with links
├── lib/
│   └── supabaseClient.ts  # Supabase client + Lead type
├── supabase/
│   └── migration.sql      # DB setup — run in SQL Editor
├── .env.local.example     # Environment variable template
└── tailwind.config.ts     # Accent color config (indigo)
```

## Supabase leads Table

| Column       | Type        | Notes                        |
|-------------|-------------|------------------------------|
| id           | uuid        | Primary key, auto-generated  |
| email        | text        | Required, unique             |
| preference   | text        | Optional, enum-checked       |
| created_at   | timestamptz | Auto-set to now()            |

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new) and add these environment variables in the Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Customisation

- **Accent color**: Change `accent.DEFAULT` in `tailwind.config.ts` to retheme everything
- **Content**: Edit text directly in each component file
- **Supabase table**: Extend `supabase/migration.sql` and the `Lead` type in `lib/supabaseClient.ts`
