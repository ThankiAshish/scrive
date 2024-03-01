import { Link } from "react-router-dom";

import GuestHeader from "../components/GuestHeader";

const Welcome = () => {
  return (
    <>
      <GuestHeader />
      <main className="showcase">
        <div className="container">
          <h1 className="heading">
            Where Blank Pages Become{" "}
            <span className="highlight-text">Masterpieces.</span>
          </h1>
          <Link to="/home">
            <button className="btn">Get Inspired</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Welcome;
