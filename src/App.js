import "./App.css";
import React from "react";
import Registration from "./Registration/Registration.js";
import Authentication from "./Auth/Authentication.js";
import Home from "./Home/Home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import CourseList from "./CourseList/CourseList";
import RecipeCard from "./Recipes/RecipeCard";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

function App() {
  const history = createBrowserHistory();
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/main" element={<CourseList />} />
          <Route path="/recipe" element={<RecipeCard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
