import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MenuProvider } from "./contexts";
import {
  Navbar,
  Home,
  ScanQR,
  Menu,
  Waiting,
  OrderAgain,
  Error404,
  Footer,
} from "./components";

function App() {
  return (
    <div className="App">
        <Navbar />
      <MenuProvider>
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
      </MenuProvider>
      <Footer/>
    </div>
  );
}

export default App;
