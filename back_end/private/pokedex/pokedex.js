const pokedex = require("./pokedex.json").map((pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon?.name?.english,
    type: pokemon?.type,
    abilities: pokemon?.profile?.ability.map((abilityArray) => {
      return abilityArray[0];
    }),
    description: pokemon?.description,
    eggGroup: pokemon?.profile?.egg,
    bigImage: pokemon?.image?.hires,
    mediumImage: pokemon?.image?.thumbnail,
    smallImage: pokemon?.image?.sprite,
    species: pokemon?.species.replace("Pokémon", "").trim(),
  };
});
module.exports = pokedex;
