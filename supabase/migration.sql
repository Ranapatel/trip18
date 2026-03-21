-- ============================================================
-- TripSage: Supabase Setup Migration
-- Run this in your Supabase project SQL Editor
-- ============================================================

-- 1. Create the leads table
create table if not exists public.leads (
  id          uuid        default gen_random_uuid() primary key,
  email       text        not null unique,
  preference  text        check (preference in (
                'budget','chill','party','adventure',
                'luxury','solo','family','couple'
              )),
  created_at  timestamptz default now() not null
);

-- 2. Add a comment for documentation
comment on table public.leads is 'Waitlist leads captured from the TripSage landing page';
comment on column public.leads.email is 'User email address — must be unique';
comment on column public.leads.preference is 'Optional travel style preference selected by user';

-- 3. Enable Row Level Security
alter table public.leads enable row level security;

-- 4. Allow anonymous INSERT (for the public waitlist form)
create policy "allow_anon_insert"
  on public.leads
  for insert
  to anon
  with check (true);

-- 5. Block public SELECT (only service role / dashboard can read)
create policy "block_public_select"
  on public.leads
  for select
  to anon
  using (false);

-- 6. Optional: index on created_at for dashboard queries
create index if not exists leads_created_at_idx
  on public.leads (created_at desc);

-- ============================================================
-- Verify setup
-- ============================================================
select 'Setup complete. leads table is ready.' as status;
