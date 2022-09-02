import { useState, useEffect } from 'react';
import BackPage from '../../components/backPage';
import { useNavigate, useSearchParams } from 'react-router-dom';
import pokemonBodyRequest from '../../requests/pokemonRequests/pokemonBodyRequest';
import IconPokeboll from '../../components/IconPokeboll';
import styles from './index.module.css';
function Pokemon() {
  const [pokemon,setPokemon] = useState({});
  const [searchParams,setSearchParams] = useSearchParams();
  const [name,setName] = useState(searchParams.get('name'));
  useEffect(()=>{
    pokemonBodyRequest({name,setPokemon});
  },[])

  return(
    <div id="screen">
      <IconPokeboll id={styles.IconPokeboll} />
        <BackPage src='http://localhost:5000/images/backPage.svg' isBack/>
    </div>
  )
}


export default Pokemon;