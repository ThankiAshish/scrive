import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import UserStore from "../stores/UserStore";

const UserHeader = () => {
  const { userDetails } = UserStore();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("api/auth/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${userDetails.token}`,
        },
      });

      const data = await response.json();

      if (response.status === 200) {
        setUser(data.user);
      }
    };
    fetchUser();
  }, [userDetails]);

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
              src={user && user.profilePicture + user.username}
              alt="avatar"
            />
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default UserHeader;
