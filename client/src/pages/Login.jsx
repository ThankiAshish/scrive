import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

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
            <span className="highlight-text">Welcome </span>
            Back!
          </h1>
          <p>
            Not already a Scriver?{" "}
            <Link to="/register" className="link-text">
              Become one
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
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
            <div className="btn-container">
              <button type="submit" className="btn">
                Login
              </button>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </form>
        </div>
      </div>
      <h1 className="logo">Scrive</h1>
    </main>
  );
};

export default Login;
