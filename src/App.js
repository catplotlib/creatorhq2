import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleCreator from "./pages/SingleCreator";
import Hero from "./pages/Hero";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route path="/:username">
          <SingleCreator />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
