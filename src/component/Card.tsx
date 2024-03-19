import React from 'react';
import type { FC, ReactNode } from 'react';

import { cnCard } from './Card.classname';

import './Card.css';

type CardProps = {
  image: string;
  title: string;
  link: string;
  discount?: number;
  rating: number;
  sold: number;
  price: number;
  oldPrice?: number;
};

const Card: FC<CardProps> = ({ image, title, link, discount, rating, sold, price, oldPrice }) => {
  return (
    <div className={cnCard()}>
      <img className={cnCard('Image')} src={image}/>
      <a className={cnCard('Link')} href={link}><p className={cnCard('Title')}>{title}</p></a>
      {discount} ? <p className={cnCard('Discount')}>- {discount}%</p> : {undefined} 
      <p className={cnCard('Rating')}>{rating} <img className={cnCard('RatingImage')} src='/product_images/star.svg'/></p>
      <p className={cnCard('Sold')}>{sold} купили</p>
      <p className={cnCard('Price')}>{price} ₽ {oldPrice} ? <p className={cnCard('OldPrice')}>{oldPrice} ₽</p> : {undefined}</p>
    </div>
  )
};

export { Card };
