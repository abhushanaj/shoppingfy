import React from "react";
import { Switch, Route } from "react-router-dom";

import SideNavigation from "./components/sidenavbar/sidebar.component";
import ShoppingCart from "./components/shopping-cart/shopping-cart.component";

import HomePage from "./pages/home-page/home-page.component";
import HistoryPage from "./pages/history-page/history-page.component";
import StatisticsPage from "./pages/statistics-page/statistics-page.component";

// import ModalScreen from "./components/modal-screen/modal-screen.component";

import "./App.scss";

function App() {
  return (
    <>
      {/* <ModalScreen question={"Do you want to save the Cart ?"} /> */}
      <SideNavigation />
      <div className="main__content">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/history" exact component={HistoryPage} />
          <Route path="/statistics" exact component={StatisticsPage} />
        </Switch>
      </div>
      <div className="shopping__cart">
        <ShoppingCart />
      </div>
    </>
  );
}

export default App;
