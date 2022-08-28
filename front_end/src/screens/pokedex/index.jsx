import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


function Pokedex() {
    const [searchParams,setSearchParams] = useSearchParams();
    const [pg,SetPg] = useState((parseInt(searchParams.get('pg')))-1);
    const navegate = useNavigate();
    return(
        <div id='screen'>
            
        </div>
    )
}

export default Pokedex;