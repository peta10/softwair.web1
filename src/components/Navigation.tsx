import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Navigation() {
  const [showLoginTooltip, setShowLoginTooltip] = useState(false);
  const [showSignupTooltip, setShowSignupTooltip] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full space-fluid-sm md:space-fluid-md flex flex-wrap justify-between items-center z-50 backdrop-blur-sm bg-dark/80 border-b border-gray-100/5 px-4 md:px-8">
      <Link to="/" className="flex items-center py-2 flex-shrink-0">
        <img
          src="https://i.imgur.com/V0K7Oqk.png"
          alt="Softwair"
          className="h-8 md:h-[clamp(2rem,4vw,3rem)] w-auto object-contain"
          loading="eager"
          style={{ aspectRatio: '400/100' }}
        />
      </Link>
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
      >
        <div className="w-6 h-0.5 bg-white mb-1.5"></div>
        <div className="w-6 h-0.5 bg-white mb-1.5"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto items-center gap-4 md:gap-[clamp(0.5rem,2vw,2rem)] py-4 md:py-0`}>
        <Link 
          to="/product" 
          className="text-fluid-base font-semibold text-white/80 hover:text-white transition-all duration-300 w-full md:w-auto text-center md:text-left"
        >
          Product
        </Link>
        <Link 
          to="/pricing" 
          className="text-fluid-base font-semibold text-white/80 hover:text-white transition-all duration-300 w-full md:w-auto text-center md:text-left"
        >
          Pricing
        </Link>
        <div className="relative w-full md:w-auto">
          <button
            onMouseEnter={() => setShowLoginTooltip(true)}
            onMouseLeave={() => setShowLoginTooltip(false)}
            className="px-4 py-2 rounded-lg border border-gray-100/20 text-gray-100 hover:bg-gray-100/10 transition-all duration-300 text-fluid-base whitespace-nowrap w-full md:w-auto"
          >
          Log in
          </button>
          {showLoginTooltip && (
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-dark-surface text-gray-100 text-sm rounded whitespace-nowrap">
              Coming Soon
            </div>
          )}
        </div>
        <div className="relative w-full md:w-auto">
          <button
            onMouseEnter={() => setShowSignupTooltip(true)}
            onMouseLeave={() => setShowSignupTooltip(false)}
            className="px-4 py-2 rounded-lg bg-primary text-dark hover:bg-primary-hover transition-all duration-300 font-medium text-fluid-base whitespace-nowrap w-full md:w-auto"
          >
          Sign up
          </button>
          {showSignupTooltip && (
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-dark-surface text-gray-100 text-sm rounded whitespace-nowrap">
              Coming Soon
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}