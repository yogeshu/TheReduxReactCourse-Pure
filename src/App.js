import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/common/Header";
import ThePage from "./components/Error/ThePage";

import CoursesPage from "./components/CoursesPage/CoursesPage";
import TheManagePage from "./components/CoursesPage/TheManageCourse";
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/courses">
          <CoursesPage />
        </Route>
        <Route path="/course/:slug">
          <TheManagePage /> 
          </Route>
          <Route exact path="/course">
            <TheManagePage />
          </Route>
        {/* </Route>{" "} */}
        <Route>
          <ThePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
