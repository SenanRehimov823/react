import Header from "./Header/Header";
import './App.css';
import Body from "./Body/Body";

function App() {
  return (
    <>
    <Header/>
    <Body/>
  
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState(() => {
    return JSON.parse(localStorage.getItem("basket")) || [];
  });

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const addToBasket = (item) => {
    let basket = JSON.parse(localStorage.getItem('basket')) || [];
    let existing = basket.find(x => x.id === item.id);
    if (existing) {
      existing.count += 1;
    } else {
      basket = [...basket, { ...item, count: 1 }];
    }
    localStorage.setItem('basket', JSON.stringify(basket));
  };

  const addWish = (item) => {
    let wish = JSON.parse(localStorage.getItem('wish')) || [];
    let existingProduct = wish.find(x => x.id === item.id);

    if (existingProduct) {
      alert("Məhsul artıq əlavə edilib");
    } else {
      wish = [...wish, item];
      localStorage.setItem('wish', JSON.stringify(wish));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Məhsullar</h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center'
      }}>
        {data && data.map(item => (
          <div
            key={item.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '15px',
              width: '200px',
              textAlign: 'center',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: '100px', height: '100px', objectFit: 'contain', marginBottom: '10px' }}
            />
            <h3 style={{ fontSize: '16px', minHeight: '50px' }}>{item.title}</h3>
            <p style={{ fontWeight: 'bold' }}>${item.price}</p>
            <button
              onClick={() => addToBasket(item)}
              style={{
                backgroundColor: '#0f9d58',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                marginBottom: '5px',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Səbətə əlavə et
            </button>
            <br />
            <button
              onClick={() => addWish(item)}
              style={{
                backgroundColor: '#f4b400',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Wish əlavə et
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

