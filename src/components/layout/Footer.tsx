import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="bg-accent py-16">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Together, we can heal the world.
          </h2>
          <p className="text-accent-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Your support enables us to continue our mission of compassion and community building.
          </p>
          <Button variant="trust" size="xl" asChild>
            <Link to="/donate">
              <Heart className="w-5 h-5" />
              Donate Now
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground fill-current" />
                </div>
                <div>
                  <span className="font-display font-bold text-lg leading-tight block">
                    Basudeb Das
                  </span>
                  <span className="text-xs text-primary-foreground/70 font-medium tracking-wide">
                    Foundation
                  </span>
                </div>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                A non-profit humanitarian foundation committed to improving lives and building stronger communities through compassion, action, and inclusive social initiatives.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'Our Programs', path: '/programs' },
                  { name: 'Get Involved', path: '/get-involved' },
                  { name: 'Donate', path: '/donate' },
                  { name: 'Gallery', path: '/gallery' },
                  { name: 'Contact', path: '/contact' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-6">Legal</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Privacy Policy', path: '/privacy-policy' },
                  { name: 'Terms & Conditions', path: '/terms-and-conditions' },
                  { name: 'Refund & Cancellation', path: '/refund-policy' },
                  { name: 'Shipping Policy', path: '/shipping-policy' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-primary-foreground/60 shrink-0" />
                  <span className="text-primary-foreground/80 text-sm md:text-base">
                    <strong className="text-white block mb-1">Reg. Address:</strong>
                    Manotosh Ray Sarani, Deshbandhupara,<br />
                    near Gourio Math, Siliguri,<br />
                    District: Darjeeling, PIN: 734004
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 shrink-0" />
                  <span className="text-primary-foreground/80 text-sm">
                    <strong className="text-white block mb-1">Other Branches:</strong>
                    Bengaluru & Mumbai
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary-foreground/60 shrink-0" />
                  <span className="text-primary-foreground/80 text-sm md:text-base">+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary-foreground/60 shrink-0" />
                  <span className="text-primary-foreground/80 text-sm md:text-base break-all md:break-normal">info@basudebdasfoundation.org</span>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                    aria-label="Social media link"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 Basudeb Das Foundation. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Made with <Heart className="w-4 h-4 inline text-accent fill-current" /> for a better world
          </p>
        </div>
      </div>
    </footer>
  );
};
