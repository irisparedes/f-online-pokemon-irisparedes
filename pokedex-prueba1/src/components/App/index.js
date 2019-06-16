import React, { Component } from 'react';
import './styles.scss';
import { fetchPokemon } from '../../services/fetchPokemon';
import PokemonList from '../PokemonList';
import Filter from '../Filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      filterBy: ''
    };
    this.urlApi = 'https://pokeapi.co/api/v2/pokemon/?limit=25';
    this.getUserValue = this.getUserValue.bind(this);
  }

  componentDidMount() {
    const localData = JSON.parse(localStorage.getItem('pokeList'));
    if (!localData) {
      fetchPokemon(this.urlApi).then(data => {
        const promises = data.results.map(result => fetchPokemon(result.url));
        Promise.all(promises).then(responses => {
          const pokemons = [];
          for (const response of responses) {
            pokemons.push(response);
          }
          this.setState({ pokemonList: pokemons });
          localStorage.setItem('pokeList', JSON.stringify(pokemons));
        });
      });
    } else {
      this.setState({ pokemonList: localData });
    }
  }

  getUserValue({ target: { value } }) {
    this.setState({ filterBy: value });
  }

  render() {
    const { pokemonList, filterBy } = this.state;
    return (
      <div className="page">
        <div className="page__container">
          <header className="page__header">
            <Filter filterBy={filterBy} getUserValue={this.getUserValue} />
          </header>
          <main className="page__main">
            <PokemonList pokemonList={pokemonList} filterBy={filterBy} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;