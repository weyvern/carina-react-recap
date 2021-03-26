import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Pokemon from './components/Pokemon';
import Error from './components/Error';

const App = () => {
  const [pokemon, setPokemon] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const random = Math.floor(Math.random() * 932) + 1;
    // fetch random pokemon and put it in state
    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
      .then(res => res.json())
      .then(data => setPokemon(data))
      .catch(err => {
        setErrorMessage(err);
        setTimeout(() => setErrorMessage(null), 3000);
      });
  }, []);

  return (
    <div className='container mt-3'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png'
        alt='Pokemon'
        className='img-fluid mb-2'
      />
      {errorMessage && <Error />}
      <SearchBar
        placeholder='Type the number/name of a Pokémon'
        setPokemon={setPokemon}
        setErrorMessage={setErrorMessage}
      />
      <Pokemon pokemon={pokemon} />
    </div>
  );
};

export default App;
