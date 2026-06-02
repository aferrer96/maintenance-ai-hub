create extension if not exists "uuid-ossp";

create table if not exists equipment (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  area text,
  asset_number text,
  manufacturer text,
  model text,
  serial_number text,
  location text,
  notes text,
  created_at timestamptz default now()
);

create table if not exists documents (
  id uuid primary key default uuid_generate_v4(),
  equipment_id uuid references equipment(id) on delete set null,
  title text not null,
  category text,
  storage_path text not null,
  extracted_text text,
  created_at timestamptz default now()
);

create table if not exists repair_logs (
  id uuid primary key default uuid_generate_v4(),
  equipment_id uuid references equipment(id) on delete set null,
  problem text not null,
  cause text,
  repair text,
  parts_used text,
  downtime_minutes integer default 0,
  mechanic text,
  safety_notes text,
  created_at timestamptz default now()
);

alter table equipment enable row level security;
alter table documents enable row level security;
alter table repair_logs enable row level security;

-- Demo policies.
-- Tighten these before company deployment.
create policy "Allow read equipment" on equipment for select using (true);
create policy "Allow insert equipment" on equipment for insert with check (true);

create policy "Allow read documents" on documents for select using (true);
create policy "Allow insert documents" on documents for insert with check (true);

create policy "Allow read repair logs" on repair_logs for select using (true);
create policy "Allow insert repair logs" on repair_logs for insert with check (true);
