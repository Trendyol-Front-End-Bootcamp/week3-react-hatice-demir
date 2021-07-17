import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import Header from "./components/Header";
import SearchParams from "./components/SearchParams";
import CharacterDetail from "./components/CharacterDetail";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={SearchParams} />

          <Route exact path="/details/:id" component={CharacterDetail} />
        </Switch>
      </Router>
    </div>
  );
}
