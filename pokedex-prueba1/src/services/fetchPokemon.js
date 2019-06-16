const fetchPokemon = url => fetch(`${url}`).then(response => response.json());

export { fetchPokemon };