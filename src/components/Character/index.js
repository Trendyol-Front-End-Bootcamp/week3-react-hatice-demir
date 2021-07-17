import { Link } from "react-router-dom";

import "./style.css";

const Character = ({ id, name, gender, species, status, image, location }) => {
  let colorStatus = "";
  if (status === "Alive") colorStatus = "green";
  else if (status === "Dead") colorStatus = "red";
  else colorStatus = "grey";

  return (
    <Link to={`/details/${id}`} className="character-container">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <h3>{gender}</h3>
        <h3>{species}</h3>
        <h3 style={{ color: colorStatus }}>{status}</h3>
        <h3>{location}</h3>
      </div>
    </Link>
  );
};

export default Character;
