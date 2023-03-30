import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { UserContext } from '../contexts/UserContext';
import PokemonCard from '../components/PokemonCard';
import { usePagination } from '../hooks/usePagination';
import { Form } from 'react-router-dom';

const Pokedex = () => {
  const { user } = useContext(UserContext);
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonType, setPokemonType] = useState('');
  const { pokemons, types } = useLoaderData();
  const pokemonsPagination = usePagination(pokemons, 55);

  const handleNameChange = (e) => {
    setPokemonName(e.target.value);
    setPokemonType('');
  };

  const handleTypeChange = (e) => {
    setPokemonType(e.target.value);
    setPokemonName('');
  };

  return (
    <div className="w-full p-5">
      <p>
        <span className="text-red-500 font-semibold">Bienvenido {user}, </span>
        aqui podras encontrar tu pokemon favorito
      </p>
      <div className="img2">
        
        <img src="/pok3.jpg" alt="Pok3" />
        

      </div>
      <div className="flex flex-row gap-2">
        {pokemonsPagination.pages.map((page) => (
          <button
            key={page}
            onClick={() => pokemonsPagination.changePageTo(page)}
            className={pokemonsPagination.currentPage === page ? 'text-red-500' : ''}
          >
            {page}
          </button>
        ))}
      </div>

      <div>
        <Form>
          <h3 className="text-red-500">Filter for search</h3>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
              <input
                type="text"
                name="pokemon_name"
                className="shadow-md border border-black"
                value={pokemonName}
                onChange={handleNameChange}
              />
              <select name="pokemon_type" value={pokemonType} onChange={handleTypeChange}>
                <option value="" disabled>
                  --Choose a type--
                </option>
                {types.map((type) => (
                  <option key={type.url} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="bg-red-500 text-white p-2 hover:bg-red-400 rounded"
              type="submit"
            >
              Search
            </button>
          </div>
        </Form>
      </div>

      <section>
        {pokemonsPagination.listSlice.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonData={pokemon} />
        ))}
      </section>
    </div>
  );
};

export default Pokedex;