import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-sand/20">
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
      <div className="mt-4 flex flex-col flex-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg text-brown group-hover:text-terracotta transition-colors leading-snug">
            {product.name}
          </h3>
        </Link>
        {product.origin && (
          <p className="text-brown/50 text-xs mt-1 tracking-wide">{product.origin}</p>
        )}
        <p className="text-brown/40 text-xs mt-0.5">{product.weight}</p>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="text-brown font-medium text-sm">
            RM {product.price.toFixed(2)}
          </span>
          {product.available && (
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product.id);
              }}
              className="text-[11px] font-medium tracking-wide uppercase text-brown/60 hover:text-terracotta border border-brown/15 hover:border-terracotta/50 px-3 py-1.5 transition-colors"
            >
              Add to Bag
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
