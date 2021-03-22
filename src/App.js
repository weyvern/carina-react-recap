import { useState } from 'react';
import SearchBar from './components/SearchBar';
import Pokemon from './components/Pokemon';

const App = () => {
  const [pokemon, setPokemon] = useState();
  return (
    <div className='container'>
      <SearchBar placeholder='Type the number/name of a Pokémon' setPokemon={setPokemon} />
      <Pokemon pokemon={pokemon} />
    </div>
  );
};

export default App;
