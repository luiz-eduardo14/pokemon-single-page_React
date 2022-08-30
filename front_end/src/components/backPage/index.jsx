import styles from './index.module.css';
import { useNavigate } from 'react-router';
import { memo } from 'react';
function BackPage({src,to,isBack}) {
  const navigate = useNavigate();
    return(
      <img src={src} id={styles.Backpage} onClick={(event)=>{
        !isBack ? navigate(to) : navigate(-1);
      }} width={25} height={25}></img>
    )
}


export default memo(BackPage);