import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation,useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Error404 from './components/Error404';
import Form from './components/Form';
import Favorites from './components/Favorites';

// datos de la api y la url 
 const url_base='http://localhost:3001/rickandmorty/character'
 const URL = 'http://localhost:3001/rickandmorty/login';
//  const api_key='9e220783bd67.de5999b7e1a0231cfab7'
function App() {
   const [characters, setCharacters] = useState([])
   const location=useLocation();
   const navigate=useNavigate();
   const [access,setAccess]= useState(false);
   const email="inge.fabian@gmail.com"
   const password="1234567"

   const login = async (userData) =>{
      try {
         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
            const { access } = data;
            setAccess(access);
            access && navigate('/home');
   
      } catch (error) {
         console.log(error.message);
      }
    
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = async (id) => {
      try {
         console.log(id);
         const findId=characters.find(personaje=>personaje.id===Number(id));
         console.log(findId)
         if (findId) {
            return alert('esta aca')
         }
         
            const{data}= await axios(`${url_base}/${id}`)
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } 

      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
      //    se remplaza la url y se puede la  en '${urlbase}/${id}/?key=${api_key}'
                                                // si llega un input es String combertir a numero para comparacion

                                                
   }
   const onClose = (id) => {
      const filtro = characters.filter(character => character.id !== id)
      setCharacters(filtro)
   }
   return (
      <div>
         {location.pathname !=='/' ?  <Nav onSearch={onSearch}/>: null}
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/Favorites' element={<Favorites/>}/>
            <Route path='*' element={<Error404/>} /> 
         </Routes>
      </div>

   );
}

export default App;
