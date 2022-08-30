import { useState, useEffect } from 'react';
import BackPage from '../../components/backPage';
import { useNavigate } from 'react-router-dom';
function Pokemon() {
  const [pokemon,setPokemon] = useState({});
  const navigate = useNavigate();
  useEffect(()=>{
    
  },[pokemon])

  return(
    <div id="screen">
        <BackPage src='http://localhost:5000/images/backPage.svg' isBack/>
    </div>
  )
}


export default Pokemon;