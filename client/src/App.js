import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthProvider } from "./util/auth";
import { get as getUser } from "./util/userApi";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import PrivatePage from "./components/PrivatePage";
import SignupPage from "./components/SignupPage";
import PrivateRoute from "./components/PrivateRoute";
import SavedPage from "./components/SavedPage";
import SearchPage from "./components/SearchPage";
import axios from "axios";

function App() {
  // smoke test google books search api
  // useEffect(() => {
  //   axios
  //     .get("https://www.googleapis.com/books/v1/volumes?q=hobbit")
  //     .then(console.log)
  //     .catch(console.log);
  // });
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route path="/saved">
            <SavedPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
