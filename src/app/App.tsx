import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Dashboard from "../features/dashboard/page/dashboard_page";
import { CatalogPage } from "../features/catalog/page/catalog_page";
import ScrollToTop from "../shared/constants/scroll_to_top";
import { PerfumeDetailPage } from "../features/perfume_detail/pages/perfume_detail_page";

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/perfume/:id" element={<PerfumeDetailPage />} />
          <Route path="/about" element={<div>About</div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
