import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <main className="showcase">
      <div className="container">
        <h1 className="heading">
          Where Blank Pages Become{" "}
          <span className="highlight-text">Masterpieces.</span>
        </h1>
        <Link to="/app">
          <button className="btn">Get Inspired</button>
        </Link>
      </div>
    </main>
  );
};

export default Welcome;
