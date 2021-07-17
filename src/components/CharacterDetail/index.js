import { useParams } from "react-router-dom";
import Character from "../Character";
import { useState, useEffect } from "react";
import "./style.css";
const CharacterDetails = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  const getCharacter = async () => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const json = await res.json();
      let temp_character = {
        id: json.id,
        name: json.name,
        gender: json.gender,
        species: json.species,
        status: json.status,
        image: json.image,
        location: json.location.name,
        episode: json.episode,
      };
      setCharacter(temp_character);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => getCharacter(), []);

  return (
    character && (
      <div className="character-detail">
        <Character
          id={character.id}
          name={character.name}
          gender={character.gender}
          species={character.species}
          status={character.status}
          image={character.image}
        />
        <p>{`${character.name} has ${character.episode.length} episodes`}</p>
      </div>
    )
  );
};

export default CharacterDetails;
