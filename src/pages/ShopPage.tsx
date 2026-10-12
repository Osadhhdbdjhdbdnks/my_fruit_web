import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, collections } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const filteredProducts = category
    ? products.filter(p => p.category === category)
    : products;

  const currentCollection = category
    ? collections.find(c => c.id === category)
    : null;

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
            <span className="font-handwritten text-terracotta text-lg">
              {currentCollection ? currentCollection.name : 'Our Selection'}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brown mt-4">
              {currentCollection ? currentCollection.name : 'Shop'}
            </h1>
            {currentCollection && (
              <p className="mt-4 text-brown/60 text-lg max-w-xl mx-auto">
                {currentCollection.description}
              </p>
            )}
            {!currentCollection && (
              <p className="mt-4 text-brown/60 text-lg max-w-xl mx-auto">
                A considered selection of exceptional fruit.
              </p>
            )}
          </motion.div>

          {/* Category filters */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/shop"
              className={`text-sm font-medium px-4 py-2 transition-colors ${
                !category ? 'text-terracotta border-b border-terracotta' : 'text-brown/60 hover:text-brown'
              }`}
            >
              All
            </a>
            {collections.map(c => (
              <a
                key={c.id}
                href={`/shop?category=${c.id}`}
                className={`text-sm font-medium px-4 py-2 transition-colors ${
                  category === c.id ? 'text-terracotta border-b border-terracotta' : 'text-brown/60 hover:text-brown'
                }`}
              >
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-20 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {filteredProducts.map((product, index) => (
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-brown/50 text-lg">No products found in this collection.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
