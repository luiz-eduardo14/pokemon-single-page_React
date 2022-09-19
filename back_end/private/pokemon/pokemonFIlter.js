const pokedex = require("../pokedex/pokedex");

function pokemon(name) {
  let pokemonResult = null;
  for (const pokemon of pokedex) {
    if (pokemon.name.toLowerCase() === name.toLowerCase()) {
      pokemonResult = pokemon;
      break;
    }
  }
  return pokemonResult;
}

module.exports = pokemon;
