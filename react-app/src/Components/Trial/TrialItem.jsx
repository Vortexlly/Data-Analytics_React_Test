import React from 'react';
import './TrialItem.css';

const TrialItem = ({data}) => {
  return (
    <section className='trial__item'>
        <img className='trial__img' src={data.url} alt={data.alt} />
        <h3 className='trial__title'>{data.name}</h3>
        <h2 className='trial__price'>${data.price}</h2>
        <p className='trial__text'>{data.storage} GB Storage</p>
        <p className='trial__text'>{data.users} Granted Users</p>
        <p className='trial__text'>Send up to {data.sending} GB</p>
        <button className='trial__btn'>Start Trial</button>
    </section>
  )
}

export default TrialItem