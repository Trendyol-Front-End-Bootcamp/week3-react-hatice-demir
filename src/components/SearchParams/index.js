import { useState, useEffect } from "react";
import CharacterList from "../CharacterList";
import "./style.css";
const GENDERS = ["Male", "Female", "Unknown", "Genderless"];
const STATUS = ["Alive", "Dead", "Unknown"];

const SearchParams = () => {
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [characters, setCharacters] = useState([]);

  const filterCharacter = async () => {
    try {
      let temp_array = [];
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?species=${species}&gender=${gender}&status=${status}`
      );
      const json = await res.json();
      json.results.map((c) => {
        let temp_character = {
          id: c.id,
          name: c.name,
          gender: c.gender,
          species: c.species,
          status: c.status,
          image: c.image,
          location: c.location.name,
        };
        temp_array.push(temp_character);
      });
      setCharacters(temp_array);
      console.log("CHARACTERS");
      console.log(characters);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => filterCharacter(), []);

  return (
    <>
      <form
        className="search-params"
        onSubmit={(e) => {
          e.preventDefault();
          filterCharacter();
        }}
      >
        <label htmlFor="species">
          Species
          <input
            type="text"
            id="species"
            placeholder="ex. Human, Alien"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          />
        </label>
        <label htmlFor="gender">
          Gender
          <select
            name="gender"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            onBlur={(e) => setGender(e.target.value)}
          >
            <option value="" />
            {GENDERS.map((gender) => (
              <option value={gender}>{gender} </option>
            ))}
          </select>
        </label>
        <label htmlFor="status">
          Status
          <select
            name="status"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            onBlur={(e) => setStatus(e.target.value)}
          >
            <option value="" />
            {STATUS.map((status) => (
              <option value={status}>{status} </option>
            ))}
          </select>
        </label>
        <button>FILTER</button>
      </form>
      <CharacterList characters={characters} />
    </>
  );
};

export default SearchParams;
