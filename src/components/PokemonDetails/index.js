import React, { Component, Fragment } from 'react';
import './styles.scss';

class PokemonDetails extends Component {
  componentWillUnmount() {
    this.props.clearFilter();
  }

  render() {
    const { id, pokemonList, evolves_from_species } = this.props;
    const pokemon = pokemonList.find(item => item.id === parseInt(id));
    return (
       <Fragment>
          <div className="pokemon__details-wrapper">
            <div className="details__card">
            <img src={pokemon.sprites.front_shiny} alt={pokemon.name} className="details__image" />
              <h1 className="details__name">
                {pokemon.name}
              </h1>
              <div className="pokemon__data-wrapper">
                <div className="data__container">
                  <span className="data__content">{pokemon.height / 10}m</span>
                  <span className="data__type">Altura</span>
                </div>
                <div className="data__container">
                  <span className="data__content-types">
                    {pokemon.types.map((pokemonType, index) => {
                      if (index) {
                        return <span className="data__type"> / {pokemonType.type.name}</span>;
                      }
                      return <span className="data__type">{pokemonType.type.name}</span>;
                    })}
                  </span>
                </div>
                <div className="data__container">
                  <span className="data__content">{pokemon.weight / 10}kg</span>
                  <span className="data__type">Peso</span>
                </div>
              </div>
              <ul className="details__abilities">
                {pokemon.abilities.map((ability, index) => (
                  <li className="details__ability" key={index}>
                    <div class="abilities">
                      <span className="label">
                        {ability.ability.name}
                       </span> 
                    </div>
                  </li>
                ))}
              </ul>
    
                <div className="detail__evolution">
                  <span className="evolution__title">Evoluciona de: </span>
                    
                    <span className="evolution__type">{evolves_from_species}</span>
                </div>
              <div className="images__container">
                <img src={pokemon.sprites.back_default} alt={pokemon.name} />
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </div>
            </div>
          </div>
       </Fragment>
    );
  }
}



export default PokemonDetails;