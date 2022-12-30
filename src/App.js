//import logo from './logo.svg';
import "./App.css";
import "./Register.css";
import "./Login.css";
import Register from "./Register";
import Login from "./Login";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Menubar />     */}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
