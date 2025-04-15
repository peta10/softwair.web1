import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-gray-100/5 py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-8 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Softwair. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link 
              to="/privacy" 
              className="text-sm text-gray-400 hover:text-gray-100 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}