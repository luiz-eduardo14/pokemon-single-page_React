import styles from './index.module.css';
const TitlePokemon = () =>{
    return (
        <div id={styles.titleImagePokemon}>
            <img src="http://localhost:5000/images/home/pokemonTitle.png" height={131} width={280}/>
        </div>
    )
}

export default TitlePokemon;