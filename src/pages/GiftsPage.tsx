import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { collections, getProductById, IMAGES } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function GiftsPage() {
  const giftCollection = collections.find(c => c.id === 'gift');
  const giftProducts = giftCollection
    ? giftCollection.products.map(id => getProductById(id)).filter(Boolean)
    : [];

  return (
    <main className="pt-24 lg:pt-28">
      {/* Header */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.giftCollection}
            alt="Elegant fruit gift arrangement"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brown/30" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-handwritten text-cream/70 text-lg">The Gift Atelier</span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream font-light mt-2">
              Gifts, Considered.
            </h1>
            <p className="mt-6 text-cream/80 text-lg max-w-xl mx-auto">
              Thoughtfully arranged fruit selections for meaningful moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gift Philosophy */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-serif text-2xl md:text-3xl text-brown leading-relaxed">
              A gift of fruit is an expression of care — of the desire to share something beautiful, 
              seasonal, and genuinely good.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gift Products */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {giftProducts.map((product, index) => (
              product && (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Gift Info */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Beautifully Presented',
                description: 'Each gift is carefully arranged and presented in natural materials, ready to be given.'
              },
              {
                title: 'Seasonal Selection',
                description: 'Our gift selections feature fruit at its seasonal best, ensuring exceptional quality.'
              },
              {
                title: 'Personal Touch',
                description: 'Include a handwritten note with your gift. We\'ll take care of the presentation.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <h3 className="font-serif text-xl text-brown">{item.title}</h3>
                <p className="mt-3 text-brown/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-cream">Browse All Collections</h2>
          <p className="mt-4 text-cream/60">Explore our full range of seasonal fruit.</p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 bg-cream text-brown px-8 py-4 text-sm font-medium tracking-wide hover:bg-white transition-colors"
          >
            Shop All
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
