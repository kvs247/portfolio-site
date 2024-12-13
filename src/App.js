import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Chess from './components/Chess.js';
import Games from './components/Games.js';
import Math from './components/Math.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/chess'>
          <Chess />
        </Route>

        <Route path='/games'>
          <Games />
        </Route>

        <Route path='/math'>
          <Math />
        </Route>

        <Route path='*'>
          <Home />
        </Route>

      </Switch>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
    body {
      background-color: #000000;
    }
`
