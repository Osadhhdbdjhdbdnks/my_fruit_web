import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/seasonal', label: 'Seasonal' },
    { to: '/gifts', label: 'Gifts' },
    { to: '/story', label: 'Our Story' },
    { to: '/journal', label: 'Journal' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHome && !mobileOpen
            ? 'bg-transparent'
            : 'bg-ivory/95 backdrop-blur-sm shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-brown hover:text-terracotta transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 3).map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-terracotta ${
                    isHome && !mobileOpen ? 'text-brown/90' : 'text-brown/70'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Brand */}
            <Link to="/" className="flex flex-col items-center group">
              <span className={`font-serif text-2xl lg:text-3xl font-medium tracking-wide transition-colors ${
                isHome && !mobileOpen ? 'text-brown' : 'text-brown'
              }`}>
                Orchard Atelier
              </span>
              <span className="font-handwritten text-xs text-terracotta/70 mt-0.5">
                Nature, Considered.
              </span>
            </Link>

            {/* Right nav */}
            <div className="flex items-center gap-6">
              <nav className="hidden lg:flex items-center gap-8">
                {navLinks.slice(3).map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-sm font-medium tracking-wide transition-colors hover:text-terracotta ${
                      isHome && !mobileOpen ? 'text-brown/90' : 'text-brown/70'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link
                to="/cart"
                className="relative p-2 text-brown hover:text-terracotta transition-colors"
                aria-label="Shopping bag"
              >
                <ShoppingBag size={22} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 bg-terracotta text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ivory pt-24"
          >
            <nav className="flex flex-col items-center gap-8 pt-12">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-3xl text-brown hover:text-terracotta transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
