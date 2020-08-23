import React, { Suspense, lazy } from "react";

/* Child Components */
import Loader from "../../components/loader/loader.component";

/* Styling */
import "./statistics-page.styles.scss";

/* Lazy Loaded Components */
const StatisticsGraph = lazy(() =>
  import("../../components/statistics-graph/statistics-graph.component")
);

const StatisticsPage = () => {
  return (
    <main className="u-page statisticspage">
      <h1 className="page__name">
        Your <span>Shopping</span> Statistics
      </h1>
      <Suspense fallback={<Loader />}>
        <StatisticsGraph />
      </Suspense>
    </main>
  );
};

export default StatisticsPage;
