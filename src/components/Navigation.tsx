import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';
import { ThemeToggleButton } from '../components/ui/theme-toggle-button';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        // No longer needed since dropdown is removed
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // Check if we're on the home page
    const isHomePage = window.location.pathname === '/';
    
    if (isHomePage) {
      // If on home page, scroll to the section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="fixed top-0 w-full py-2.5 flex flex-wrap justify-between items-center z-50 backdrop-blur-sm bg-dark/80 border-b border-gray-100/5 px-4 md:px-6">
      <Link to="/" className="flex items-center flex-shrink-0">
        <img
          src="https://i.imgur.com/V0K7Oqk.png"
          alt="Softwair"
          className="h-7 md:h-8 w-auto object-contain"
          loading="eager"
          style={{ aspectRatio: '400/100' }}
        />
      </Link>
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
      >
        <div className="w-5.5 h-0.5 bg-white mb-1.5"></div>
        <div className="w-5.5 h-0.5 bg-white mb-1.5"></div>
        <div className="w-5.5 h-0.5 bg-white"></div>
      </button>
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto items-center gap-4 md:gap-5 py-3 md:py-0`}>
        {/* Services Button */}
        <div className="relative w-full md:w-auto" ref={dropdownRef}>
          <button 
            onClick={() => scrollToSection('services')}
            className="flex items-center justify-center md:justify-start gap-1 text-base font-semibold text-white/80 hover:text-white transition-all duration-300 w-full"
          >
            Our Services
          </button>
        </div>
        
        <Link 
          to="/pricing" 
          className="text-base font-semibold text-white/80 hover:text-white transition-all duration-300 w-full md:w-auto text-center md:text-left"
        >
          Pricing
        </Link>
        
        {/* Theme Toggle Button */}
        <ThemeToggleButton />
        
        {/* Got an Idea Button - green button restored */}
        <a 
          href="https://calendly.com/your-calendar-link/15min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#00FF79] rounded-lg text-[#121316] font-semibold hover:bg-[#00FF79]/90 transition-all duration-300 text-base whitespace-nowrap flex items-center gap-1.5"
        >
          <Calendar className="w-4 h-4" />
          Got an Idea?
        </a>
      </div>
    </nav>
  );
}