import { Navigate, useNavigate } from "react-router";   
import styles from './index.module.css';
function Start() {
    const navigaty = useNavigate();
    return(
        <div id="StartDiv">
            <span id="startText">Press Start</span>
            <img onClick={
                (event)=>{
                    navigaty('/pokedex?pg=1');
                }
            } id='startImage' src='http://localhost:5000/images/home/pokemonButtonStart.png' height={80} width={80}></img>
        </div>
    )
}

export default Start;