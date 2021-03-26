const Pokemon = ({ pokemon }) => {
  const capitalize = s => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return pokemon ? (
    <div className='row justify-content-center'>
      <div className='card col-md-6'>
        <img
          className='card-img-top'
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
        />
        <div className='card-body'>
          <h5 className='card-title text-center'>{`${capitalize(pokemon.name)} | ${pokemon.id}`}</h5>
          <ul className='card-text'>
            {pokemon.abilities.map(({ ability }) => (
              <li>{capitalize(ability.name)}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    'No pokemon'
  );
};

export default Pokemon;
