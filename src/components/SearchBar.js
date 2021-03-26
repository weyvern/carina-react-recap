import { useState } from 'react';

const SearchBar = ({ placeholder, setPokemon, setErrorMessage }) => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    input
      ? fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
          .then(res => res.json())
          .then(data => {
            setPokemon(data);
            setInput('');
          })
          .catch(err => {
            setErrorMessage(err.name);
            setInput('');
            setTimeout(() => setErrorMessage(null), 3000);
          })
      : alert('Please type something');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder={placeholder}
          value={input}
          onChange={handleChange}
          aria-label="Recipient's username"
          aria-describedby='button-addon2'
        />
        <button className='btn btn-outline-secondary' type='submit' id='button-addon2'>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
