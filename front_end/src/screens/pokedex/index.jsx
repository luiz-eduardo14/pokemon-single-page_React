import { useSearchParams, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, memo, useEffect } from 'react';
import BackPage from '../../components/backPage';
import styles from './index.module.css';
import Pokemon from './pokemon';
import PageList from './pageList';
import pokedexBodyRequest from '../../requests/pokedexRequests/pokedexBodyRequest'

function Pokedex() {
    const [searchParams,setSearchParams] = useSearchParams();
    const [pg,SetPg] = useState((searchParams.get('pg')));
    const location = useLocation();
    const [numberPages,setNumberPages] = useState({})
    const navegate = useNavigate();
    const [pokemons,setPokemons] = useState([]);
    useEffect(()=>{
        pokedexBodyRequest({pg,setNumberPages,setPokemons});
    },[pg])
    if(searchParams.get('pg')!=pg){
    SetPg(searchParams.get('pg'))
    } 
    return(
        <div id='screen' style={{backgroundColor:'#98CB98',}}>
            <BackPage src={'http://localhost:5000/images/backPage.svg'} to={'/'}/>
            <span id={'titlePokedex'}>Pokedex</span>
            <div id={'pokedexList'}>
            {pokemons.length!=0 && pokemons.map((pokemon)=>{
                return <Pokemon key={pokemon.id} data={pokemon}></Pokemon>
            })}
            <PageList init={numberPages.init} last={numberPages.last}/>
            </div>
        </div>
    )
}

export default Pokedex;