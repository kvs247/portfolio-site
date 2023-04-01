import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/about'>
          <h1>About</h1>
        </Route>

      </Switch>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
    :root {
      --light-grey: #191919;
      --dark-grey: #111;
      --white: #fff;
      --baby-blue: #871F78;
      --black: black;
    }
    
    body {
      background-color: var(--dark-grey);
      margin-top: 40px;
      padding: 30px;
      color: var(--white);
      font-family: 'Arial';
    }
`
