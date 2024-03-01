import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="auth-showcase">
      <div className="container">
        <div className="auth-box">
          <h1 className="heading">
            Ready to <span className="highlight-text">Scrive?</span>
          </h1>
          <p>
            Already a Scriver?{" "}
            <Link to="/login" className="link-text">
              Ahoy, Mate!
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <input
              type="email"
              id="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <div className="btn-container">
              <button type="submit" className="btn">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <h1 className="logo">Scrive</h1>
    </main>
  );
};

export default Register;
