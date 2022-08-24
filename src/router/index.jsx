import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Pokedex from "../screens/pokedex";

function RouterRedirect() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Server ON</h1>}/>
          <Route path="/pokedex" element={<Pokedex/>}/>
          <Route path="*" element={<h1 style={{textAlign:"center"}}>404 Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterRedirect;