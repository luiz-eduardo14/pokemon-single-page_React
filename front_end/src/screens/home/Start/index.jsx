import { Navigate, useNavigate } from "react-router";   
import styles from './index.module.css';
function Start() {
    const navigate = useNavigate();
    return(
        <div id="StartDiv">
            <span id={styles.startText}>Press Start</span>
            <img onClick={
                (event)=>{
                    navigate('/pokedex?pg=1',{state:{ola:'dasdsa'}});
                }
            } id='startImage' src='http://localhost:5000/images/home/pokemonButtonStart.png' height={80} width={80}></img>
        </div>
    )
}

export default Start;