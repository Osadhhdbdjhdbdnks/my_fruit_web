import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, X, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <main className="pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ShoppingBag size={48} className="mx-auto text-brown/20" strokeWidth={1} />
            <h1 className="font-serif text-4xl text-brown mt-8">Your Bag is Empty</h1>
            <p className="mt-4 text-brown/60 text-lg">
              Discover our seasonal selection and add something beautiful to your bag.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 bg-brown text-cream px-8 py-4 text-sm font-medium tracking-wide hover:bg-terracotta transition-colors"
            >
              Explore Our Collection
            </Link>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-16 sm:pt-18 lg:pt-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-14 py-10 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-brown/60 hover:text-terracotta transition-colors mb-8">
            <ArrowLeft size={14} />
            Continue Shopping
          </Link>

          <h1 className="font-serif text-4xl md:text-5xl text-brown">Your Bag</h1>
          <p className="mt-2 text-brown/50">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>

          {/* Cart Items */}
          <div className="mt-12 space-y-8">
            {items.map(item => (
              <div key={item.product.id} className="flex gap-6 pb-8 border-b border-sand/50">
                <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 lg:w-32 lg:h-32 object-cover"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <div>
                      <Link to={`/product/${item.product.id}`}>
                        <h3 className="font-serif text-xl text-brown hover:text-terracotta transition-colors">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-brown/50 text-sm mt-0.5">{item.product.variety}</p>
                      <p className="text-brown/50 text-sm">{item.product.weight}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-brown/40 hover:text-terracotta transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center border border-brown/20">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-2 text-brown/60 hover:text-brown transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 text-brown font-medium text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 text-brown/60 hover:text-brown transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="text-brown font-medium">
                      RM {(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <div>
              <p className="text-brown/60 text-sm">Subtotal</p>
              <p className="font-serif text-3xl text-brown mt-1">RM {totalPrice.toFixed(2)}</p>
              <p className="text-brown/40 text-xs mt-2">Delivery calculated at checkout</p>
            </div>
            <Link
              to="/checkout"
              className="w-full lg:w-auto flex items-center justify-center gap-2 bg-brown text-cream px-10 py-4 text-sm font-medium tracking-wide hover:bg-terracotta transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
