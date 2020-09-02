import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./App.module.scss";
import Docs from "./views/Docs";
import Header from "./components/Header/Header";
import Tips from "./views/Tips";
import Patterns from "./views/Patterns";
import Components from "./views/Components";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Switch>
          <Route exact path="/" component={Docs} />
          <Route exact path="/tips" component={Tips} />
          <Route exact path="/patterns" component={Patterns} />
          <Route exact path="/components" component={Components} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
