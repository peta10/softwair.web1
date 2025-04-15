/*
  # Fix email submissions RLS policies

  1. Changes
    - Add RLS policy for anonymous users to insert email submissions
    - Keep existing policies for service role and authenticated users

  2. Security
    - Maintains data security while allowing anonymous submissions
    - Ensures users can only read their own data
    - Allows both anonymous and service role to insert data
*/

-- Allow anonymous users to insert email submissions
CREATE POLICY "Anyone can submit email"
  ON email_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);