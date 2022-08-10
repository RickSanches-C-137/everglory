import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Index from "./components/main/index";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Parcels from "./components/pages/Parcelss.jsx";
import History from "./components/pages/history";
import Faqs from "./components/pages/faqs";
import ParcelForm from "./components/pages/parcelForm";
import Help from "./components/pages/help";
import AuthContext from "./context/AuthContext";
import Search from "./components/pages/search";
import { Update } from "./components/pages/updateParcel";
import DashNav from "./components/layout/DashNav";
import Navbar  from "./components/layout/Navbar";

function Router() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/search">
          <Navbar />
          <Search />
        </Route>
        <Route exact path="/faqs">
          <Faqs />
        </Route>
        {loggedIn && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
        {!loggedIn && (
          <>
           
            {/* This is for admin to view all parcels */}
            <Route exact path="/parcel">
            
              <Parcels />
            </Route>
            {/* This route is for the admin to add it */}
            <Route exact path="/addParcel">
              <DashNav />
              <ParcelForm />
            </Route>
            <Route exact path="/history">
              <DashNav />
              <History />
            </Route>
            <Route exact path="/parcel/:id/edit">
              <Update />
            </Route>
            <Route exact path="/dashboard">
              <DashNav />
              <History />
            </Route>
            <Route exact path="/help">
              <Help />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
