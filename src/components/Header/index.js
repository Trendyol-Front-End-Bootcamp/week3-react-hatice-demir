import "./style.css";
import portalImage from "../../images/portal.png";

const Header = () => {
  return (
    <div className="header-container">
      <img src={portalImage} alt="rick and morty"></img>
      <h1>Character Finder</h1>
    </div>
  );
};

export default Header;
