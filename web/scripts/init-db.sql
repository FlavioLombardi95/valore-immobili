CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  city TEXT NOT NULL,
  property_type TEXT NOT NULL,
  square_meters INTEGER NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  timeframe TEXT NOT NULL,
  privacy_accepted BOOLEAN NOT NULL DEFAULT true,
  status TEXT NOT NULL DEFAULT 'new',
  trattativa_status TEXT,
  notes TEXT,
  source_page TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS leads_status_idx ON leads (status);
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_city_idx ON leads (city);
