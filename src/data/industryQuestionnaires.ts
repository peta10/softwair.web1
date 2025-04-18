// Types for Industry Questionnaires
export type Role = string;
export type BusinessSize = string;

export interface TimeEstimateOptions {
  hoursPerDay?: string[];
  hoursPerWeek?: string[];
  hoursPerMonth?: string[];
  hoursPerTransaction?: string[];
}

export type Question = {
  id: string;
  text: string;
  type: 'single' | 'multiple' | 'scale' | 'text' | 'timeEstimate'; 
  options?: string[];
  timeOptions?: TimeEstimateOptions; // For time estimate questions
  roles?: Role[]; // Relevant roles (if empty or undefined, applies to all)
  sizes?: BusinessSize[]; // Relevant business sizes (if empty or undefined, applies to all)
  tooltip?: string; // Optional tooltip for clarity
};

export type Section = {
  title: string;
  description?: string; // Optional section description
  questions: Question[];
  roles?: Role[]; // Section relevant roles
  sizes?: BusinessSize[]; // Section relevant business sizes
};

export type Industry = {
  id: string;
  label: string;
  sections: Section[];
};

export const industries: Industry[] = [
  // --- Construction ---
  {
    id: 'construction',
    label: 'Construction',
    sections: [
      {
        title: 'Company Profile',
        questions: [
          {
            id: 'con-services-provided',
            text: 'What construction services does your company provide?',
            type: 'multiple',
            options: ['General Contracting', 'Residential Building', 'Commercial Building', 'Remodeling', 'Specialty Trade', 'Heavy Construction', 'Other']
          },
          {
            id: 'con-project-count',
            text: 'How many projects does your company typically manage simultaneously?',
            type: 'single',
            options: ['1-2 projects', '3-5 projects', '6-10 projects', 'More than 10 projects']
          }
        ]
      },
      {
        title: 'Operations',
        questions: [
         { id: 'con-scheduling', text: 'How much time is spent coordinating daily work assignments and dispatching teams?', type: 'single', options: ['Less than 1 hour', '1-2 hours', '2-4 hours', 'More than 4 hours']},
         { id: 'con-quoting', text: 'How much time is spent preparing detailed quotes and cost estimates weekly?', type: 'single', options: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']},
         { id: 'con-invoicing', text: 'How much time is spent generating invoices and tracking payments weekly?', type: 'single', options: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']},
         { id: 'con-timesheets', text: 'How much time is spent logging hours, managing shift schedules, and generating safety logs?', type: 'single', options: ['Less than 2 hours', '2-5 hours', '5-8 hours', 'More than 8 hours'], roles: ['manager']},
         { id: 'con-materials', text: 'How much time is spent ordering materials and tracking deliveries weekly?', type: 'single', options: ['Less than 4 hours', '4-8 hours', '8-12 hours', 'More than 12 hours']},
         { id: 'con-reporting', text: 'How much time is spent creating progress reports, safety logs, and updating jobsite documentation weekly?', type: 'single', options: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours'], roles: ['manager', 'director']},
        ]
      }
    ]
  },
  // --- Restaurant ---
  {
    id: 'restaurant',
    label: 'Restaurant',
    sections: [
      {
        title: 'Restaurant Profile',
        questions: [
          {
             id: 'res-restaurant-type',
             text: 'What type of restaurant do you operate?',
             type: 'single',
             options: ['Quick Service', 'Casual Dining', 'Fine Dining', 'Cafe/Bakery', 'Other']
           },
           {
             id: 'res-staff-count',
             text: 'How many staff members do you employ?',
             type: 'single',
             options: ['Less than 10', '10-25', '26-50', 'More than 50']
           }
        ]
      },
      {
        title: 'Operations',
        questions: [
          { id: 'res-order-mgmt', text: 'How much time is spent entering or reconciling orders between POS and kitchen daily?', type: 'single', options: ['Less than 1 hour', '1-2 hours', '2-3 hours', 'More than 3 hours']},
          { id: 'res-inventory', text: 'How much time is spent tracking food, beverage, and supply levels daily?', type: 'single', options: ['Less than 1 hour', '1-2 hours', '2-4 hours', 'More than 4 hours']},
          { id: 'res-staff-sched', text: 'How many hours per week are spent managing staff schedules and shift swaps?', type: 'single', options: ['Less than 5 hours', '5-10 hours', '10-15 hours', 'More than 15 hours'], roles: ['owner', 'manager']},
          { id: 'res-payroll', text: 'How much time is spent recording hours, processing payroll, and managing tips monthly?', type: 'single', options: ['Less than 4 hours', '4-8 hours', '8-12 hours', 'More than 12 hours'], roles: ['owner', 'manager']},
          { id: 'res-reservations', text: 'How much time is spent manually managing reservations, waitlists, and table statuses daily?', type: 'single', options: ['Less than 1 hour', '1-2 hours', '2-4 hours', 'More than 4 hours']},
          { id: 'res-menu-updates', text: 'How many hours per week are spent updating menu items and specials?', type: 'single', options: ['Less than 1 hour', '1-3 hours', '3-5 hours', 'More than 5 hours'], roles: ['owner', 'manager']},
          { id: 'res-safety-docs', text: 'How much time is spent on food safety documentation and compliance monthly?', type: 'single', options: ['Less than 2 hours', '2-5 hours', '5-10 hours', 'More than 10 hours'], roles: ['owner', 'manager']},
          { id: 'res-vendor-mgmt', text: 'How many hours per week are spent managing vendor relationships?', type: 'single', options: ['Less than 2 hours', '2-4 hours', '4-6 hours', 'More than 6 hours'], roles: ['owner', 'manager']},
          { id: 'res-inventory-manual', text: 'Manually updating stock levels and inventory', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-3 hours', '3-5 hours', 'More than 5 hours']}},
          { id: 'res-order-proc', text: 'Processing orders and updating order statuses', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 2 hours', '2-4 hours', '4-6 hours', 'More than 6 hours']}},
          { id: 'res-payments', text: 'Handling payments, refunds, and chargebacks', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
          { id: 'res-customer-svc', text: 'Managing customer inquiries and returns', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 2 hours', '2-4 hours', '4-8 hours', 'More than 8 hours']}},
          { id: 'res-product-updates', text: 'Updating product descriptions, images, and pricing', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}},
          { id: 'res-supplier-comm', text: 'Coordinating with suppliers and vendors', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 2 hours', '2-5 hours', '5-10 hours', 'More than 10 hours']}, roles: ['owner', 'manager', 'director']},
          { id: 'res-promotions', text: 'Managing promotional campaigns', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 4 hours', '4-8 hours', '8-16 hours', 'More than 16 hours']}, roles: ['owner', 'manager', 'director']},
          { id: 'res-merchandising', text: 'Visual merchandising updates (physical or digital)', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-7 hours', '7-12 hours', 'More than 12 hours']}, roles: ['manager', 'contributor']}
        ]
      }
    ]
  },
  // --- Legal ---
  {
    id: 'legal',
    label: 'Legal',
    sections: [
      {
        title: 'Practice Profile',
        questions: [
           {
             id: 'leg-practice-type',
             text: 'What type of legal practice do you operate?',
             type: 'multiple',
             options: ['Corporate Law', 'Family Law', 'Criminal Law', 'Real Estate Law', 'Intellectual Property', 'Litigation', 'Other']
           },
           {
             id: 'leg-case-volume',
             text: 'How many active cases do you handle monthly?',
             type: 'single',
             options: ['Less than 20', '20-50', '51-100', 'More than 100']
           }
        ]
      },
      {
        title: 'Operations & Tasks',
        description: "Estimate the time spent on the following common tasks.",
        questions: [
          { id: 'leg-doc-prep', text: 'Preparing legal documents and contracts', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 2 hours', '2-4 hours', '4-6 hours', 'More than 6 hours']}},
          { id: 'leg-file-org', text: 'Organizing and archiving case files', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
          { id: 'leg-scheduling', text: 'Scheduling court dates, client meetings, and deadlines', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 2 hours', '2-5 hours', '5-8 hours', 'More than 8 hours']}},
          { id: 'leg-research', text: 'Performing legal research and entering case data', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}},
          { id: 'leg-billing', text: 'Logging billable hours and generating invoices', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 4 hours', '4-8 hours', '8-12 hours', 'More than 12 hours']}},
          { id: 'leg-client-comm', text: 'Handling routine client inquiries and communications', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-3 hours', '3-5 hours', 'More than 5 hours']}},
        ]
      }
    ]
  },
  // --- Real Estate --- (Distinct from Property Management)
  {
    id: 'real-estate',
    label: 'Real Estate (Brokerage/Agent)',
     sections: [
       {
         title: 'Business Profile',
         questions: [
           {
             id: 're-agent-type',
             text: 'What is your primary role in real estate?',
             type: 'single',
             options: ['Broker', 'Agent', 'Team Lead', 'Assistant', 'Other']
           },
           {
             id: 're-transaction-volume',
             text: 'How many transactions do you typically close per year?',
             type: 'single',
             options: ['Less than 10', '10-25', '26-50', 'More than 50']
           }
         ]
       },
       {
         title: 'Operations & Tasks',
         description: "Estimate the time spent on the following common tasks.",
         questions: [
           { id: 're-listing-mgmt', text: 'Creating and updating property listings', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
           { id: 're-lead-mgmt', text: 'Tracking leads and following up with clients', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-2 hours', '2-4 hours', 'More than 4 hours']}},
           { id: 're-tour-coord', text: 'Coordinating property tours, meetings, and open houses', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 5 hours', '5-10 hours', '10-15 hours', 'More than 15 hours']}},
           { id: 're-transaction-proc', text: 'Processing transaction paperwork and coordinating closings', type: 'timeEstimate', timeOptions: { hoursPerTransaction: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}},
           { id: 're-marketing', text: 'Marketing activities (social media, email campaigns, etc.)', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 5 hours', '5-10 hours', '10-15 hours', 'More than 15 hours']}},
         ]
       }
     ]
  },
  // --- Accounting & Finance ---
  {
    id: 'accounting',
    label: 'Accounting & Finance',
     sections: [
       {
         title: 'Business Profile',
         questions: [
           {
             id: 'acc-service-type',
             text: 'What type of accounting/finance services do you primarily offer?',
             type: 'multiple',
             options: ['Bookkeeping', 'Tax Preparation', 'Payroll Services', 'Financial Advisory', 'Audit', 'CFO Services', 'Other']
           },
           {
             id: 'acc-client-count',
             text: 'How many clients do you serve?',
             type: 'single',
             options: ['Less than 20', '20-50', '51-100', 'More than 100']
           }
         ]
       },
       {
         title: 'Operations & Tasks',
         description: "Estimate the time spent on the following common tasks.",
         questions: [
           { id: 'acc-data-entry', text: 'Manually inputting financial transactions', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 2 hours', '2-4 hours', '4-6 hours', 'More than 6 hours']}},
           { id: 'acc-invoicing', text: 'Generating invoices and reconciling payments', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 5 hours', '5-10 hours', '10-15 hours', 'More than 15 hours']}},
           { id: 'acc-bank-rec', text: 'Reconciling bank statements', type: 'timeEstimate', timeOptions: { hoursPerMonth: ['Less than 4 hours', '4-8 hours', '8-16 hours', 'More than 16 hours']}},
           { id: 'acc-payroll', text: 'Processing payroll and tax filings', type: 'timeEstimate', timeOptions: { hoursPerMonth: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}},
           { id: 'acc-reporting', text: 'Compiling financial reports and performance metrics', type: 'timeEstimate', timeOptions: { hoursPerMonth: ['Less than 8 hours', '8-16 hours', '16-24 hours', 'More than 24 hours']}, roles: ['owner', 'director', 'manager']},
           { id: 'acc-expense-tracking', text: 'Tracking expenses and reconciliations', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
         ]
       }
     ]
  },
  // --- Home Services ---
  {
    id: 'home-services',
    label: 'Home Services',
    sections: [
      {
        title: 'Business Profile',
        questions: [
          {
            id: 'hs-service-type',
            text: 'What type of home service do you provide?',
            type: 'single',
            options: ['Cleaning', 'Landscaping', 'Plumbing', 'Electrical', 'HVAC', 'Handyman', 'Pest Control', 'Other']
          },
          {
            id: 'hs-job-volume',
            text: 'How many jobs do you typically complete per week?',
            type: 'single',
            options: ['Less than 10', '10-25', '26-50', 'More than 50']
          }
        ]
      },
      {
        title: 'Operations & Tasks',
        description: "Estimate the time spent on the following common tasks.",
        questions: [
          { id: 'hs-inquiry-mgmt', text: 'Responding to customer inquiries and entering leads', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-2 hours', '2-4 hours', 'More than 4 hours']}},
          { id: 'hs-scheduling', text: 'Scheduling appointments and dispatching crews', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-3 hours', '3-5 hours', 'More than 5 hours']}, roles: ['owner', 'manager']},
          { id: 'hs-job-planning', text: 'Planning job details for field crews', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 30 mins', '30-60 mins', '1-2 hours', 'More than 2 hours']}, roles: ['owner', 'manager']},
          { id: 'hs-invoicing', text: 'Generating invoices and tracking payments', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
          { id: 'hs-job-logging', text: 'Recording job details, tracking time spent', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-2 hours', '2-3 hours', 'More than 3 hours']}},
          { id: 'hs-marketing', text: 'Handling social media updates and promotions', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 2 hours', '2-5 hours', '5-10 hours', 'More than 10 hours']}, roles: ['owner']},
          { id: 'hs-inventory', text: 'Inventory management and reordering supplies/parts', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 1 hour', '1-3 hours', '3-5 hours', 'More than 5 hours']}},
          { id: 'hs-equipment-maint', text: 'Equipment maintenance scheduling', type: 'timeEstimate', timeOptions: { hoursPerMonth: ['Less than 2 hours', '2-4 hours', '4-8 hours', 'More than 8 hours']}},
          { id: 'hs-follow-up', text: 'Customer follow-up and feedback collection', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 1 hour', '1-3 hours', '3-5 hours', 'More than 5 hours']}},
        ]
      }
    ]
  },
  // --- Healthcare ---
  {
    id: 'healthcare',
    label: 'Healthcare',
    sections: [
      {
        title: 'Practice Profile',
        questions: [
          {
            id: 'hc-practice-type',
            text: 'What type of healthcare practice do you operate?',
            type: 'single',
            options: ['Primary Care', 'Dental', 'Specialist Office', 'Physical Therapy', 'Mental Health', 'Alternative Medicine', 'Other']
          },
          {
            id: 'hc-patient-volume',
            text: 'How many patients do you see weekly?',
            type: 'single',
            options: ['Less than 50', '50-100', '101-200', 'More than 200']
          }
        ]
      },
      {
        title: 'Operations & Tasks',
        description: "Estimate the time spent on the following common tasks.",
        questions: [
          { id: 'hc-scheduling', text: 'Scheduling and managing appointments', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 2 hours', '2-4 hours', '4-6 hours', 'More than 6 hours']}},
          { id: 'hc-insurance', text: 'Verifying insurance and benefits', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-3 hours', '3-5 hours', 'More than 5 hours']}},
          { id: 'hc-billing', text: 'Processing insurance claims and billing', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 8 hours', '8-16 hours', '16-24 hours', 'More than 24 hours']}},
          { id: 'hc-patient-comms', text: 'Managing patient communications and follow-ups', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-2 hours', '2-4 hours', 'More than 4 hours']}},
          { id: 'hc-records', text: 'Updating and organizing patient records', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-2 hours', '2-4 hours', 'More than 4 hours']}},
          { id: 'hc-inventory', text: 'Managing medical supplies and inventory', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 2 hours', '2-5 hours', '5-10 hours', 'More than 10 hours']}},
          { id: 'hc-reports', text: 'Generating practice reports and analytics', type: 'timeEstimate', timeOptions: { hoursPerMonth: ['Less than 4 hours', '4-8 hours', '8-16 hours', 'More than 16 hours']}, roles: ['manager', 'owner', 'director']}
        ]
      }
    ]
  },
  // --- IT & IT Service Management (ITSM) ---
  {
    id: 'it-itsm',
    label: 'IT & IT Service Management',
    sections: [
      {
        title: 'Business Profile',
        questions: [
          {
            id: 'it-primary-service',
            text: 'What primary IT services does your organization provide or manage?',
            type: 'multiple',
            options: ['Help Desk/Support', 'Network Management', 'Security', 'Software Development', 'Cloud Services', 'Infrastructure Management', 'Data Management', 'Other']
          },
          {
            id: 'it-ticket-volume',
            text: 'How many IT tickets or requests do you handle monthly?',
            type: 'single',
            options: ['Less than 100', '100-500', '501-1000', 'More than 1000']
          }
        ]
      },
      {
        title: 'Operations & Tasks',
        description: "Estimate the time spent on the following common tasks.",
        questions: [
          { id: 'it-password-resets', text: 'Handling password resets and access management', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 2 hours', '2-5 hours', '5-10 hours', 'More than 10 hours']}},
          { id: 'it-ticket-processing', text: 'Processing and resolving IT tickets', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 2 hours', '2-4 hours', '4-6 hours', 'More than 6 hours']}},
          { id: 'it-onboarding', text: 'Employee onboarding and offboarding processes', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-8 hours', '8-15 hours', 'More than 15 hours']}},
          { id: 'it-cred-management', text: 'Managing credentials and permissions', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 2 hours', '2-5 hours', '5-10 hours', 'More than 10 hours']}},
          { id: 'it-software-updates', text: 'Software provisioning and updates', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 4 hours', '4-8 hours', '8-16 hours', 'More than 16 hours']}},
          { id: 'it-automation', text: 'Writing and maintaining automation scripts', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}, roles: ['manager', 'director', 'contributor']},
          { id: 'it-monitoring', text: 'System monitoring and troubleshooting', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-3 hours', '3-5 hours', 'More than 5 hours']}},
          { id: 'it-documentation', text: 'Documentation and knowledge base maintenance', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 2 hours', '2-5 hours', '5-10 hours', 'More than 10 hours']}},
          { id: 'it-asset', text: 'Asset management and inventory tracking', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
          { id: 'it-security', text: 'Security compliance checks and updates', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 4 hours', '4-8 hours', '8-12 hours', 'More than 12 hours']}, roles: ['manager', 'director', 'c-suite']}
        ]
      }
    ]
  },
  // --- Fitness & Wellness ---
  {
    id: 'fitness',
    label: 'Fitness & Wellness',
    sections: [
      {
        title: 'Business Profile',
        questions: [
          {
            id: 'fit-business-type',
            text: 'What type of fitness or wellness business do you operate?',
            type: 'single',
            options: ['Gym/Fitness Center', 'Yoga/Pilates Studio', 'Personal Training', 'Spa/Wellness Center', 'Nutritionist/Dietitian Practice', 'Physical Therapy', 'Other']
          },
          {
            id: 'fit-client-volume',
            text: 'How many clients do you serve monthly?',
            type: 'single',
            options: ['Less than 50', '50-200', '201-500', 'More than 500']
          }
        ]
      },
      {
        title: 'Operations & Tasks',
        description: "Estimate the time spent on the following common tasks.",
        questions: [
          { id: 'fit-scheduling', text: 'Managing appointments, class bookings, or treatment schedules', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-2 hours', '2-4 hours', 'More than 4 hours']}},
          { id: 'fit-check-in', text: 'Client check-in and registration processes', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-3 hours', '3-5 hours', 'More than 5 hours']}},
          { id: 'fit-payments', text: 'Handling payments, billing, and invoicing', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
          { id: 'fit-reminders', text: 'Sending appointment reminders and promotional messages', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 2 hours', '2-4 hours', '4-8 hours', 'More than 8 hours']}},
          { id: 'fit-staff', text: 'Staff scheduling and payroll management', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}, roles: ['owner', 'manager', 'director']},
          { id: 'fit-inventory', text: 'Tracking supplies and reordering inventory', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 2 hours', '2-4 hours', '4-6 hours', 'More than 6 hours']}},
          { id: 'fit-membership', text: 'Member management and communication', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
          { id: 'fit-maintenance', text: 'Facility maintenance coordination', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 2 hours', '2-5 hours', '5-8 hours', 'More than 8 hours']}, roles: ['owner', 'manager']}
        ]
      }
    ]
  },
  // --- Manufacturing ---
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    sections: [
      {
        title: 'Business Profile',
        questions: [
          {
            id: 'mfg-type',
            text: 'What type of manufacturing does your company specialize in?',
            type: 'multiple',
            options: ['Automotive', 'Electronics', 'Food & Beverage', 'Textiles & Apparel', 'Chemicals', 'Plastics & Rubber', 'Metal Fabrication', 'Machinery', 'Furniture', 'Other']
          },
          {
            id: 'mfg-production-volume',
            text: 'What is your typical production volume?',
            type: 'single',
            options: ['Small batch/Custom', 'Medium production runs', 'Large scale/Mass production', 'Mixed production types']
          }
        ]
      },
      {
        title: 'Operations & Tasks',
        description: "Estimate the time spent on the following common tasks.",
        questions: [
          { id: 'mfg-production-sched', text: 'Updating production schedules or adjusting orders', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-2 hours', '2-4 hours', 'More than 4 hours']}},
          { id: 'mfg-inventory', text: 'Manually tracking raw materials and finished goods', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-3 hours', '3-5 hours', 'More than 5 hours']}},
          { id: 'mfg-quality', text: 'Recording inspection data and generating compliance reports', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 2 hours', '2-4 hours', '4-6 hours', 'More than 6 hours']}},
          { id: 'mfg-maintenance', text: 'Scheduling and tracking machine maintenance', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}, roles: ['manager', 'director', 'contributor']},
          { id: 'mfg-orders', text: 'Entering orders, coordinating shipments, and managing logistics', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 2 hours', '2-4 hours', '4-6 hours', 'More than 6 hours']}},
          { id: 'mfg-reporting', text: 'Creating production reports and analytics', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}, roles: ['manager', 'director', 'c-suite']},
          { id: 'mfg-staffing', text: 'Managing shift scheduling and labor allocation', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 4 hours', '4-8 hours', '8-12 hours', 'More than 12 hours']}, roles: ['manager', 'director']},
          { id: 'mfg-purchasing', text: 'Processing purchase orders and vendor management', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 5 hours', '5-10 hours', '10-15 hours', 'More than 15 hours']}}
        ]
      }
    ]
  },
  // --- Logistics ---
  {
    id: 'logistics',
    label: 'Logistics & Supply Chain',
    sections: [
      {
        title: 'Business Profile',
        questions: [
          {
            id: 'log-business-type',
            text: 'What type of logistics services does your company provide?',
            type: 'multiple',
            options: ['Freight Forwarding', 'Warehousing', 'Transportation', 'Last-Mile Delivery', 'Supply Chain Management', 'Fulfillment Services', 'Other']
          },
          {
            id: 'log-shipment-volume',
            text: 'How many shipments do you handle monthly?',
            type: 'single',
            options: ['Less than 100', '100-500', '501-1,000', 'More than 1,000']
          }
        ]
      },
      {
        title: 'Operations & Tasks',
        description: "Estimate the time spent on the following common tasks.",
        questions: [
          { id: 'log-inventory', text: 'Manually tracking inventory levels and reconciling stock counts', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-3 hours', '3-5 hours', 'More than 5 hours']}},
          { id: 'log-shipping', text: 'Processing shipment orders, printing labels, updating tracking', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 2 hours', '2-4 hours', '4-6 hours', 'More than 6 hours']}},
          { id: 'log-routing', text: 'Planning delivery routes and coordinating driver schedules', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-2 hours', '2-4 hours', 'More than 4 hours']}, roles: ['manager', 'director', 'contributor']},
          { id: 'log-compliance', text: 'Filling out paperwork for compliance and generating reports', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
          { id: 'log-follow-up', text: 'Manual follow-ups, updating status reports, responding to queries', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-2 hours', '2-4 hours', 'More than 4 hours']}},
          { id: 'log-customs', text: 'Managing customs documentation and international shipping paperwork', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}},
          { id: 'log-returns', text: 'Processing returns and reverse logistics', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
          { id: 'log-vendor', text: 'Vendor coordination and carrier management', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 4 hours', '4-8 hours', '8-12 hours', 'More than 12 hours']}, roles: ['manager', 'director', 'c-suite']}
        ]
      }
    ]
  },
  // --- Property Management ---
  {
    id: 'property-management',
    label: 'Property Management',
    sections: [
      {
        title: 'Business Profile',
        questions: [
          {
            id: 'pm-property-type',
            text: 'What type of properties do you manage?',
            type: 'multiple',
            options: ['Residential Apartments', 'Single Family Homes', 'Commercial Office', 'Retail Space', 'Industrial', 'Mixed Use', 'Other']
          },
          {
            id: 'pm-unit-count',
            text: 'How many units or properties do you manage?',
            type: 'single',
            options: ['Less than 10', '10-50', '51-200', 'More than 200']
          }
        ]
      },
      {
        title: 'Operations & Tasks',
        description: "Estimate the time spent on the following common tasks.",
        questions: [
          { id: 'pm-tenant-comms', text: 'Handling tenant calls and emails', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-3 hours', '3-5 hours', 'More than 5 hours']}},
          { id: 'pm-rent', text: 'Tracking rent payments and issuing invoices', type: 'timeEstimate', timeOptions: { hoursPerMonth: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}},
          { id: 'pm-maintenance', text: 'Coordinating maintenance or repair requests', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
          { id: 'pm-leases', text: 'Managing lease agreements and renewals', type: 'timeEstimate', timeOptions: { hoursPerMonth: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}},
          { id: 'pm-vendors', text: 'Interacting with vendors and updating service records', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 2 hours', '2-5 hours', '5-10 hours', 'More than 10 hours']}},
          { id: 'pm-reports', text: 'Generating financial reports and owner statements', type: 'timeEstimate', timeOptions: { hoursPerMonth: ['Less than 4 hours', '4-8 hours', '8-16 hours', 'More than 16 hours']}, roles: ['manager', 'owner', 'director']},
          { id: 'pm-showings', text: 'Scheduling and conducting property showings', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
          { id: 'pm-inspections', text: 'Conducting property inspections and documentation', type: 'timeEstimate', timeOptions: { hoursPerMonth: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}}
        ]
      }
    ]
  },
  // --- Hospitality ---
  {
    id: 'hospitality',
    label: 'Hospitality & Tourism',
    sections: [
      {
        title: 'Business Profile',
        questions: [
          {
            id: 'hosp-business-type',
            text: 'What type of hospitality business do you operate?',
            type: 'single',
            options: ['Hotel/Accommodation', 'Restaurant/Food Service', 'Travel Agency', 'Tour Operator', 'Event Venue', 'Attraction/Museum', 'Other']
          },
          {
            id: 'hosp-capacity',
            text: 'What is your average guest/customer capacity?',
            type: 'single',
            options: ['Less than 50 daily', '50-100 daily', '101-500 daily', 'More than 500 daily']
          }
        ]
      },
      {
        title: 'Operations & Tasks',
        description: "Estimate the time spent on the following common tasks.",
        questions: [
          { id: 'hosp-reservations', text: 'Updating reservation systems, confirming bookings, handling cancellations', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 2 hours', '2-4 hours', '4-6 hours', 'More than 6 hours']}},
          { id: 'hosp-check-in', text: 'Managing guest check-ins and check-outs', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 3 hours', '3-5 hours', '5-8 hours', 'More than 8 hours']}},
          { id: 'hosp-inquiries', text: 'Handling routine guest inquiries and requests', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 2 hours', '2-4 hours', '4-6 hours', 'More than 6 hours']}},
          { id: 'hosp-housekeeping', text: 'Coordinating cleaning, laundry, and maintenance tasks', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-3 hours', '3-5 hours', 'More than 5 hours']}, roles: ['manager', 'owner', 'director']},
          { id: 'hosp-billing', text: 'Generating invoices, processing payments, and reconciliations', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-2 hours', '2-4 hours', 'More than 4 hours']}},
          { id: 'hosp-groups', text: 'Managing group bookings and events', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}},
          { id: 'hosp-staff', text: 'Staff scheduling and assignment management', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}, roles: ['manager', 'owner', 'director']},
          { id: 'hosp-loyalty', text: 'Loyalty program administration and guest communication', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 2 hours', '2-5 hours', '5-10 hours', 'More than 10 hours']}}
        ]
      }
    ]
  },
  // --- Retail & Ecommerce ---
  {
    id: 'retail',
    label: 'Retail & Ecommerce',
    sections: [
      {
        title: 'Business Profile',
        questions: [
          {
            id: 'retail-business-type',
            text: 'What type of retail/ecommerce business do you operate?',
            type: 'multiple',
            options: ['Brick & Mortar Store', 'Ecommerce Only', 'Omnichannel', 'Marketplace Seller', 'Subscription Service', 'Other']
          },
          {
            id: 'retail-product-count',
            text: 'How many products or SKUs do you manage?',
            type: 'single',
            options: ['Less than 100', '100-1,000', '1,001-10,000', 'More than 10,000']
          }
        ]
      },
      {
        title: 'Operations & Tasks',
        description: "Estimate the time spent on the following common tasks.",
        questions: [
          { id: 'retail-inventory', text: 'Manually updating stock levels and inventory', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-2 hours', '2-4 hours', 'More than 4 hours']}},
          { id: 'retail-orders', text: 'Processing orders and updating order statuses', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 2 hours', '2-4 hours', '4-6 hours', 'More than 6 hours']}},
          { id: 'retail-payments', text: 'Handling payments, refunds, and chargebacks', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
          { id: 'retail-customer-service', text: 'Managing customer inquiries and returns', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 2 hours', '2-4 hours', '4-8 hours', 'More than 8 hours']}},
          { id: 'retail-product-updates', text: 'Updating product descriptions, images, and pricing', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}},
          { id: 'retail-suppliers', text: 'Coordinating with suppliers and vendors', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 2 hours', '2-5 hours', '5-10 hours', 'More than 10 hours']}, roles: ['owner', 'manager', 'director']},
          { id: 'retail-promotions', text: 'Managing promotional campaigns and discounts', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 4 hours', '4-8 hours', '8-16 hours', 'More than 16 hours']}, roles: ['owner', 'manager', 'director']},
          { id: 'retail-merchandising', text: 'Visual merchandising updates (physical or digital)', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-7 hours', '7-12 hours', 'More than 12 hours']}, roles: ['manager', 'contributor']}
        ]
      }
    ]
  },
  // --- Education & Training ---
  {
    id: 'education',
    label: 'Education & Training',
    sections: [
      {
        title: 'Institution Profile',
        questions: [
          {
            id: 'edu-type',
            text: 'What type of educational institution or program do you operate?',
            type: 'single',
            options: ['K-12 School', 'Higher Education', 'Vocational/Trade School', 'Online Learning Platform', 'Tutoring Service', 'Corporate Training', 'Other']
          },
          {
            id: 'edu-student-count',
            text: 'How many students do you serve?',
            type: 'single',
            options: ['Less than 100', '100-500', '501-1,000', 'More than 1,000']
          }
        ]
      },
      {
        title: 'Operations & Tasks',
        description: "Estimate the time spent on the following common tasks.",
        questions: [
          { id: 'edu-enrollment', text: 'Processing new student applications and enrollment records', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}},
          { id: 'edu-attendance', text: 'Taking daily attendance and updating records', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 30 minutes', '30-60 minutes', '1-2 hours', 'More than 2 hours']}},
          { id: 'edu-scheduling', text: 'Creating and adjusting class schedules', type: 'timeEstimate', timeOptions: { hoursPerMonth: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}, roles: ['manager', 'director', 'owner']},
          { id: 'edu-grading', text: 'Entering grades and preparing progress reports', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}, roles: ['contributor', 'manager']},
          { id: 'edu-billing', text: 'Handling tuition invoicing and fee tracking', type: 'timeEstimate', timeOptions: { hoursPerMonth: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}},
          { id: 'edu-supplies', text: 'Managing classroom supplies and learning materials', type: 'timeEstimate', timeOptions: { hoursPerMonth: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
          { id: 'edu-communication', text: 'Parent/student communication and updates', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 2 hours', '2-5 hours', '5-10 hours', 'More than 10 hours']}},
          { id: 'edu-reporting', text: 'Generating institutional reports and compliance documentation', type: 'timeEstimate', timeOptions: { hoursPerMonth: ['Less than 8 hours', '8-16 hours', '16-24 hours', 'More than 24 hours']}, roles: ['manager', 'director', 'c-suite']}
        ]
      }
    ]
  },
  // --- Software Development & Engineering ---
  {
    id: 'software-dev',
    label: 'Software Development',
    sections: [
      {
        title: 'Company Profile',
        questions: [
          {
            id: 'sw-company-type',
            text: 'What type of software development does your company focus on?',
            type: 'multiple',
            options: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'Enterprise Solutions', 'Game Development', 'IoT/Embedded Systems', 'Other']
          },
          {
            id: 'sw-team-size',
            text: 'How large is your development team?',
            type: 'single',
            options: ['1-5 developers', '6-20 developers', '21-50 developers', 'More than 50 developers']
          }
        ]
      },
      {
        title: 'Development Operations',
        description: "Estimate the time spent on the following common tasks.",
        questions: [
          { id: 'sw-code-reviews', text: 'Conducting code reviews and quality checks', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
          { id: 'sw-bug-tracking', text: 'Bug tracking and resolution management', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}},
          { id: 'sw-documentation', text: 'Writing and maintaining documentation', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
          { id: 'sw-env-setup', text: 'Setting up and maintaining development environments', type: 'timeEstimate', timeOptions: { hoursPerMonth: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}},
          { id: 'sw-releases', text: 'Managing releases and deployments', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 2 hours', '2-5 hours', '5-10 hours', 'More than 10 hours']}, roles: ['manager', 'contributor', 'director']},
          { id: 'sw-meetings', text: 'Stand-up meetings and status updates', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
          { id: 'sw-testing', text: 'Testing and QA processes', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}},
          { id: 'sw-dependencies', text: 'Dependency updates and management', type: 'timeEstimate', timeOptions: { hoursPerMonth: ['Less than 4 hours', '4-8 hours', '8-16 hours', 'More than 16 hours']}},
          { id: 'sw-pipeline', text: 'CI/CD pipeline maintenance', type: 'timeEstimate', timeOptions: { hoursPerMonth: ['Less than 3 hours', '3-6 hours', '6-12 hours', 'More than 12 hours']}, roles: ['manager', 'contributor', 'director']}
        ]
      }
    ]
  },
  // --- Insurance ---
  {
    id: 'insurance',
    label: 'Insurance',
    sections: [
      {
        title: 'Business Profile',
        questions: [
          {
            id: 'ins-type',
            text: 'What type of insurance does your business provide or process?',
            type: 'multiple',
            options: ['Health Insurance', 'Life Insurance', 'Property & Casualty', 'Auto Insurance', 'Commercial Insurance', 'Specialty Insurance', 'Other']
          },
          {
            id: 'ins-client-volume',
            text: 'How many policy holders or clients do you serve?',
            type: 'single',
            options: ['Less than 100', '100-1,000', '1,001-10,000', 'More than 10,000']
          }
        ]
      },
      {
        title: 'Operations & Tasks',
        description: "Estimate the time spent on the following common tasks.",
        questions: [
          { id: 'ins-applications', text: 'Processing policy applications and renewals', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}},
          { id: 'ins-quotes', text: 'Premium calculations and generating quotes', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 2 hours', '2-4 hours', '4-6 hours', 'More than 6 hours']}},
          { id: 'ins-claims', text: 'Claims intake and processing', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 8 hours', '8-16 hours', '16-30 hours', 'More than 30 hours']}},
          { id: 'ins-updates', text: 'Customer information updates and policy changes', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-3 hours', '3-5 hours', 'More than 5 hours']}},
          { id: 'ins-renewals', text: 'Policy renewal management and notifications', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 5 hours', '5-10 hours', '10-15 hours', 'More than 15 hours']}},
          { id: 'ins-commission', text: 'Commission tracking and payments', type: 'timeEstimate', timeOptions: { hoursPerMonth: ['Less than 3 hours', '3-8 hours', '8-16 hours', 'More than 16 hours']}, roles: ['manager', 'director', 'owner']},
          { id: 'ins-compliance', text: 'Compliance documentation and regulatory filings', type: 'timeEstimate', timeOptions: { hoursPerMonth: ['Less than 8 hours', '8-16 hours', '16-30 hours', 'More than 30 hours']}, roles: ['manager', 'director', 'c-suite']},
          { id: 'ins-broker', text: 'Agent/broker communications and support', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 4 hours', '4-8 hours', '8-15 hours', 'More than 15 hours']}}
        ]
      }
    ]
  },
  // --- Marketing & Advertising ---
  {
    id: 'marketing',
    label: 'Marketing & Advertising',
    sections: [
      {
        title: 'Agency Profile',
        questions: [
          {
            id: 'mkt-services',
            text: 'What marketing services does your company provide?',
            type: 'multiple',
            options: ['Digital Marketing', 'Content Creation', 'Social Media Management', 'Advertising', 'PR & Communications', 'SEO/SEM', 'Market Research', 'Other']
          },
          {
            id: 'mkt-client-count',
            text: 'How many active clients does your agency serve?',
            type: 'single',
            options: ['1-5 clients', '6-15 clients', '16-30 clients', 'More than 30 clients']
          }
        ]
      },
      {
        title: 'Operations & Tasks',
        description: "Estimate the time spent on the following common tasks.",
        questions: [
          { id: 'mkt-content', text: 'Content creation and scheduling', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours']}},
          { id: 'mkt-reporting', text: 'Campaign performance tracking and reporting', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
          { id: 'mkt-client-comms', text: 'Client communications and approvals', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-2 hours', '2-4 hours', 'More than 4 hours']}},
          { id: 'mkt-budgeting', text: 'Budget tracking and allocation', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 2 hours', '2-4 hours', '4-8 hours', 'More than 8 hours']}, roles: ['manager', 'director', 'owner']},
          { id: 'mkt-social', text: 'Social media management and monitoring', type: 'timeEstimate', timeOptions: { hoursPerDay: ['Less than 1 hour', '1-3 hours', '3-5 hours', 'More than 5 hours']}},
          { id: 'mkt-assets', text: 'Creative asset organization and management', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
          { id: 'mkt-meetings', text: 'Meeting coordination and documentation', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}},
          { id: 'mkt-research', text: 'Competitive analysis and market research', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 4 hours', '4-8 hours', '8-12 hours', 'More than 12 hours']}, roles: ['contributor', 'manager', 'director']},
          { id: 'mkt-email', text: 'Email marketing execution and tracking', type: 'timeEstimate', timeOptions: { hoursPerWeek: ['Less than 3 hours', '3-6 hours', '6-10 hours', 'More than 10 hours']}}
        ]
      }
    ]
  }
];

export const getRelevantQuestions = (
    industryId: string,
    role: Role,
    size: BusinessSize
): { industry: Industry | undefined, sections: Section[] } => {
    const industryData = industries.find(ind => ind.id === industryId);
    const fallback = { id: 'generic', label: 'Generic Business', sections: [] };
    
    if (!industryData) {
        return { industry: fallback, sections: [] };
    }
    
    const relevantSections: Section[] = [];
    
    const filterSection = (section: Section): Section | null => {
        // If section has roles specified, check that this role applies
        if (section.roles && section.roles.length > 0 && !section.roles.includes(role)) {
            return null;
        }
        
        // If section has sizes specified, check that this size applies
        if (section.sizes && section.sizes.length > 0 && !section.sizes.includes(size)) {
            return null;
        }
        
        // Filter questions that are relevant to this role and size
        const filteredQuestions = section.questions.filter(q => {
            if (q.roles && q.roles.length > 0 && !q.roles.includes(role)) {
                return false;
            }
            
            if (q.sizes && q.sizes.length > 0 && !q.sizes.includes(size)) {
                return false;
            }
            
            return true;
        });
        
        // If we have no questions left after filtering, skip this section
        if (filteredQuestions.length === 0) {
            return null;
        }
        
        // Return a new section with only the relevant questions
        return {
            ...section,
            questions: filteredQuestions
        };
    };
    
    // Process each section
    industryData.sections.forEach(section => {
        const filteredSection = filterSection(section);
        if (filteredSection) {
            relevantSections.push(filteredSection);
        }
    });
    
    return { industry: industryData || fallback, sections: relevantSections };
};

// --- Add lists for dropdowns etc ---
export const businessSizes = [
    { id: 'small', label: 'Small (1-20 employees, < $1M revenue)' },
    { id: 'medium', label: 'Medium (21-200 employees, $1M-$10M revenue)' },
    { id: 'large', label: 'Large (201+ employees, > $10M revenue)' },
];

export const userRoles = [
    { id: 'owner', label: 'Business Owner / Entrepreneur' },
    { id: 'c-suite', label: 'C-Suite Executive (CEO, COO, CTO, etc.)' },
    { id: 'director', label: 'Department Head / Director' },
    { id: 'manager', label: 'Manager / Team Lead' },
    { id: 'contributor', label: 'Individual Contributor' },
];