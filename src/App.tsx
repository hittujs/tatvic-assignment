import { Route, Routes } from "react-router-dom";
import "./App.css";
import * as React from "react";

import SearchItemContent from "./modules/search/components/SearchItemContent";
import ErrorBoundary from "./modules/ui-core/components/ErrorBoundary";

const Search = React.lazy(
  () => import("./modules/search/components/SearchContainer")
);
const Dashboard = React.lazy(
  () => import("./modules/dashboard/components/DashboardContainer")
);

function App() {
  return (
    <Routes>
      <Route
        path="search"
        element={
          <React.Suspense fallback={<>...</>}>
            <Search />
          </React.Suspense>
        }
        errorElement={<ErrorBoundary />}
      />
      <Route path="search/:id" element={<SearchItemContent />} />
      <Route path="*" element={<>Notfound</>} />
      <Route
        path="/"
        element={
          <React.Suspense fallback={<>...</>}>
            <Dashboard />
          </React.Suspense>
        }
        errorElement={<ErrorBoundary />}
      />
    </Routes>
  );
}

export default App;
