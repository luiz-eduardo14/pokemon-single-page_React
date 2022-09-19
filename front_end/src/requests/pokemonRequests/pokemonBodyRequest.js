import colorPokemon from "../../private/pokedexFuncions/colorPokemons";
export default async function pokemonBodyRequest({
  name,
  setPokemon,
  setTypePokemon,
}) {
  const pokemonBody = await fetch(
    "http://localhost:5000/pokemon?name=" + name,
    { method: "GET" }
  ).then((response) => {
    return response.json();
  });
  setPokemon(pokemonBody);
  setTypePokemon(colorPokemon(pokemonBody.type[0]));
}
