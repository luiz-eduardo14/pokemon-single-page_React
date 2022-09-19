import { useState, useEffect } from 'react';
import BackPage from '../../components/backPage';
import { useNavigate, useSearchParams } from 'react-router-dom';
import pokemonBodyRequest from '../../requests/pokemonRequests/pokemonBodyRequest';
import BackgroundPokemon from './backgroundPokemon';
import IconPokeboll from '../../components/IconPokeboll';
import styles from './index.module.css';
import ContentPokemon from './ContentPokemon';
function Pokemon() {
  const [pokemon,setPokemon] = useState({});
  const [searchParams,setSearchParams] = useSearchParams();
  const [name,setName] = useState(searchParams.get('name'));
  const [typePokemon,setTypePokemon] = useState('#000000');
  useEffect(()=>{
    pokemonBodyRequest({name,setPokemon,setTypePokemon});
  },[])
  //<IconPokeboll id={styles.IconPokeboll} />
  return(
    <div id="screen" className={styles.PokemonScreen} style={{backgroundColor:`${typePokemon}`}}>
      <BackPage src='http://localhost:5000/images/backPage.svg' isBack/>
      <div className={styles.pokemonCenter}>
        <img src={`${pokemon.bigImage}`} width={300} height={300} style={{animation:'fade-in 1.5s normal forwards ease-in-out'}} />
      </div>
      <div className={styles.pokemonCenter}>
        <ContentPokemon data={pokemon}/>
      </div>
    </div>
  )
}


export default Pokemon;