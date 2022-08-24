import { useSearchParams } from 'react-router-dom';
import {params} from '../../private/functions/params';

function Pokedex() {
    let [searchParams, setSearchParams] = useSearchParams(params());
    return(
        <>
            <h1>Test</h1>
            <button onClick={(event)=>{
                console.log(params());
            }}></button>
        </>
    )
}

export default Pokedex;