import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
