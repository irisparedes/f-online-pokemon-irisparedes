import React from 'react';
import './styles.scss';

export default function Filter({ filterBy, getUserValue }) {
  return (
    <form className="page__form">
      <label htmlFor="name" className="form__label">
      </label>
      <input type="text" className="form__input" placeholder="Busca tu pokemon por nombre" id="name" value={filterBy} onChange={getUserValue} />
    </form>
  );
}