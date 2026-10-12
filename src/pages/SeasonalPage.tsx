import { motion } from 'framer-motion';
import { products, IMAGES } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function SeasonalPage() {
  const seasonalProducts = products.filter(p => p.seasonal);

  return (
    <main className="pt-16 sm:pt-18 lg:pt-20">
      {/* Header */}
      <section className="py-14 lg:py-20 bg-cream">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-handwritten text-terracotta text-lg">This Season</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brown mt-4">In Season, Now.</h1>
            <p className="mt-6 text-brown/60 text-lg max-w-2xl mx-auto">
              A curated selection of fruit at its seasonal peak. Each piece chosen for its character, flavour, and the time of year that makes it exceptional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seasonal Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={IMAGES.seasonalBanner}
          alt="Seasonal fruit arrangement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brown/20" />
      </section>

      {/* Products */}
      <section className="py-14 lg:py-20 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {seasonalProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-brown/50 text-sm leading-relaxed">
            Our seasonal selection changes throughout the year as different fruits reach their peak. 
            Check back regularly to discover what's available. All prices are in Malaysian Ringgit (MYR) 
            and are subject to seasonal availability.
          </p>
        </div>
      </section>
    </main>
  );
}
