import styles from './index.module.css';
import stylesPokemon from '../index.module.css';
import FeaturePokemon from './featurePokemon';
export default function ContentPokemon({data}) {
    return(
            <div id={styles.ContentPokemon}>
              <div id={styles.divTitlePokemon}>
                <span className={styles.TitlePokemon}>{data.name}</span>
              </div>
              <FeaturePokemon name='Types' childrens={data.type} bigSize/>
              <FeaturePokemon name='ability' childrens={data.abilities}/>
              <FeaturePokemon name='Egg Groups' childrens={data.eggGroup}/>
              <div id={styles.divFooterPokemon}>
                  <span id={styles.TextFooter}>{data.description}</span>
              </div>
            </div>
          )  
}