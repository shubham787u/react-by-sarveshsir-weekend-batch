import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Community from "./Community";
import Blog from "./Blog";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link to="/" style={{ margin: "10px" }}>
            Home
          </Link>
          <Link to="/blog" style={{ margin: "10px" }}>
            Blog
          </Link>
          <Link to="/community" style={{ margin: "10px" }}>
            Community
          </Link>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
