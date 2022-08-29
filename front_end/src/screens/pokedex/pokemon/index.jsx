import colorPokemons from '../../../private/pokedexFuncions/colorPokemons';
import styles from './index.module.css';

export default function Pokemon({data}) {
  const color = colorPokemons(data.type[0]);
  return (
    <div style={{backgroundColor:`${color}`}} className={styles.pokemonPokedex}>
        <img className={styles.ImagePokemonPokedex} src={`${data.mediumImage}`} height={110} width={110} />
        <div className={styles.boxNamePokemonPokedex ?? styles.boxNamePokemonPokedex}>{data.name}</div>  
    </div>
  )
}