export default async function pokemonBodyRequest({name,setPokemon}){
    const pokemonBody = await fetch('http://localhost:5000/pokemon?name='+name).then((response)=>{response.json()});
    setPokemon(pokemonBody);
}