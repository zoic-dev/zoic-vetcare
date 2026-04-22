import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-cream/90 backdrop-blur-md border-b border-sage/10 py-3 shadow-sm' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-cream transition-transform group-hover:rotate-12">
            <Leaf size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold leading-none text-forest">ZOIC</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-sage-light">Vetcare</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors hover:text-sage',
                  isActive ? 'text-sage' : 'text-forest/70'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="bg-sage text-cream px-6 py-2.5 rounded-full text-sm font-medium hover:bg-forest transition-colors shadow-lg shadow-sage/10"
          >
            Inquire Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-forest" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-cream border-b border-sage/10 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'text-lg font-serif font-medium transition-colors',
                      isActive ? 'text-sage' : 'text-forest/70'
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-sage/10 mt-2 flex flex-col gap-4">
                <a href="tel:+918699119911" className="flex items-center gap-3 text-sage text-sm font-medium">
                  <Phone size={18} /> +91 86991 19911
                </a>
                <a href="mailto:info@zoicvetcare.com" className="flex items-center gap-3 text-sage text-sm font-medium">
                  <Mail size={18} /> info@zoicvetcare.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
