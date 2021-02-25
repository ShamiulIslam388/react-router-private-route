import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter className="App">
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </BrowserRouter>
  );
};

export default App;
