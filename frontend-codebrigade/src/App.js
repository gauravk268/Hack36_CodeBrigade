import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Navbar,
  Home,
  ScanQR,
  Menu,
  Waiting,
  OrderAgain,
  Error404,
} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/scanqr" component={ScanQR} />
          <Route path="/menu" component={Menu} />
          <Route path="/waiting" component={Waiting} />
          <Route path="/order-again" component={OrderAgain} />
          <Route path="*" component={() => <Error404 />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
