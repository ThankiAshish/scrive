import { useState } from "react";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
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
            <span className="highlight-text">Claim </span>
            the Lifeline!
          </h1>
          <p>Reset your Password!</p>
          <form onSubmit={handleSubmit}>
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
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      <h1 className="logo">Scrive</h1>
    </main>
  );
};

export default ResetPassword;
