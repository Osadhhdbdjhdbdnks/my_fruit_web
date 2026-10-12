import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-sand/30">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {!product.available && (
            <div className="absolute inset-0 bg-brown/40 flex items-center justify-center">
              <span className="text-cream font-medium text-sm tracking-wide">Sold Out</span>
            </div>
          )}
        </div>
      </Link>
      <div className="mt-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-xl text-brown group-hover:text-terracotta transition-colors">
            {product.name}
          </h3>
        </Link>
        {product.variety && (
          <p className="text-brown/50 text-sm mt-0.5">{product.variety}</p>
        )}
        <p className="text-brown/60 text-sm mt-1">{product.weight}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-brown font-medium">
            RM {product.price.toFixed(2)}
          </span>
          {product.available && (
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product.id);
              }}
              className="text-xs font-medium text-brown/70 hover:text-terracotta border border-brown/20 hover:border-terracotta px-3 py-1.5 transition-colors"
            >
              Add to Bag
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
