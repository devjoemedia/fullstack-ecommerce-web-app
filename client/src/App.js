import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ProductPage from "./components/ProductPage";
import Checkout from "./components/Checkout";
import CheckoutSuccess from "./components/CheckoutSuccess";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/product/:prodId">
            <ProductPage />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout/success">
            <CheckoutSuccess />
          </Route>
          <Route path="/checkout/canceled">
            <h1>payment not successful</h1>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/register">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
