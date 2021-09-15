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
  PaymentSuccess,
  Feedback,
  FeedbackSuccess,
  PrivateRoute,
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

            {/* <Route path="/menu" component={Menu} /> */}
            <PrivateRoute path="/menu" component={Menu} />

            {/* <Route path="/cart" component={Cart} /> */}
            <PrivateRoute path="/cart" component={Cart} />

            <Route path="/waiting" component={Waiting} />
            {/* <PrivateRoute path="/waiting" component={Waiting} /> */}

            {/* <Route path="/order-again" component={OrderAgain} /> */}
            <PrivateRoute path="/order-again" component={OrderAgain} />

            {/* <Route path="/pay" component={Pay} /> */}
            <PrivateRoute path="/pay" component={Pay} />
            <PrivateRoute path="/payment-success" component={PaymentSuccess} />

            {/* <Route path="/feedback" component={Feedback} /> */}
            <Route path="/feedback" component={Feedback} />
            <Route path="/feedback-success" component={FeedbackSuccess} />

            <Route path="*" component={Error404} />
          </Switch>
        </Router>
      </MenuProvider>
      <Footer />
    </div>
  );
}

export default App;
