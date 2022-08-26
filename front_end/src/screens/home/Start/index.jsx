import { Navigate, useNavigate } from "react-router";

function Start() {
    const navigaty = useNavigate();
    return(
        <div id="StartDiv">
            <span id="startText">Press Start</span>
            <img onClick={
                (event)=>{
                    navigaty('/pokedex?pg=1');
                }
            } id='startImage' src='https://raw.githubusercontent.com/luiz-eduardo14/pokemon-single-page_React/main/front_end/images/pokemonButtonStart.png' height={80} width={80}></img>
        </div>
    )
}

export default Start;