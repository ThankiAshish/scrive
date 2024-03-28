import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import { UserState } from "../context/UserContext";

const UserHeader = () => {
  const { user } = UserState();

  return (
    <div className="container">
      <nav className="nav user-nav">
        <Link to="/app">
          <h1 className="logo">Scrive</h1>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/create" className="create-btn">
              <FontAwesomeIcon icon={faAdd} />
            </Link>
          </li>
          <Link to="/profile" className="user-profile-picture">
            <img
              src={
                user && typeof user.profilePicture === "string"
                  ? user.profilePicture + user.username
                  : ""
              }
              alt={`${user.username} Profile Picture`}
            />
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default UserHeader;
