import { useSearchParams, useParams } from 'react-router-dom';
import {params} from '../../private/functions/params';

function Pokedex() {
    const [searchParams,setSearchParams] = useSearchParams({pg:231});
    return(
        <div id='screen'>
            {searchParams.get('pg')}
        </div>
    )
}

export default Pokedex;