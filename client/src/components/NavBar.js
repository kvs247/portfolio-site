import { NavLink } from 'react-router-dom';

function NavBar () {
    return (
        <header>
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
          </nav>    
        </header>
    );
}

export default NavBar;