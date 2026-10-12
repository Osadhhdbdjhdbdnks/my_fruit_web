import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { collections, products, IMAGES } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const seasonalProducts = products.filter(p => p.seasonal && p.category !== 'gift').slice(0, 4);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Beautiful arrangement of fresh seasonal fruit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brown/20 via-transparent to-brown/40" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream font-light leading-tight">
              The Art of Fruit.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-cream/80 font-light max-w-2xl mx-auto leading-relaxed">
              Exceptional fruit, thoughtfully selected for the way we live, gather, and share.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-cream text-brown px-8 py-4 text-sm font-medium tracking-wide hover:bg-white transition-colors"
              >
                Explore Our Collection
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/story"
                className="inline-flex items-center gap-2 text-cream/80 hover:text-cream text-sm font-medium tracking-wide transition-colors border-b border-cream/30 pb-0.5"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 lg:py-36 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
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
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pl-8"
            >
              <span className="font-handwritten text-terracotta text-lg">Our Philosophy</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brown mt-4 leading-tight">
                Nature, at Its Finest.
              </h2>
              <p className="mt-8 text-brown/70 text-lg leading-relaxed max-w-lg">
                Discover a considered selection of fruit, chosen for its character, its season, and the simple pleasure it brings to everyday life.
              </p>
              <p className="mt-6 text-brown/60 leading-relaxed max-w-lg">
                We believe that exceptional fruit deserves a thoughtful approach — from the moment of selection to the care of its presentation. Each piece is chosen with intention, reflecting the rhythm of seasons and the character of its origin.
              </p>
              <Link
                to="/story"
                className="mt-10 inline-flex items-center gap-2 text-brown font-medium text-sm tracking-wide hover:text-terracotta transition-colors group"
              >
                Discover More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-24 lg:py-36 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <span className="font-handwritten text-terracotta text-lg">Curated Selections</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brown mt-4">Our Collections</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link to={`/shop?category=${collection.id}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brown/50 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="font-serif text-2xl lg:text-3xl text-cream">{collection.name}</h3>
                      <p className="mt-2 text-cream/80 text-sm leading-relaxed">{collection.description}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-cream/90 text-sm font-medium group-hover:text-terracotta transition-colors">
                        Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Section */}
      <section className="py-24 lg:py-36 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-handwritten text-terracotta text-lg">This Season</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brown mt-4">In Season, Now.</h2>
            <p className="mt-4 text-brown/60 text-lg max-w-xl mx-auto">
              Explore the fruits available for the season.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {seasonalProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/seasonal"
              className="inline-flex items-center gap-2 text-brown font-medium text-sm tracking-wide hover:text-terracotta transition-colors group"
            >
              View All Seasonal
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Quote Section */}
      <section className="py-24 lg:py-32 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={IMAGES.hero} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream/90 font-light leading-snug italic">
              "Good fruit deserves thoughtful selection, beautiful presentation, and a place in the moments we share."
            </p>
            <footer className="mt-8 text-cream/50 text-sm tracking-wide">
              — Orchard Atelier
            </footer>
          </motion.blockquote>
        </div>
      </section>
    </main>
  );
}
