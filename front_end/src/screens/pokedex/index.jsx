import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import {params} from '../../private/functions/params';
import { useEffect } from 'react';
import { useState } from 'react';


function Pokedex() {
    const [searchParams,setSearchParams] = useSearchParams();
    const [pg,SetPg] = useState((parseInt(searchParams.get('pg')))-1);
    const navegate = useNavigate();
    useEffect(()=>{
        SetPg(pg+1);
    },[searchParams])
    useEffect(()=>{
        
    },[pg])

    return(
        <div id='screen'>
            <button onClick={()=>{          
                navegate(`/pokedex?pg=${pg+1}`);
            }}
            >proxima Pagina</button>
            {pg}
        </div>
    )
}

export default Pokedex;