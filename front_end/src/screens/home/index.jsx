import Start from './Start';
import TitlePokemon from './titlePokemon/index';

function Home() {
   return(
    <div id="screen" className="start">
            <TitlePokemon/>
            <Start/>
    </div>
   ) 
}

export default Home;