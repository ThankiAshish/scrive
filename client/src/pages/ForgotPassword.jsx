import { useState } from "react";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ email: "" });

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
            Login <span className="highlight-text">Lifeline!</span>
          </h1>
          <p>Let&apos; get back to Scriving!</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
            <div className="btn-container">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <h1 className="logo">Scrive</h1>
    </main>
  );
};

export default ForgotPassword;
