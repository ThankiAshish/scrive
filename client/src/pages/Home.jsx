import Blog from "../components/Blog";

const Home = () => {
  return (
    <div className="container">
      <main className="home">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </main>
    </div>
  );
};

export default Home;
