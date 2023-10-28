import BetterDev from './Pages/BetterDev/BetterDev';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Admin from './Pages/Admin/Admin';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<BetterDev />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
