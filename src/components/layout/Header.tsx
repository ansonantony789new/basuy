import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '@/assets/logo.png';

const navLinks = [
{ name: 'Home', path: '/' },
{ name: 'About Us', path: '/about' },
{ name: 'Our Work', path: '/programs' },
{ name: 'Get Involved', path: '/get-involved' },
{ name: 'Gallery', path: '/gallery' },
{ name: 'News', path: '/news' },
{ name: 'Contact', path: '/contact' }];


export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ?
      'bg-white/95 backdrop-blur-md shadow-soft' :
      'bg-white shadow-sm'}`
      }>

      <div className="container-wide">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logoImage}
              alt="Basudeb Das Foundation Logo"
              className="h-11 w-11 md:h-12 md:w-12 object-contain rounded-full" />

            <div className="flex flex-col">
              <span className="font-display font-bold text-xl md:text-[22px] text-primary leading-tight tracking-wide">
                Basudeb Das
              </span>
              <span className="text-xs md:text-sm text-primary/70 font-semibold tracking-[0.15em] uppercase">
                Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors animated-underline ${
              location.pathname === link.path ?
              'text-accent font-semibold' :
              'text-primary hover:text-primary/80'}`
              }>

                {link.name}
              </Link>
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="donate" size="lg" asChild>
              <Link to="/donate">
                <Heart className="w-4 h-4" />
                Donate Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu">

            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-background border-t border-border">

            <div className="container-wide py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) =>
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium py-2 transition-colors ${
                location.pathname === link.path ?
                'text-accent font-semibold' :
                'text-primary hover:text-primary/80'}`
                }>

                    {link.name}
                  </Link>
              )}
                <div className="pt-4 border-t border-border">
                  <Button variant="donate" size="lg" className="w-full" asChild>
                    <Link to="/donate">
                      <Heart className="w-4 h-4" />
                      Donate Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

};