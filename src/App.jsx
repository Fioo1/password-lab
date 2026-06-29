import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import PasswordGenerator from "./pages/PasswordGenerator";
import StrengthChecker from "./pages/StrengthChecker";
import PassphraseGenerator from "./pages/PassphraseGenerator";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/generator"
          element={<PasswordGenerator />}
        />

        <Route
          path="/strength-checker"
          element={<StrengthChecker />}
        />

        <Route
          path="/passphrase"
          element={<PassphraseGenerator />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;