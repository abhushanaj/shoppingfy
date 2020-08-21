import React from "react";

import SideNavigation from "./components/sidenavbar/sidebar.component";

import "./App.scss";

function App() {
  return (
    <>
      <SideNavigation />
      <div className="main__content"></div>
      <div className="shopping__cart"></div>
    </>
  );
}

export default App;
