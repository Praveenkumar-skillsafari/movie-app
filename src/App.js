import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/Navbar/NavBar";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element="404 NOT FOUND" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
