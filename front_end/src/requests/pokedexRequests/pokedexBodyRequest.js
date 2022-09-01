export default async function pokedexBodyRequest({pg,setPokemons,setNumberPages}){
    const pokemonsarray = await fetch(`http://localhost:5000/pokedex/${pg}`,{method:'GET'}).then((response)=> response.json());
    setPokemons(pokemonsarray.array);
    setNumberPages({init:pokemonsarray.pageI,last:pokemonsarray.pageF})
}