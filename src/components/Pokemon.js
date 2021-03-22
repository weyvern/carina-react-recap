const Pokemon = ({ pokemon }) => {
  return pokemon ? (
    <div>
      <h1>
        {pokemon.name} | #{pokemon.id}
      </h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  ) : (
    'No pokemon'
  );
};

export default Pokemon;
