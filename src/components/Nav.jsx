import SearchBar from "./SearchBar"
import {NavLink} from "react-router-dom";
const Nav=({onSearch})=>{
  const handleAddRandomCharacter = () => {
    // obtener un personaje aleatorio
    const randomIndex = Math.floor(Math.random() * 826);
    // verificar si el personaje ya ha sido agregado
      onSearch(randomIndex) // agregar el personaje a la lista
  }
  return(
        <nav>
          <SearchBar onSearch={onSearch}/>
          <NavLink to='/' >Log out</NavLink>
          <button> <NavLink to='/about' >about</NavLink></button>
          <button> <NavLink to='/home' >home </NavLink></button>
          <button onClick={handleAddRandomCharacter}>ramdom</button>
          <button> <NavLink to='/Favorites' >Favorites </NavLink></button>
        </nav>      
    )
}

export default Nav
