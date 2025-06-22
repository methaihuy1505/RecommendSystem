import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
