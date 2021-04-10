import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MenuProvider } from "./contexts";
import {
  Navbar,
  Home,
  ScanQR,
  Menu,
  Cart,
  Waiting,
  OrderAgain,
  Pay,
  Feedback,
  Error404,
} from "./components";

function App() {
  return (
    <div className="App">
      <MenuProvider>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/scanqr" component={ScanQR} />
            <Route path="/menu" component={Menu} />
            <Route path="/cart" component={Cart} />
            <Route path="/waiting" component={Waiting} />
            <Route path="/order-again" component={OrderAgain} />
            <Route path="/pay" component={Pay} />
            <Route path="/feedback" component={Feedback} />
            <Route path="*" component={Error404} />
          </Switch>
        </Router>
      </MenuProvider>
    </div>
  );
}

export default App;
