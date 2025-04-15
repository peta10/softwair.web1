/*
  # Create email submissions table

  1. New Tables
    - `email_submissions`
      - `id` (uuid, primary key)
      - `email` (text, not null)
      - `source_page` (text, not null) - Which page the submission came from
      - `industry` (text) - Optional, from time audit
      - `time_saved` (text) - Optional, from time audit
      - `cost_savings` (text) - Optional, from time audit
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `email_submissions` table
    - Add policy for service role to insert data
    - Add policy for authenticated users to read their own submissions
*/

-- Create the email submissions table
CREATE TABLE IF NOT EXISTS email_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  source_page text NOT NULL CHECK (source_page IN ('product', 'pricing', 'time-audit')),
  industry text,
  time_saved text,
  cost_savings text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE email_submissions ENABLE ROW LEVEL SECURITY;

-- Allow service role to insert data
CREATE POLICY "Service role can insert email submissions"
  ON email_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Allow authenticated users to read their own submissions
CREATE POLICY "Users can read own submissions"
  ON email_submissions
  FOR SELECT
  TO authenticated
  USING (email = current_user);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_email_submissions_email ON email_submissions(email);