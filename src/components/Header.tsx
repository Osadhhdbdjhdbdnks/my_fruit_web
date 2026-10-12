import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/seasonal', label: 'Seasonal' },
    { to: '/gifts', label: 'Gifts' },
    { to: '/story', label: 'Our Story' },
    { to: '/journal', label: 'Journal' },
  ];

  const headerBg = (isHome && !scrolled && !mobileOpen)
    ? 'bg-transparent'
    : 'bg-ivory/97 backdrop-blur-sm shadow-[0_1px_0_rgba(74,47,27,0.06)]';

  const textColor = (isHome && !scrolled && !mobileOpen)
    ? 'text-cream'
    : 'text-brown';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Left nav - Desktop */}
            <nav className="hidden lg:flex items-center gap-7 flex-1">
              {navLinks.slice(0, 3).map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[13px] font-medium tracking-[0.04em] uppercase transition-colors hover:text-terracotta ${textColor} opacity-80 hover:opacity-100`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors ${textColor}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Brand - Center */}
            <Link to="/" className="flex flex-col items-center group absolute left-1/2 -translate-x-1/2 lg:relative lg:left-auto lg:translate-x-0 lg:flex-1 lg:justify-center">
              <span className={`font-serif text-xl sm:text-2xl lg:text-[26px] font-medium tracking-wide transition-colors ${textColor}`}>
                Orchard Atelier
              </span>
              <span className={`font-handwritten text-[11px] mt-0.5 transition-colors ${
                (isHome && !scrolled && !mobileOpen) ? 'text-cream/60' : 'text-terracotta/60'
              }`}>
                Nature, Considered.
              </span>
            </Link>

            {/* Right nav - Desktop */}
            <div className="flex items-center gap-7 flex-1 justify-end">
              <nav className="hidden lg:flex items-center gap-7">
                {navLinks.slice(3).map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-[13px] font-medium tracking-[0.04em] uppercase transition-colors hover:text-terracotta ${textColor} opacity-80 hover:opacity-100`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link
                to="/cart"
                className={`relative p-2 transition-colors ${textColor}`}
                aria-label="Shopping bag"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 bg-terracotta text-white text-[10px] w-[18px] h-[18px] rounded-full flex items-center justify-center font-medium"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ivory pt-20"
          >
            <nav className="flex flex-col items-center gap-7 pt-16">
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
