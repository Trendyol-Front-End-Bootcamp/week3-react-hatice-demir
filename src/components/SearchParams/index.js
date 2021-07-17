import { useState, useEffect } from "react";
import "./style.css";
const GENDERS = ["male", "female", "unknown", "genderless"];
const STATUS = ["alive", "dead", "unknown"];

const SearchParams = () => {
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const filterCharacter = async () => {};
  return (
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
  );
};

export default SearchParams;
