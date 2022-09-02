export default async function pokemonBodyRequest({ name, setPokemon }) {
  const pokemonBody = await fetch(
    "http://localhost:5000/pokemon?name=" + name,
    { method: "GET" }
  ).then((response) => {
    return response.json();
  });
  setPokemon(pokemonBody);
}
