import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import UserStore from "../stores/UserStore";

const UserHeader = () => {
  const { userDetails } = UserStore();

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
              {/* &nbsp;Create */}
            </Link>
          </li>
          <Link to="/profile" className="user-profile-picture">
            <img src={userDetails.profilePicture} alt="avatar" />
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default UserHeader;
