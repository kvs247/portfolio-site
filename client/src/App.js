import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import About from './components/About.js'

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
          <About />
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
      --black: #000000;
    }
    
    body {
      background-color: var(--black);
      margin-top: 40px;
      padding: 30px;
      color: var(--white);
      font-family: 'Arial';
    }
`
