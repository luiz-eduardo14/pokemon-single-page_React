import {Link, useNavigate} from "react-router-dom";
import './style.css'
function Error404() {
  const navigate = useNavigate();
    return(
        <div id='screen' className="start" style={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
        }}>
          <h1 className="namePokemon" style={{textAlign:"center",color:'#FF0000'}}><h1 style={{color:'#00FF00'}}>404</h1> Not Found</h1>
          <img onClick={()=> navigate('/home')} id='startImage' src='http://localhost:5000/images/home/pokemonButtonStart.png' height={80} width={80}></img>
        </div>
    );
}

export default Error404;