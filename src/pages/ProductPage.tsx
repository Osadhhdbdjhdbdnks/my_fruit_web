import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Minus, Plus, ShoppingBag, ArrowLeft, Truck } from 'lucide-react';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = getProductById(id || '');
  if (!product) {
    return (
      <main className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-brown">Product Not Found</h1>
        <Link to="/shop" className="mt-4 inline-block text-terracotta">Return to Shop</Link>
      </main>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="pt-24 lg:pt-28">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-brown/60 hover:text-terracotta transition-colors">
          <ArrowLeft size={14} />
          Back to Shop
        </Link>
      </div>

      {/* Product Detail */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square overflow-hidden bg-sand/20">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.gallery.length > 1 && (
              <div className="grid grid-cols-3 gap-3 mt-3">
                {product.gallery.map((img, i) => (
                  <div key={i} className="aspect-square overflow-hidden bg-sand/20">
                    <img src={img} alt={`${product.name} detail ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:py-8"
          >
            <span className="font-handwritten text-terracotta text-lg">
              {product.category === 'citrus' ? 'Citrus & Sunshine' : product.category === 'orchard' ? 'Orchard Fruits' : 'Gift Atelier'}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-brown mt-3">{product.name}</h1>
            {product.variety && (
              <p className="text-brown/50 text-lg mt-1">Variety: {product.variety}</p>
            )}
            {product.origin && (
              <p className="text-brown/50 mt-1">Origin: {product.origin}</p>
            )}

            <p className="mt-8 text-brown/70 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8 flex items-baseline gap-4">
              <span className="font-serif text-3xl text-brown">RM {product.price.toFixed(2)}</span>
              <span className="text-brown/50 text-sm">/ {product.weight}</span>
            </div>

            {/* Availability */}
            <div className="mt-6 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${product.available ? 'bg-green-600' : 'bg-red-400'}`} />
              <span className="text-sm text-brown/70">
                {product.available ? 'In Season — Available' : 'Currently Unavailable'}
              </span>
            </div>

            {/* Quantity & Add to Cart */}
            {product.available && (
              <div className="mt-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-brown/20">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 text-brown/60 hover:text-brown transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 text-brown font-medium min-w-[40px] text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 text-brown/60 hover:text-brown transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium tracking-wide transition-all ${
                      added
                        ? 'bg-forest text-cream'
                        : 'bg-brown text-cream hover:bg-terracotta'
                    }`}
                  >
                    <ShoppingBag size={16} />
                    {added ? 'Added to Bag' : 'Add to Bag'}
                  </button>
                </div>
              </div>
            )}

            {/* Delivery Info */}
            <div className="mt-10 p-6 bg-cream border border-sand/50">
              <div className="flex items-start gap-3">
                <Truck size={18} className="text-terracotta mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-brown">Delivery</p>
                  <p className="text-sm text-brown/60 mt-1">{product.delivery}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="font-serif text-3xl text-brown text-center mb-12">You May Also Enjoy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
