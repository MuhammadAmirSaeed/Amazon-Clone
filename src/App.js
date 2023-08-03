import React from "react";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import { auth } from "./Components/firebase";
import { useEffect } from "react";
import { useStateValue } from "./Components/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("Auth state changed", authUser);
      if (authUser) {
        //user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}></Route>

          <Route
            path="/checkout"
            element={
              <React.Fragment>
                <Header />
                <Checkout />
              </React.Fragment>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <React.Fragment>
                <Header />
                <h1>This is payment route</h1>
              </React.Fragment>
            }
          ></Route>

          <Route
            path="/"
            element={
              <React.Fragment>
                <Header /> <Home />
              </React.Fragment>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
