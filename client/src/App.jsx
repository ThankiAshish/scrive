import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

import { publicRoutes, privateRoutes } from "./routes/routes";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <Router>
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {privateRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                ></Route>
              ))}
            </Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              {publicRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                ></Route>
              ))}
            </Route>
          </Routes>
        )}
      </Router>
    </>
  );
};

export default App;
