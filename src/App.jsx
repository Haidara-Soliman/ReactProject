import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/SignUp";
import { useState } from "react";
function App() {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <NavBar hiden={() => setHidden(hidden)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
