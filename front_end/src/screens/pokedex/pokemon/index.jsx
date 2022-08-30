import colorPokemons from '../../../private/pokedexFuncions/colorPokemons';
import styles from './index.module.css';
import { useNavigate } from 'react-router';
import './index.css'

export default function Pokemon({data}) {
  const navigate = useNavigate();
  const color = colorPokemons(data.type[0]);
  return (
    <div style={{backgroundColor:`${color}`}} className={'pokemonPokedex'}>
        <img className={'ImagePokemonPokedex'} src={`${data.mediumImage}`} height={110} width={110} onClick={()=>{
          navigate('/pokemon?name='+(data.name.toLowerCase()))
        }}/>
        <div className={'boxNamePokemonPokedex' ?? 'boxNamePokemonPokedex'}>{data.name}</div>  
    </div>
  )
}