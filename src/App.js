import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import Orders from './components/Orders/Orders';

const promise = loadStripe('pk_test_51HQBobDO5RzhbiajxIbten0g9stg9mJKgEZduzeXBHg5Xix4NZhUuifxxsQXlTSicJgbZzMpJ1Xl49m2bZHeemoy00H7HkgKyF');


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/orders">
            <Header></Header>
            <Orders></Orders>
          </Route>
          <Route path="/" exact>
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route path="/payment">
            <Header></Header>
            <Elements stripe={promise}>
              <Payment></Payment>

            </Elements>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
