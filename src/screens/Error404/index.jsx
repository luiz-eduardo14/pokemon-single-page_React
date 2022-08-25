import {Link} from "react-router-dom";
import './style.css'
function Error404() {
    return(
        <>
          <h1 className="namePokemon" style={{textAlign:"center",color:'#FF0000'}}><h1 style={{color:'#00FF00'}}>404</h1> Not Found</h1>
          <span id='buttonToHome'><Link style={{textDecoration:'none',color:'#000000',userSelect:'none',fontSize:'40px'}} to={'/'}>go to home</Link></span>
        </>
    );
}

export default Error404;