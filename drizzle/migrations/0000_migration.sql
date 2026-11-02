CREATE TABLE public.service_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  request_type text NOT NULL,
  service text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text,
  preferred_date date,
  preferred_time text,
  message text
);
GRANT ALL ON public.service_requests TO service_role;
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;