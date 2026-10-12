import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { collections, products, IMAGES } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const featuredProducts = products.filter(p => p.category !== 'gift').slice(0, 4);

  return (
    <main className="pt-16 sm:pt-18 lg:pt-20">
      {/* Hero Section - Left text, Right image on desktop */}
      <section className="relative bg-ivory overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-5rem)] py-12 lg:py-0">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1 flex flex-col justify-center lg:py-20"
            >
              <span className="font-handwritten text-terracotta text-lg mb-4">Welcome to</span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brown font-light leading-[1.1]">
                The Art<br />of Fruit.
              </h1>
              <p className="mt-6 text-base sm:text-lg text-brown/60 font-light max-w-md leading-relaxed">
                Exceptional fruit, thoughtfully selected for the way we live, gather, and share.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 bg-brown text-cream px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-forest transition-colors"
                >
                  Explore Our Collection
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/story"
                  className="inline-flex items-center gap-2 text-brown/70 hover:text-brown text-sm font-medium tracking-wide transition-colors border-b border-brown/20 hover:border-brown/50 pb-0.5"
                >
                  Our Story
                </Link>
              </div>
            </motion.div>

            {/* Right - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
                <img
                  src={IMAGES.hero}
                  alt="Beautiful arrangement of fresh seasonal fruit"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative caption */}
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-cream px-5 py-3 shadow-sm">
                <span className="font-handwritten text-terracotta text-sm">Season's Finest</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={IMAGES.brandStory}
                alt="Fresh fruit in natural setting"
                className="w-full aspect-[4/5] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-handwritten text-terracotta text-lg">Our Philosophy</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brown mt-3 leading-tight">
                Nature, at Its Finest.
              </h2>
              <p className="mt-6 text-brown/65 text-base sm:text-lg leading-relaxed max-w-lg">
                Discover a considered selection of fruit, chosen for its character, its season, and the simple pleasure it brings to everyday life.
              </p>
              <p className="mt-4 text-brown/55 text-sm sm:text-base leading-relaxed max-w-lg">
                We believe that exceptional fruit deserves a thoughtful approach — from the moment of selection to the care of its presentation. Each piece is chosen with intention, reflecting the rhythm of seasons and the character of its origin.
              </p>
              <Link
                to="/story"
                className="mt-8 inline-flex items-center gap-2 text-brown font-medium text-sm tracking-wide hover:text-terracotta transition-colors group"
              >
                Discover More
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections Section - Landscape horizontal cards */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="font-handwritten text-terracotta text-lg">Curated Selections</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brown mt-2">Our Collections</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <Link to={`/shop?category=${collection.id}`} className="group block">
                  {/* Landscape image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Text below image */}
                  <div className="pt-5">
                    <h3 className="font-serif text-xl lg:text-2xl text-brown group-hover:text-terracotta transition-colors">
                      {collection.name}
                    </h3>
                    <p className="mt-2 text-brown/55 text-sm leading-relaxed">{collection.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-brown/70 group-hover:text-terracotta text-xs font-medium tracking-wide uppercase transition-colors">
                      Explore <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Fruits Section */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 lg:mb-14"
          >
            <div>
              <span className="font-handwritten text-terracotta text-lg">Handpicked</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-brown mt-2">Featured Fruits</h2>
            </div>
            <Link
              to="/shop"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-brown/70 hover:text-terracotta text-sm font-medium tracking-wide transition-colors group"
            >
              View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Section */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-handwritten text-terracotta text-lg">This Season</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brown mt-2">In Season, Now.</h2>
            <p className="mt-4 text-brown/55 text-base max-w-lg mx-auto">
              Explore the fruits available for the season.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {products.filter(p => p.seasonal && p.category !== 'gift').slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/seasonal"
              className="inline-flex items-center gap-2 text-brown/70 hover:text-terracotta font-medium text-sm tracking-wide transition-colors group"
            >
              View All Seasonal
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Quote Section */}
      <section className="py-20 lg:py-28 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <img src={IMAGES.hero} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cream/90 font-light leading-snug italic">
              "Good fruit deserves thoughtful selection, beautiful presentation, and a place in the moments we share."
            </p>
            <footer className="mt-6 text-cream/40 text-sm tracking-wide">
              — Orchard Atelier
            </footer>
          </motion.blockquote>
        </div>
      </section>
    </main>
  );
}
