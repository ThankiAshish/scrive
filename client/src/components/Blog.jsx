import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Blog = ({ backgroundImage }) => {
  const blogStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="blog" style={blogStyle}>
      <div className="blog-content">
        <h2>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit</h2>
        <p className="summary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="blog-details">
          <Link to="/app/user">
            <img
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=JohnDoe&scale=75&backgroundType=gradientLinear&earringsProbability=50&featuresProbability=50&glassesProbability=50&backgroundColor=b6e3f4,c0aede,d1d4f9"
              alt="avatar"
            />
          </Link>
          <div className="blog-author">
            <h4>John Doe</h4>
            <p>01/01/20XX</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default Blog;
