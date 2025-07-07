import React from 'react';
import './Products.css';

// You will replace these with actual image imports later
import shoe1 from '../assets/shoe1.jpg';
import shoe2 from '../assets/shoe2.jpg';
import shoe3 from '../assets/shoe3.jpg';
import shoe4 from '../assets/shoe4.jpg';
import shoe5 from '../assets/shoe5.jpg';
import shoe6 from '../assets/shoe6.jpg';
import shoe7 from '../assets/shoe7.jpg';
import shoe8 from '../assets/shoe8.jpg';

function Products() {
  const productList = [
    { name: 'Nike Air Max 90', category: "Men's", price: '₹10,495', image: shoe1 },
    { name: 'Adidas Ultraboost 22', category: "Men's", price: '₹14,999', image: shoe2 },
    { name: 'Puma Flyer Runner', category: "Women’s", price: '₹3,299', image: shoe3 },
    { name: 'Reebok Nano X2', category: "Men’s", price: '₹7,999', image: shoe4 },
    { name: 'Campus Olivia', category: "Women’s", price: '₹1,399', image: shoe5 },
    { name: 'Bata Power Walker', category: "Men’s", price: '₹1,999', image: shoe6 },
    { name: 'Crocs Classic Clog', category: "Children’s", price: '₹2,495', image: shoe7 },
    { name: 'Skechers Go Walk 6', category: "Women’s", price: '₹6,499', image: shoe8 },
  ];

  return (
    <section id="products" className="products">
      <h2>Featured Footwear</h2>
      <div className="product-grid">
        {productList.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
