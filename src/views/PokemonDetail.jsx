import axios from 'axios';
import React from 'react';
import { useLocation, useParams } from 'react-router';

const getPokemonById = async (id) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const PokemonDetail = () => {
  const { id } = useParams();
  const { pokemon } = useLocation();
  console.log({ pokemon });

  return (
    <div className={id}>
      
      <h1>Pokemon Detail</h1>
      <p>El id del pokemon seleccionado es: {id}</p>
    </div>
  );
};

export default PokemonDetail;