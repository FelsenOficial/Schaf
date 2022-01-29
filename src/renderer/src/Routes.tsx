import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Index } from './components/Index';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route index element={<Index />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
