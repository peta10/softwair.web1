import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { NavigationButton } from './NavigationButton';
import { 
    Industry, 
    BusinessSize as BusinessSizeType, // Renaming type import to avoid conflict
    Role as RoleType,                // Renaming type import to avoid conflict
    businessSizes, 
    userRoles 
} from '../../data/industryQuestionnaires';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"; // Correct path assuming shadcn default structure

// Define a type for the form data slice relevant to this step
interface Step1FormData {
  industry: string;
  businessSize: BusinessSizeType | '';
  role: RoleType | '';
  // Add other optional fields if collected here
  department?: string;
  yearsInRole?: string;
  region?: string;
  techLandscape?: string;
}

interface Step1Props {
  industries: Industry[];
  businessSizes: { id: BusinessSizeType; label: string }[];
  userRoles: { id: RoleType; label: string }[];
  formData: Step1FormData;
  onDemographicChange: (field: keyof Step1FormData, value: string) => void;
  onNext: () => void;
  industryIcons: Record<string, ReactNode>;
}

export const Step1Demographics: React.FC<Step1Props> = ({
  industries,
  businessSizes,
  userRoles,
  formData,
  onDemographicChange,
  onNext,
  industryIcons
}) => {

  const canProceed = formData.industry && formData.businessSize && formData.role;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12" // Increased spacing
    >
      {/* Industry Selection */}
      <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">1. Select Your Industry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.filter(ind => ind.id !== 'other' && ind.id !== 'general-admin' && ind.id !== 'role-specific' && ind.id !== 'size-specific' && ind.id !== 'final-thoughts').map((industry) => (
              <motion.button
                key={industry.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onDemographicChange('industry', industry.id)}
                className={`p-4 rounded-xl text-left flex items-center gap-4 transition-all duration-300 h-full ${
                  formData.industry === industry.id
                    ? 'bg-[#00FF79] text-[#121316]'
                    : 'bg-[#248AFF]/5 hover:bg-[#248AFF]/10 text-white'
                }`}
              >
                {industryIcons[industry.id] || industryIcons.other}
                <span className="font-medium">{industry.label}</span>
              </motion.button>
            ))}
             {/* "Other" Option */}
              <motion.button
                  key="other"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onDemographicChange('industry', 'other')}
                  className={`p-4 rounded-xl text-left flex items-center gap-4 transition-all duration-300 h-full ${
                  formData.industry === 'other'
                      ? 'bg-[#00FF79] text-[#121316]'
                      : 'bg-[#248AFF]/5 hover:bg-[#248AFF]/10 text-white'
                  }`}
              >
                  {industryIcons.other}
                  <span className="font-medium">Other</span>
              </motion.button>
          </div>
      </div>

      {/* Business Size Selection - Using Select Dropdown */}
      <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">2. Select Your Business Size</h2>
          <Select 
              onValueChange={(value) => onDemographicChange('businessSize', value)} 
              value={formData.businessSize || undefined} // Ensure undefined for placeholder
          >
            <SelectTrigger className="w-full md:w-[400px] bg-white/5 border-white/10 text-white focus:border-[#00FC61]">
              <SelectValue placeholder="Select business size..." />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1b1e] border-white/10 text-white">
              {businessSizes.map((size) => (
                <SelectItem key={size.id} value={size.id} className="hover:bg-white/10 focus:bg-white/10">
                  {size.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
      </div>

      {/* Role Selection - Using Select Dropdown */}
      <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">3. Select Your Role</h2>
           <Select 
              onValueChange={(value) => onDemographicChange('role', value)} 
              value={formData.role || undefined} // Ensure undefined for placeholder
          >
            <SelectTrigger className="w-full md:w-[400px] bg-white/5 border-white/10 text-white focus:border-[#00FC61]">
              <SelectValue placeholder="Select your role..." />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1b1e] border-white/10 text-white">
              {userRoles.map((role) => (
                <SelectItem key={role.id} value={role.id} className="hover:bg-white/10 focus:bg-white/10">
                  {role.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
      </div>
      
      {/* TODO: Add optional fields like Department, Years, Region, Tech stack if needed */} 

      {/* Navigation */} 
      <div className="flex justify-end pt-8">
        <NavigationButton onClick={onNext} disabled={!canProceed}>
          Continue
        </NavigationButton>
      </div>
    </motion.div>
  );
}; 