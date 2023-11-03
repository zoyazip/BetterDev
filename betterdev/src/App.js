import BetterDev from './Pages/BetterDev/BetterDev';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Admin from './Pages/Admin/Admin';
import AuthGuard from './Pages/Login/AuthGuard';

function App() {
  const isAuthenticated = sessionStorage.getItem('jwt') ? true : false;

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BetterDev />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <AuthGuard isAuthenticated={isAuthenticated}>
                <Admin />
              </AuthGuard>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
