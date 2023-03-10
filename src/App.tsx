import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DashboardContainer } from "./modules/dashboard/components/DashboardContainer";
import { SearchContainer } from "./modules/search/components/SearchContainer";

function App() {
  return (
    <Routes>
      <Route path="search" element={<SearchContainer />} />
      <Route path="search/:id" element={<>search item content</>} />
      <Route path="*" element={<>Notfound</>} />
      <Route path="/" element={<DashboardContainer />} />
    </Routes>
  );
}

export default App;
