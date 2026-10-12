import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/products';

export default function StoryPage() {
  return (
    <main className="pt-16 sm:pt-18 lg:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.storyHero}
            alt="Natural orchard landscape"
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
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream font-light">
              Rooted in Nature.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 lg:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-2xl md:text-3xl text-brown leading-relaxed text-center">
              We believe good fruit deserves thoughtful selection, beautiful presentation, and a place in the moments we share.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 lg:py-28 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={IMAGES.brandStory}
                alt="Carefully selected fruit"
                className="w-full aspect-[4/5] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-handwritten text-terracotta text-lg">Our Approach</span>
              <h2 className="font-serif text-4xl text-brown mt-4">Selection with Intention</h2>
              <div className="mt-8 space-y-6 text-brown/70 leading-relaxed">
                <p>
                  At Orchard Atelier, we approach fruit the way one might approach fine wine — with attention to season, origin, variety, and the subtle characteristics that make each piece exceptional.
                </p>
                <p>
                  Our selection process is guided by respect for nature's rhythm. We work with the seasons, offering what is at its peak, when flavour and texture are at their most expressive.
                </p>
                <p>
                  Every fruit in our collection is chosen for its character — the way it looks, feels, and tastes. We believe that when fruit is truly good, it needs little more than thoughtful presentation and an appreciation for what it represents.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-28 bg-cream">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-handwritten text-terracotta text-lg">What Guides Us</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brown mt-3">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {[
              {
                title: 'Seasonality',
                description: 'We follow nature\'s calendar, offering fruit at its peak of flavour and beauty. What we present reflects what the season gives.'
              },
              {
                title: 'Consideration',
                description: 'Every selection is made with care — from the fruit itself to how it is presented, delivered, and experienced.'
              },
              {
                title: 'Connection',
                description: 'We believe fruit brings people together. Our role is to facilitate those moments of sharing, gathering, and simple pleasure.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <h3 className="font-serif text-2xl text-brown">{value.title}</h3>
                <p className="mt-4 text-brown/60 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-forest">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-cream">Explore Our Collection</h2>
            <p className="mt-4 text-cream/60">
              Discover what's in season and find something beautiful for your table.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 bg-cream text-brown px-8 py-4 text-sm font-medium tracking-wide hover:bg-white transition-colors"
            >
              Shop Now
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
