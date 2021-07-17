import "./style.css";
const Character = ({ id, name, gender, species, status, image, location }) => {
  return (
    <a href={`/details/${id}`} className="character-container">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <h3>{gender}</h3>
        <h3>{species}</h3>
        <h3>{status}</h3>
        <h3>{location}</h3>
      </div>
    </a>
  );
};

export default Character;
