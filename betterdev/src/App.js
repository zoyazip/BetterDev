import BetterDev from './Pages/BetterDev/BetterDev';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<BetterDev />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
