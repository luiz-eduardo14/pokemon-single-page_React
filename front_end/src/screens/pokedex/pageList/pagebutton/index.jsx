import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';
export default function PageButton({numberPage}) {
  const navigate = useNavigate();
  return (<div className={styles.pageChangePokedex} onClick={()=>{
    navigate(`/pokedex?pg=${numberPage}`);
  }}
  >{numberPage}</div>)
}