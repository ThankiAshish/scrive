import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import UserStore from "../stores/UserStore";

const Profile = () => {
  const { loginState, userDetails } = UserStore();
  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loginState) {
      toast.error("Unauthorized Access! Login to continue.");
      navigate("/login");
    }
  }, [loginState, navigate]);

  useEffect(() => {
    if (loginState) {
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
        } else {
          toast.error(data.message);
        }
      };

      fetchUser();
    }
  }, [loginState, userDetails]);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("api/auth/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${userDetails.token}`,
      },
      body: JSON.stringify(user),
    });

    if (response.status === 200) {
      const data = await response.json();

      setEdit(false);
      toast.success(data.message);
    }
  };

  return (
    <div className="container">
      <section className="user-profile">
        {user &&
          (edit ? (
            <form onSubmit={handleSubmit}>
              <h1>Edit Your Details</h1>
              <input
                type="text"
                id="username"
                value={user.username}
                onChange={handleInputChange}
              />
              <input
                type="email"
                id="email"
                value={user.email}
                onChange={handleInputChange}
              />
              <div className="btn-container">
                <button className="btn btn-primary" type="submit">
                  Save
                </button>
                <button
                  className="btn btn-outline"
                  onClick={() => setEdit(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <img
                src={user.profilePicture + user.username}
                alt={`${user.username} Profile Picture`}
              />
              <div className="user-details">
                <h2>{user.username}</h2>
                <p>{user.email}</p>

                <button
                  className="btn btn-primary"
                  onClick={() => setEdit(true)}
                >
                  Edit Profile
                </button>
              </div>
            </>
          ))}
      </section>
    </div>
  );
};

export default Profile;
