import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/90">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl text-cream">Orchard Atelier</span>
              <span className="block font-handwritten text-sm text-terracotta mt-1">
                Nature, Considered.
              </span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-cream/60 max-w-xs">
              Exceptional fruit, thoughtfully selected for the way we live, gather, and share.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-cream/60 hover:text-terracotta transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=citrus" className="text-sm text-cream/60 hover:text-terracotta transition-colors">Citrus & Sunshine</Link></li>
              <li><Link to="/shop?category=orchard" className="text-sm text-cream/60 hover:text-terracotta transition-colors">Orchard Fruits</Link></li>
              <li><Link to="/gifts" className="text-sm text-cream/60 hover:text-terracotta transition-colors">Gift Atelier</Link></li>
              <li><Link to="/seasonal" className="text-sm text-cream/60 hover:text-terracotta transition-colors">Seasonal Selection</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-6">About</h4>
            <ul className="space-y-3">
              <li><Link to="/story" className="text-sm text-cream/60 hover:text-terracotta transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-cream/60 hover:text-terracotta transition-colors">Journal</Link></li>
              <li><Link to="/story" className="text-sm text-cream/60 hover:text-terracotta transition-colors">Contact</Link></li>
              <li><Link to="/shipping" className="text-sm text-cream/60 hover:text-terracotta transition-colors">Shipping Information</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-6">Information</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-sm text-cream/60 hover:text-terracotta transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-cream/60 hover:text-terracotta transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/shipping" className="text-sm text-cream/60 hover:text-terracotta transition-colors">Delivery</Link></li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a href="#" className="text-cream/60 hover:text-terracotta transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="text-cream/60 hover:text-terracotta transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <p className="text-xs text-cream/40 text-center">
            © {new Date().getFullYear()} Orchard Atelier. All rights reserved. Crafted with care in Malaysia.
          </p>
        </div>
      </div>
    </footer>
  );
}
