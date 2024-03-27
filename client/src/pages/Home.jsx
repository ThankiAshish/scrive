import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Blog from "../components/Blog";

import Article from "../assets/images/Article.png";

import UserStore from "../stores/UserStore";

const Home = () => {
  const { loginState } = UserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginState) {
      navigate("/login");
    }
  }, [loginState, navigate]);

  return (
    <div className="container">
      <main className="home">
        <Blog backgroundImage={Article} />
        <Blog backgroundImage={Article} />
        <Blog backgroundImage={Article} />
        <Blog backgroundImage={Article} />
      </main>
    </div>
  );
};

export default Home;
