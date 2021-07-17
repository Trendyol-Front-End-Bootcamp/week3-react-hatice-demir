import Character from "../Character";
import "./style.css";

const CharacterList = ({ characters }) => (
  <div className="character-list">
    {!characters.length ? (
      <h2>Soory, No Pets Found :(</h2>
    ) : (
      characters.map((c) => (
        <Character
          id={c.id}
          name={c.name}
          gender={c.gender}
          species={c.species}
          status={c.status}
          image={c.image}
          location={c.location}
          key={c.id}
        />
      ))
    )}
  </div>
);

export default CharacterList;
