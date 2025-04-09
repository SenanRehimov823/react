import React, { useEffect, useState } from 'react';
import styles from './Body.module.css';

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Men', value: "men's clothing" },
  { label: 'Women', value: "women's clothing" },
  { label: 'Jewelery', value: 'jewelery' }
];

const Body = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState('all');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  const filterProducts = (category) => {
    setActive(category);
    if (category === 'all') {
      setFiltered(products);
    } else {
      const result = products.filter(p => p.category === category);
      setFiltered(result);
    }
  };

  return (
    <section className={styles.arrivalsSection}>
      <h2 className={styles.title}>New Arrivals</h2>

      <div className={styles.buttons}>
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => filterProducts(cat.value)}
            className={`${styles.btn} ${active === cat.value ? styles.active : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map(product => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.title} className={styles.image} />
            <h3 className={styles.name}>{product.title}</h3>
            <p className={styles.price}>${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Body;
