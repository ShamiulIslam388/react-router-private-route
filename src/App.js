import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";
import { ProtectedRoute } from "./components/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <ProtectedRoute exact path="/contact" component={Contact} />
        <Route exact path="/profile/:name" component={Profile} />
        <Route exatct path="*" component={() => "404 Not Found"} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
