import styles from './index.module.css';
export default function CampPokemon({name,bigSize}) {
    const bigSizeTrue = bigSize ? '9px' : undefined;
    return (
      <div className={styles.campFeaturePokemon}>
          <span className={styles.campNameFeaturePokemon} style={{fontSize:bigSizeTrue}}>{name}</span>
      </div>
    )
}