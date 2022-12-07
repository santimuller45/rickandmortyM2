import './App.css'
import Nav from './components/nav/Nav.jsx'
import Cards from './components/cards/Cards.jsx'
import { useState, useEffect } from "react"
import { Route , Routes , useLocation, useNavigate } from "react-router-dom"
import About from './components/about/About.jsx'
import Detail from './components/detail/Detail.jsx'
import Form from './components/form/Form.jsx'
import Favorites from './components/favorites/Favorites'

function App () {
  
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const user = "test@gmail.com";
  const pass = 'santi1';

  const login = (userData) => {
    if (userData.username === user && userData.password === pass){
      setAccess(true); 
      navigate("/home");
    } else {
      alert("Usuario o Contraseña incorrecto");
    }
  }
  const onClose = (id) => {
    setCharacters(characters.filter(elem => elem.id !== id));
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);
  

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }

  return (
    <div className='App' style={{padding: '25px'}}>
        <div>
          {location.pathname !== "/" ? <Nav onSearch={onSearch}/> : undefined}
        </div>
        <div>
          {location.pathname !== "/about" ? <h1 className='titulo'>Rick and Morty</h1> : undefined}
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/detail/:detailId' element={<Detail/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App
