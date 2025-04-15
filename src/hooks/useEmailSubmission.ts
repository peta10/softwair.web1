import { useState } from 'react';
import { supabase } from '../lib/supabase';

type SourcePage = 'product' | 'pricing' | 'time-audit';

export function useEmailSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitEmail = async (
    sourcePage: SourcePage,
    email: string,
    additionalData?: {
      industry?: string;
      time_saved?: string;
      cost_savings?: string;
    }
  ) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      // Validate email format
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error('Please enter a valid email address');
      }

      const { error: submitError } = await supabase
        .from('email_submissions')
        .insert([
          {
            email,
            source_page: sourcePage,
            ...additionalData
          }
        ]);

      if (submitError) {
        console.error('Supabase error:', submitError);
        throw new Error('Failed to submit email. Please try again.');
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit email');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitEmail,
    isSubmitting,
    error,
    success
  };
}