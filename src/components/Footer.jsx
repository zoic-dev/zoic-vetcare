import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6 group">
            <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-cream">
              <Leaf size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold leading-none">ZOIC</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-sage-light">Vetcare</span>
            </div>
          </Link>
          <p className="text-cream/60 text-sm leading-relaxed mb-6">
            Pioneering botanical health solutions for the veterinary industry. Our mission is to combine ancient herbal wisdom with modern pharmaceutical technology.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full border border-cream/20 flex items-center justify-center hover:bg-sage transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-cream/20 flex items-center justify-center hover:bg-sage transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-cream/20 flex items-center justify-center hover:bg-sage transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-cream/70">
            <li><Link to="/products" className="hover:text-sage transition-colors">Our Products</Link></li>
            <li><Link to="/services" className="hover:text-sage transition-colors">PCD Franchise</Link></li>
            <li><Link to="/services" className="hover:text-sage transition-colors">Third Party Mfg</Link></li>
            <li><Link to="/about" className="hover:text-sage transition-colors">About Zoic</Link></li>
            <li><Link to="/contact" className="hover:text-sage transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Products</h4>
          <ul className="space-y-4 text-sm text-cream/70">
            <li><a href="#" className="hover:text-sage transition-colors">Feed Supplements</a></li>
            <li><a href="#" className="hover:text-sage transition-colors">Herbal Liver Tonics</a></li>
            <li><a href="#" className="hover:text-sage transition-colors">Calcium Supplements</a></li>
            <li><a href="#" className="hover:text-sage transition-colors">Wound Healers</a></li>
            <li><a href="#" className="hover:text-sage transition-colors">Digestive Powders</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 text-cream/70">
              <MapPin size={18} className="text-sage flex-shrink-0" />
              <span>Plot No. 194, Industrial Area, Sector 82, Mohali, Punjab - 160062</span>
            </li>
            <li className="flex gap-3 text-cream/70">
              <Phone size={18} className="text-sage flex-shrink-0" />
              <a href="tel:+918699119911" className="hover:text-sage transition-colors">+91 86991 19911</a>
            </li>
            <li className="flex gap-3 text-cream/70">
              <Mail size={18} className="text-sage flex-shrink-0" />
              <a href="mailto:info@zoicvetcare.com" className="hover:text-sage transition-colors">info@zoicvetcare.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
        <p>© {currentYear} Zoic Vetcare (A Division of Zoic Wellness). All rights reserved.</p>
        <div className="flex gap-6 uppercase tracking-widest font-medium">
          <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
