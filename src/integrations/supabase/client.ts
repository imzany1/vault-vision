// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://zhbttzmrejgsagckobmu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoYnR0em1yZWpnc2FnY2tvYm11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NjUzNDIsImV4cCI6MjA2MTI0MTM0Mn0.uCDd2HnAIpLdZFA1TEgaUwDntMxG-Qk-3KMi9Focpy4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);