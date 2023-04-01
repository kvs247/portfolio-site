import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>

        <Route exact path='/'>
          <h1>Home</h1>
        </Route>

        <Route path='/about'>
          <h1>About</h1>
        </Route>

      </Switch>
    </>
  );
}

export default App;
