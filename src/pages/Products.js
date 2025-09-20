import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import Cart from '../components/Cart';
import './Products.css';

function Products() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      return exists
        ? prev.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  return (
    <div className="products-page">
      <div className="left-panel">
        <ProductGrid onAddToCart={handleAddToCart} />
      </div>
      <div className="right-panel">
        <Cart cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} />
      </div>
    </div>
  );
}

export default Products;