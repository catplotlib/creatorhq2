import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleCreator from "./pages/SingleCreator";
import Hero from "./pages/Hero";
import Navbar from "./Components/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route path="/user/:username">
          <SingleCreator />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
