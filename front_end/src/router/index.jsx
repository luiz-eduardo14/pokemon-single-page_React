import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Error404 from "../screens/Error404";
import Home from "../screens/home";
import Pokedex from "../screens/pokedex";
import Pokemon from "../screens/pokemon"

function RouterRedirect() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pokedex" element={<Pokedex/>}/>
          <Route path="*" element={<Error404/>}/>
          <Route path="/pokemon" element={<Pokemon/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterRedirect;