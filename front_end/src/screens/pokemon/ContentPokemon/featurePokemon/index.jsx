import styles from './index.module.css';
import CampPokemon from './campPokemon';
export default function FeaturePokemon({name,childrens, bigSize}) {
  return(<div className={styles.featuresPokemon}>
          <div className={styles.NameFeaturesPokemon}>
            <span className={styles.TextPokemon}>{name}</span>
          </div>
            <div className={styles.ContentFeaturesPokemon}>
            {Array.isArray(childrens) && childrens.map((children)=>{
              if(bigSize || childrens.length<=2){
                return <CampPokemon name={children} bigSize/>
                }
                else{
                return <CampPokemon name={children}/>
                }
            })}
            </div>
        </div>)
}