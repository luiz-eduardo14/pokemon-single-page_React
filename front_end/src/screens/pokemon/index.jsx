import { useState, useEffect } from 'react';
import BackPage from '../../components/backPage';
import { useNavigate, useSearchParams } from 'react-router-dom';
function Pokemon() {
  const [pokemon,setPokemon] = useState({});
  const [searchParams,setSearchParams] = useSearchParams();
  const [name,setName] = useState(searchParams.get('name'));
  useEffect(()=>{
    
  },[pokemon])

  return(
    <div id="screen">
        <BackPage src='http://localhost:5000/images/backPage.svg' isBack/>
    </div>
  )
}


export default Pokemon;