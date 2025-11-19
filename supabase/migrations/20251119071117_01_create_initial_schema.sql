/*
  # Create Initial Database Schema for J2W Marketing Agency

  1. New Tables
    - `leads` - Store lead inquiries and contact information
    - `case_studies` - Showcase successful client projects and results
    - `testimonials` - Store client testimonials and reviews
    - `newsletter_subscribers` - Email newsletter subscription list
    - `contact_submissions` - General contact form submissions
    - `ai_audit_requests` - Free AI audit booking requests

  2. Security
    - Enable RLS on all tables
    - Create policies for public submissions
    - Create policies for admin access

  3. Purpose
    - Track potential customers and leads
    - Display social proof through case studies and testimonials
    - Manage email marketing communications
    - Store service inquiries and consultations
*/

-- Leads table for tracking potential customers
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  company text,
  phone text,
  service_interested text,
  budget text,
  message text,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Case studies table for portfolio showcase
CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  industry text NOT NULL,
  client_name text NOT NULL,
  challenge text NOT NULL,
  solution text NOT NULL,
  results jsonb NOT NULL,
  image_url text,
  metrics_increase_percentage integer,
  roi_increase text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Testimonials table for social proof
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  company text NOT NULL,
  role text,
  content text NOT NULL,
  rating integer DEFAULT 5,
  image_url text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Newsletter subscribers
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  subscribed_at timestamptz DEFAULT now(),
  unsubscribed_at timestamptz
);

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  subject text,
  created_at timestamptz DEFAULT now()
);

-- AI Audit requests
CREATE TABLE IF NOT EXISTS ai_audit_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  company_name text NOT NULL,
  website_url text,
  current_challenges text,
  monthly_budget text,
  preferred_contact_method text DEFAULT 'email',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_audit_requests ENABLE ROW LEVEL SECURITY;

-- Policies for leads (public can insert, only admins can view/update)
CREATE POLICY "Anyone can create a lead"
  ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Policies for case studies (public can view featured ones)
CREATE POLICY "Public can view featured case studies"
  ON case_studies
  FOR SELECT
  TO anon
  USING (featured = true);

CREATE POLICY "Authenticated users can view all case studies"
  ON case_studies
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create case studies"
  ON case_studies
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policies for testimonials (public can view featured ones)
CREATE POLICY "Public can view featured testimonials"
  ON testimonials
  FOR SELECT
  TO anon
  USING (featured = true);

CREATE POLICY "Authenticated users can view all testimonials"
  ON testimonials
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create testimonials"
  ON testimonials
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policies for newsletter subscribers
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);

-- Policies for contact submissions
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Policies for AI audit requests
CREATE POLICY "Anyone can request AI audit"
  ON ai_audit_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view audit requests"
  ON ai_audit_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created_at ON leads(created_at);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_case_studies_featured ON case_studies(featured);
CREATE INDEX idx_case_studies_industry ON case_studies(industry);
CREATE INDEX idx_testimonials_featured ON testimonials(featured);
CREATE INDEX idx_testimonials_rating ON testimonials(rating);
CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX idx_contact_created_at ON contact_submissions(created_at);
CREATE INDEX idx_audit_created_at ON ai_audit_requests(created_at);
