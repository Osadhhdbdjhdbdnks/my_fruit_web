import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const malaysianStates = [
  'Johor', 'Kedah', 'Kelantan', 'Kuala Lumpur', 'Labuan',
  'Melaka', 'Negeri Sembilan', 'Pahang', 'Penang', 'Perak',
  'Perlis', 'Putrajaya', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu'
];

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postcode: '',
  });

  const deliveryFee = 12.00;
  const orderTotal = totalPrice + deliveryFee;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to a payment API
    // For now, we simulate order placement
    setSubmitted(true);
    clearCart();
  };

  if (items.length === 0 && !submitted) {
    return (
      <main className="pt-32 pb-20 text-center px-5">
        <h1 className="font-serif text-3xl text-brown">Nothing to Checkout</h1>
        <p className="mt-4 text-brown/60">Your bag is empty.</p>
        <Link to="/shop" className="mt-6 inline-block text-terracotta">Continue Shopping</Link>
      </main>
    );
  }

  if (submitted) {
    return (
      <main className="pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto">
              <Check size={32} className="text-forest" />
            </div>
            <h1 className="font-serif text-4xl text-brown mt-8">Thank You</h1>
            <p className="mt-4 text-brown/60 text-lg">
              Your order has been received. We'll send a confirmation to your email shortly.
            </p>
            <p className="mt-2 text-brown/40 text-sm">
              Note: Payment integration is not yet configured. In production, this would process payment via a configured gateway.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 bg-brown text-cream px-8 py-4 text-sm font-medium tracking-wide hover:bg-terracotta transition-colors"
            >
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-16 sm:pt-18 lg:pt-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14 py-10 lg:py-16">
        <Link to="/cart" className="inline-flex items-center gap-2 text-sm text-brown/60 hover:text-terracotta transition-colors mb-8">
          <ArrowLeft size={14} />
          Back to Bag
        </Link>

        <h1 className="font-serif text-4xl md:text-5xl text-brown">Checkout</h1>

        <form onSubmit={handleSubmit} className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-brown mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-brown/70 block mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-sand bg-cream/50 text-brown focus:outline-none focus:border-terracotta transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-brown/70 block mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-sand bg-cream/50 text-brown focus:outline-none focus:border-terracotta transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-brown/70 block mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-sand bg-cream/50 text-brown focus:outline-none focus:border-terracotta transition-colors"
                      placeholder="+60 12-345 6789"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-brown mb-6">Delivery Address</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-brown/70 block mb-1">Address</label>
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-sand bg-cream/50 text-brown focus:outline-none focus:border-terracotta transition-colors resize-none"
                    placeholder="Street address, unit number"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm text-brown/70 block mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-sand bg-cream/50 text-brown focus:outline-none focus:border-terracotta transition-colors"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-brown/70 block mb-1">State</label>
                    <select
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-sand bg-cream/50 text-brown focus:outline-none focus:border-terracotta transition-colors"
                    >
                      <option value="">Select state</option>
                      {malaysianStates.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-brown/70 block mb-1">Postcode</label>
                    <input
                      type="text"
                      name="postcode"
                      value={form.postcode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-sand bg-cream/50 text-brown focus:outline-none focus:border-terracotta transition-colors"
                      placeholder="50000"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-sand/20 border border-sand/50">
              <p className="text-sm text-brown/60">
                <strong className="text-brown">Payment:</strong> Payment integration is not yet configured. 
                In production, this would connect to a payment gateway (e.g., Stripe, FPX) for secure processing.
              </p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="sticky top-32 bg-cream p-8 border border-sand/50">
              <h2 className="font-serif text-2xl text-brown mb-6">Order Summary</h2>
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.product.id} className="flex justify-between items-start">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-brown font-medium truncate">{item.product.name}</p>
                      <p className="text-xs text-brown/50">Qty: {item.quantity} × RM {item.product.price.toFixed(2)}</p>
                    </div>
                    <span className="text-sm text-brown ml-4">RM {(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-sand/50 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-brown/60">Subtotal</span>
                  <span className="text-brown">RM {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brown/60">Delivery</span>
                  <span className="text-brown">RM {deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-sand/50">
                  <span className="font-serif text-xl text-brown">Total</span>
                  <span className="font-serif text-xl text-brown">RM {orderTotal.toFixed(2)}</span>
                </div>
              </div>
              <button
                type="submit"
                className="mt-8 w-full bg-brown text-cream py-4 text-sm font-medium tracking-wide hover:bg-terracotta transition-colors"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
