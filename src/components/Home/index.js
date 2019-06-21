import React, { Fragment } from 'react';
import PokemonList from '../PokemonList';
import Filter from '../Filter';


export default function Home({ filterBy, pokemonList, getUserValue }) {
  return (
    <Fragment>
      <header className="page__header">
        <h1 className="page__title">PokeDex</h1>
      </header>
      <main className="page__main">
        <Fragment>
          <Filter filterBy={filterBy} getUserValue={getUserValue} />
          <PokemonList pokemonList={pokemonList} filterBy={filterBy} />
        </Fragment>
      </main>
    </Fragment>
  );
}