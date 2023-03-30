import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";

const getCharacter = async (id) => {
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const Character = () => {
  const { characterId } = useParams();
  const [characterInfo, setCharacterInfo] = useState(null);
  const [error, setError] = useState(null);

  const loadCharacter = async () => {
    try {
      const info = await getCharacter(characterId);

      setCharacterInfo(info);
    } catch (error) {
      setError(error.message || "Paso algo manite");
    }
  };

  useEffect(() => {
    loadCharacter();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Character</h1>
      {characterInfo && (
        <p>
          Character name is: <mark>{characterInfo.name}</mark>
        </p>
      )}
      {error && (
        <p>
          Hubo un error, y fue:{" "}
          <span style={{ backgroundColor: "red" }}>{error}</span>
        </p>
      )}
    </div>
  );
};

export default Character;
