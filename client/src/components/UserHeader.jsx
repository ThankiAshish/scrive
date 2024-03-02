import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const UserHeader = () => {
  return (
    <div className="container">
      <nav className="nav user-nav">
        <Link to="/">
          <h1 className="logo">Scrive</h1>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/app/create" className="create-btn">
              <FontAwesomeIcon icon={faAdd} />
              {/* &nbsp;Create */}
            </Link>
          </li>
          <Link to="/app/profile" id="user-profile">
            <img
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Ashish&scale=75&backgroundType=gradientLinear&earringsProbability=50&featuresProbability=50&glassesProbability=50&backgroundColor=b6e3f4,c0aede,d1d4f9"
              alt="avatar"
            />
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default UserHeader;
