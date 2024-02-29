import { Link } from "react-router-dom";

const GuestHeader = () => {
  return (
    <div className="container">
      <nav className="nav guest-nav">
        <Link to="/">
          <h1 className="logo">Scrive</h1>
        </Link>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <div className="btn-container">
            <li>
              <Link to="/login">
                <button className="btn btn-outline">Login</button>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <button className="btn">Register</button>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default GuestHeader;
