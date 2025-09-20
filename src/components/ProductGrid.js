import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const products = [
  { id: 1, name: 'Nike Classic Sneaker', price: 75, image: '/assets/nike-classic.jpg' },
  { id: 2, name: 'Nike Running Shoes', price: 80, image: '/assets/nike-running.jpg' },
  { id: 3, name: 'Adidas Streetwear', price: 65, image: '/assets/adidas-street.jpg' },
  { id: 4, name: 'Puma Flex', price: 70, image: '/assets/puma-flex.jpg' },
  { id: 5, name: 'Reebok Runner', price: 60, image: '/assets/reebok-runner.jpg' },
  { id: 6, name: 'New Balance 574', price: 85, image: '/assets/nb-574.jpg' },
  { id: 7, name: 'Converse Chuck', price: 55, image: '/assets/converse-chuck.jpg' },
  { id: 8, name: 'Vans Old Skool', price: 50, image: '/assets/vans-oldskool.jpg' },
  { id: 9, name: 'Asics Gel', price: 90, image: '/assets/asics-gel.jpg' },
  { id: 10, name: 'Fila Disruptor', price: 65, image: '/assets/fila-disruptor.jpg' },
  { id: 11, name: 'Under Armour Flow', price: 95, image: '/assets/ua-flow.jpg' },
  { id: 12, name: 'Jordan Retro', price: 120, image: '/assets/jordan-retro.jpg' },
];

function ProductGrid({ onAddToCart }) {
  return (
    <div className="product-grid">
      <h2>Available Shoes</h2>
      <div className="grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;