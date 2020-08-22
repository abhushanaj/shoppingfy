import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

/* Components */
import SideNavigation from "./components/sidenavbar/sidebar.component";
import ShoppingCart from "./components/shopping-cart/shopping-cart.component";
import Loader from "./components/loader/loader.component";

/* Pages */
import HomePage from "./pages/home-page/home-page.component";

/* Assets */

import "./App.scss";

/* Lazy Loaded Component : Code Splitting */

const HistoryPage = lazy(() =>
  import("./pages/history-page/history-page.component")
);

const StatisticsPage = lazy(() =>
  import("./pages/statistics-page/statistics-page.component")
);

/* Main App Component */

function App() {
  return (
    <>
      <SideNavigation />
      <div className="main__content">
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/history" exact component={HistoryPage} />
            <Route path="/statistics" exact component={StatisticsPage} />
          </Switch>
        </Suspense>
      </div>
      <div className="shopping__cart">
        <ShoppingCart />
      </div>
    </>
  );
}

export default App;
