import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { useState, memo, useEffect } from 'react';
import BackPage from '../../components/backPage';
import styles from './index.module.css';
import Pokemon from './pokemon';

function Pokedex() {
    const [searchParams,setSearchParams] = useSearchParams();
    const [pg,SetPg] = useState((searchParams.get('pg')));
    const navegate = useNavigate();
    const [pokemons,setPokemons] = useState([]);
    useEffect(()=>{
    async function requestPokedex(){ 
    const pokemonsarray = await fetch(`http://localhost:5000/pokedex/${pg}`,{method:'GET'}).then((response)=> response.json())
    setPokemons(pokemonsarray.array);
    }
    requestPokedex();
},[])

    return(
        <div id='screen'>
            <BackPage src={'http://localhost:5000/images/backPage.svg'} to={'/'}/>
            <span id={styles.titlePokedex}>Pokedex</span>
            <div id={styles.pokedexList}>
            {pokemons.length!=0 && pokemons.map((pokemon)=>{
                return <Pokemon key={pokemon.id} data={pokemon}></Pokemon>
            })}
            </div>
        </div>
    )
}

export default Pokedex;