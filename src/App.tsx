import React from 'react';

import { Card } from './component/Card';

const product = [
  {
  image: '/product_images/first_aid_kit.png',
  title: 'Портативная медицинская сумка',
  link: '#',
  discount: 25,
  rating: 4.7,
  sold: 123,
  price: 1450,
  oldPrice: 1645,
  }
];

const App = () => {
  return (
    <div className="App">
      {product.map((product, i) => 
        <Card
          key={i}
          image={product.image} 
          title={product.title} 
          link={product.link} 
          discount={product.discount} 
          rating={product.rating} 
          sold={product.sold} 
          price={product.price} 
          oldPrice={product.oldPrice} 
        />
      )}
    </div>
  );
}

export { App };
