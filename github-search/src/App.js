import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Alert from "./components/Alert";
import { AlertState } from "./context/Alert/AlertState";
import { GitHubState } from "./context/Github/GitHubState";
function App() {
  return (
    <GitHubState>
      <AlertState>
        <BrowserRouter>
          <NavBar />
          <div className="container pt-4">
            <Alert alert={{ text: "test" }} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/profile/:name" exact component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GitHubState>
  );
}

export default App;
