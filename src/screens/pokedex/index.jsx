import { useSearchParams } from 'react-router-dom';
import {params} from '../../private/functions/params';

function Pokedex() {
    let [searchParams, setSearchParams] = useSearchParams(params());
    return(
        <div id='screen'>
            ola
        </div>
    )
}

export default Pokedex;