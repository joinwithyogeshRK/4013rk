import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Characters', path: '/characters' },
    { name: 'Pre-Order', path: '/pre-order' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-black/80 backdrop-blur-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary animate-neon-pulse">
            GTA VI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-white/80 hover:text-primary transition-colors',
                location.pathname === link.path && 'text-primary font-semibold'
              )}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white neon-border"
          >
            Pre-order Now
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'md:hidden absolute w-full bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden',
          isOpen ? 'max-h-screen py-4' : 'max-h-0'
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-white/80 hover:text-primary py-2 transition-colors',
                location.pathname === link.path && 'text-primary font-semibold'
              )}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white neon-border w-full mt-4"
          >
            Pre-order Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
