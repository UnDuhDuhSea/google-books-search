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
import SavedPage from "./pages/SavedPage";
import SearchPage from "./pages/SearchPage";

function App() {
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
