import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cart from './components/Cart';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
          <Route path="/products/:prodId">
            <ProductPage />
          </Route>
          <Route path="/checkout">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;