import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Error404 from "../screens/Error404";
import Pokedex from "../screens/pokedex";

function RouterRedirect() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Server ON</h1>}/>
          <Route path="/pokedex" element={<Pokedex/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterRedirect;