// Industry Types
export type Industry = {
  id: string;
  label: string;
  sections: Section[];
};

export type Section = {
  title: string;
  questions: Question[];
};

export type Question = {
  id: string;
  text: string;
  type: 'single' | 'multiple' | 'scale' | 'text';
  options?: string[];
};

export const industries: Industry[] = [
  {
    id: 'it-itsm',
    label: 'IT & ITSM',
    sections: [
      {
        title: 'Business Profile',
        questions: [
          {
            id: 'company-size',
            text: 'How many employees does your IT department support?',
            type: 'single',
            options: [
              'Less than 50',
              '50-200',
              '201-500',
              'More than 500'
            ]
          },
          {
            id: 'tech-stack',
            text: 'Which systems do you currently use for IT management?',
            type: 'multiple',
            options: [
              'Help Desk Software',
              'Remote Access Tools',
              'Network Monitoring',
              'Asset Management',
              'Automation Scripts',
              'Other'
            ]
          }
        ]
      },
      {
        title: 'Daily Operations',
        questions: [
          {
            id: 'password-resets',
            text: 'How much time is spent on password resets and access management daily?',
            type: 'single',
            options: [
              'Less than 1 hour',
              '1-2 hours',
              '2-4 hours',
              'More than 4 hours'
            ]
          },
          {
            id: 'ticket-management',
            text: 'How many hours per day are dedicated to managing and triaging IT tickets?',
            type: 'single',
            options: [
              'Less than 2 hours',
              '2-4 hours',
              '4-6 hours',
              'More than 6 hours'
            ]
          },
          {
            id: 'onboarding',
            text: 'How long does employee onboarding/offboarding typically take?',
            type: 'single',
            options: [
              'Less than 1 hour',
              '1-2 hours',
              '2-4 hours',
              'More than 4 hours'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'fitness',
    label: 'Fitness & Wellness',
    sections: [
      {
        title: 'Business Profile',
        questions: [
          {
            id: 'business-type',
            text: 'What type of fitness/wellness business do you operate?',
            type: 'single',
            options: [
              'Gym/Fitness Center',
              'Personal Training',
              'Yoga/Pilates Studio',
              'Wellness Spa',
              'Other'
            ]
          },
          {
            id: 'client-volume',
            text: 'How many active clients do you serve monthly?',
            type: 'single',
            options: [
              'Less than 50',
              '50-200',
              '201-500',
              'More than 500'
            ]
          }
        ]
      },
      {
        title: 'Operations',
        questions: [
          {
            id: 'scheduling',
            text: 'How much time is spent managing appointments and class schedules daily?',
            type: 'single',
            options: [
              'Less than 1 hour',
              '1-2 hours',
              '2-4 hours',
              'More than 4 hours'
            ]
          },
          {
            id: 'client-communication',
            text: 'How many hours per week do you spend on client communications and follow-ups?',
            type: 'single',
            options: [
              'Less than 5 hours',
              '5-10 hours',
              '10-20 hours',
              'More than 20 hours'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    sections: [
      {
        title: 'Production Profile',
        questions: [
          {
            id: 'production-type',
            text: 'What type of manufacturing do you primarily engage in?',
            type: 'single',
            options: [
              'Discrete Manufacturing',
              'Process Manufacturing',
              'Assembly Line Production',
              'Custom Manufacturing',
              'Other'
            ]
          }
        ]
      },
      {
        title: 'Operations',
        questions: [
          {
            id: 'production-scheduling',
            text: 'How much time is spent on production scheduling and order management daily?',
            type: 'single',
            options: [
              'Less than 2 hours',
              '2-4 hours',
              '4-6 hours',
              'More than 6 hours'
            ]
          },
          {
            id: 'inventory-tracking',
            text: 'How frequently do you manually track and update inventory levels?',
            type: 'single',
            options: [
              'Multiple times per day',
              'Once daily',
              'Weekly',
              'Monthly'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'logistics',
    label: 'Logistics',
    sections: [
      {
        title: 'Business Profile',
        questions: [
          {
            id: 'logistics-type',
            text: 'What type of logistics operations do you manage?',
            type: 'multiple',
            options: [
              'Warehousing',
              'Transportation',
              'Last-mile Delivery',
              'Supply Chain Management',
              'Freight Forwarding',
              'Other'
            ]
          },
          {
            id: 'shipment-volume',
            text: 'How many shipments do you process monthly?',
            type: 'single',
            options: [
              'Less than 100',
              '100-500',
              '501-2000',
              'More than 2000'
            ]
          }
        ]
      },
      {
        title: 'Daily Operations',
        questions: [
          {
            id: 'inventory-tracking',
            text: 'How much time is spent on inventory tracking and reconciliation daily?',
            type: 'single',
            options: [
              'Less than 2 hours',
              '2-4 hours',
              '4-6 hours',
              'More than 6 hours'
            ]
          },
          {
            id: 'route-planning',
            text: 'How long does route planning and optimization take daily?',
            type: 'single',
            options: [
              'Less than 1 hour',
              '1-2 hours',
              '2-4 hours',
              'More than 4 hours'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'property-management',
    label: 'Property Management',
    sections: [
      {
        title: 'Portfolio Overview',
        questions: [
          {
            id: 'property-count',
            text: 'How many properties do you manage?',
            type: 'single',
            options: [
              'Less than 10',
              '10-50',
              '51-200',
              'More than 200'
            ]
          },
          {
            id: 'property-type',
            text: 'What types of properties do you manage?',
            type: 'multiple',
            options: [
              'Residential',
              'Commercial',
              'Mixed-use',
              'Student Housing',
              'Other'
            ]
          }
        ]
      },
      {
        title: 'Operations',
        questions: [
          {
            id: 'maintenance-requests',
            text: 'How much time is spent processing maintenance requests daily?',
            type: 'single',
            options: [
              'Less than 1 hour',
              '1-3 hours',
              '3-5 hours',
              'More than 5 hours'
            ]
          },
          {
            id: 'rent-collection',
            text: 'How many hours per month are spent on rent collection and payment processing?',
            type: 'single',
            options: [
              'Less than 5 hours',
              '5-10 hours',
              '10-20 hours',
              'More than 20 hours'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'construction',
    label: 'Construction & Trades',
    sections: [
      {
        title: 'Business Profile',
        questions: [
          {
            id: 'construction-type',
            text: 'What type of construction work do you primarily do?',
            type: 'single',
            options: [
              'Residential Construction',
              'Commercial Construction',
              'Specialized Trade',
              'Renovation/Remodeling',
              'Other'
            ]
          },
          {
            id: 'team-size',
            text: 'How many field workers do you manage?',
            type: 'single',
            options: [
              '1-5',
              '6-20',
              '21-50',
              'More than 50'
            ]
          }
        ]
      },
      {
        title: 'Project Management',
        questions: [
          {
            id: 'scheduling',
            text: 'How much time is spent on crew scheduling and job assignments daily?',
            type: 'single',
            options: [
              'Less than 1 hour',
              '1-2 hours',
              '2-4 hours',
              'More than 4 hours'
            ]
          },
          {
            id: 'documentation',
            text: 'How many hours per week are spent on project documentation and reporting?',
            type: 'single',
            options: [
              'Less than 5 hours',
              '5-10 hours',
              '10-20 hours',
              'More than 20 hours'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'restaurant',
    label: 'Restaurant',
    sections: [
      {
        title: 'Restaurant Profile',
        questions: [
          {
            id: 'restaurant-type',
            text: 'What type of restaurant do you operate?',
            type: 'single',
            options: [
              'Quick Service',
              'Casual Dining',
              'Fine Dining',
              'Cafe/Bakery',
              'Other'
            ]
          },
          {
            id: 'staff-count',
            text: 'How many staff members do you employ?',
            type: 'single',
            options: [
              'Less than 10',
              '10-25',
              '26-50',
              'More than 50'
            ]
          }
        ]
      },
      {
        title: 'Operations',
        questions: [
          {
            id: 'inventory-management',
            text: 'How much time is spent on inventory management daily?',
            type: 'single',
            options: [
              'Less than 1 hour',
              '1-2 hours',
              '2-4 hours',
              'More than 4 hours'
            ]
          },
          {
            id: 'staff-scheduling',
            text: 'How many hours per week are spent on staff scheduling and management?',
            type: 'single',
            options: [
              'Less than 5 hours',
              '5-10 hours',
              '10-15 hours',
              'More than 15 hours'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'hospitality',
    label: 'Hospitality',
    sections: [
      {
        title: 'Property Profile',
        questions: [
          {
            id: 'property-type',
            text: 'What type of hospitality business do you operate?',
            type: 'single',
            options: [
              'Hotel',
              'Resort',
              'Bed & Breakfast',
              'Vacation Rentals',
              'Other'
            ]
          },
          {
            id: 'room-count',
            text: 'How many rooms/units do you manage?',
            type: 'single',
            options: [
              'Less than 20',
              '20-50',
              '51-200',
              'More than 200'
            ]
          }
        ]
      },
      {
        title: 'Daily Operations',
        questions: [
          {
            id: 'reservation-management',
            text: 'How much time is spent managing reservations daily?',
            type: 'single',
            options: [
              'Less than 2 hours',
              '2-4 hours',
              '4-6 hours',
              'More than 6 hours'
            ]
          },
          {
            id: 'guest-services',
            text: 'How many hours per day are spent on guest services and communication?',
            type: 'single',
            options: [
              'Less than 4 hours',
              '4-8 hours',
              '8-12 hours',
              'More than 12 hours'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'retail',
    label: 'Retail & Ecommerce',
    sections: [
      {
        title: 'Business Profile',
        questions: [
          {
            id: 'retail-type',
            text: 'What type of retail business do you operate?',
            type: 'multiple',
            options: [
              'Physical Store',
              'Online Store',
              'Marketplace Seller',
              'Hybrid (Online & Physical)',
              'Other'
            ]
          },
          {
            id: 'order-volume',
            text: 'How many orders do you process monthly?',
            type: 'single',
            options: [
              'Less than 100',
              '100-500',
              '501-2000',
              'More than 2000'
            ]
          }
        ]
      },
      {
        title: 'Operations',
        questions: [
          {
            id: 'inventory-updates',
            text: 'How much time is spent updating inventory and product listings daily?',
            type: 'single',
            options: [
              'Less than 1 hour',
              '1-3 hours',
              '3-5 hours',
              'More than 5 hours'
            ]
          },
          {
            id: 'order-processing',
            text: 'How many hours per day are spent on order processing and fulfillment?',
            type: 'single',
            options: [
              'Less than 2 hours',
              '2-4 hours',
              '4-6 hours',
              'More than 6 hours'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'legal',
    label: 'Legal',
    sections: [
      {
        title: 'Practice Profile',
        questions: [
          {
            id: 'practice-type',
            text: 'What type of legal practice do you operate?',
            type: 'multiple',
            options: [
              'Corporate Law',
              'Family Law',
              'Criminal Law',
              'Real Estate Law',
              'Other'
            ]
          },
          {
            id: 'case-volume',
            text: 'How many active cases do you handle monthly?',
            type: 'single',
            options: [
              'Less than 20',
              '20-50',
              '51-100',
              'More than 100'
            ]
          }
        ]
      },
      {
        title: 'Daily Operations',
        questions: [
          {
            id: 'document-preparation',
            text: 'How much time is spent on document preparation daily?',
            type: 'single',
            options: [
              'Less than 2 hours',
              '2-4 hours',
              '4-6 hours',
              'More than 6 hours'
            ]
          },
          {
            id: 'client-communication',
            text: 'How many hours per week are spent on client communications?',
            type: 'single',
            options: [
              'Less than 5 hours',
              '5-10 hours',
              '10-20 hours',
              'More than 20 hours'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    sections: [
      {
        title: 'Practice Profile',
        questions: [
          {
            id: 'healthcare-type',
            text: 'What type of healthcare practice do you operate?',
            type: 'single',
            options: [
              'Primary Care',
              'Specialty Practice',
              'Dental',
              'Mental Health',
              'Other'
            ]
          },
          {
            id: 'patient-volume',
            text: 'How many patients do you see monthly?',
            type: 'single',
            options: [
              'Less than 100',
              '100-300',
              '301-500',
              'More than 500'
            ]
          }
        ]
      },
      {
        title: 'Operations',
        questions: [
          {
            id: 'appointment-scheduling',
            text: 'How much time is spent on appointment scheduling daily?',
            type: 'single',
            options: [
              'Less than 1 hour',
              '1-2 hours',
              '2-4 hours',
              'More than 4 hours'
            ]
          },
          {
            id: 'insurance-processing',
            text: 'How many hours per week are spent on insurance claims and billing?',
            type: 'single',
            options: [
              'Less than 5 hours',
              '5-10 hours',
              '10-20 hours',
              'More than 20 hours'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'education',
    label: 'Education & Childcare',
    sections: [
      {
        title: 'Institution Profile',
        questions: [
          {
            id: 'education-type',
            text: 'What type of educational institution do you operate?',
            type: 'single',
            options: [
              'Preschool/Daycare',
              'K-12 School',
              'Tutoring Center',
              'Special Education',
              'Other'
            ]
          },
          {
            id: 'student-count',
            text: 'How many students do you serve?',
            type: 'single',
            options: [
              'Less than 50',
              '50-200',
              '201-500',
              'More than 500'
            ]
          }
        ]
      },
      {
        title: 'Administrative Tasks',
        questions: [
          {
            id: 'attendance-tracking',
            text: 'How much time is spent on attendance tracking daily?',
            type: 'single',
            options: [
              'Less than 30 minutes',
              '30-60 minutes',
              '1-2 hours',
              'More than 2 hours'
            ]
          },
          {
            id: 'record-keeping',
            text: 'How many hours per week are spent on student records and reporting?',
            type: 'single',
            options: [
              'Less than 5 hours',
              '5-10 hours',
              '10-15 hours',
              'More than 15 hours'
            ]
          }
        ]
      }
    ]
  }
];