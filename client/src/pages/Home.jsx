import Blog from "../components/Blog";

import Article from "../assets/images/Article.png";

const Home = () => {
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
